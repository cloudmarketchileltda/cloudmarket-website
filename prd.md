# Registro de Cambios — CloudMarket Website

## Sincronización de Dependencias para Producción — 2026-05-13

**Tipo**: fix | dependencia

**Descripción**: Se sincronizó el archivo `package-lock.json` con `package.json` para resolver errores de compilación en el entorno de producción (Dokploy/Nixpacks).

**Impacto**: 
- `package-lock.json`: Actualizado con las versiones correctas de las dependencias.

**Decisiones tomadas**:
- Se ejecutó `npm install` localmente para regenerar el lockfile y asegurar que todas las dependencias listadas en `package.json` estén correctamente registradas y enlazadas, evitando el error `EUSAGE` durante la fase `npm ci` del despliegue.


## Demo App Móvil Salud (3D Hero) — 2026-05-13

**Tipo**: Feature | UI | Experiencia 3D

**Descripción**: Implementación de una sección HERO ultra premium con un smartphone 3D interactivo para demostrar capacidades de desarrollo móvil.

**Impacto**:
- Nueva página: `src/pages/MobileAppDemo.tsx`
- Componentes: `src/components/features/MobileDemoHero.tsx`, `src/components/3d/PhoneModel.tsx`
- Enrutamiento: Actualización en `src/App.tsx`
- Menú: Actualización en `src/components/Navbar.tsx`

**Decisiones tomadas**:
- **Three.js + R3F**: Se optó por renderizado 3D en tiempo real para un impacto visual superior frente a videos o imágenes estáticas.
- **Interacción Directa**: El teléfono sigue el movimiento del mouse y permite interactuar con una interfaz simulada dentro de la pantalla 3D.
- **Estética Dark Premium**: Uso de materiales PBR, luces dinámicas y glassmorphism para alinearse con los estándares de diseño de Apple y Linear.


## Actualización de Menú de Demos — 2026-05-13

**Tipo**: Feature | UI

**Descripción**: Se actualizó el menú "Demo" para incluir acceso directo a los aplicativos de demostración de los clientes. Se renombró "Gestor ISO" y se agregó el acceso a "Demo Cafe Sereno".

**Impacto**:
- Componente `Navbar.tsx`

**Decisiones tomadas**:
- Se renombró "Gestor ISO" a "Demo Gestor ISO" para mantener consistencia con los demás ítems del menú.
- Se agregó "Demo Cafe Sereno" con enlace externo a `https://demo02.cloudmarket.cl/` configurado para abrir en una pestaña nueva (`target="_blank"`).

## Rediseño de Portafolio Web — 2026-05-12

**Tipo**: UI/UX Refactor

**Descripción**: Se ha rediseñado la presentación de los proyectos en la sección "Proyectos Web" para una estética más visual y moderna, eliminando ruidos visuales (botones) y priorizando la categorización por iconos.

**Impacto**: 
- Página `ProyectosWeb.tsx`
- Componente `WebCard.tsx`
- Data `mockWebPortfolios.ts`

**Decisiones tomadas**:
- Se reemplazó el H1 textual por una ilustración 3D premium para mejorar el "wow factor".
- Se eliminaron los botones de acción para simplificar la interfaz, asumiendo que el usuario prefiere una navegación más limpia en esta etapa.
- Se integraron iconos específicos por tipo de aplicativo (E-commerce, Dashboard, etc.) para una identificación rápida de las capacidades de desarrollo.
- Se movió el título del proyecto dentro del bloque de descripción para un flujo de lectura más natural.

## Estandarización Visual y Nueva Página de Automatización — 2026-05-12

**Tipo**: Feature | UI/UX | Arquitectura

**Descripción**: Se consolidó el lenguaje visual del sitio, se migró el formulario de contacto a una página independiente y se lanzó la nueva sección de automatización de procesos con IA y n8n.

**Impacto**: 
- Páginas: `Tecnologia.tsx`, `Contacto.tsx`, `Automatizacion.tsx`.
- Componentes: `Navbar.tsx`, `ContactForm.tsx`, `Footer.tsx`.
- Enrutamiento: Actualización en `App.tsx`.

**Decisiones tomadas**:
- **Layout Dark Hero + Light Body**: Se estableció este patrón como el estándar para todas las páginas internas para garantizar consistencia y elegibilidad.
- **Página de Contacto Dedicada**: Se eliminó el formulario del Index para reducir la carga cognitiva y mejorar el SEO, creando una página premium con tema oscuro.
- **IA y n8n**: Se creó la página de Automatización para posicionar el servicio de n8n y agentes de IA como un pilar fundamental del negocio.
- **Redes Sociales**: Se vincularon las cuentas oficiales de Facebook, Instagram y YouTube en el Footer.
- **Sección IA en Tecnología**: Se cambió el fondo a azul oscuro (`#0f172a`) para resaltar la importancia estratégica de la IA dentro de la propuesta tecnológica.

## Configuración de Agente y Habilidades (Skills) — 2026-05-13

**Tipo**: Arquitectura | Configuración

**Descripción**: Se ha configurado el agente Antigravity con reglas de desarrollo globales y un conjunto de habilidades (Skills) especializadas para automatizar flujos de trabajo críticos (PRD, Feature Generation, Scaffolding).

**Impacto**:
- Nuevo archivo: `.cursorrules` (Reglas maestras del proyecto).
- Directorio: `.agents/skills/` (Contiene las habilidades `prd-manager`, `feature-generator`, `web-app-scaffolder`, `mobile-app-scaffolder` y `skill-creator`).

**Decisiones tomadas**:
- **Estandarización**: Se adoptaron las 17 reglas globales de Antigravity para asegurar consistencia en código, arquitectura y seguridad.
- **Habilidades como "Cajas Negras"**: Se modularizaron las instrucciones complejas en archivos `SKILL.md` dentro de `.agents/skills/` para facilitar su descubrimiento y ejecución por parte del agente.
- **Puerto 8080**: Se reforzó la regla del puerto fijo para evitar conflictos en entornos de despliegue como Dockploy.
