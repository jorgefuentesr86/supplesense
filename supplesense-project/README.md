
# 🧬 SuppleSense

**Sistema Inteligente de Recomendación de Suplementos Alimentarios**

## 🌟 Descripción

SuppleSense es una aplicación web que proporciona recomendaciones personalizadas de suplementos alimentarios basadas en evidencia científica, perfil del usuario y objetivos específicos. Diseñada específicamente para el contexto chileno, con consideraciones de regulación local y evidencia científica validada.

## ✨ Características Principales

### 🎯 **Recomendaciones Personalizadas**
- **Perfil Básico**: Usuarios sedentarios - suplementos fundamentales
- **Perfil Intermedio**: Usuarios recreacionales - enfoque equilibrado  
- **Perfil Avanzado**: Deportistas - stack completo optimizado

### 🔬 **Base Científica Sólida**
- **Evidencia A**: Suplementos con respaldo científico robusto
- **Evidencia B**: Suplementos con estudios prometedores
- **Evidencia C**: Suplementos experimentales (con cautela)

### 🛡️ **Seguridad y Precauciones**
- Contraindicaciones automáticas según perfil médico
- Interacciones con medicamentos
- Advertencias para condiciones especiales

### 📚 **Blog Educativo**
- Artículos sobre suplementación femenina
- Timing y optimización de suplementos
- Alimentación vs suplementos
- Evidencia científica explicada

## 🚀 Tecnologías

- **Frontend**: Next.js 14, React, TypeScript
- **UI**: Tailwind CSS, shadcn/ui
- **Estado**: Zustand
- **Validación**: Zod
- **Deploy**: Vercel

## 📱 Funcionalidades

### 🏠 **Página Principal**
- Descripción del sistema
- Navegación intuitiva
- Diseño moderno y responsivo

### 📝 **Onboarding Inteligente**
- Formulario multi-paso
- Preguntas contextuales
- Validación en tiempo real
- Perfiles personalizados

### 🎯 **Resultados Personalizados**
- Stack esencial (3-4 suplementos)
- Stack avanzado (2-4 suplementos)
- Explicaciones detalladas
- Nivel de prioridad

### 📅 **Plan de 12 Semanas**
- Calendario organizado por mes
- Seguimiento de progreso
- Suplementos incluidos
- Plan por defecto disponible

### 📊 **Seguimiento Semanal**
- Check-ins regulares
- Monitoreo de efectos
- Ajustes del plan
- Historial de progreso

### 📖 **Blog Educativo**
- 5 artículos especializados
- Contenido basado en evidencia
- Enfoque en salud femenina
- Optimización de suplementos

## 🎨 Características de UI/UX

- **Diseño Responsivo**: Funciona en todos los dispositivos
- **Colores Intuitivos**: Sistema de colores por nivel de prioridad
- **Iconografía Clara**: Emojis y símbolos para mejor comprensión
- **Navegación Fluida**: Transiciones suaves entre secciones
- **Accesibilidad**: Contraste adecuado y navegación por teclado

## 🔧 Instalación Local

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Pasos
```bash
# Clonar repositorio
git clone [URL_DEL_REPO]

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Abrir en navegador
http://localhost:3000
```

## 🌐 Deploy en Producción

### Vercel (Recomendado)
1. Crear cuenta en [vercel.com](https://vercel.com)
2. Conectar repositorio GitHub
3. Deploy automático en cada push

### Variables de Entorno
```env
NODE_ENV=production
```

## 📊 Estructura del Proyecto

```
SuppleSense/
├── app/                    # Next.js App Router
│   ├── api/               # API Routes
│   ├── blog/              # Página del blog
│   ├── onboarding/        # Formulario de onboarding
│   ├── results/           # Resultados de recomendaciones
│   ├── plan/              # Plan de 12 semanas
│   └── checkin/           # Seguimiento semanal
├── lib/                    # Lógica de negocio
│   └── rules.ts           # Motor de recomendaciones
├── data/                   # Datos estáticos
│   ├── supplements.ts     # Base de suplementos
│   └── demo_profiles.json # Perfiles de ejemplo
└── docs/                   # Documentación
```

## 🧪 Motor de Recomendaciones

### **Algoritmo Inteligente**
- Análisis de perfil del usuario
- Evaluación de objetivos
- Consideración de contraindicaciones
- Priorización por evidencia científica

### **Factores Considerados**
- Edad y sexo
- Nivel de actividad física
- Objetivos específicos
- Condiciones médicas
- Medicamentos actuales
- Exposición solar
- Consumo de pescado

## 🔒 Seguridad y Privacidad

- **Datos Locales**: Información del usuario se mantiene en sesión
- **Sin Base de Datos**: No se almacenan datos personales
- **Validación**: Todas las entradas son validadas
- **Disclaimers**: Advertencias médicas claras

## 📈 Roadmap

### **Fase 1** ✅
- [x] Sistema básico de recomendaciones
- [x] Onboarding personalizado
- [x] Blog educativo
- [x] Plan de 12 semanas

### **Fase 2** 🚧
- [ ] Base de datos de usuarios
- [ ] Historial de recomendaciones
- [ ] Notificaciones push
- [ ] App móvil

### **Fase 3** 📋
- [ ] IA para optimización continua
- [ ] Integración con wearables
- [ ] Comunidad de usuarios
- [ ] Análisis avanzado

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## ⚠️ Disclaimer Médico

**SuppleSense es una herramienta educativa y no reemplaza el consejo médico profesional. Siempre consulta con un profesional de la salud antes de comenzar cualquier protocolo de suplementación.**

## 📞 Contacto

- **Proyecto**: [GitHub Repository]
- **Issues**: [GitHub Issues]
- **Documentación**: [Docs]

---

**Desarrollado con ❤️ para la comunidad chilena de salud y bienestar**
