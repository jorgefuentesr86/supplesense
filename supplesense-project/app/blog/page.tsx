"use client";
import { useState } from "react";

const ARTICLES = [
  {
    id: 1,
    title: "Suplementos Básicos: ¿Cuáles Necesitas Realmente?",
    subtitle: "Descubre la diferencia entre esenciales y opcionales según tu perfil",
    icon: "🧬",
    color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    readTime: "2 min",
    category: "Fundamentos",
    content: `
      <h3>Suplementos Esenciales: No Todos Necesitamos lo Mismo</h3>
      <p>Basado en evidencia científica chilena, los suplementos esenciales varían según tu perfil: sedentario, recreacional o deportista. La personalización es clave.</p>
      
      <h4>🟦 Perfil Básico (Sedentario):</h4>
      <ul>
        <li><strong>Omega-3:</strong> Si consumes <2 porciones de pescado/semana</li>
        <li><strong>Vitamina D:</strong> Si exposición solar <15 min/día</li>
        <li><strong>Magnesio:</strong> Solo si tienes síntomas de deficiencia</li>
      </ul>
      
      <h4>🟩 Perfil Intermedio (Recreacional):</h4>
      <ul>
        <li><strong>Todo lo básico +</strong></li>
        <li><strong>Proteína:</strong> Si entrenas 2-3 veces/semana</li>
        <li><strong>L-teanina:</strong> Para manejo de estrés y focus</li>
      </ul>
      
      <h4>🟨 Perfil Avanzado (Deportista):</h4>
      <ul>
        <li><strong>Todo lo intermedio +</strong></li>
        <li><strong>Creatina:</strong> Para rendimiento y ganancia muscular</li>
        <li><strong>BCAA:</strong> Para recuperación muscular intensa</li>
      </ul>
      
      <h4>💡 Regla Chilena:</h4>
      <p>Según la regulación local, prioriza suplementos con evidencia A y B. Los de nivel C pueden ser interesantes pero no bases tu stack principal en ellos.</p>
      
      <h4>⚠️ Consideraciones Locales:</h4>
      <p>En Chile, algunos suplementos requieren receta médica. Siempre consulta con un profesional de la salud antes de comenzar cualquier protocolo.</p>
    `
  },
  {
    id: 2,
    title: "Timing de Suplementos: ¿Cuándo Tomar Cada Uno?",
    subtitle: "Optimiza la absorción y efectividad según evidencia chilena",
    icon: "⏰",
    color: "linear-gradient(135deg, #48bb78 0%, #38a169 100%)",
    readTime: "2 min",
    category: "Optimización",
    content: `
      <h3>Timing Inteligente: La Diferencia Entre Éxito y Fracaso</h3>
      <p>Basado en estudios locales y evidencia internacional, el momento de tomar suplementos puede multiplicar o anular sus beneficios.</p>
      
      <h4>🌅 Mañana (Con Desayuno):</h4>
      <ul>
        <li><strong>Vitamina D:</strong> Con grasas para absorción óptima (aceite de oliva, aguacate)</li>
        <li><strong>Omega-3:</strong> Con comidas para evitar reflujo y mejorar absorción</li>
        <li><strong>B12:</strong> En ayunas para máxima biodisponibilidad</li>
        <li><strong>Rhodiola:</strong> Para energía sostenida durante el día</li>
      </ul>
      
      <h4>🏋️‍♂️ Pre-Entreno (30-60 min antes):</h4>
      <ul>
        <li><strong>Cafeína:</strong> 3-6 mg/kg para máximo rendimiento</li>
        <li><strong>Beta-Alanina:</strong> Para ejercicios de alta intensidad</li>
        <li><strong>Nitratos:</strong> 2-3 horas antes para competencias</li>
      </ul>
      
      <h4>💪 Durante/Post Entreno:</h4>
      <ul>
        <li><strong>Proteína:</strong> 20-40g en los primeros 30 min post-entreno</li>
        <li><strong>BCAA:</strong> Durante entrenos largos o intensos</li>
        <li><strong>Creatina:</strong> Cualquier momento (consistencia diaria es clave)</li>
      </ul>
      
      <h4>😴 Noche (1-2 horas antes de dormir):</h4>
      <ul>
        <li><strong>Magnesio:</strong> Para relajación muscular y sueño profundo</li>
        <li><strong>L-teanina:</strong> Para calma mental sin sedación</li>
        <li><strong>Colágeno:</strong> Con comida para regeneración nocturna</li>
      </ul>
      
      <h4>💡 Reglas de Oro del Timing:</h4>
      <ul>
        <li><strong>Consistencia > Timing perfecto:</strong> Mejor tomar creatina a las 3 PM todos los días que "en el momento perfecto" pero olvidarse</li>
        <li><strong>Con comida:</strong> La mayoría de suplementos se absorben mejor con alimentos</li>
        <li><strong>Separación de minerales:</strong> Hierro y calcio con 2 horas de separación</li>
      </ul>
    `
  },
  {
    id: 3,
    title: "Evidencia Científica: A, B, C - ¿Qué Significa?",
    subtitle: "Aprende a interpretar la ciencia detrás de los suplementos",
    icon: "🔬",
    color: "linear-gradient(135deg, #ed8936 0%, #dd6b20 100%)",
    readTime: "2 min",
    category: "Ciencia",
    content: `
      <h3>Evidencia Científica: Tu Brújula en el Mundo de los Suplementos</h3>
      <p>En Chile, la regulación de suplementos se basa en evidencia científica. Aprende a distinguir entre lo que funciona y lo que es solo marketing.</p>
      
      <h4>🟢 Nivel A - Evidencia Sólida (Confía):</h4>
      <ul>
        <li><strong>Proteína:</strong> 50+ meta-análisis confirman beneficios para músculo y recuperación</li>
        <li><strong>Creatina:</strong> 500+ estudios, 20+ años de investigación, evidencia irrefutable</li>
        <li><strong>Omega-3:</strong> Evidencia robusta para salud cardiovascular y antiinflamación</li>
        <li><strong>Cafeína:</strong> Mejora rendimiento deportivo en 95% de las personas</li>
        <li><strong>Vitamina D:</strong> Esencial para sistema inmune, especialmente en climas con poca exposición solar</li>
      </ul>
      
      <h4>🟡 Nivel B - Evidencia Moderada (Considera):</h4>
      <ul>
        <li><strong>Magnesio:</strong> Estudios prometedores para sueño y función muscular</li>
        <li><strong>L-teanina:</strong> Beneficios demostrados para manejo de estrés y focus</li>
        <li><strong>Rhodiola:</strong> Evidencia emergente para adaptación al estrés</li>
        <li><strong>BCAA:</strong> Efectivo para recuperación muscular en entrenos intensos</li>
        <li><strong>Beta-Alanina:</strong> Mejora resistencia en ejercicios de alta intensidad</li>
      </ul>
      
      <h4>🔴 Nivel C - Evidencia Limitada (Experimenta con Cautela):</h4>
      <ul>
        <li><strong>Suplementos exóticos:</strong> Estudios pequeños, resultados inconsistentes</li>
        <li><strong>Nuevas formulaciones:</strong> Poca evidencia a largo plazo, efectos desconocidos</li>
        <li><strong>Combinaciones complejas:</strong> Sinergias no demostradas científicamente</li>
        <li><strong>Suplementos "milagrosos":</strong> Si suena demasiado bueno para ser verdad, probablemente no lo sea</li>
      </ul>
      
      <h4>💡 Regla de Oro Chilena:</h4>
      <p>Prioriza suplementos con evidencia A y B. Los de nivel C pueden ser interesantes para experimentar, pero nunca bases tu stack principal en ellos.</p>
      
      <h4>🔍 Cómo Identificar Evidencia Sólida:</h4>
      <ul>
        <li><strong>Meta-análisis:</strong> Revisan múltiples estudios, mayor confiabilidad</li>
        <li><strong>Estudios doble ciego:</strong> Ni investigadores ni participantes saben quién recibe qué</li>
        <li><strong>Muestras grandes:</strong> Más de 100 participantes por grupo</li>
        <li><strong>Revistas indexadas:</strong> Publicaciones científicas reconocidas</li>
      </ul>
      
      <h4>⚠️ Red Flags a Evitar:</h4>
      <ul>
        <li>Estudios pagados por fabricantes de suplementos</li>
        <li>Resultados "milagrosos" sin evidencia</li>
        <li>Testimonios sin respaldo científico</li>
        <li>Promesas de resultados rápidos y permanentes</li>
      </ul>
    `
  },
  {
    id: 4,
    title: "Suplementos para Mujeres: Lo Que Realmente Funciona",
    subtitle: "Evidencia específica para necesidades femeninas",
    icon: "👩‍⚕️",
    color: "linear-gradient(135deg, #ec4899 0%, #be185d 100%)",
    readTime: "2 min",
    category: "Salud Femenina",
    content: `
      <h3>Suplementación Femenina: Más Allá de los Mitos</h3>
      <p>Las mujeres tienen necesidades nutricionales únicas que cambian a lo largo de la vida. Descubre qué suplementos realmente funcionan según la evidencia científica.</p>
      
      <h4>🌺 Edad 20-30: Base Sólida</h4>
      <ul>
        <li><strong>Ácido Fólico:</strong> Esencial si planeas embarazo (400-800 mcg/día)</li>
        <li><strong>Hierro:</strong> Si tienes menstruaciones abundantes o eres vegetariana</li>
        <li><strong>Vitamina D:</strong> Especialmente en invierno o si trabajas en interiores</li>
        <li><strong>Omega-3:</strong> Para salud hormonal y cardiovascular</li>
      </ul>
      
      <h4>🌹 Edad 30-40: Prevención y Energía</h4>
      <ul>
        <li><strong>Calcio:</strong> 500-1000mg/día para prevenir osteoporosis</li>
        <li><strong>Magnesio:</strong> Para manejo de estrés y calidad del sueño</li>
        <li><strong>L-teanina:</strong> Para balance hormonal y manejo de estrés</li>
        <li><strong>Probióticos:</strong> Para salud digestiva y sistema inmune</li>
      </ul>
      
      <h4>🌷 Edad 40+: Salud Ósea y Articular</h4>
      <ul>
        <li><strong>Colágeno:</strong> 10-15g/día para salud de piel y articulaciones</li>
        <li><strong>Vitamina K2:</strong> Con vitamina D para salud ósea</li>
        <li><strong>CoQ10:</strong> Para energía celular y salud cardiovascular</li>
        <li><strong>Magnesio:</strong> Para función muscular y nerviosa</li>
      </ul>
      
      <h4>💪 Mujeres Deportistas:</h4>
      <ul>
        <li><strong>Proteína:</strong> 1.2-1.6g/kg/día para recuperación muscular</li>
        <li><strong>Creatina:</strong> 3-5g/día para fuerza y potencia</li>
        <li><strong>Hierro:</strong> Monitorear niveles regularmente</li>
        <li><strong>BCAA:</strong> Para preservar masa muscular durante entrenos intensos</li>
      </ul>
      
      <h4>⚠️ Consideraciones Especiales:</h4>
      <ul>
        <li><strong>Embarazo:</strong> Solo suplementos prescritos por médico</li>
        <li><strong>Lactancia:</strong> Consultar antes de cualquier suplemento</li>
        <li><strong>Condiciones hormonales:</strong> PCOS, endometriosis requieren enfoque personalizado</li>
        <li><strong>Medicamentos:</strong> Anticonceptivos pueden interactuar con algunos suplementos</li>
      </ul>
      
      <h4>💡 Regla de Oro Femenina:</h4>
      <p>Escucha tu cuerpo. Los síntomas como fatiga, cambios de humor, o irregularidades menstruales pueden indicar deficiencias nutricionales que los suplementos pueden ayudar a resolver.</p>
      
      <h4>🔬 Evidencia Específica para Mujeres:</h4>
      <ul>
        <li><strong>Calcio + Vitamina D:</strong> Reduce riesgo de osteoporosis en 30%</li>
        <li><strong>Omega-3:</strong> Mejora síntomas de síndrome premenstrual</li>
        <li><strong>Magnesio:</strong> Reduce calambres menstruales y mejora sueño</li>
        <li><strong>Probióticos:</strong> Mejoran salud vaginal y digestiva</li>
      </ul>
    `
  },
  {
    id: 5,
    title: "Suplementos vs Alimentación: ¿Cuál Es Prioridad?",
    subtitle: "Los fundamentos nutricionales primero según evidencia chilena",
    icon: "🥗",
    color: "linear-gradient(135deg, #38b2ac 0%, #319795 100%)",
    readTime: "2 min",
    category: "Nutrición",
    content: `
      <h3>Alimentación Primero: Los Suplementos Son el Cherry, No la Base</h3>
      <p>Según la evidencia científica chilena y las recomendaciones de nutricionistas locales, los suplementos complementan pero nunca reemplazan una alimentación sólida.</p>
      
      <h4>🥇 Prioridad 1: Alimentación Sólida (80% del Resultado)</h4>
      <ul>
        <li><strong>Proteínas:</strong> Carne magra, pescado azul (salmón, atún), huevos, legumbres, quinoa</li>
        <li><strong>Grasas saludables:</strong> Aguacate, frutos secos, aceite de oliva extra virgen, pescados grasos</li>
        <li><strong>Carbohidratos complejos:</strong> Quinoa, arroz integral, avena, camote, papa con cáscara</li>
        <li><strong>Vegetales:</strong> Variedad de colores (rojo, verde, naranja, morado) para diferentes nutrientes</li>
        <li><strong>Frutas:</strong> Especialmente berries, cítricos y frutas tropicales locales</li>
      </ul>
      
      <h4>🥈 Prioridad 2: Suplementos de Base (15% del Resultado)</h4>
      <ul>
        <li><strong>Para deficiencias documentadas:</strong> Vitamina D en invierno, hierro si eres vegetariana</li>
        <li><strong>Para objetivos específicos:</strong> Proteína post-entreno, creatina para rendimiento</li>
        <li><strong>Para conveniencia:</strong> Omega-3 si no comes pescado regularmente</li>
        <li><strong>Para condiciones especiales:</strong> Magnesio para estrés, probióticos para digestión</li>
      </ul>
      
      <h4>🥉 Prioridad 3: Suplementos Específicos (5% del Resultado)</h4>
      <ul>
        <li><strong>Para optimización de rendimiento:</strong> Beta-alanina, BCAA, nitratos</li>
        <li><strong>Para condiciones especiales:</strong> Colágeno para articulaciones, CoQ10 para energía</li>
        <li><strong>Para experimentación personal:</strong> Rhodiola, ashwagandha, adaptógenos</li>
      </ul>
      
      <h4>💡 Regla del 80/20 Chilena:</h4>
      <p>El 80% de tus resultados vendrá de la alimentación local, actividad física y estilo de vida. Los suplementos son el 20% que puede hacer la diferencia, pero solo si los fundamentos están sólidos.</p>
      
      <h4>🇨🇱 Alimentos Locales que Reducen Necesidad de Suplementos:</h4>
      <ul>
        <li><strong>Quinua:</strong> Proteína completa, hierro, magnesio - reduce necesidad de suplementos</li>
        <li><strong>Pescados grasos:</strong> Salmón, atún, jurel - omega-3 natural</li>
        <li><strong>Frutos secos:</strong> Almendras, nueces - magnesio y grasas saludables</li>
        <li><strong>Vegetales de hoja verde:</strong> Acelga, espinaca - hierro y folato</li>
        <li><strong>Frutas tropicales:</strong> Papaya, mango - vitamina C y antioxidantes</li>
      </ul>
      
      <h4>⚠️ Cuándo los Suplementos SON Necesarios:</h4>
      <ul>
        <li><strong>Deficiencias confirmadas:</strong> Análisis de sangre que muestren niveles bajos</li>
        <li><strong>Dietas restrictivas:</strong> Vegetarianas, veganas, sin gluten</li>
        <li><strong>Condiciones médicas:</strong> Malabsorción, cirugías digestivas</li>
        <li><strong>Objetivos deportivos específicos:</strong> Competencia, alto rendimiento</li>
      </ul>
      
      <h4>🎯 Conclusión Práctica:</h4>
      <p>Los suplementos son herramientas poderosas que complementan una alimentación sólida. En Chile, prioriza alimentos locales frescos y usa suplementos solo cuando sea necesario y con evidencia científica que lo respalde.</p>
      
      <h4>🔬 Evidencia Local:</h4>
      <p>Estudios en población chilena muestran que la mayoría de deficiencias nutricionales se pueden resolver mejorando la alimentación que con suplementos. Los suplementos son más efectivos cuando se usan para complementar, no para compensar.</p>
    `
  }
];

export default function Blog() {
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null);

  return (
    <div style={{
      maxWidth: 1200,
      margin: '0 auto',
      padding: '40px 20px'
    }}>
      {/* Header Section */}
      <div style={{
        textAlign: 'center',
        marginBottom: 60
      }}>
        <h1 style={{
          fontSize: '3rem',
          fontWeight: '800',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          margin: '0 0 20px 0'
        }}>
          📚 Blog SuppleSense
        </h1>
        <p style={{
          fontSize: '1.2rem',
          color: '#718096',
          margin: '0 0 40px 0',
          lineHeight: 1.6,
          maxWidth: 700,
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          Aprende los conceptos fundamentales de suplementación basados en evidencia científica. 
          Artículos breves y prácticos para tomar decisiones informadas sobre tu salud.
        </p>

        {/* Stats */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 40,
          marginBottom: 40
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              color: '#667eea'
            }}>
              5
            </div>
            <div style={{ color: '#718096', fontSize: '0.9rem' }}>
              Artículos
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              color: '#48bb78'
            }}>
              8 min
            </div>
            <div style={{ color: '#718096', fontSize: '0.9rem' }}>
              Total de lectura
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              color: '#ed8936'
            }}>
              100%
            </div>
            <div style={{ color: '#718096', fontSize: '0.9rem' }}>
              Basado en evidencia
            </div>
          </div>
        </div>
      </div>

      {/* Articles Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: 30,
        marginBottom: 60
      }}>
        {ARTICLES.map((article) => (
          <div 
            key={article.id}
            style={{
              background: 'white',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
              border: '1px solid #e2e8f0',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              transform: 'translateY(0)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.1)';
            }}
            onClick={() => setSelectedArticle(article.id)}
          >
            {/* Article Header */}
            <div style={{
              background: article.color,
              padding: '24px',
              color: 'white',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: 16 }}>
                {article.icon}
              </div>
              <h3 style={{
                margin: '0 0 8px 0',
                fontSize: '1.3rem',
                fontWeight: '600',
                lineHeight: 1.3
              }}>
                {article.title}
              </h3>
              <p style={{
                margin: '0 0 16px 0',
                opacity: 0.9,
                fontSize: '0.9rem'
              }}>
                {article.subtitle}
              </p>
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: 16,
                alignItems: 'center'
              }}>
                <span style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  fontSize: '0.8rem',
                  fontWeight: '500'
                }}>
                  {article.category}
                </span>
                <span style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  fontSize: '0.8rem',
                  fontWeight: '500'
                }}>
                  ⏱️ {article.readTime}
                </span>
              </div>
            </div>

            {/* Article Preview */}
            <div style={{ padding: '20px' }}>
              <p style={{
                color: '#718096',
                fontSize: '0.9rem',
                lineHeight: 1.6,
                margin: '0 0 16px 0'
              }}>
                Haz clic para leer el artículo completo y aprender los conceptos fundamentales de suplementación.
              </p>
              <button style={{
                width: '100%',
                padding: '12px',
                background: 'linear-gradient(135deg, #667eea, #764ba2)',
                color: 'white',
                border: 'none',
                borderRadius: '12px',
                fontSize: '0.9rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}>
                📖 Leer Artículo
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Article Modal */}
      {selectedArticle && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '20px'
        }}
        onClick={() => setSelectedArticle(null)}
        >
          <div 
            style={{
              background: 'white',
              borderRadius: '20px',
              maxWidth: 800,
              maxHeight: '90vh',
              overflow: 'auto',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div style={{
              background: ARTICLES.find(a => a.id === selectedArticle)?.color,
              padding: '24px',
              color: 'white',
              borderRadius: '20px 20px 0 0'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start'
              }}>
                <div>
                  <div style={{ fontSize: '3rem', marginBottom: 16 }}>
                    {ARTICLES.find(a => a.id === selectedArticle)?.icon}
                  </div>
                  <h2 style={{
                    margin: '0 0 8px 0',
                    fontSize: '1.8rem',
                    fontWeight: '700',
                    lineHeight: 1.3
                  }}>
                    {ARTICLES.find(a => a.id === selectedArticle)?.title}
                  </h2>
                  <p style={{
                    margin: '0 0 16px 0',
                    opacity: 0.9,
                    fontSize: '1rem'
                  }}>
                    {ARTICLES.find(a => a.id === selectedArticle)?.subtitle}
                  </p>
                  <div style={{
                    display: 'flex',
                    gap: 16,
                    alignItems: 'center'
                  }}>
                    <span style={{
                      background: 'rgba(255, 255, 255, 0.2)',
                      padding: '6px 16px',
                      borderRadius: '20px',
                      fontSize: '0.9rem',
                      fontWeight: '500'
                    }}>
                      {ARTICLES.find(a => a.id === selectedArticle)?.category}
                    </span>
                    <span style={{
                      background: 'rgba(255, 255, 255, 0.2)',
                      padding: '6px 16px',
                      borderRadius: '20px',
                      fontSize: '0.9rem',
                      fontWeight: '500'
                    }}>
                      ⏱️ {ARTICLES.find(a => a.id === selectedArticle)?.readTime}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedArticle(null)}
                  style={{
                    background: 'rgba(255, 255, 255, 0.2)',
                    border: 'none',
                    color: 'white',
                    fontSize: '1.5rem',
                    cursor: 'pointer',
                    padding: '8px',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div style={{ padding: '32px' }}>
              <div 
                dangerouslySetInnerHTML={{ 
                  __html: ARTICLES.find(a => a.id === selectedArticle)?.content || '' 
                }}
                style={{
                  lineHeight: 1.7,
                  color: '#2d3748'
                }}
              />
              
              {/* Action Buttons */}
              <div style={{
                display: 'flex',
                gap: 16,
                marginTop: 32,
                justifyContent: 'center'
              }}>
                <button style={{
                  padding: '12px 24px',
                  background: 'linear-gradient(135deg, #667eea, #764ba2)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '12px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}>
                  📚 Leer Otro Artículo
                </button>
                <button 
                  onClick={() => setSelectedArticle(null)}
                  style={{
                    padding: '12px 24px',
                    background: 'transparent',
                    color: '#667eea',
                    border: '2px solid #667eea',
                    borderRadius: '12px',
                    fontSize: '1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <div style={{
        background: 'linear-gradient(135deg, #f7fafc, #edf2f7)',
        padding: '60px 40px',
        borderRadius: '20px',
        textAlign: 'center',
        border: '1px solid #e2e8f0'
      }}>
        <h2 style={{
          fontSize: '2rem',
          fontWeight: '700',
          color: '#2d3748',
          margin: '0 0 20px 0'
        }}>
          ¿Listo para Aplicar lo Aprendido?
        </h2>
        <p style={{
          fontSize: '1.1rem',
          color: '#718096',
          margin: '0 0 32px 0',
          maxWidth: 600,
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          Ahora que conoces los fundamentos, es momento de crear tu stack personalizado de suplementos.
        </p>
        <div style={{
          display: 'flex',
          gap: 16,
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <a href="/onboarding" style={{
            padding: '16px 32px',
            background: 'linear-gradient(135deg, #667eea, #764ba2)',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '50px',
            fontSize: '1.1rem',
            fontWeight: '600',
            boxShadow: '0 8px 25px rgba(102, 126, 234, 0.4)',
            transition: 'all 0.3s ease'
          }}>
            🚀 Crear Mi Stack
          </a>
          <a href="/results" style={{
            padding: '16px 32px',
            background: 'transparent',
            color: '#667eea',
            textDecoration: 'none',
            borderRadius: '50px',
            fontSize: '1.1rem',
            fontWeight: '600',
            border: '2px solid #667eea',
            transition: 'all 0.3s ease'
          }}>
            📊 Ver Resultados
          </a>
        </div>
      </div>
    </div>
  );
}
