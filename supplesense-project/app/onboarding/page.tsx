
"use client";
import { useState } from "react";

type Intake = {
  age: number; sex: "male" | "female" | "other"; weight: number; height: number;
  diet: "omnivore" | "vegetarian" | "vegan"; activity: "sedentary" | "recreational" | "amateur" | "competitive";
  sleepHours: number; coffeePerDay: number; alcohol: "none" | "low" | "medium" | "high"; sun: "low" | "medium" | "high";
  medicalFlags: string[]; meds: string[]; goals: string[]; fishPerWeek: number; proteinPerKg?: number; budget: "low" | "medium" | "high";
};

const DEMO: Intake = { age: 35, sex: "male", weight: 66, height: 176, diet: "omnivore", activity: "amateur", sleepHours: 7, coffeePerDay: 2, alcohol: "none", sun: "low", medicalFlags: [], meds: [], goals: ["performance","focus"], fishPerWeek: 0, proteinPerKg: 1.2, budget: "medium" };

const STEP_TITLES = [
  "Información Personal",
  "Hábitos y Estilo de Vida", 
  "Salud y Medicamentos",
  "Objetivos y Preferencias"
];

const STEP_DESCRIPTIONS = [
  "Cuéntanos sobre tu perfil básico y actividad física",
  "Conoce tus patrones de sueño, cafeína y exposición solar",
  "Identifica condiciones médicas y medicamentos",
  "Define tus objetivos de salud y preferencias nutricionales"
];

export default function Onboarding() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<Intake>(DEMO);

  const next = () => setStep(s => Math.min(4, s+1));
  const prev = () => setStep(s => Math.max(1, s-1));
  const submit = async () => { 
    const res = await fetch("/api/intake", { method:"POST", body: JSON.stringify(form) }); 
    if (res.ok) window.location.href = "/results"; 
  };

  const progressPercentage = (step / 4) * 100;

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
          🧬 Tu Perfil de Salud
        </h1>
        <p style={{
          fontSize: '1.1rem',
          color: '#718096',
          margin: '0 0 40px 0',
          lineHeight: 1.6
        }}>
          En solo 4 pasos, crearemos tu stack de suplementos personalizado y basado en evidencia científica
        </p>

        {/* Progress Bar */}
        <div style={{
          background: '#e2e8f0',
          borderRadius: '25px',
          height: '8px',
          margin: '0 auto 24px auto',
          maxWidth: 500,
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
            height: '100%',
            width: `${progressPercentage}%`,
            borderRadius: '25px',
            transition: 'width 0.5s ease',
            boxShadow: '0 2px 8px rgba(102, 126, 234, 0.3)'
          }}></div>
        </div>

        {/* Step Indicator */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 16,
          marginBottom: 40
        }}>
          {[1, 2, 3, 4].map((stepNumber) => (
            <div key={stepNumber} style={{
              width: 40,
              height: 40,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              fontSize: '1.1rem',
              border: '2px solid',
              transition: 'all 0.3s ease',
              ...(stepNumber <= step ? {
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                borderColor: '#667eea',
                boxShadow: '0 4px 12px rgba(102, 126, 234, 0.3)'
              } : {
                background: 'white',
                color: '#cbd5e0',
                borderColor: '#e2e8f0'
              })
            }}>
              {stepNumber}
            </div>
          ))}
        </div>

        {/* Current Step Info */}
        <div style={{
          background: 'linear-gradient(135deg, #f7fafc, #edf2f7)',
          padding: '24px',
          borderRadius: '16px',
          border: '1px solid #e2e8f0',
          marginBottom: 40
        }}>
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: '700',
            color: '#2d3748',
            margin: '0 0 8px 0'
          }}>
            Paso {step} de 4: {STEP_TITLES[step - 1]}
          </h2>
          <p style={{
            color: '#718096',
            margin: 0,
            fontSize: '1rem'
          }}>
            {STEP_DESCRIPTIONS[step - 1]}
          </p>
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
        {/* Step 1: Personal Information */}
        {step === 1 && (
          <div style={{ display: 'grid', gap: 24 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
              <div>
                <label style={{
                  display: 'block',
                  marginBottom: 8,
                  fontWeight: '600',
                  color: '#2d3748',
                  fontSize: '0.95rem'
                }}>
                  🎂 Edad
                </label>
                <input 
                  type="number" 
                  value={form.age} 
                  onChange={e=>setForm({...form, age:+e.target.value})}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '2px solid #e2e8f0',
                    borderRadius: '12px',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease',
                    outline: 'none'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#667eea'}
                  onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                />
              </div>

              <div>
                <label style={{
                  display: 'block',
                  marginBottom: 8,
                  fontWeight: '600',
                  color: '#2d3748',
                  fontSize: '0.95rem'
                }}>
                  👤 Sexo
                </label>
                <select 
                  value={form.sex} 
                  onChange={e=>setForm({...form, sex:e.target.value as any})}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '2px solid #e2e8f0',
                    borderRadius: '12px',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease',
                    outline: 'none',
                    background: 'white'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#667eea'}
                  onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                >
                  <option value="male">👨 Masculino</option>
                  <option value="female">👩 Femenino</option>
                  <option value="other">🤝 Otro</option>
                </select>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
              <div>
                <label style={{
                  display: 'block',
                  marginBottom: 8,
                  fontWeight: '600',
                  color: '#2d3748',
                  fontSize: '0.95rem'
                }}>
                  ⚖️ Peso (kg)
                </label>
                <input 
                  type="number" 
                  value={form.weight} 
                  onChange={e=>setForm({...form, weight:+e.target.value})}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '2px solid #e2e8f0',
                    borderRadius: '12px',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease',
                    outline: 'none'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#667eea'}
                  onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                />
              </div>

              <div>
                <label style={{
                  display: 'block',
                  marginBottom: 8,
                  fontWeight: '600',
                  color: '#2d3748',
                  fontSize: '0.95rem'
                }}>
                  📏 Altura (cm)
                </label>
                <input 
                  type="number" 
                  value={form.height} 
                  onChange={e=>setForm({...form, height:+e.target.value})}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '2px solid #e2e8f0',
                    borderRadius: '12px',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease',
                    outline: 'none'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#667eea'}
                  onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
              <div>
                <label style={{
                  display: 'block',
                  marginBottom: 8,
                  fontWeight: '600',
                  color: '#2d3748',
                  fontSize: '0.95rem'
                }}>
                  🥗 Dieta
                </label>
                <select 
                  value={form.diet} 
                  onChange={e=>setForm({...form, diet:e.target.value as any})}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '2px solid #e2e8f0',
                    borderRadius: '12px',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease',
                    outline: 'none',
                    background: 'white'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#667eea'}
                  onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                >
                  <option value="omnivore">🍖 Omnívoro</option>
                  <option value="vegetarian">🥬 Vegetariano</option>
                  <option value="vegan">🌱 Vegano</option>
                </select>
              </div>

              <div>
                <label style={{
                  display: 'block',
                  marginBottom: 8,
                  fontWeight: '600',
                  color: '#2d3748',
                  fontSize: '0.95rem'
                }}>
                  🏃‍♂️ Nivel de Actividad
                </label>
                <select 
                  value={form.activity} 
                  onChange={e=>setForm({...form, activity:e.target.value as any})}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '2px solid #e2e8f0',
                    borderRadius: '12px',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease',
                    outline: 'none',
                    background: 'white'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#667eea'}
                  onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                >
                  <option value="sedentary">🪑 Sedentario</option>
                  <option value="recreational">🏋️‍♂️ 2–3 entrenos/sem</option>
                  <option value="amateur">💪 4–6 entrenos/sem</option>
                  <option value="competitive">🏆 Competitivo</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Lifestyle Habits */}
        {step === 2 && (
          <div style={{ display: 'grid', gap: 24 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
              <div>
                <label style={{
                  display: 'block',
                  marginBottom: 8,
                  fontWeight: '600',
                  color: '#2d3748',
                  fontSize: '0.95rem'
                }}>
                  😴 Horas de Sueño
                </label>
                <input 
                  type="number" 
                  value={form.sleepHours} 
                  onChange={e=>setForm({...form, sleepHours:+e.target.value})}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '2px solid #e2e8f0',
                    borderRadius: '12px',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease',
                    outline: 'none'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#667eea'}
                  onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                />
              </div>

              <div>
                <label style={{
                  display: 'block',
                  marginBottom: 8,
                  fontWeight: '600',
                  color: '#2d3748',
                  fontSize: '0.95rem'
                }}>
                  ☕ Cafés al Día
                </label>
                <input 
                  type="number" 
                  value={form.coffeePerDay} 
                  onChange={e=>setForm({...form, coffeePerDay:+e.target.value})}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '2px solid #e2e8f0',
                    borderRadius: '12px',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease',
                    outline: 'none'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#667eea'}
                  onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
              <div>
                <label style={{
                  display: 'block',
                  marginBottom: 8,
                  fontWeight: '600',
                  color: '#2d3748',
                  fontSize: '0.95rem'
                }}>
                  🍷 Consumo de Alcohol
                </label>
                <select 
                  value={form.alcohol} 
                  onChange={e=>setForm({...form, alcohol:e.target.value as any})}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '2px solid #e2e8f0',
                    borderRadius: '12px',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease',
                    outline: 'none',
                    background: 'white'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#667eea'}
                  onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                >
                  <option value="none">❌ Nada</option>
                  <option value="low">🍺 Bajo (1-2 bebidas/semana)</option>
                  <option value="medium">🍷 Medio (3-5 bebidas/semana)</option>
                  <option value="high">🥃 Alto (6+ bebidas/semana)</option>
                </select>
              </div>

              <div>
                <label style={{
                  display: 'block',
                  marginBottom: 8,
                  fontWeight: '600',
                  color: '#2d3748',
                  fontSize: '0.95rem'
                }}>
                  ☀️ Exposición Solar
                </label>
                <select 
                  value={form.sun} 
                  onChange={e=>setForm({...form, sun:e.target.value as any})}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '2px solid #e2e8f0',
                    borderRadius: '12px',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease',
                    outline: 'none',
                    background: 'white'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#667eea'}
                  onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                >
                  <option value="low">🌤️ Baja (0-15 min/día)</option>
                  <option value="medium">☀️ Media (15-30 min/día)</option>
                  <option value="high">🔥 Alta (30+ min/día)</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Health & Medications */}
        {step === 3 && (
          <div style={{ display: 'grid', gap: 24 }}>
            <div style={{
              background: 'linear-gradient(135deg, #fff5f5, #fed7d7)',
              padding: '24px',
              borderRadius: '16px',
              border: '1px solid #feb2b2'
            }}>
              <h3 style={{
                margin: '0 0 16px 0',
                color: '#c53030',
                fontSize: '1.1rem',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: 8
              }}>
                🏥 Condiciones de Salud
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
                {[
                  { id: "renal", label: "Insuficiencia Renal", icon: "🫁" },
                  { id: "hepatic", label: "Enfermedad Hepática", icon: "🫀" },
                  { id: "heart", label: "Problemas Cardíacos", icon: "❤️" },
                  { id: "dm2", label: "Diabetes Tipo 2", icon: "🩸" },
                  { id: "pregnancy", label: "Embarazo/Lactancia", icon: "🤱" }
                ].map(({ id, label, icon }) => (
                  <label key={id} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    padding: '12px',
                    background: 'white',
                    borderRadius: '12px',
                    border: '1px solid #feb2b2',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}>
                    <input 
                      type="checkbox" 
                      checked={form.medicalFlags.includes(id)} 
                      onChange={e=>{
                        const v = e.target.checked; 
                        setForm({...form, medicalFlags: v ? [...form.medicalFlags, id] : form.medicalFlags.filter(f=>f!==id)});
                      }}
                      style={{ transform: 'scale(1.2)' }}
                    />
                    <span style={{ fontSize: '1.2rem' }}>{icon}</span>
                    <span style={{ fontSize: '0.9rem', fontWeight: '500' }}>{label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div style={{
              background: 'linear-gradient(135deg, #f0fff4, #c6f6d5)',
              padding: '24px',
              borderRadius: '16px',
              border: '1px solid #9ae6b4'
            }}>
              <h3 style={{
                margin: '0 0 16px 0',
                color: '#22543d',
                fontSize: '1.1rem',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: 8
              }}>
                💊 Medicamentos
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
                {[
                  { id: "anticoagulants", label: "Anticoagulantes", icon: "🩸" },
                  { id: "ssri", label: "Antidepresivos (SSRI)", icon: "🧠" },
                  { id: "metformin", label: "Metformina", icon: "💊" }
                ].map(({ id, label, icon }) => (
                  <label key={id} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    padding: '12px',
                    background: 'white',
                    borderRadius: '12px',
                    border: '1px solid #9ae6b4',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}>
                    <input 
                      type="checkbox" 
                      checked={form.meds.includes(id)} 
                      onChange={e=>{
                        const v = e.target.checked; 
                        setForm({...form, meds: v ? [...form.meds, id] : form.meds.filter(x=>x!==id)});
                      }}
                      style={{ transform: 'scale(1.2)' }}
                    />
                    <span style={{ fontSize: '1.2rem' }}>{icon}</span>
                    <span style={{ fontSize: '0.9rem', fontWeight: '500' }}>{label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Goals & Preferences */}
        {step === 4 && (
          <div style={{ display: 'grid', gap: 24 }}>
            <div style={{
              background: 'linear-gradient(135deg, #e6fffa, #b2f5ea)',
              padding: '24px',
              borderRadius: '16px',
              border: '1px solid #81e6d9'
            }}>
              <h3 style={{
                margin: '0 0 16px 0',
                color: '#234e52',
                fontSize: '1.1rem',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: 8
              }}>
                🎯 Objetivos de Salud (Elige 1–3)
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16 }}>
                {[
                  { id: "performance", label: "Rendimiento Deportivo", icon: "🏃‍♂️" },
                  { id: "muscle", label: "Ganancia Muscular", icon: "💪" },
                  { id: "composition", label: "Composición Corporal", icon: "⚖️" },
                  { id: "energy", label: "Energía y Vitalidad", icon: "⚡" },
                  { id: "focus", label: "Concentración", icon: "🧠" },
                  { id: "stress", label: "Manejo del Estrés", icon: "🧘‍♀️" },
                  { id: "digestive", label: "Salud Digestiva", icon: "🫁" }
                ].map(({ id, label, icon }) => (
                  <label key={id} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    padding: '12px',
                    background: 'white',
                    borderRadius: '12px',
                    border: '1px solid #81e6d9',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}>
                    <input 
                      type="checkbox" 
                      checked={form.goals.includes(id)} 
                      onChange={e=>{
                        const v = e.target.checked; 
                        if (v && form.goals.length >= 3) return; // Max 3 goals
                        setForm({...form, goals: v ? [...form.goals, id] : form.goals.filter(x=>x!==id)});
                      }}
                      style={{ transform: 'scale(1.2)' }}
                    />
                    <span style={{ fontSize: '1.2rem' }}>{icon}</span>
                    <span style={{ fontSize: '0.9rem', fontWeight: '500' }}>{label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
              <div>
                <label style={{
                  display: 'block',
                  marginBottom: 8,
                  fontWeight: '600',
                  color: '#2d3748',
                  fontSize: '0.95rem'
                }}>
                  🐟 Porciones de Pescado/Semana
                </label>
                <input 
                  type="number" 
                  value={form.fishPerWeek} 
                  onChange={e=>setForm({...form, fishPerWeek:+e.target.value})}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '2px solid #e2e8f0',
                    borderRadius: '12px',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease',
                    outline: 'none'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#667eea'}
                  onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                />
              </div>

              <div>
                <label style={{
                  display: 'block',
                  marginBottom: 8,
                  fontWeight: '600',
                  color: '#2d3748',
                  fontSize: '0.95rem'
                }}>
                  💰 Presupuesto
                </label>
                <select 
                  value={form.budget} 
                  onChange={e=>setForm({...form, budget:e.target.value as any})}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '2px solid #e2e8f0',
                    borderRadius: '12px',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease',
                    outline: 'none',
                    background: 'white'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#667eea'}
                  onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                >
                  <option value="low">💸 Bajo</option>
                  <option value="medium">💰 Medio</option>
                  <option value="high">💎 Alto</option>
                </select>
              </div>
            </div>

            <div>
              <label style={{
                display: 'block',
                marginBottom: 8,
                fontWeight: '600',
                color: '#2d3748',
                fontSize: '0.95rem'
              }}>
                🥩 Ingesta de Proteínas
              </label>
              <select 
                value={form.proteinPerKg ?? 1.2} 
                onChange={e=>setForm({...form, proteinPerKg:+e.target.value})}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: '2px solid #e2e8f0',
                  borderRadius: '12px',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                  outline: 'none',
                  background: 'white'
                }}
                onFocus={(e) => e.target.style.borderColor = '#667eea'}
                onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
              >
                <option value={0.8}>🥩 Baja (0.8 g/kg) - Ej: 64g para 80kg</option>
                <option value={1.0}>🥩 Moderada (1.0 g/kg) - Ej: 80g para 80kg</option>
                <option value={1.2}>🥩 Media (1.2 g/kg) - Ej: 96g para 80kg</option>
                <option value={1.4}>🥩 Alta (1.4 g/kg) - Ej: 112g para 80kg</option>
                <option value={1.6}>🥩 Muy alta (1.6 g/kg) - Ej: 128g para 80kg</option>
                <option value={2.0}>🥩 Extrema (2.0 g/kg) - Ej: 160g para 80kg</option>
              </select>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div style={{ 
          marginTop: 40, 
          display: "flex", 
          gap: 16,
          justifyContent: 'space-between'
        }}>
          <button 
            onClick={prev} 
            disabled={step === 1}
            style={{
              padding: '14px 28px',
              border: '2px solid #e2e8f0',
              borderRadius: '12px',
              background: step === 1 ? '#f7fafc' : 'white',
              color: step === 1 ? '#cbd5e0' : '#4a5568',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: step === 1 ? 'not-allowed' : 'pointer',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              gap: 8
            }}
          >
            ← Atrás
          </button>

          {step < 4 ? (
            <button 
              onClick={next}
              style={{
                padding: '14px 28px',
                background: 'linear-gradient(135deg, #667eea, #764ba2)',
                color: 'white',
                border: 'none',
                borderRadius: '12px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 12px rgba(102, 126, 234, 0.3)',
                display: 'flex',
                alignItems: 'center',
                                 gap: 8
              }}
            >
              Siguiente →
            </button>
          ) : (
            <button 
              onClick={submit}
              style={{
                padding: '14px 28px',
                background: 'linear-gradient(135deg, #48bb78, #38a169)',
                color: 'white',
                border: 'none',
                borderRadius: '12px',
                fontSize: '1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 12px rgba(72, 187, 120, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8
                  }}
                >
                  🚀 Ver Mis Resultados
                </button>
              )}
            </div>
          </div>
        </div>
      );
    }
