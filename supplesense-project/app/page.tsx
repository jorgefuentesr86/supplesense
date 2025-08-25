
import Link from "next/link";

export default function Page() {
  return (
    <div>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '80px 0',
        textAlign: 'center',
        borderRadius: '0 0 40px 40px',
        marginBottom: 60,
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background decoration */}
        <div style={{
          position: 'absolute',
          top: -50,
          right: -50,
          width: 200,
          height: 200,
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '50%',
          zIndex: 1
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: -30,
          left: -30,
          width: 150,
          height: 150,
          background: 'rgba(255, 255, 255, 0.05)',
          borderRadius: '50%',
          zIndex: 1
        }}></div>

        <div style={{ position: 'relative', zIndex: 2 }}>
          <h1 style={{
            fontSize: '3.5rem',
            fontWeight: '800',
            margin: '0 0 24px 0',
            lineHeight: 1.2,
            textShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'
          }}>
            Tu Stack de Suplementos
            <br />
            <span style={{ 
              background: 'linear-gradient(45deg, #ffd700, #ffed4e)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: '0.9em'
            }}>
              Personalizado y Científico
            </span>
          </h1>
          
          <p style={{
            fontSize: '1.25rem',
            margin: '0 0 40px 0',
            opacity: 0.95,
            maxWidth: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
            lineHeight: 1.6
          }}>
            Basado en evidencia científica, tus objetivos y tu perfil de salud único. 
            Recibe recomendaciones personalizadas en solo 4 minutos.
          </p>

          <Link href="/onboarding" style={{
            display: 'inline-block',
            padding: '16px 32px',
            background: 'linear-gradient(45deg, #ff6b6b, #ee5a24)',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '50px',
            fontSize: '1.1rem',
            fontWeight: '600',
            boxShadow: '0 8px 25px rgba(255, 107, 107, 0.4)',
            transition: 'all 0.3s ease',
            transform: 'translateY(0)'
          }}>
            🚀 Comenzar Ahora
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section style={{ marginBottom: 60 }}>
        <div style={{ textAlign: 'center', marginBottom: 50 }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            color: '#2d3748',
            margin: '0 0 16px 0'
          }}>
            ¿Por qué SuppleSense?
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: '#718096',
            maxWidth: 600,
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            La primera plataforma que combina ciencia, personalización y responsabilidad médica
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 30,
          marginBottom: 50
        }}>
          {/* Feature 1 */}
          <div style={{
            background: 'white',
            padding: '32px',
            borderRadius: '20px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
            textAlign: 'center',
            transition: 'transform 0.3s ease',
            border: '1px solid #e2e8f0'
          }}>
            <div style={{
              width: 80,
              height: 80,
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 24px auto',
              fontSize: '2rem'
            }}>
              🧬
            </div>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              color: '#2d3748',
              margin: '0 0 16px 0'
            }}>
              Basado en Evidencia
            </h3>
            <p style={{
              color: '#718096',
              lineHeight: 1.6,
              margin: 0
            }}>
              Todas nuestras recomendaciones están respaldadas por estudios científicos 
              y evidencia clínica de nivel A y B.
            </p>
          </div>

          {/* Feature 2 */}
          <div style={{
            background: 'white',
            padding: '32px',
            borderRadius: '20px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
            textAlign: 'center',
            transition: 'transform 0.3s ease',
            border: '1px solid #e2e8f0'
          }}>
            <div style={{
              width: 80,
              height: 80,
              background: 'linear-gradient(135deg, #48bb78, #38a169)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 24px auto',
              fontSize: '2rem'
            }}>
              🎯
            </div>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              color: '#2d3748',
              margin: '0 0 16px 0'
            }}>
              100% Personalizado
            </h3>
            <p style={{
              color: '#718096',
              lineHeight: 1.6,
              margin: 0
            }}>
              Analizamos tu edad, objetivos, actividad física, dieta y contexto médico 
              para crear recomendaciones únicas.
            </p>
          </div>

          {/* Feature 3 */}
          <div style={{
            background: 'white',
            padding: '32px',
            borderRadius: '20px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
            textAlign: 'center',
            transition: 'transform 0.3s ease',
            border: '1px solid #e2e8f0'
          }}>
            <div style={{
              width: 80,
              height: 80,
              background: 'linear-gradient(135deg, #ed8936, #dd6b20)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 24px auto',
              fontSize: '2rem'
            }}>
              ⚡
            </div>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              color: '#2d3748',
              margin: '0 0 16px 0'
            }}>
              Rápido y Simple
            </h3>
            <p style={{
              color: '#718096',
              lineHeight: 1.6,
              margin: 0
            }}>
              Completa nuestro onboarding en solo 4 minutos y recibe tu stack 
              de suplementos personalizado al instante.
            </p>
          </div>
        </div>
      </section>

      {/* How it works section */}
      <section style={{ marginBottom: 60 }}>
        <div style={{ textAlign: 'center', marginBottom: 50 }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            color: '#2d3748',
            margin: '0 0 16px 0'
          }}>
            ¿Cómo Funciona?
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: '#718096',
            maxWidth: 600,
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            Tres pasos simples para tu stack personalizado
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: 30,
          marginBottom: 50
        }}>
          {/* Step 1 */}
          <div style={{ textAlign: 'center' }}>
            <div style={{
              width: 60,
              height: 60,
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px auto',
              fontSize: '1.5rem',
              color: 'white',
              fontWeight: 'bold'
            }}>
              1
            </div>
            <h3 style={{
              fontSize: '1.3rem',
              fontWeight: '600',
              color: '#2d3748',
              margin: '0 0 12px 0'
            }}>
              Completa el Onboarding
            </h3>
            <p style={{
              color: '#718096',
              lineHeight: 1.6,
              margin: 0
            }}>
              Responde preguntas sobre tu perfil, objetivos y salud en solo 4 minutos.
            </p>
          </div>

          {/* Step 2 */}
          <div style={{ textAlign: 'center' }}>
            <div style={{
              width: 60,
              height: 60,
              background: 'linear-gradient(135deg, #48bb78, #38a169)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px auto',
              fontSize: '1.5rem',
              color: 'white',
              fontWeight: 'bold'
            }}>
              2
            </div>
            <h3 style={{
              fontSize: '1.3rem',
              fontWeight: '600',
              color: '#2d3748',
              margin: '0 0 12px 0'
            }}>
              Recibe tu Stack
            </h3>
                         <p style={{
               color: '#718096',
               lineHeight: 1.6,
               margin: 0
             }}>
               Obtén recomendaciones personalizadas con stacks esenciales y avanzados.
             </p>
          </div>

          {/* Step 3 */}
          <div style={{ textAlign: 'center' }}>
            <div style={{
              width: 60,
              height: 60,
              background: 'linear-gradient(135deg, #ed8936, #dd6b20)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px auto',
              fontSize: '1.5rem',
              color: 'white',
              fontWeight: 'bold'
            }}>
              3
            </div>
            <h3 style={{
              fontSize: '1.3rem',
              fontWeight: '600',
              color: '#2d3748',
              margin: '0 0 12px 0'
            }}>
              Sigue tu Plan
            </h3>
                         <p style={{
               color: '#718096',
               lineHeight: 1.6,
               margin: 0
             }}>
               Implementa tu plan de 12 semanas con seguimiento y ajustes.
             </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        background: 'linear-gradient(135deg, #f7fafc, #edf2f7)',
        padding: '60px 0',
        borderRadius: '20px',
        textAlign: 'center',
        marginBottom: 60
      }}>
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: '700',
          color: '#2d3748',
          margin: '0 0 24px 0'
        }}>
          ¿Listo para Optimizar tu Salud?
        </h2>
        <p style={{
          fontSize: '1.1rem',
          color: '#718096',
          margin: '0 0 40px 0',
          maxWidth: 600,
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          Únete a miles de personas que ya han transformado su bienestar con 
          recomendaciones científicas y personalizadas.
        </p>
        <Link href="/onboarding" style={{
          display: 'inline-block',
          padding: '16px 32px',
          background: 'linear-gradient(45deg, #667eea, #764ba2)',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '50px',
          fontSize: '1.1rem',
          fontWeight: '600',
          boxShadow: '0 8px 25px rgba(102, 126, 234, 0.4)',
          transition: 'all 0.3s ease'
        }}>
          🚀 Comenzar Gratis
        </Link>
      </section>

      {/* Disclaimer Section */}
      <section style={{ marginBottom: 40 }}>
        <div style={{
          padding: '24px',
          background: 'linear-gradient(135deg, #fff5f5, #fed7d7)',
          border: '1px solid #feb2b2',
          borderRadius: '16px',
          borderLeft: '4px solid #e53e3e'
        }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
            <div style={{
              fontSize: '24px',
              color: '#e53e3e',
              flexShrink: 0
            }}>
              ⚠️
            </div>
            <div>
              <h4 style={{
                margin: '0 0 12px 0',
                color: '#c53030',
                fontSize: '1.1rem',
                fontWeight: '600'
              }}>
                Importante: Información Médica
              </h4>
              <p style={{
                margin: 0,
                color: '#742a2a',
                lineHeight: 1.6,
                fontSize: '0.95rem'
              }}>
                <strong>Esta plataforma no sustituye diagnóstico ni tratamiento médico.</strong> 
                Si estás embarazada, en lactancia, tienes patología renal/hepática, cardiovascular, 
                diabetes, o tomas anticoagulantes/psicofármacos, consulta a tu médico antes de usar suplementos.
              </p>
            </div>
          </div>
      </div>
    </section>
    </div>
  );
}
