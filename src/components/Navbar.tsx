import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Servicios", href: "/#servicios" },
  { label: "Beneficios", href: "/#beneficios" },
  {
    label: "Proyectos",
    href: "/#proceso",
    submenu: [
      { label: "Desarrollo Web", to: "/proyectos-web" },
      { label: "Apps Móviles", to: "/proyectos-moviles" },
      { label: "Automatización", to: "/automatizacion" },
    ],
  },
  { label: "Tecnología", to: "/tecnologia" },
  {
    label: "Demo",
    submenu: [
      { label: "Demo Salon Belleza", href: "https://demo01.cloudmarket.cl/", external: true },
      { label: "Demo Gestor ISO", href: "https://insight-iso.lovable.app/login", external: true },
      { label: "Demo Cafe Sereno", href: "https://demo02.cloudmarket.cl/", external: true },
      { label: "Demo AgroQuote", href: "https://agrodemo.cloudmarket.cl", external: true },
      { label: "Demo APP Movil Salud", to: "/demos/app-movil-salud" },
    ],
  },
  { label: "Contacto", to: "/contacto" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass-light"
    >
      <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src="/images/logo final.png" alt="CloudMarket Chile Logo" className="h-16 w-auto" />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            if ("submenu" in link && link.submenu) {
              return (
                <div
                  key={link.label}
                  className="relative group"
                  onMouseEnter={() => setOpenSubmenu(link.label)}
                  onMouseLeave={() => setOpenSubmenu(null)}
                >
                  <button className="flex items-center gap-1 text-sm font-medium text-dark-gray hover:text-primary transition-colors duration-200">
                    {link.label}
                    <ChevronDown className="w-3.5 h-3.5" />
                  </button>
                  <AnimatePresence>
                    {openSubmenu === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-2 w-48 rounded-xl bg-white shadow-lg border border-border py-2"
                      >
                        {link.submenu.map((sub) => (
                          sub.to ? (
                            <Link
                              key={sub.label}
                              to={sub.to}
                              className="block px-4 py-2 text-sm text-dark-gray hover:text-primary hover:bg-muted/50 transition-colors"
                              onClick={() => setIsOpen(false)}
                            >
                              {sub.label}
                            </Link>
                          ) : (
                            <a
                              key={sub.label}
                              href={sub.href}
                              target={sub.external ? "_blank" : undefined}
                              rel={sub.external ? "noopener noreferrer" : undefined}
                              className="block px-4 py-2 text-sm text-dark-gray hover:text-primary hover:bg-muted/50 transition-colors"
                              onClick={() => setIsOpen(false)}
                            >
                              {sub.label}
                            </a>
                          )
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }
            
            if ("to" in link && link.to) {
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm font-medium text-dark-gray hover:text-primary transition-colors duration-200"
                >
                  {link.label}
                </Link>
              );
            }

            return (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-dark-gray hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </a>
            );
          })}
          <Link
            to="/auth"
            className="gradient-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity duration-200"
          >
            Acceso Privado
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-deep-blue"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-light border-t border-light-gray overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => {
                if ("submenu" in link && link.submenu) {
                  return (
                    <div key={link.label}>
                      <span className="text-sm font-medium text-dark-gray py-2 block">
                        {link.label}
                      </span>
                      <div className="ml-4 flex flex-col gap-2 mt-1">
                        {link.submenu.map((sub) => (
                          sub.to ? (
                            <Link
                              key={sub.label}
                              to={sub.to}
                              onClick={() => setIsOpen(false)}
                              className="text-sm text-dark-gray/70 hover:text-primary transition-colors py-1"
                            >
                              {sub.label}
                            </Link>
                          ) : (
                            <a
                              key={sub.label}
                              href={sub.href}
                              target={sub.external ? "_blank" : undefined}
                              rel={sub.external ? "noopener noreferrer" : undefined}
                              onClick={() => setIsOpen(false)}
                              className="text-sm text-dark-gray/70 hover:text-primary transition-colors py-1"
                            >
                              {sub.label}
                            </a>
                          )
                        ))}
                      </div>
                    </div>
                  );
                }

                if ("to" in link && link.to) {
                  return (
                    <Link
                      key={link.to}
                      to={link.to}
                      onClick={() => setIsOpen(false)}
                      className="text-sm font-medium text-dark-gray hover:text-primary transition-colors py-2"
                    >
                      {link.label}
                    </Link>
                  );
                }

                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-sm font-medium text-dark-gray hover:text-primary transition-colors py-2"
                  >
                    {link.label}
                  </a>
                );
              })}
              <Link
                to="/auth"
                onClick={() => setIsOpen(false)}
                className="gradient-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold text-center"
              >
                Acceso Privado
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};


export default Navbar;
