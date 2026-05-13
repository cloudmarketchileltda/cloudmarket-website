export interface WebProject {
  id: string;
  title: string;
  type: string;
  description: string;
  image: string;
  tags: string[];
  videoUrl: string;
}

export const mockWebProjects: WebProject[] = [
  {
    id: "web-1",
    title: "TiendaFácil",
    type: "E-commerce",
    description: "Plataforma de comercio electrónico completa con carrito de compras, pasarela de pago y panel de administración.",
    image: "/images/projects/web-aura.png",
    tags: ["React", "Node.js", "Stripe", "Tailwind"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "web-2",
    title: "Logístico Pro",
    type: "Dashboard",
    description: "Panel de control en tiempo real para seguimiento de flota, rutas y entregas con mapas interactivos.",
    image: "/images/projects/web-logistic.png",
    tags: ["Next.js", "Mapbox", "WebSocket", "PostgreSQL"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "web-3",
    title: "Academia Digital",
    type: "Plataforma Educativa",
    description: "Sistema de gestión de aprendizaje con cursos, evaluaciones, foros y certificaciones digitales.",
    image: "/images/projects/web-edu.png",
    tags: ["Vue.js", "Django", "Docker", "Redis"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "web-4",
    title: "ClientFlow",
    type: "Sistema CRM",
    description: "Gestor de relaciones con clientes con pipeline de ventas, automatización de correos y reportes.",
    image: "/images/projects/web-crm.png",
    tags: ["Angular", "Firebase", "TypeScript", "Chart.js"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "web-5",
    title: "CorpSite",
    type: "Landing Page Corporativa",
    description: "Sitio web corporativo moderno con animaciones, formulario de contacto y blog integrado.",
    image: "/images/projects/web-landing.png",
    tags: ["Astro", "Tailwind", "MDX", "Vercel"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "web-6",
    title: "BookingHub",
    type: "Portal de Reservas",
    description: "Sistema de reservas online con calendario interactivo, notificaciones y gestión de disponibilidad.",
    image: "/images/movil.jpeg",
    tags: ["React", "Express", "MongoDB", "Socket.io"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "web-7",
    title: "B2B Connect",
    type: "Marketplace B2B",
    description: "Plataforma mayorista para transacciones entre empresas con catálogo dinámico y cotizaciones.",
    image: "/images/auto.jpeg",
    tags: ["Next.js", "GraphQL", "AWS", "Stripe"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "web-8",
    title: "StockMaster",
    type: "Sistema de Inventarios",
    description: "Gestión de inventarios con códigos de barras, alertas de stock y reportes en tiempo real.",
    image: "/images/imagenfondo.jpeg",
    tags: ["React", "Node.js", "SQL Server", "PWA"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
];
