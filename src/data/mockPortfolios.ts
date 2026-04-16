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
    description: "Gestión de turnos y control de acceso del personal de manera remota con validación GPS.",
    images: ["https://placehold.co/400x800/212529/ffffff?text=Asistencia+1", "https://placehold.co/400x800/1a1d20/ffffff?text=Asistencia+2", "https://placehold.co/400x800/121416/ffffff?text=Asistencia+3"],
    videoUrl: "https://www.youtube.com/embed/gKZNuMlMvVE"
  },
  {
    id: "app-2",
    title: "App Gestión de Rondas",
    description: "Aplicación para el seguimiento y registro fotográfico de rutas de guardias y mantenimiento.",
    images: ["https://placehold.co/400x800/0d6efd/ffffff?text=Rondas+1", "https://placehold.co/400x800/0b5ed7/ffffff?text=Rondas+2", "https://placehold.co/400x800/0a58ca/ffffff?text=Rondas+3"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "app-3",
    title: "App Ventas en Terreno",
    description: "Levantamiento de pedidos in-situ, revisión de catálogos y gestión de clientes offline y online.",
    images: ["https://placehold.co/400x800/198754/ffffff?text=Ventas+1", "https://placehold.co/400x800/157347/ffffff?text=Ventas+2", "https://placehold.co/400x800/146c43/ffffff?text=Ventas+3"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "app-4",
    title: "App Logística Inteligente",
    description: "Trazabilidad de la última milla de entregas y confirmación digital de recibos.",
    images: ["https://placehold.co/400x800/dc3545/ffffff?text=Logística+1", "https://placehold.co/400x800/bb2d3b/ffffff?text=Logística+2", "https://placehold.co/400x800/b02a37/ffffff?text=Logística+3"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "app-5",
    title: "App Gestión de Clientes",
    description: "CRM móvil integral preparado para visualizar y analizar perfiles de clientes sobre la marcha.",
    images: ["https://placehold.co/400x800/6610f2/ffffff?text=Clientes+1", "https://placehold.co/400x800/520dc2/ffffff?text=Clientes+2", "https://placehold.co/400x800/4d0cb5/ffffff?text=Clientes+3"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "app-6",
    title: "App Inventario en Tiempo Real",
    description: "Módulo especializado para el rastreo exacto e ingreso de inventarios por códigos de barras o QR.",
    images: ["https://placehold.co/400x800/ffc107/000000?text=Inventario+1", "https://placehold.co/400x800/e0a800/000000?text=Inventario+2", "https://placehold.co/400x800/d39e00/000000?text=Inventario+3"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "app-7",
    title: "App Recursos Humanos",
    description: "Portal móvil de empleados para firmar liquidaciones, revisar turnos y realizar solicitudes.",
    images: ["https://placehold.co/400x800/fd7e14/ffffff?text=RRHH+1", "https://placehold.co/400x800/e86e0c/ffffff?text=RRHH+2", "https://placehold.co/400x800/d5640b/ffffff?text=RRHH+3"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "app-8",
    title: "App Auditorías Internas",
    description: "Checklists personalizables con validación en terreno, control central y panel gerencial.",
    images: ["https://placehold.co/400x800/20c997/ffffff?text=Auditoría+1", "https://placehold.co/400x800/1aa179/ffffff?text=Auditoría+2", "https://placehold.co/400x800/17926e/ffffff?text=Auditoría+3"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "app-9",
    title: "App Control de Calidad",
    description: "Estandarización y levantamiento de control de calidad e incidencias durante procesos productivos.",
    images: ["https://placehold.co/400x800/6f42c1/ffffff?text=Calidad+1", "https://placehold.co/400x800/59359a/ffffff?text=Calidad+2", "https://placehold.co/400x800/50308a/ffffff?text=Calidad+3"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "app-10",
    title: "App B2B eCommerce",
    description: "Centro comercial mayorista adaptado a dispositivos móviles para ventas entre empresas y comercios.",
    images: ["https://placehold.co/400x800/17a2b8/ffffff?text=eCommerce+1", "https://placehold.co/400x800/138496/ffffff?text=eCommerce+2", "https://placehold.co/400x800/117a8b/ffffff?text=eCommerce+3"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "app-11",
    title: "App Servicios de Mantenimiento",
    description: "Asignación, seguimiento y confirmación móvil para técnicos y trabajadores externos en campo.",
    images: ["https://placehold.co/400x800/e83e8c/ffffff?text=Servicios+1", "https://placehold.co/400x800/d63384/ffffff?text=Servicios+2", "https://placehold.co/400x800/c22d78/ffffff?text=Servicios+3"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "app-12",
    title: "App Dashboard Ejecutivo",
    description: "Aplicación directiva para visualización en tiempo real de los KPI financieros fundamentales.",
    images: ["https://placehold.co/400x800/343a40/ffffff?text=Dashboard+1", "https://placehold.co/400x800/2b3035/ffffff?text=Dashboard+2", "https://placehold.co/400x800/222529/ffffff?text=Dashboard+3"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  }
];
