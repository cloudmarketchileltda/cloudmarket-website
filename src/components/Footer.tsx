import { Link } from "react-router-dom";

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="gradient-hero border-t border-primary-foreground/10 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <a href="https://www.cloudmarket.cl">
                <img src="/images/logo final.png" alt="CloudMarket Chile Logo" className="h-16 w-auto" />
              </a>
            </div>
            <p className="text-light-gray/60 text-sm leading-relaxed mb-6">
              Transformación digital para PYMEs. Tecnología, IA y marketing para hacer crecer tu negocio.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-primary/20 text-light-gray hover:text-primary transition-colors" aria-label="Instagram">
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-primary/20 text-light-gray hover:text-primary transition-colors" aria-label="Facebook">
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-primary/20 text-light-gray hover:text-primary transition-colors" aria-label="TikTok">
                <TikTokIcon className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-primary/20 text-light-gray hover:text-primary transition-colors" aria-label="YouTube">
                <YoutubeIcon className="w-5 h-5" />
              </a>
            </div>
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
                { label: "Beneficios", href: "/#beneficios" },
                { label: "Proceso", href: "/#proceso" },
                { label: "Testimonios", href: "/#testimonios" },
                { label: "Contacto", href: "/#contacto" },
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
