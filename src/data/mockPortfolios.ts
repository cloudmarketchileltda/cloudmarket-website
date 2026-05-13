export interface AppProject {
  id: string;
  title: string;
  description: string;
  images: string[];
  videoUrl: string; // URL en formato embebido o link normal para iframe
}

export const mockAppProjects: AppProject[] = [
  {
    id: "app-1",
    title: "App Control de Asistencia",
    description: "Gestión de turnos y control de acceso con validación GPS y biometría móvil.",
    images: ["/carusel01/Inicio.png", "/carusel01/Asistecia.png"],
    videoUrl: "https://www.youtube.com/embed/gKZNuMlMvVE"
  },
  {
    id: "app-2",
    title: "App Gestión de Rondas",
    description: "Seguimiento y registro fotográfico de rutas para guardias y mantenimiento preventivo.",
    images: ["/carusel01/Rondas.png", "/carusel01/Mapa.png"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "app-3",
    title: "App Logística Inteligente",
    description: "Trazabilidad de la última milla y confirmación digital de recibos en tiempo real.",
    images: ["/carusel01/Mapa.png", "/carusel01/Alertas.png"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "app-4",
    title: "App Dashboard Ejecutivo",
    description: "Visualización en tiempo real de los KPI financieros y operativos fundamentales.",
    images: ["/carusel01/Panel.png", "/carusel01/Inicio.png"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "app-5",
    title: "App Gestión de Instalaciones",
    description: "Control de activos y mantenimiento de infraestructura con reportes fotográficos.",
    images: ["/carusel01/Instalaciones.png", "/carusel01/Rondas.png"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "app-6",
    title: "App Gestión de Clientes",
    description: "CRM móvil integral para visualizar perfiles y gestionar interacciones comerciales.",
    images: ["/carusel01/Perfl.png", "/carusel01/Panel.png"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "app-7",
    title: "App Control de Asistencia Pro",
    description: "Módulo avanzado para el registro exacto de ingresos y salidas del personal.",
    images: ["/carusel01/Asistecia.png", "/carusel01/Alertas.png"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "app-8",
    title: "App Centro de Notificaciones",
    description: "Gestión centralizada de alertas e incidencias críticas para equipos operativos.",
    images: ["/carusel01/Alertas.png", "/carusel01/Mapa.png"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  }
];


