import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const LegalLayout = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="min-h-screen bg-background">
    <div className="container mx-auto px-4 md:px-6 py-12 max-w-3xl">
      <Link to="/" className="inline-flex items-center gap-2 text-primary hover:opacity-80 transition-opacity mb-8 text-sm font-medium">
        <ArrowLeft className="w-4 h-4" /> Volver al inicio
      </Link>
      <h1 className="text-3xl font-bold text-foreground mb-8">{title}</h1>
      <div className="prose prose-sm max-w-none text-muted-foreground space-y-4 [&_h2]:text-foreground [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:mt-8 [&_h2]:mb-3">
        {children}
      </div>
    </div>
  </div>
);

export const Privacy = () => (
  <LegalLayout title="Política de Privacidad">
    <p>Última actualización: abril 2026</p>
    <h2>1. Información que recopilamos</h2>
    <p>Recopilamos información personal que nos proporcionas directamente, como nombre, correo electrónico, teléfono y mensaje a través de nuestro formulario de contacto.</p>
    <h2>2. Uso de la información</h2>
    <p>Utilizamos tu información para responder consultas, ofrecer nuestros servicios y mejorar la experiencia del usuario en nuestro sitio web.</p>
    <h2>3. Protección de datos</h2>
    <p>Implementamos medidas de seguridad técnicas y organizativas para proteger tus datos personales contra acceso no autorizado.</p>
    <h2>4. Cookies</h2>
    <p>Nuestro sitio puede utilizar cookies para mejorar la experiencia de navegación. Puedes configurar tu navegador para rechazarlas.</p>
    <h2>5. Contacto</h2>
    <p>Para consultas sobre privacidad, contáctanos en contacto@cloudmarket.cl.</p>
  </LegalLayout>
);

export const Terms = () => (
  <LegalLayout title="Términos y Condiciones">
    <p>Última actualización: abril 2026</p>
    <h2>1. Aceptación</h2>
    <p>Al acceder y utilizar este sitio web, aceptas estos términos y condiciones en su totalidad.</p>
    <h2>2. Servicios</h2>
    <p>CloudMarket Chile ofrece servicios de desarrollo web, automatización con IA, software en la nube y marketing digital. Los detalles específicos se acuerdan contractualmente.</p>
    <h2>3. Propiedad intelectual</h2>
    <p>Todo el contenido del sitio web es propiedad de CloudMarket Chile y está protegido por leyes de propiedad intelectual.</p>
    <h2>4. Limitación de responsabilidad</h2>
    <p>CloudMarket Chile no será responsable por daños indirectos derivados del uso de este sitio web.</p>
    <h2>5. Ley aplicable</h2>
    <p>Estos términos se rigen por las leyes de la República de Chile.</p>
  </LegalLayout>
);

export const LegalNotice = () => (
  <LegalLayout title="Aviso Legal">
    <p>Última actualización: abril 2026</p>
    <h2>Datos del titular</h2>
    <p>CloudMarket Chile — Santiago, Chile.</p>
    <p>Contacto: contacto@cloudmarket.cl</p>
    <h2>Objeto del sitio</h2>
    <p>Este sitio web tiene como finalidad informar sobre los servicios de CloudMarket Chile y facilitar el contacto con potenciales clientes.</p>
    <h2>Responsabilidad</h2>
    <p>CloudMarket Chile se reserva el derecho de modificar el contenido del sitio web sin previo aviso.</p>
  </LegalLayout>
);
