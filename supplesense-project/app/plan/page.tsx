
"use client";
import { useEffect, useState } from "react";

function generateDates(weeks = 12) { 
  const out: any[] = []; 
  const start = new Date(); 
  for(let w = 0; w < weeks; w++) { 
    for(let d = 0; d < 7; d++) { 
      const dt = new Date(start); 
      dt.setDate(start.getDate() + (w*7+d)); 
      out.push({ date: dt.toISOString().slice(0,10), taken: false }); 
    } 
  } 
  return out; 
}

function groupByMonth(days: any[]) {
  const months: { [key: string]: any[] } = {};
  
  days.forEach(day => {
    const date = new Date(day.date);
    const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
    const monthName = date.toLocaleDateString('es-ES', { month: 'long', year: 'numeric' });
    
    if (!months[monthKey]) {
      months[monthKey] = {
        name: monthName,
        weeks: [],
        days: []
      };
    }
    months[monthKey].days.push(day);
  });
  
  // Agrupar días por semanas dentro de cada mes
  Object.keys(months).forEach(monthKey => {
    const month = months[monthKey];
    const weeks = [];
    
    for (let i = 0; i < month.days.length; i += 7) {
      weeks.push(month.days.slice(i, i + 7));
    }
    
    month.weeks = weeks;
  });
  
  return months;
}

export default function Plan() {
  const [plan, setPlan] = useState<any>(null);
  const [days, setDays] = useState<any[]>(generateDates());
  
  useEffect(() => { 
    (async () => { 
      try {
        const res = await fetch("/api/plan", { method: "POST" }); 
        
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        
        const d = await res.json(); 
        setPlan(d); 
      } catch (error) {
        console.error('Error fetching plan:', error);
        // Establecer un plan por defecto en caso de error
        setPlan({
          items: [
            { id: "omega3", name: "Omega-3", startDate: new Date().toISOString(), endDate: new Date(Date.now()+1000*60*60*24*7*12).toISOString() },
            { id: "vitd3", name: "Vitamina D3", startDate: new Date().toISOString(), endDate: new Date(Date.now()+1000*60*60*24*7*12).toISOString() },
            { id: "magnesium", name: "Magnesio", startDate: new Date().toISOString(), endDate: new Date(Date.now()+1000*60*60*24*7*12).toISOString() }
          ],
          message: "Plan por defecto - completa el onboarding para un plan personalizado"
        });
      }
    })(); 
  }, []);
  
  if (!plan) return <p>Generando plan…</p>;
  
  const months = groupByMonth(days);
  const totalDays = days.length;
  const completedDays = days.filter(d => d.taken).length;
  const progress = Math.round((completedDays / totalDays) * 100);
  
  return (
    <section>
      <h2>📅 Plan de 12 semanas</h2>
      
      {/* Mensaje informativo */}
      {plan.message && (
        <div style={{ 
          background: '#fff7e6', 
          border: '1px solid #ffd591', 
          borderRadius: 12, 
          padding: 16, 
          marginBottom: 20,
          textAlign: 'center'
        }}>
          <p style={{ margin: 0, color: '#d46b08', fontSize: 16 }}>
            💡 {plan.message}
          </p>
        </div>
      )}
      
      {/* Resumen del plan */}
      <div style={{ 
        background: '#f0f9ff', 
        border: '1px solid #91d5ff', 
        borderRadius: 12, 
        padding: 20, 
        marginBottom: 24 
      }}>
        <h3 style={{ margin: '0 0 12 0', color: '#096dd9' }}>Resumen del plan</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <div>
            <strong>Suplementos incluidos:</strong>
            <div style={{ marginTop: 8 }}>
              {plan.items.map((i: any, index: number) => (
                <span key={i.name} style={{ 
                  display: 'inline-block',
                  background: '#e6f7ff', 
                  padding: '4px 8px', 
                  borderRadius: 6, 
                  margin: '2px',
                  fontSize: 14
                }}>
                  {i.name}
                </span>
              ))}
            </div>
          </div>
          <div>
            <strong>Progreso:</strong>
            <div style={{ marginTop: 8 }}>
              <div style={{ 
                background: '#e6e6e6', 
                borderRadius: 8, 
                height: 20, 
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{ 
                  background: '#52c41a', 
                  height: '100%', 
                  width: `${progress}%`,
                  transition: 'width 0.3s ease'
                }}></div>
              </div>
              <div style={{ marginTop: 4, fontSize: 14, color: '#666' }}>
                {completedDays} de {totalDays} días completados ({progress}%)
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Calendario organizado por mes */}
      <div style={{ display: 'grid', gap: 32 }}>
        {Object.keys(months).map(monthKey => {
          const month = months[monthKey];
          return (
            <div key={monthKey} style={{ 
              border: '1px solid #e6e6e6', 
              borderRadius: 12, 
              padding: 20,
              background: 'white'
            }}>
              <h3 style={{ 
                margin: '0 0 20 0', 
                color: '#262626',
                borderBottom: '2px solid #1890ff',
                paddingBottom: 8
              }}>
                📍 {month.name}
              </h3>
              
              <div style={{ display: 'grid', gap: 16 }}>
                {month.weeks.map((week, weekIndex) => (
                  <div key={weekIndex} style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(7, 1fr)', 
                    gap: 4,
                    border: '1px solid #f0f0f0',
                    borderRadius: 8,
                    padding: 12,
                    background: '#fafafa'
                  }}>
                    {week.map((day, dayIndex) => (
                      <label key={dayIndex} style={{ 
                        border: '1px solid #d9d9d9', 
                        borderRadius: 6, 
                        padding: 8, 
                        fontSize: 11,
                        textAlign: 'center',
                        cursor: 'pointer',
                        background: day.taken ? '#f6ffed' : 'white',
                        borderColor: day.taken ? '#52c41a' : '#d9d9d9',
                        transition: 'all 0.2s ease'
                      }}>
                        <input 
                          type="checkbox" 
                          checked={day.taken} 
                          onChange={e => { 
                            const copy = [...days]; 
                            const dayIndex = copy.findIndex(d => d.date === day.date);
                            if (dayIndex !== -1) {
                              copy[dayIndex] = { ...day, taken: e.target.checked }; 
                              setDays(copy); 
                            }
                          }} 
                          style={{ marginRight: 4 }}
                        /> 
                        <div style={{ 
                          fontSize: 10, 
                          color: '#666',
                          marginBottom: 2
                        }}>
                          {new Date(day.date).toLocaleDateString('es-ES', { weekday: 'short' })}
                        </div>
                        <div style={{ fontWeight: 'bold' }}>
                          {new Date(day.date).getDate()}
                        </div>
                      </label>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ marginTop: 32, textAlign: 'center' }}>
        <a href="/checkin">
          <button style={{ 
            padding: '12px 24px', 
            fontSize: 16, 
            background: '#52c41a', 
            color: 'white', 
            border: 'none', 
            borderRadius: 8,
            cursor: 'pointer'
          }}>
            📊 Ir a seguimiento
          </button>
        </a>
      </div>
    </section>
  );
}
