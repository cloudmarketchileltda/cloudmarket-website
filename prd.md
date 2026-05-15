# Registro de Cambios — CloudMarket Website
 
## Ajuste Estético de Pantalla de Login — 2026-05-15
 
**Tipo**: UI | refactor
 
**Descripción**: 
- Se configuró el fondo general de la página con un gradiente azul profundo (`gradient-hero`).
- Se restauró el fondo oscuro/negro para el cuadro de login (`glass-card` con base negra y desenfoque) para mejorar el contraste y cumplir con la preferencia del usuario.
- Se eliminaron definitivamente las opciones de login social.
 
**Impacto**: 
- **Interfaz de Usuario**: Mayor contraste visual entre el contenedor de login y el fondo de la página, manteniendo una estética premium y profesional.
- **Consistencia**: Alineación con los colores de marca solicitados por el usuario.
 
**Decisiones tomadas**: Se utilizó `bg-black/40` con `backdrop-blur-xl` para el contenedor de login para lograr ese efecto "negro" solicitado sin perder la profundidad del fondo azul.

## Corrección de Error Crítico y Estabilización de Login — 2026-05-15
 
**Tipo**: fix | UI
 
**Descripción**: Se corrigió un error de sintaxis crítico que impedía la carga del sitio (pantalla en blanco) debido a la importación de iconos inexistentes en la versión instalada de `lucide-react`.
 
**Impacto**: 
- **Estabilización**: El sitio web ahora carga correctamente.
- **Login**: Se completó la integración visual de la pantalla de inicio de sesión (`/auth`) con iconos compatibles.
 
**Decisiones tomadas**:
- **Compatibilidad de Iconos**: Ante la ausencia de iconos de marca (GitHub/Google) en `lucide-react v1.8.0`, se optó por utilizar iconos genéricos compatibles (`GitBranch` para GitHub y `Globe` para Google) y SVGs personalizados en el Footer para asegurar que el build y el runtime sean exitosos sin depender de librerías externas adicionales por ahora.
- **Validación de Puerto**: Se confirmó que el servidor de desarrollo está operando correctamente en el puerto `8080` según las reglas del proyecto.

## Cambio de texto en botón del Navbar — 2026-05-14
 
**Tipo**: feature
 
**Descripción**: Se actualizó el texto del botón principal en el Navbar de "Solicitar asesoría" a "Acceso Privado".
 
**Impacto**: Afecta la interfaz de usuario en la navegación superior tanto en desktop como en móvil.
 
**Decisiones tomadas**: Se reemplazó el texto y se actualizó el enlace a una ruta de autenticación (`https://cloudmarket.cl/auth`) para reflejar el nuevo propósito del botón.
 
## Adición de Demo AgroQuote al menú — 2026-05-14
 
**Tipo**: feature
 
**Descripción**: Se agregó un nuevo ítem al submenú "Demo" llamado "Demo AgroQuote".
 
**Impacto**: Nuevo enlace externo disponible en el Navbar para desktop y móvil.
 
**Decisiones tomadas**: Se configuró el enlace a `https://agrodemo.cloudmarket.cl` para abrir en una pestaña nueva para mantener la sesión del usuario en el sitio principal.
 ## Nueva Pantalla de Login (Acceso Privado) — 2026-05-14
 
**Tipo**: feature | UI
 
**Descripción**: Se ha creado una pantalla de inicio de sesión profesional y premium para la sección "Acceso Privado".
 
**Impacto**: 
- Nueva página: `src/pages/Login.tsx`
- Ruta: `/auth`
- Actualización de `Navbar.tsx`: El botón ahora redirige internamente a la nueva pantalla de login.
 
**Decisiones tomadas**:
- **Estética Premium**: Uso de un fondo oscuro profundo (`#050810`) con efectos de blur y glassmorphism para transmitir seguridad y modernidad.
- **Navegación Interna**: Se migró el botón de un enlace externo a un componente `Link` de React Router para una experiencia de usuario fluida sin recargas de página.
- **Social Auth Mocks**: Se incluyeron botones de inicio de sesión con Google y GitHub como parte de la propuesta visual profesional.
 
 
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
