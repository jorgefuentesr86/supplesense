
import { getIntake } from "@/app/api/intake/route";
import { recommend } from "@/lib/rules";
export async function POST(req: Request) {
  try {
    const intake = getIntake();
    
    // Si no hay intake previo, devolver un plan por defecto
    if (!intake) {
      const defaultItems = [
        { id: "omega3", name: "Omega-3", startDate: new Date().toISOString(), endDate: new Date(Date.now()+1000*60*60*24*7*12).toISOString() },
        { id: "vitd3", name: "Vitamina D3", startDate: new Date().toISOString(), endDate: new Date(Date.now()+1000*60*60*24*7*12).toISOString() },
        { id: "magnesium", name: "Magnesio", startDate: new Date().toISOString(), endDate: new Date(Date.now()+1000*60*60*24*7*12).toISOString() }
      ];
      
      return new Response(JSON.stringify({ 
        items: defaultItems,
        message: "Plan por defecto - completa el onboarding para un plan personalizado"
      }), { 
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    // Generar recomendaciones personalizadas
    const rec = recommend(intake);
    const items = [...rec.essentials, ...rec.optional].map(s => ({
      id: s.id, 
      name: s.name, 
      startDate: new Date().toISOString(), 
      endDate: new Date(Date.now()+1000*60*60*24*7*12).toISOString()
    }));
    
    return new Response(JSON.stringify({ 
      items,
      priority: rec.priority,
      explanation: rec.explanation
    }), { 
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
    
  } catch (error) {
    console.error('Error generating plan:', error);
    return new Response(JSON.stringify({ 
      error: 'Error al generar el plan',
      details: error instanceof Error ? error.message : 'Error desconocido'
    }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
