
# Guía paso a paso (para empezar en Cursor sin saber nada)

## 1) Descarga y abre el proyecto
1. Descarga el ZIP y descomprímelo.
2. Abre **Cursor** (app de escritorio).
3. Ve a `File → Open...` y selecciona la carpeta `SuppleSense`.

## 2) Instala y arranca
En la terminal integrada de Cursor (View → Terminal):
```bash
npm i
npm run dev
```
Abre `http://localhost:3000` en el navegador.

## 3) Recorre el flujo
- Landing → **Comenzar** → **Onboarding** (o usa “Rellenar Demo” o “Cargar perfil demo”).
- **Resultados** → “Esenciales” y “Opcionales”.
- **Plan** → calendario 12 semanas.
- **Seguimiento** → check-in.

## 4) Feedback en el repo
- Crea `feedback/lote-1.md` usando plantillas en `docs/templates/`.
- Esquema: Expected vs Actual + Prioridad + Criterios de aceptación.

## 5) Pide cambios a Cursor (vibe coding)
- Usa prompts en `/prompts`:
  - `PROMPT_MAESTRO_TAILWIND.md` (Tailwind + shadcn/ui).
  - `PROMPT_PACKS_CURSOR.md` (Zod, tooltips, etc.).

## 6) Checklist de humo
- [ ] Onboarding → Resultados → Plan → Seguimiento sin errores.
- [ ] Máx 5 esenciales y 3 opcionales.
- [ ] Banner de seguridad si hay flags o meds sensibles.
