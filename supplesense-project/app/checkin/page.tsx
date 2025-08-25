
"use client";
import { useState } from "react";

export default function Checkin() {
  const [form, setForm] = useState({ 
    energy: 3, 
    sleep: 3, 
    performance: 3, 
    digestion: 3, 
    notes: '' 
  });

  const submit = async () => { 
    const res = await fetch("/api/checkin", { 
      method: "POST", 
      body: JSON.stringify(form) 
    }); 
    const d = await res.json(); 
    alert("Check-in enviado. Recomendaciones podrían ajustarse en próximas iteraciones."); 
  };

  const getRatingColor = (rating: number) => {
    if (rating <= 2) return '#ef4444'; // Rojo para malo
    if (rating <= 3) return '#f59e0b'; // Amarillo para regular
    if (rating <= 4) return '#10b981'; // Verde para bueno
    return '#3b82f6'; // Azul para excelente
  };

  const getRatingEmoji = (rating: number) => {
    if (rating <= 2) return '😞';
    if (rating <= 3) return '😐';
    if (rating <= 4) return '🙂';
    return '😄';
  };

  const getRatingLabel = (rating: number) => {
    if (rating <= 2) return 'Malo';
    if (rating <= 3) return 'Regular';
    if (rating <= 4) return 'Bueno';
    return 'Excelente';
  };

  return (
    <div style={{
      maxWidth: 800,
      margin: '0 auto',
      padding: '40px 20px'
    }}>
      {/* Header Section */}
      <div style={{
        textAlign: 'center',
        marginBottom: 50
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: '800',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          margin: '0 0 16px 0'
        }}>
          📊 Seguimiento Semanal
        </h1>
        <p style={{
          fontSize: '1.1rem',
          color: '#718096',
          margin: '0 0 40px 0',
          lineHeight: 1.6
        }}>
          Evalúa tu progreso y bienestar para optimizar tu stack de suplementos
        </p>

        {/* Progress Overview */}
        <div style={{
          background: 'linear-gradient(135deg, #f7fafc, #edf2f7)',
          padding: '24px',
          borderRadius: '16px',
          border: '1px solid #e2e8f0',
          marginBottom: 40,
          maxWidth: 600,
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          <h3 style={{
            margin: '0 0 20px 0',
            color: '#2d3748',
            fontSize: '1.2rem',
            fontWeight: '600'
          }}>
            📈 Resumen de tu Semana
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
            gap: 16
          }}>
            {[
              { key: 'energy', label: 'Energía', icon: '⚡' },
              { key: 'sleep', label: 'Sueño', icon: '😴' },
              { key: 'performance', label: 'Rendimiento', icon: '🏃‍♂️' },
              { key: 'digestion', label: 'Digestión', icon: '🫁' }
            ].map(({ key, label, icon }) => (
              <div key={key} style={{
                textAlign: 'center',
                padding: '16px',
                background: 'white',
                borderRadius: '12px',
                border: '1px solid #e2e8f0'
              }}>
                <div style={{ fontSize: '1.5rem', marginBottom: 8 }}>{icon}</div>
                <div style={{
                  fontSize: '2rem',
                  fontWeight: 'bold',
                  color: getRatingColor(form[key as keyof typeof form] as number),
                  marginBottom: 4
                }}>
                  {form[key as keyof typeof form]}
                </div>
                <div style={{
                  fontSize: '0.8rem',
                  color: '#718096',
                  fontWeight: '500'
                }}>
                  {getRatingLabel(form[key as keyof typeof form] as number)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Form Container */}
      <div style={{
        background: 'white',
        borderRadius: '20px',
        padding: '40px',
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
        border: '1px solid #e2e8f0'
      }}>
        <h2 style={{
          fontSize: '1.8rem',
          fontWeight: '700',
          color: '#2d3748',
          margin: '0 0 32px 0',
          textAlign: 'center'
        }}>
          🎯 Evalúa tu Semana
        </h2>

        {/* Rating Scales */}
        <div style={{ display: 'grid', gap: 32 }}>
          {/* Energy Rating */}
          <div style={{
            background: 'linear-gradient(135deg, #fff7ed, #fed7aa)',
            padding: '24px',
            borderRadius: '16px',
            border: '1px solid #fdba74'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              marginBottom: 16
            }}>
              <span style={{ fontSize: '1.5rem' }}>⚡</span>
              <h3 style={{
                margin: 0,
                color: '#c2410c',
                fontSize: '1.2rem',
                fontWeight: '600'
              }}>
                Nivel de Energía
              </h3>
            </div>
            <p style={{
              margin: '0 0 20px 0',
              color: '#9a3412',
              fontSize: '0.9rem'
            }}>
              ¿Cómo te has sentido de energía durante la semana?
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(5, 1fr)',
              gap: 12
            }}>
              {[1, 2, 3, 4, 5].map((rating) => (
                <label key={rating} style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  padding: '16px 8px',
                  background: form.energy === rating ? 'white' : 'rgba(255, 255, 255, 0.7)',
                  borderRadius: '12px',
                  border: `2px solid ${form.energy === rating ? getRatingColor(rating) : '#fdba74'}`,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: form.energy === rating ? `0 4px 12px ${getRatingColor(rating)}40` : 'none'
                }}>
                  <input 
                    type="radio" 
                    name="energy" 
                    value={rating} 
                    checked={form.energy === rating}
                    onChange={e => setForm({...form, energy: +e.target.value})}
                    style={{ display: 'none' }}
                  />
                  <div style={{
                    fontSize: '1.5rem',
                    marginBottom: 8
                  }}>
                    {getRatingEmoji(rating)}
                  </div>
                  <div style={{
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                    color: getRatingColor(rating)
                  }}>
                    {rating}
                  </div>
                  <div style={{
                    fontSize: '0.7rem',
                    color: '#9a3412',
                    textAlign: 'center',
                    lineHeight: 1.2
                  }}>
                    {rating === 1 ? 'Muy Bajo' : 
                     rating === 2 ? 'Bajo' : 
                     rating === 3 ? 'Normal' : 
                     rating === 4 ? 'Alto' : 'Muy Alto'}
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Sleep Rating */}
          <div style={{
            background: 'linear-gradient(135deg, #f0f9ff, #bae6fd)',
            padding: '24px',
            borderRadius: '16px',
            border: '1px solid #7dd3fc'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              marginBottom: 16
            }}>
              <span style={{ fontSize: '1.5rem' }}>😴</span>
              <h3 style={{
                margin: 0,
                color: '#0369a1',
                fontSize: '1.2rem',
                fontWeight: '600'
              }}>
                Calidad del Sueño
              </h3>
            </div>
            <p style={{
              margin: '0 0 20px 0',
              color: '#0c4a6e',
              fontSize: '0.9rem'
            }}>
              ¿Qué tan bien has dormido esta semana?
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(5, 1fr)',
              gap: 12
            }}>
              {[1, 2, 3, 4, 5].map((rating) => (
                <label key={rating} style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  padding: '16px 8px',
                  background: form.sleep === rating ? 'white' : 'rgba(255, 255, 255, 0.7)',
                  borderRadius: '12px',
                  border: `2px solid ${form.sleep === rating ? getRatingColor(rating) : '#7dd3fc'}`,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: form.sleep === rating ? `0 4px 12px ${getRatingColor(rating)}40` : 'none'
                }}>
                  <input 
                    type="radio" 
                    name="sleep" 
                    value={rating} 
                    checked={form.sleep === rating}
                    onChange={e => setForm({...form, sleep: +e.target.value})}
                    style={{ display: 'none' }}
                  />
                  <div style={{
                    fontSize: '1.5rem',
                    marginBottom: 8
                  }}>
                    {getRatingEmoji(rating)}
                  </div>
                  <div style={{
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                    color: getRatingColor(rating)
                  }}>
                    {rating}
                  </div>
                  <div style={{
                    fontSize: '0.7rem',
                    color: '#0c4a6e',
                    textAlign: 'center',
                    lineHeight: 1.2
                  }}>
                    {rating === 1 ? 'Muy Malo' : 
                     rating === 2 ? 'Malo' : 
                     rating === 3 ? 'Regular' : 
                     rating === 4 ? 'Bueno' : 'Excelente'}
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Performance Rating */}
          <div style={{
            background: 'linear-gradient(135deg, #f0fdf4, #bbf7d0)',
            padding: '24px',
            borderRadius: '16px',
            border: '1px solid #86efac'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              marginBottom: 16
            }}>
              <span style={{ fontSize: '1.5rem' }}>🏃‍♂️</span>
              <h3 style={{
                margin: 0,
                color: '#166534',
                fontSize: '1.2rem',
                fontWeight: '600'
              }}>
                Rendimiento Deportivo
              </h3>
            </div>
            <p style={{
              margin: '0 0 20px 0',
              color: '#14532d',
              fontSize: '0.9rem'
            }}>
              ¿Cómo te ha ido en tus entrenamientos y actividades físicas?
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(5, 1fr)',
              gap: 12
            }}>
              {[1, 2, 3, 4, 5].map((rating) => (
                <label key={rating} style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  padding: '16px 8px',
                  background: form.performance === rating ? 'white' : 'rgba(255, 255, 255, 0.7)',
                  borderRadius: '12px',
                  border: `2px solid ${form.performance === rating ? getRatingColor(rating) : '#86efac'}`,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: form.performance === rating ? `0 4px 12px ${getRatingColor(rating)}40` : 'none'
                }}>
                  <input 
                    type="radio" 
                    name="performance" 
                    value={rating} 
                    checked={form.performance === rating}
                    onChange={e => setForm({...form, performance: +e.target.value})}
                    style={{ display: 'none' }}
                  />
                  <div style={{
                    fontSize: '1.5rem',
                    marginBottom: 8
                  }}>
                    {getRatingEmoji(rating)}
                  </div>
                  <div style={{
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                    color: getRatingColor(rating)
                  }}>
                    {rating}
                  </div>
                  <div style={{
                    fontSize: '0.7rem',
                    color: '#14532d',
                    textAlign: 'center',
                    lineHeight: 1.2
                  }}>
                    {rating === 1 ? 'Muy Bajo' : 
                     rating === 2 ? 'Bajo' : 
                     rating === 3 ? 'Normal' : 
                     rating === 4 ? 'Alto' : 'Muy Alto'}
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Digestion Rating */}
          <div style={{
            background: 'linear-gradient(135deg, #fdf2f8, #fce7f3)',
            padding: '24px',
            borderRadius: '16px',
            border: '1px solid #f9a8d4'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              marginBottom: 16
            }}>
              <span style={{ fontSize: '1.5rem' }}>🫁</span>
              <h3 style={{
                margin: 0,
                color: '#be185d',
                fontSize: '1.2rem',
                fontWeight: '600'
              }}>
                Salud Digestiva
              </h3>
            </div>
            <p style={{
              margin: '0 0 20px 0',
              color: '#9d174d',
              fontSize: '0.9rem'
            }}>
              ¿Cómo has estado con tu digestión y bienestar intestinal?
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(5, 1fr)',
              gap: 12
            }}>
              {[1, 2, 3, 4, 5].map((rating) => (
                <label key={rating} style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  padding: '16px 8px',
                  background: form.digestion === rating ? 'white' : 'rgba(255, 255, 255, 0.7)',
                  borderRadius: '12px',
                  border: `2px solid ${form.digestion === rating ? getRatingColor(rating) : '#f9a8d4'}`,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: form.digestion === rating ? `0 4px 12px ${getRatingColor(rating)}40` : 'none'
                }}>
                  <input 
                    type="radio" 
                    name="digestion" 
                    value={rating} 
                    checked={form.digestion === rating}
                    onChange={e => setForm({...form, digestion: +e.target.value})}
                    style={{ display: 'none' }}
                  />
                  <div style={{
                    fontSize: '1.5rem',
                    marginBottom: 8
                  }}>
                    {getRatingEmoji(rating)}
                  </div>
                  <div style={{
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                    color: getRatingColor(rating)
                  }}>
                    {rating}
                  </div>
                  <div style={{
                    fontSize: '0.7rem',
                    color: '#9d174d',
                    textAlign: 'center',
                    lineHeight: 1.2
                  }}>
                    {rating === 1 ? 'Muy Malo' : 
                     rating === 2 ? 'Malo' : 
                     rating === 3 ? 'Regular' : 
                     rating === 4 ? 'Bueno' : 'Excelente'}
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Notes Section */}
          <div style={{
            background: 'linear-gradient(135deg, #f8fafc, #e2e8f0)',
            padding: '24px',
            borderRadius: '16px',
            border: '1px solid #cbd5e0'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              marginBottom: 16
            }}>
              <span style={{ fontSize: '1.5rem' }}>📝</span>
              <h3 style={{
                margin: 0,
                color: '#475569',
                fontSize: '1.2rem',
                fontWeight: '600'
              }}>
                Notas Adicionales
              </h3>
            </div>
            <p style={{
              margin: '0 0 20px 0',
              color: '#64748b',
              fontSize: '0.9rem'
            }}>
              Comparte cualquier observación, síntoma o cambio que hayas notado
            </p>
            <textarea 
              value={form.notes} 
              onChange={e => setForm({...form, notes: e.target.value})}
              placeholder="Ej: Me sentí más cansado los primeros días, pero mejoré al final de la semana..."
              style={{
                width: '100%',
                minHeight: '120px',
                padding: '16px',
                border: '2px solid #e2e8f0',
                borderRadius: '12px',
                fontSize: '1rem',
                fontFamily: 'inherit',
                resize: 'vertical',
                outline: 'none',
                transition: 'border-color 0.3s ease'
              }}
              onFocus={(e) => e.target.style.borderColor = '#667eea'}
              onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
            />
          </div>
        </div>

        {/* Submit Button */}
        <div style={{
          textAlign: 'center',
          marginTop: 40
        }}>
          <button 
            onClick={submit}
            style={{
              padding: '16px 32px',
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
              color: 'white',
              border: 'none',
              borderRadius: '50px',
              fontSize: '1.1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 8px 25px rgba(102, 126, 234, 0.4)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 12
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 12px 35px rgba(102, 126, 234, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(102, 126, 234, 0.4)';
            }}
          >
            📊 Enviar Seguimiento Semanal
          </button>
        </div>
      </div>
    </div>
  );
}
