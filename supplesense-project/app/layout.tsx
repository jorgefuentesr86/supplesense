
export const metadata = { title: "SuppleSense", description: "Recomendador responsable de suplementos" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body style={{ 
        fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif', 
        margin: 0,
        backgroundColor: '#fafafa',
        color: '#333'
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          {/* Header mejorado */}
          <header style={{ 
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            padding: '20px 0',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            position: 'sticky',
            top: 0,
            zIndex: 100
          }}>
            <div style={{ 
              maxWidth: 1200, 
              margin: '0 auto', 
              padding: '0 24px',
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center' 
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ 
                  width: 40, 
                  height: 40, 
                  background: 'rgba(255, 255, 255, 0.2)', 
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 20,
                  fontWeight: 'bold'
                }}>
                  🧬
                </div>
                <h1 style={{ 
                  margin: 0, 
                  fontSize: '28px', 
                  fontWeight: '700',
                  background: 'linear-gradient(45deg, #fff, #e0e7ff)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  SuppleSense
                </h1>
              </div>
              <nav style={{ display: 'flex', gap: 20 }}>
                <a href="/" style={{ 
                  color: 'white', 
                  textDecoration: 'none', 
                  padding: '8px 16px',
                  borderRadius: '20px',
                  transition: 'all 0.3s ease',
                  fontWeight: '500'
                }}>🏠 Inicio</a>
                <a href="/onboarding" style={{ 
                  color: 'white', 
                  textDecoration: 'none', 
                  padding: '8px 16px',
                  borderRadius: '20px',
                  transition: 'all 0.3s ease',
                  fontWeight: '500'
                }}>📝 Onboarding</a>
                <a href="/results" style={{ 
                  color: 'white', 
                  textDecoration: 'none', 
                  padding: '8px 16px',
                  borderRadius: '20px',
                  transition: 'all 0.3s ease',
                  fontWeight: '500'
                }}>📊 Resultados</a>
                <a href="/plan" style={{ 
                  color: 'white', 
                  textDecoration: 'none', 
                  padding: '8px 16px',
                  borderRadius: '20px',
                  transition: 'all 0.3s ease',
                  fontWeight: '500'
                }}>🗓️ Plan</a>
                <a href="/checkin" style={{ 
                  color: 'white', 
                  textDecoration: 'none', 
                  padding: '8px 16px',
                  borderRadius: '20px',
                  transition: 'all 0.3s ease',
                  fontWeight: '500'
                }}>📈 Seguimiento</a>
                <a href="/blog" style={{ 
                  color: 'white', 
                  textDecoration: 'none', 
                  padding: '8px 16px',
                  borderRadius: '20px',
                  transition: 'all 0.3s ease',
                  fontWeight: '500'
                }}>📚 Blog</a>
              </nav>
            </div>
          </header>

          {/* Main content */}
          <main style={{ flex: 1, padding: '0 24px' }}>{children}</main>

          {/* Footer mejorado */}
          <footer style={{ 
            marginTop: 'auto',
            padding: '32px 24px',
            background: '#2d3748',
            color: '#e2e8f0',
            textAlign: 'center'
          }}>
            <div style={{ maxWidth: 1200, margin: '0 auto' }}>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                marginBottom: 16,
                flexWrap: 'wrap',
                gap: 16
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ fontSize: 20 }}>🧬</span>
                  <span style={{ fontWeight: '600' }}>SuppleSense</span>
                </div>
                <div style={{ fontSize: '14px', opacity: 0.8 }}>
                  Recomendador responsable de suplementos
                </div>
              </div>
              <div style={{ 
                borderTop: '1px solid #4a5568', 
                paddingTop: 16, 
                fontSize: '12px', 
                opacity: 0.7 
              }}>
                © {new Date().getFullYear()} SuppleSense — Información general, no reemplaza diagnóstico ni tratamiento médico.
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
