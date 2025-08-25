# [Tipo] Bug
# [Prioridad] P1
# [Título] Omega-3 no debería aparecer si marco anticoagulantes

## Contexto
- Pantalla: Resultados (/results)
- Perfil usado: Estrés / foco (cognitivo)
- Input: marqué "anticoagulants" en Onboarding

## Pasos para reproducir
1. Abrir Onboarding
2. Seleccionar perfil demo "Estrés / foco"
3. Marcar medicación "anticoagulants"
4. Completar flujo hasta Resultados

## Expected
- Omega-3 no aparece en "Esenciales"
- Aparece banner rojo con advertencia clara

## Actual
- Omega-3 sigue apareciendo como "Esencial"

## Criterios de aceptación
- [ ] Omega-3 se filtra de esenciales si hay anticoagulantes
- [ ] Se muestra banner "Anticoagulantes: cautela con Omega-3"
- [ ] Testear con perfil demo Estrés / foco

## Notas
- Esto es crítico (P1) porque afecta seguridad.
