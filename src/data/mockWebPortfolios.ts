export interface WebProject {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  videoUrl: string;
}

export const mockWebProjects: WebProject[] = [
  {
    id: "web-1",
    title: "E-commerce TiendaFácil",
    description: "Plataforma de comercio electrónico completa con carrito de compras, pasarela de pago y panel de administración.",
    image: "https://placehold.co/800x600/0d6efd/ffffff?text=E-commerce",
    tags: ["React", "Node.js", "Stripe", "Tailwind"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "web-2",
    title: "Dashboard Logístico",
    description: "Panel de control en tiempo real para seguimiento de flota, rutas y entregas con mapas interactivos.",
    image: "https://placehold.co/800x600/198754/ffffff?text=Dashboard",
    tags: ["Next.js", "Mapbox", "WebSocket", "PostgreSQL"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "web-3",
    title: "Plataforma Educativa",
    description: "Sistema de gestión de aprendizaje con cursos, evaluaciones, foros y certificaciones digitales.",
    image: "https://placehold.co/800x600/6610f2/ffffff?text=Educativa",
    tags: ["Vue.js", "Django", "Docker", "Redis"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "web-4",
    title: "Sistema CRM",
    description: "Gestor de relaciones con clientes con pipeline de ventas, automatización de correos y reportes.",
    image: "https://placehold.co/800x600/dc3545/ffffff?text=CRM",
    tags: ["Angular", "Firebase", "TypeScript", "Chart.js"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "web-5",
    title: "Landing Page Corporativa",
    description: "Sitio web corporativo moderno con animaciones, formulario de contacto y blog integrado.",
    image: "https://placehold.co/800x600/ffc107/000000?text=Corporativa",
    tags: ["Astro", "Tailwind", "MDX", "Vercel"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "web-6",
    title: "Portal de Reservas",
    description: "Sistema de reservas online con calendario interactivo, notificaciones y gestión de disponibilidad.",
    image: "https://placehold.co/800x600/20c997/ffffff?text=Reservas",
    tags: ["React", "Express", "MongoDB", "Socket.io"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "web-7",
    title: "Marketplace B2B",
    description: "Plataforma mayorista para transacciones entre empresas con catálogo dinámico y cotizaciones.",
    image: "https://placehold.co/800x600/fd7e14/ffffff?text=Marketplace",
    tags: ["Next.js", "GraphQL", "AWS", "Stripe"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "web-8",
    title: "Sistema de Inventarios",
    description: "Gestión de inventarios con códigos de barras, alertas de stock y reportes en tiempo real.",
    image: "https://placehold.co/800x600/6f42c1/ffffff?text=Inventarios",
    tags: ["React", "Node.js", "SQL Server", "PWA"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
];
