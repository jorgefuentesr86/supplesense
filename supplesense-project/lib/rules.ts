
import { SUPPLEMENTS } from "../data/supplements";

export type Intake = {
  age: number; 
  sex: "male" | "female" | "other"; 
  weight: number; 
  height: number;
  diet: "omnivore" | "vegetarian" | "vegan"; 
  activity: "sedentary" | "recreational" | "amateur" | "competitive";
  sleepHours: number; 
  coffeePerDay: number; 
  alcohol: "none" | "low" | "medium" | "high"; 
  sun: "low" | "medium" | "high";
  medicalFlags: string[]; 
  meds: string[]; 
  goals: string[]; 
  fishPerWeek: number; 
  proteinPerKg?: number; 
  budget: "low" | "medium" | "high";
};

export type Recommendation = { 
  unsafe: string[]; 
  essentials: any[]; 
  optional: any[]; 
  explanation: string;
  priority: "basic" | "intermediate" | "advanced";
};

const S = Object.fromEntries(SUPPLEMENTS.map(s=>[s.id, s])) as any;

function conflictsWith(s: any, meds: string[], flags: string[]) {
  if (s?.id === "omega3" && meds?.includes("anticoagulants")) return true;
  if (s?.id === "creatine" && flags?.includes("renal")) return true;
  if (s?.id === "magnesium" && flags?.includes("renal")) return true;
  if (s?.id === "vitd3" && flags?.includes("hypercalcemia")) return true;
  if (s?.id === "iron" && flags?.includes("hemochromatosis")) return true;
  return false;
}

function getPriorityLevel(intake: Intake): "basic" | "intermediate" | "advanced" {
  const { activity, goals, age, medicalFlags } = intake;
  
  // Básico: Sedentarios sin objetivos específicos
  if (activity === "sedentary" && goals.length === 0) return "basic";
  
  // Intermedio: Recreacionales o con objetivos de salud general
  if (activity === "recreational" || goals.includes("health") || goals.includes("energy")) return "intermediate";
  
  // Avanzado: Amateur/competitivo o con objetivos de rendimiento
  if (activity === "amateur" || activity === "competitive" || 
      goals.includes("performance") || goals.includes("muscle")) return "advanced";
  
  return "intermediate";
}

function generateExplanation(intake: Intake, priority: string, essentials: any[], optional: any[]): string {
  const { activity, goals, age, diet } = intake;
  
  let explanation = `Basado en tu perfil (${activity}, ${age} años, ${diet}), `;
  
  if (priority === "basic") {
    explanation += "te recomendamos un enfoque conservador enfocado en suplementos básicos de salud. ";
    if (essentials.length > 0) {
      explanation += `Los suplementos esenciales (${essentials.map(s => s.name).join(", ")}) cubren necesidades nutricionales fundamentales. `;
    }
    if (optional.length === 0) {
      explanation += "No se requieren suplementos avanzados para tu perfil actual.";
    }
  } else if (priority === "intermediate") {
    explanation += "te recomendamos un enfoque equilibrado con suplementos de base y algunos específicos según tus objetivos. ";
    if (essentials.length > 0) {
      explanation += `Los esenciales (${essentials.map(s => s.name).join(", ")}) forman la base. `;
    }
    if (optional.length > 0) {
      explanation += `Los opcionales (${optional.map(s => s.name).join(", ")}) optimizan resultados específicos.`;
    }
  } else {
    explanation += "te recomendamos un enfoque completo con suplementos esenciales y avanzados para maximizar rendimiento. ";
    if (essentials.length > 0) {
      explanation += `Los esenciales (${essentials.map(s => s.name).join(", ")}) son la base. `;
    }
    if (optional.length > 0) {
      explanation += `Los avanzados (${optional.map(s => s.name).join(", ")}) optimizan rendimiento deportivo.`;
    }
  }
  
  return explanation;
}

export function recommend(intake: Intake): Recommendation {
  const unsafe: string[] = []; 
  const essentials: any[] = []; 
  const optional: any[] = [];
  
  const has = (f: string) => intake?.medicalFlags?.includes(f);
  const meds = (m: string) => intake?.meds?.includes(m);
  const priority = getPriorityLevel(intake);
  const goals = intake?.goals ?? [];
  
  // === SEGURIDAD Y CONTRAINDICACIONES ===
  if (has("pregnancy")) unsafe.push("Embarazo/lactancia: derivar a prenatal médico.");
  if (has("renal")) unsafe.push("Insuficiencia renal: evitar creatina; revisar magnesio y potasio.");
  if (meds("anticoagulants")) unsafe.push("Anticoagulantes: cautela con Omega-3 altas dosis.");
  if (has("hypercalcemia")) unsafe.push("Hipercalcemia: evitar vitamina D y calcio.");
  if (has("hemochromatosis")) unsafe.push("Hemocromatosis: evitar hierro.");
  
  // === SUPLEMENTOS ESENCIALES (SIEMPRE SI APLICAN) ===
  
  // 1. Omega-3 para salud cardiovascular
  if ((intake?.fishPerWeek ?? 0) < 2) {
    essentials.push({
      ...S.omega3,
      reason: "Bajo consumo de pescado - esencial para salud cardiovascular"
    });
  }
  
  // 2. Vitamina D para exposición solar limitada
  if (intake?.sun === "low" || has("vitD_deficit")) {
    essentials.push({
      ...S.vitd3,
      reason: "Exposición solar limitada - esencial para sistema inmune y óseo"
    });
  }
  
  // 3. Magnesio para deportistas y estrés
  if (intake?.activity !== "sedentary" || goals.includes("stress") || goals.includes("focus")) {
    if (!has("renal")) {
      essentials.push({
        ...S.magnesium,
        reason: "Actividad física o manejo de estrés - esencial para función muscular y nerviosa"
      });
    }
  }
  
  // === SUPLEMENTOS BASADOS EN ACTIVIDAD ===
  
  if (intake?.activity !== "sedentary") {
    // Proteína solo para deportistas activos
    if (intake?.activity === "amateur" || intake?.activity === "competitive") {
      essentials.push({
        ...S.protein,
        reason: "Actividad deportiva intensa - esencial para recuperación muscular"
      });
    }
    
    // Creatina solo para rendimiento deportivo
    if ((goals.includes("performance") || goals.includes("muscle")) && !has("renal")) {
      essentials.push({
        ...S.creatine,
        reason: "Objetivos de rendimiento deportivo - evidencia A para fuerza y potencia"
      });
    }
  }
  
  // === SUPLEMENTOS BASADOS EN OBJETIVOS ESPECÍFICOS ===
  
  if (goals.includes("performance") && priority === "advanced") {
    // Solo para usuarios avanzados
    optional.push({ 
      id: "beta_alanine", 
      name: "Beta-Alanina", 
      evidence: "A", 
      dose: "3-6g/día dividido en 2-3 dosis", 
      timing: "Pre-entreno o durante el día", 
      interactions: ["Parestesias temporales"],
      mechanism: "Aumenta carnosina muscular para mejorar resistencia en ejercicios de alta intensidad",
      adverse: ["Hormigueo temporal", "Molestias GI leves"],
      reason: "Rendimiento deportivo avanzado - mejora resistencia anaeróbica"
    });
    
    optional.push({ 
      id: "caffeine", 
      name: "Cafeína", 
      evidence: "A", 
      dose: "3-6 mg/kg 30-60 min antes del entrenamiento", 
      timing: "Pre-entreno", 
      interactions: ["HTA, ansiedad, insomnio"],
      mechanism: "Estimulante del sistema nervioso central que mejora el rendimiento físico y mental",
      adverse: ["Insomnio", "Ansiedad", "Taquicardia", "Dependencia"],
      reason: "Rendimiento deportivo - mejora fuerza, potencia y resistencia"
    });
  }
  
  if (goals.includes("muscle") && priority === "advanced") {
    // Solo para usuarios avanzados con objetivos musculares
    optional.push({ 
      id: "bcaa", 
      name: "BCAAs (Leucina, Isoleucina, Valina)", 
      evidence: "B", 
      dose: "5-10g durante/post entreno", 
      timing: "Durante o post-entreno", 
      interactions: [],
      mechanism: "Aminoácidos ramificados que estimulan la síntesis de proteína muscular y reducen catabolismo",
      adverse: ["Fatiga si exceso", "Molestias GI leves"],
      reason: "Ganancia muscular avanzada - optimiza síntesis proteica"
    });
  }
  
  if (goals.includes("focus") || goals.includes("stress")) {
    // L-teanina para focus y manejo de estrés
    if (!essentials.some(s => s.id === "ltheanine")) {
      essentials.push({
        ...S.ltheanine,
        reason: "Objetivos de focus y manejo de estrés - promueve calma mental sin sedación"
      });
    }
    
    // Rhodiola solo para usuarios intermedios/avanzados
    if (priority !== "basic") {
      optional.push({ 
        id: "rhodiola", 
        name: "Rhodiola Rosea", 
        evidence: "B", 
        dose: "200-400mg/día", 
        timing: "Mañana", 
        interactions: ["Cautela con antidepresivos"],
        mechanism: "Adaptógeno que mejora la resistencia al estrés y la función cognitiva",
        adverse: ["Insomnio si se toma tarde", "Agitación leve", "Mareos"],
        reason: "Manejo de estrés y función cognitiva - evidencia emergente prometedora"
      });
    }
  }
  
  if (goals.includes("energy") && priority !== "basic") {
    // Solo para usuarios no sedentarios
    optional.push({ 
      id: "b12", 
      name: "Vitamina B12", 
      evidence: "A", 
      dose: "1000-2000 mcg/día", 
      timing: "Mañana", 
      interactions: [],
      mechanism: "Cofactor esencial para la producción de energía celular y función nerviosa",
      adverse: [],
      reason: "Energía y vitalidad - especialmente importante para dietas vegetarianas/veganas"
    });
    
    if (priority === "advanced") {
      optional.push({ 
        id: "coq10", 
        name: "Coenzima Q10", 
        evidence: "B", 
        dose: "100-200mg/día", 
        timing: "Con comida", 
        interactions: ["Cautela con anticoagulantes"],
        mechanism: "Participa en la producción de ATP y tiene propiedades antioxidantes",
        adverse: ["Molestias GI leves", "Insomnio si se toma tarde"],
        reason: "Energía celular avanzada - mejora producción de ATP mitocondrial"
      });
    }
  }
  
  if (goals.includes("composition") && priority !== "basic") {
    // Solo para usuarios con objetivos de composición corporal
    if (priority === "advanced") {
      optional.push({ 
        id: "green_tea", 
        name: "Té verde (EGCG)", 
        evidence: "B", 
        dose: "400-800mg EGCG/día", 
        timing: "Entre comidas", 
        interactions: ["Cautela con anticoagulantes"],
        mechanism: "Catequina que aumenta la termogénesis y oxidación de grasas",
        adverse: ["Molestias GI", "Insomnio si se toma tarde", "Nerviosismo"],
        reason: "Composición corporal avanzada - termogénesis y oxidación de grasas"
      });
    }
  }
  
  if (goals.includes("digestive")) {
    // Salud digestiva - esencial para todos
    essentials.push({ 
      id: "fiber", 
      name: "Fibra soluble (inulina/psyllium)", 
      evidence: "A", 
      dose: "5–10 g/día", 
      timing: "Con comidas", 
      interactions: ["Tomar con abundante agua"],
      mechanism: "Promueve la salud intestinal, regularidad digestiva y microbiota saludable",
      adverse: ["Hinchazón inicial", "Gases", "Molestias si no hay hidratación adecuada"],
      reason: "Salud digestiva - esencial para función intestinal óptima"
    });
    
    if (priority !== "basic") {
      optional.push({ 
        id: "probiotic", 
        name: "Probiótico (cepa específica)", 
        evidence: "B", 
        dose: "Según cepa - 1-10 billones UFC/día", 
        timing: "Ayuno o con comida ligera", 
        interactions: [],
        mechanism: "Bacterias beneficiosas que mejoran la microbiota intestinal y función digestiva",
        adverse: ["Molestias GI leves inicialmente", "Hinchazón temporal"],
        reason: "Salud digestiva intermedia - optimiza microbiota intestinal"
      });
    }
  }
  
  // === SUPLEMENTOS BASADOS EN EDAD Y SEXO ===
  
  if (intake?.age > 40 && priority !== "basic") {
    // Solo para usuarios no sedentarios mayores de 40
    optional.push({ 
      id: "collagen", 
      name: "Colágeno hidrolizado", 
      evidence: "B", 
      dose: "10-15g/día", 
      timing: "Con comida", 
      interactions: [],
      mechanism: "Proteína estructural que apoya la salud articular, de la piel y tejido conectivo",
      adverse: [],
      reason: "Salud articular y de la piel - especialmente importante después de los 40 años"
    });
  }
  
  if (intake?.sex === "female" && intake?.age > 30 && priority !== "basic") {
    // Solo para mujeres no sedentarias mayores de 30
    optional.push({ 
      id: "calcium", 
      name: "Calcio", 
      evidence: "B", 
      dose: "500-1000mg/día", 
      timing: "Con comida", 
      interactions: ["Separar de hierro 2h", "Evitar con zinc"],
      mechanism: "Mineral esencial para la salud ósea, muscular y función nerviosa",
      adverse: ["Estreñimiento", "Cálculos renales si exceso", "Molestias GI"],
      reason: "Salud ósea femenina - prevención de osteoporosis"
    });
  }
  
  // === OPTIMIZACIÓN Y DEDUPLICACIÓN ===
  
  const dedup = (arr: any[]) => { 
    const seen = new Set(); 
    const out: any[] = []; 
    for (const s of arr) { 
      const id = s?.id; 
      if (!seen.has(id)) {
        seen.add(id); 
        out.push(s); 
      } 
    } 
    return out; 
  };
  
  const e1 = dedup(essentials).filter(s => !conflictsWith(s, intake?.meds ?? [], intake?.medicalFlags ?? []));
  const o1 = dedup(optional).filter(s => !conflictsWith(s, intake?.meds ?? [], intake?.medicalFlags ?? []));
  
  // === AJUSTE FINAL SEGÚN PRIORIDAD ===
  
  let finalEssentials = e1;
  let finalOptional = o1;
  
  if (priority === "basic") {
    // Para usuarios básicos: máximo 2-3 suplementos esenciales, 0-1 opcionales
    finalEssentials = e1.slice(0, 3);
    finalOptional = o1.slice(0, 1);
  } else if (priority === "intermediate") {
    // Para usuarios intermedios: 3-4 esenciales, 1-2 opcionales
    finalEssentials = e1.slice(0, 4);
    finalOptional = o1.slice(0, 2);
  } else {
    // Para usuarios avanzados: 4-5 esenciales, 2-4 opcionales
    finalEssentials = e1.slice(0, 5);
    finalOptional = o1.slice(0, 4);
  }
  
  const explanation = generateExplanation(intake, priority, finalEssentials, finalOptional);
  
  return { 
    unsafe, 
    essentials: finalEssentials,
    optional: finalOptional,
    explanation,
    priority
  };
}
