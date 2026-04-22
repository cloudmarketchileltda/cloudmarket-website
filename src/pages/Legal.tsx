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
    
    <h2>1. Información general</h2>
    <p>En CloudMarket, nos comprometemos a proteger la privacidad y los datos personales de nuestros clientes, usuarios y visitantes. Esta política describe cómo recopilamos, utilizamos y protegemos su información.</p>

    <h2>2. Datos que recopilamos</h2>
    <p>Podemos recopilar la siguiente información:</p>
    <ul className="list-disc pl-6 space-y-2 mt-2">
      <li><strong>Datos de contacto:</strong> nombre, correo electrónico, teléfono, empresa.</li>
      <li><strong>Datos comerciales:</strong> requerimientos, cotizaciones, historial de servicios.</li>
      <li><strong>Datos técnicos:</strong> dirección IP, navegador, dispositivo, cookies.</li>
      <li><strong>Datos de uso:</strong> interacción con el sitio web, formularios o plataformas.</li>
    </ul>

    <h2>3. Finalidad del uso de datos</h2>
    <p>Utilizamos la información para:</p>
    <ul className="list-disc pl-6 space-y-2 mt-2">
      <li>Contactar y responder solicitudes.</li>
      <li>Prestar servicios (desarrollo web, automatización, IA, etc.).</li>
      <li>Gestionar proyectos y clientes.</li>
      <li>Mejorar nuestros servicios y experiencia de usuario.</li>
      <li>Enviar información comercial (solo con consentimiento).</li>
    </ul>

    <h2>4. Base legal</h2>
    <p>El tratamiento de datos se realiza en base a:</p>
    <ul className="list-disc pl-6 space-y-2 mt-2">
      <li>Consentimiento del usuario.</li>
      <li>Ejecución de contratos o servicios.</li>
      <li>Cumplimiento de obligaciones legales.</li>
    </ul>

    <h2>5. Compartición de datos</h2>
    <p>No vendemos datos personales. Podemos compartir información solo cuando sea necesario con:</p>
    <ul className="list-disc pl-6 space-y-2 mt-2">
      <li>Proveedores tecnológicos (hosting, CRM, herramientas de automatización).</li>
      <li>Plataformas utilizadas en los servicios (ej: APIs, integraciones).</li>
      <li>Autoridades legales cuando corresponda.</li>
    </ul>

    <h2>6. Seguridad de la información</h2>
    <p>Implementamos medidas técnicas y organizativas para proteger los datos:</p>
    <ul className="list-disc pl-6 space-y-2 mt-2">
      <li>Acceso restringido.</li>
      <li>Uso de servidores seguros.</li>
      <li>Protocolos de cifrado cuando corresponde.</li>
    </ul>

    <h2>7. Uso de cookies</h2>
    <p>Utilizamos cookies para:</p>
    <ul className="list-disc pl-6 space-y-2 mt-2">
      <li>Analizar tráfico web.</li>
      <li>Mejorar la experiencia del usuario.</li>
      <li>Personalizar contenido.</li>
    </ul>
    <p className="mt-2">El usuario puede desactivarlas desde su navegador.</p>

    <h2>8. Derechos del usuario</h2>
    <p>El usuario puede:</p>
    <ul className="list-disc pl-6 space-y-2 mt-2">
      <li>Solicitar acceso a sus datos.</li>
      <li>Rectificar información incorrecta.</li>
      <li>Solicitar eliminación de datos.</li>
      <li>Oponerse al uso de su información.</li>
    </ul>
    <p className="mt-2">Para ejercer estos derechos: <a href="mailto:cloudmarketchile@gmail.com" className="text-primary hover:underline">cloudmarketchile@gmail.com</a></p>

    <h2>9. Retención de datos</h2>
    <p>Los datos se conservarán solo el tiempo necesario para cumplir con las finalidades indicadas o requerimientos legales.</p>

    <h2>10. Cambios en la política</h2>
    <p>CloudMarket se reserva el derecho de modificar esta política. Los cambios serán publicados en el sitio web.</p>

    <h2>11. Contacto</h2>
    <p>Para consultas sobre privacidad:</p>
    <ul className="list-disc pl-6 space-y-2 mt-2">
      <li><strong>Email:</strong> <a href="mailto:cloudmarketchile@gmail.com" className="text-primary hover:underline">cloudmarketchile@gmail.com</a></li>
      <li><strong>Dirección:</strong> Pje. A 1083, Cunco, Araucanía</li>
    </ul>
  </LegalLayout>
);

export const Terms = () => (
  <LegalLayout title="Términos y Condiciones">
    <p>Última actualización: abril 2026</p>
    
    <h2>1. Identificación</h2>
    <p>El presente documento regula el uso del sitio web y los servicios ofrecidos por CloudMarket, marca operada por Cloudmarket.cl, con domicilio en La Concepción 553, Local 3, Cunco, La Araucanía, Chile.</p>
    <p className="mt-2">Al acceder al sitio web o contratar servicios, el usuario acepta estos términos y condiciones.</p>

    <h2>2. Servicios ofrecidos</h2>
    <p>CloudMarket ofrece, entre otros:</p>
    <ul className="list-disc pl-6 space-y-2 mt-2">
      <li>Desarrollo de sitios web y aplicaciones</li>
      <li>Automatización de procesos</li>
      <li>Implementación de chatbots</li>
      <li>Soluciones de inteligencia artificial</li>
      <li>Integraciones con plataformas externas (Meta, Google, APIs, CRM, etc.)</li>
      <li>Servicios digitales personalizados</li>
    </ul>
    <p className="mt-2">Los servicios pueden variar según cada proyecto y propuesta comercial.</p>

    <h2>3. Condiciones de contratación</h2>
    <h3 className="text-lg font-semibold mt-4 mb-2 text-foreground">3.1 Cotización y aceptación</h3>
    <p>Todo servicio será definido mediante una cotización o propuesta formal, la cual debe ser aceptada por el cliente.</p>

    <h3 className="text-lg font-semibold mt-4 mb-2 text-foreground">3.2 Pagos</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>Los servicios pueden requerir pago anticipado total o parcial.</li>
      <li>No se iniciarán trabajos sin confirmación de pago.</li>
      <li>Los valores no son reembolsables una vez iniciado el proyecto, salvo acuerdo contrario.</li>
    </ul>

    <h3 className="text-lg font-semibold mt-4 mb-2 text-foreground">3.3 Plazos</h3>
    <p>Los plazos de entrega:</p>
    <ul className="list-disc pl-6 space-y-2 mt-2">
      <li>Son estimados.</li>
      <li>Dependen de la colaboración del cliente (entrega de información, feedback, etc.).</li>
    </ul>

    <h2>4. Responsabilidades del cliente</h2>
    <p>El cliente se compromete a:</p>
    <ul className="list-disc pl-6 space-y-2 mt-2">
      <li>Entregar información veraz y completa.</li>
      <li>Proporcionar materiales necesarios (textos, imágenes, accesos, etc.).</li>
      <li>Respetar los plazos de revisión y aprobación.</li>
      <li>Usar los sistemas desarrollados conforme a la ley.</li>
    </ul>
    <p className="mt-2">CloudMarket no se hace responsable por retrasos derivados de incumplimientos del cliente.</p>

    <h2>5. Uso de tecnologías de terceros</h2>
    <p>Los servicios pueden incluir el uso de plataformas externas como:</p>
    <ul className="list-disc pl-6 space-y-2 mt-2">
      <li>Meta (Facebook, Instagram, WhatsApp)</li>
      <li>Google</li>
      <li>OpenAI uotras herramientas de inteligencia artificial</li>
      <li>Servicios de hosting o servidores</li>
    </ul>
    <p className="mt-2">CloudMarket no es responsable por:</p>
    <ul className="list-disc pl-6 space-y-2 mt-2">
      <li>Cambios en políticas o funcionamiento de dichas plataformas.</li>
      <li>Caídas, bloqueos o limitaciones externas.</li>
    </ul>

    <h2>6. Propiedad intelectual</h2>
    <h3 className="text-lg font-semibold mt-4 mb-2 text-foreground">6.1 Desarrollo</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>El cliente obtiene derechos de uso sobre el producto final.</li>
      <li>CloudMarket puede reutilizar componentes, código base o frameworks propios.</li>
    </ul>

    <h3 className="text-lg font-semibold mt-4 mb-2 text-foreground">6.2 Material del cliente</h3>
    <p>El cliente declara tener derechos sobre el contenido entregado (imágenes, textos, marcas, etc.).</p>

    <h2>7. Limitación de responsabilidad</h2>
    <p>CloudMarket no garantiza resultados específicos (ventas, conversiones, etc.), ya que estos dependen de múltiples factores externos.</p>
    <p className="mt-2">No nos hacemos responsables por:</p>
    <ul className="list-disc pl-6 space-y-2 mt-2">
      <li>Pérdida de datos por causas externas.</li>
      <li>Uso indebido de sistemas por parte del cliente.</li>
      <li>Fallas de terceros (hosting, APIs, plataformas externas).</li>
    </ul>

    <h2>8. Soporte y mantenimiento</h2>
    <p>Salvo que se indique lo contrario:</p>
    <ul className="list-disc pl-6 space-y-2 mt-2">
      <li>El soporte no es permanente ni ilimitado.</li>
      <li>Puede requerir contratación adicional.</li>
      <li>Incluye solo lo definido en la propuesta comercial.</li>
    </ul>

    <h2>9. Cancelaciones y término del servicio</h2>
    <p>CloudMarket podrá suspender o finalizar servicios si:</p>
    <ul className="list-disc pl-6 space-y-2 mt-2">
      <li>Existe incumplimiento de pagos.</li>
      <li>Se detecta uso indebido o ilegal.</li>
      <li>El cliente incumple los términos acordados.</li>
    </ul>

    <h2>10. Protección de datos</h2>
    <p>El tratamiento de datos personales se rige por nuestra Política de Privacidad.</p>
    <p className="mt-2">El cliente es responsable de los datos que recopile a través de los sistemas desarrollados.</p>

    <h2>11. Modificaciones</h2>
    <p>CloudMarket puede modificar estos términos en cualquier momento. El uso continuo del sitio o servicios implica aceptación de dichos cambios.</p>

    <h2>12. Legislación aplicable</h2>
    <p>Estos términos se rigen por las leyes de la República de Chile.</p>
    <p className="mt-2">Cualquier conflicto será sometido a los tribunales competentes.</p>
  </LegalLayout>
);

export const LegalNotice = () => (
  <LegalLayout title="Aviso Legal">
    <p>Última actualización: abril 2026</p>
    
    <h2>1. Información general</h2>
    <p>El presente Aviso Legal regula el acceso, navegación y uso del sitio web www.cloudmarket.cl.</p>
    <p className="mt-2">CloudMarket es una marca operada por EverCloud Services Ltda, con domicilio en La Concepción 553, Local 3, Cunco, La Araucanía, Chile.</p>
    <p className="mt-2">El acceso al sitio web implica la aceptación de las condiciones aquí establecidas.</p>

    <h2>2. Objeto del sitio web</h2>
    <p>El sitio web tiene como finalidad:</p>
    <ul className="list-disc pl-6 space-y-2 mt-2">
      <li>Informar sobre los servicios ofrecidos por CloudMarket</li>
      <li>Facilitar el contacto con potenciales clientes</li>
      <li>Presentar soluciones tecnológicas, desarrollo digital, automatización e inteligencia artificial</li>
    </ul>
    <p className="mt-2">El contenido es meramente informativo y puede ser modificado sin previo aviso.</p>

    <h2>3. Condiciones de uso</h2>
    <p>El usuario se compromete a:</p>
    <ul className="list-disc pl-6 space-y-2 mt-2">
      <li>Utilizar el sitio de forma lícita</li>
      <li>No realizar actividades que puedan dañar, sobrecargar o afectar el funcionamiento del sitio</li>
      <li>No intentar acceder a sistemas restringidos sin autorización</li>
    </ul>
    <p className="mt-2">CloudMarket se reserva el derecho de restringir el acceso en caso de uso indebido.</p>

    <h2>4. Propiedad intelectual</h2>
    <p>Todos los contenidos del sitio web, incluyendo:</p>
    <ul className="list-disc pl-6 space-y-2 mt-2">
      <li>Textos</li>
      <li>Diseño</li>
      <li>Código</li>
      <li>Logotipos</li>
      <li>Imágenes</li>
      <li>Estructura del sitio</li>
    </ul>
    <p className="mt-2">son propiedad de CloudMarket o cuentan con licencia para su uso.</p>
    <p className="mt-2">Queda prohibida su reproducción, distribución o uso sin autorización previa.</p>

    <h2>5. Responsabilidad sobre el contenido</h2>
    <p>CloudMarket no garantiza que:</p>
    <ul className="list-disc pl-6 space-y-2 mt-2">
      <li>El sitio esté siempre disponible o libre de errores</li>
      <li>La información esté completamente actualizada en todo momento</li>
    </ul>
    <p className="mt-2">No nos responsabilizamos por:</p>
    <ul className="list-disc pl-6 space-y-2 mt-2">
      <li>Daños derivados del uso del sitio</li>
      <li>Decisiones tomadas en base a la información publicada</li>
    </ul>

    <h2>6. Enlaces externos</h2>
    <p>El sitio puede contener enlaces a terceros.</p>
    <p className="mt-2">CloudMarket no controla ni se responsabiliza por:</p>
    <ul className="list-disc pl-6 space-y-2 mt-2">
      <li>El contenido de sitios externos</li>
      <li>Las políticas de privacidad de terceros</li>
    </ul>

    <h2>7. Uso de tecnologías y servicios externos</h2>
    <p>El sitio y los servicios de CloudMarket pueden integrar herramientas de terceros, incluyendo:</p>
    <ul className="list-disc pl-6 space-y-2 mt-2">
      <li>Plataformas de analítica</li>
      <li>Sistemas de automatización</li>
      <li>APIs externas</li>
      <li>Servicios de inteligencia artificial</li>
    </ul>
    <p className="mt-2">El funcionamiento de estas herramientas depende de proveedores externos, por lo que CloudMarket no garantiza su disponibilidad permanente.</p>

    <h2>8. Ciberseguridad</h2>
    <p>CloudMarket adopta medidas razonables para proteger el sitio web, sin embargo:</p>
    <ul className="list-disc pl-6 space-y-2 mt-2">
      <li>No se puede garantizar la ausencia total de amenazas digitales</li>
      <li>El usuario es responsable de contar con medidas de seguridad adecuadas en su dispositivo</li>
    </ul>

    <h2>9. Comunicaciones electrónicas</h2>
    <p>Al contactar a CloudMarket mediante formularios, correo electrónico o canales digitales:</p>
    <ul className="list-disc pl-6 space-y-2 mt-2">
      <li>El usuario acepta recibir respuestas por medios electrónicos</li>
      <li>No se garantiza disponibilidad inmediata</li>
    </ul>

    <h2>10. Limitación de responsabilidad tecnológica</h2>
    <p>Dado el tipo de servicios ofrecidos (automatización, IA, integraciones):</p>
    <p className="mt-2">CloudMarket no se hace responsable por:</p>
    <ul className="list-disc pl-6 space-y-2 mt-2">
      <li>Fallas en plataformas externas (Meta, Google, servidores, APIs)</li>
      <li>Cambios en políticas de terceros</li>
      <li>Interrupciones de servicios fuera de nuestro control</li>
    </ul>

    <h2>11. Uso de sistemas automatizados e inteligencia artificial</h2>
    <p>CloudMarket desarrolla e implementa soluciones que pueden incluir:</p>
    <ul className="list-disc pl-6 space-y-2 mt-2">
      <li>Chatbots automatizados</li>
      <li>Sistemas de respuesta basados en inteligencia artificial</li>
      <li>Automatización de procesos comerciales</li>
    </ul>
    <p className="mt-2">El usuario y/o cliente reconoce y acepta que:</p>
    <ul className="list-disc pl-6 space-y-2 mt-2">
      <li>Las respuestas generadas por sistemas automatizados o IA pueden no ser siempre exactas, completas o actualizadas</li>
      <li>Estos sistemas funcionan como herramientas de apoyo y no reemplazan el juicio humano</li>
      <li>CloudMarket no garantiza resultados específicos derivados del uso de estas tecnologías</li>
    </ul>

    <h2>12. Uso bajo responsabilidad del cliente</h2>
    <p>El uso de las soluciones desarrolladas por CloudMarket es de exclusiva responsabilidad del cliente.</p>
    <p className="mt-2">El cliente es responsable de:</p>
    <ul className="list-disc pl-6 space-y-2 mt-2">
      <li>Validar la información entregada por sistemas automatizados</li>
      <li>Supervisar el funcionamiento de bots y flujos automatizados</li>
      <li>Cumplir con la normativa legal aplicable en el uso de datos y comunicación con usuarios</li>
    </ul>
    <p className="mt-2">CloudMarket no será responsable por daños derivados de decisiones tomadas en base a sistemas automatizados implementados.</p>

    <h2>13. Exclusión de asesoría profesional</h2>
    <p>Los contenidos y sistemas desarrollados por CloudMarket:</p>
    <ul className="list-disc pl-6 space-y-2 mt-2">
      <li>No constituyen asesoría legal, financiera, médica ni de ningún otro tipo profesional</li>
      <li>No deben ser utilizados como base única para la toma de decisiones críticas</li>
    </ul>
    <p className="mt-2">Se recomienda siempre validar la información con un profesional competente.</p>

    <h2>14. Legislación aplicable</h2>
    <p>Este Aviso Legal se rige por la legislación de la República de Chile.</p>
    <p className="mt-2">Cualquier controversia será sometida a los tribunales competentes.</p>

    <h2>15. Modificaciones</h2>
    <p>CloudMarket se reserva el derecho de modificar este Aviso Legal en cualquier momento.</p>
    <p className="mt-2">Las modificaciones entrarán en vigencia desde su publicación en el sitio web.</p>
  </LegalLayout>
);
