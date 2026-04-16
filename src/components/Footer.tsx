import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="gradient-hero border-t border-primary-foreground/10 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src="/images/logo final.png" alt="CloudMarket Chile Logo" className="h-10 w-auto" />
            </div>
            <p className="text-light-gray/60 text-sm leading-relaxed">
              Transformación digital para PYMEs. Tecnología, IA y marketing para hacer crecer tu negocio.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-primary-foreground mb-4 text-sm">Servicios</h4>
            <ul className="space-y-2">
              {[
                { label: "Desarrollo web", to: "/servicios/desarrollo-web" },
                { label: "Automatización IA", to: "/servicios/automatizacion-ia" },
                { label: "Software cloud", to: "/servicios/software-cloud" },
                { label: "Marketing digital", to: "/servicios/marketing-digital" }
              ].map((s) => (
                <li key={s.label}>
                  {s.to.startsWith("/#") ? (
                    <a href={s.to} className="text-light-gray/60 text-sm hover:text-primary transition-colors">{s.label}</a>
                  ) : (
                    <Link to={s.to} className="text-light-gray/60 text-sm hover:text-primary transition-colors">{s.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-primary-foreground mb-4 text-sm">Empresa</h4>
            <ul className="space-y-2">
              {[
                { label: "Beneficios", href: "#beneficios" },
                { label: "Proceso", href: "#proceso" },
                { label: "Testimonios", href: "#testimonios" },
                { label: "Contacto", href: "#contacto" },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-light-gray/60 text-sm hover:text-primary transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-primary-foreground mb-4 text-sm">Legal</h4>
            <ul className="space-y-2">
              {[
                { label: "Política de privacidad", to: "/privacidad" },
                { label: "Términos y condiciones", to: "/terminos" },
                { label: "Aviso legal", to: "/aviso-legal" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-light-gray/60 text-sm hover:text-primary transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 text-center">
          <p className="text-light-gray/40 text-sm">
            © {new Date().getFullYear()} CloudMarket Chile. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
