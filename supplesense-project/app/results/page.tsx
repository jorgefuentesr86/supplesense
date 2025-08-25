
"use client";
import { useEffect, useState } from "react";

export default function Results() {
  const [data, setData] = useState<any>(null);
  
  useEffect(()=>{ 
    (async ()=>{
      const res = await fetch("/api/recommend", { method: "POST" }); 
      const d = await res.json(); 
      setData(d); 
    })(); 
  },[]);
  
  if (!data) return <p>Cargando recomendaciones…</p>;
  
  const { unsafe, essentials, optional, explanation, priority } = data;
  
  return (
    <section>
      <h2>Tu stack de suplementos personalizado</h2>
      
      {/* Priority Level and Explanation */}
      {priority && (
        <div style={{ 
          padding: '20px', 
          background: priority === 'basic' ? '#f0f9ff' : priority === 'intermediate' ? '#f0fdf4' : '#fef3c7',
          border: priority === 'basic' ? '1px solid #7dd3fc' : priority === 'intermediate' ? '1px solid #86efac' : '1px solid #fbbf24',
          borderRadius: '12px', 
          marginBottom: '24px',
          textAlign: 'center'
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 16px',
            background: priority === 'basic' ? '#0369a1' : priority === 'intermediate' ? '#166534' : '#d97706',
            color: 'white',
            borderRadius: '20px',
            fontSize: '14px',
            fontWeight: '600',
            marginBottom: '12px'
          }}>
            {priority === 'basic' ? '🟦' : priority === 'intermediate' ? '🟩' : '🟨'} 
            Nivel {priority === 'basic' ? 'Básico' : priority === 'intermediate' ? 'Intermedio' : 'Avanzado'}
          </div>
          {explanation && (
            <p style={{ 
              margin: 0, 
              color: priority === 'basic' ? '#0c4a6e' : priority === 'intermediate' ? '#14532d' : '#92400e',
              fontSize: '16px',
              lineHeight: '1.6'
            }}>
              {explanation}
            </p>
          )}
        </div>
      )}
      
      {unsafe?.length>0 && (
        <div style={{ padding:16, background:'#fff1f0', border:'1px solid #ffa39e', borderRadius:8, marginBottom:20 }}>
          <strong style={{ color: '#cf1322' }}>⚠️ Consideraciones de seguridad:</strong>
          <div style={{ marginTop: 8 }}>
            {unsafe.map((warning: string, index: number) => (
              <div key={index} style={{ marginBottom: 4, paddingLeft: 16 }}>• {warning}</div>
            ))}
          </div>
        </div>
      )}

      <div style={{ display: 'grid', gap: 24 }}>
        {/* Stack Esencial */}
        <div style={{ border: '2px solid #52c41a', borderRadius: 12, padding: 20, background: '#f6ffed' }}>
          <h3 style={{ color: '#389e0d', margin: '0 0 16 0', display: 'flex', alignItems: 'center', gap: 8 }}>
            🟢 Stack Esencial
            <span style={{ fontSize: 14, fontWeight: 'normal', color: '#666' }}>
              (3-4 suplementos fundamentales)
            </span>
          </h3>
          <div style={{ display:'grid', gap:16 }}>
            {essentials.slice(0, 4).map((s:any, index: number)=>(
              <div key={s.id} style={{ 
                border:'1px solid #b7eb8f', 
                borderRadius:8, 
                padding:16, 
                background:'white',
                position: 'relative'
              }}>
                <div style={{ 
                  position: 'absolute', 
                  top: -8, 
                  left: 16, 
                  background: '#52c41a', 
                  color: 'white', 
                  padding: '2px 8px', 
                  borderRadius: 12, 
                  fontSize: 12 
                }}>
                  #{index + 1}
                </div>
                <div style={{ display:'flex', justifyContent:'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                  <strong style={{ fontSize: 16 }}>{s.name}</strong>
                  <span style={{ 
                    fontSize:12, 
                    padding:'4px 8px', 
                    borderRadius:4, 
                    background: s.evidence === 'A' ? '#52c41a' : s.evidence === 'B' ? '#faad14' : '#ff4d4f',
                    color: 'white',
                    fontWeight: 'bold'
                  }}>
                    Evidencia {s.evidence}
                  </span>
                </div>
                {s.mechanism && (
                  <div style={{ fontSize:14, color:'#444', marginBottom: 8, fontStyle: 'italic' }}>
                    {s.mechanism}
                  </div>
                )}
                {s.reason && (
                  <div style={{ 
                    fontSize:12, 
                    color:'#1890ff', 
                    marginBottom: 8, 
                    padding: '8px',
                    background: '#f0f9ff',
                    borderRadius: '6px',
                    border: '1px solid #bae7ff'
                  }}>
                    <strong>💡 Razón:</strong> {s.reason}
                  </div>
                )}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 8 }}>
                  <div><strong>Dosis:</strong> {s.dose}</div>
                  <div><strong>Timing:</strong> {s.timing}</div>
                </div>
                {s.interactions?.length > 0 && (
                  <div style={{ fontSize:12, color:'#666', padding: 8, background: '#f5f5f5', borderRadius: 4 }}>
                    <strong>Interacciones:</strong> {s.interactions.join(", ")}
                  </div>
                )}
                {s.adverse?.length > 0 && (
                  <div style={{ fontSize:12, color:'#d48806', marginTop: 8 }}>
                    <strong>Efectos adversos:</strong> {s.adverse.join(", ")}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Stack Avanzado */}
        {optional?.length > 0 && (
          <div style={{ border: '2px solid #1890ff', borderRadius: 12, padding: 20, background: '#f0f9ff' }}>
            <h3 style={{ color: '#096dd9', margin: '0 0 16 0', display: 'flex', alignItems: 'center', gap: 8 }}>
              🔵 Stack Avanzado
              <span style={{ fontSize: 14, fontWeight: 'normal', color: '#666' }}>
                (3-4 suplementos para optimización)
              </span>
            </h3>
            <div style={{ display:'grid', gap:16 }}>
              {optional.slice(0, 4).map((s:any, index: number)=>(
                <div key={s.id} style={{ 
                  border:'1px solid #91d5ff', 
                  borderRadius:8, 
                  padding:16, 
                  background:'white',
                  position: 'relative'
                }}>
                  <div style={{ 
                    position: 'absolute', 
                    top: -8, 
                    left: 16, 
                    background: '#1890ff', 
                    color: 'white', 
                    padding: '2px 8px', 
                    borderRadius: 12, 
                    fontSize: 12 
                  }}>
                    #{index + 1}
                  </div>
                  <div style={{ display:'flex', justifyContent:'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                    <strong style={{ fontSize: 16 }}>{s.name}</strong>
                    <span style={{ 
                      fontSize:12, 
                      padding:'4px 8px', 
                      borderRadius:4, 
                      background: s.evidence === 'A' ? '#52c41a' : s.evidence === 'B' ? '#faad14' : '#ff4d4f',
                      color: 'white',
                      fontWeight: 'bold'
                    }}>
                      Evidencia {s.evidence}
                    </span>
                  </div>
                  {s.mechanism && (
                    <div style={{ fontSize:14, color:'#444', marginBottom: 8, fontStyle: 'italic' }}>
                      {s.mechanism}
                    </div>
                  )}
                  {s.reason && (
                    <div style={{ 
                      fontSize:12, 
                      color:'#1890ff', 
                      marginBottom: 8, 
                      padding: '8px',
                      background: '#f0f9ff',
                      borderRadius: '6px',
                      border: '1px solid #bae7ff'
                    }}>
                      <strong>💡 Razón:</strong> {s.reason}
                    </div>
                  )}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 8 }}>
                    <div><strong>Dosis:</strong> {s.dose}</div>
                    <div><strong>Timing:</strong> {s.timing}</div>
                  </div>
                  {s.interactions?.length > 0 && (
                    <div style={{ fontSize:12, color:'#666', padding: 8, background: '#f5f5f5', borderRadius: 4 }}>
                      <strong>Interacciones:</strong> {s.interactions.join(", ")}
                    </div>
                  )}
                  {s.adverse?.length > 0 && (
                    <div style={{ fontSize:12, color:'#d48806', marginTop: 8 }}>
                      <strong>Efectos adversos:</strong> {s.adverse.join(", ")}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div style={{ marginTop: 32, textAlign: 'center' }}>
        <a href="/plan">
          <button style={{ 
            padding: '12px 24px', 
            fontSize: 16, 
            background: '#1890ff', 
            color: 'white', 
            border: 'none', 
            borderRadius: 8,
            cursor: 'pointer'
          }}>
            🗓️ Crear mi plan de 12 semanas
          </button>
        </a>
      </div>
    </section>
  );
}
