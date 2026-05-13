import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({ title: "Por favor completa los campos obligatorios", variant: "destructive" });
      return;
    }
    setLoading(true);
    setTimeout(() => {
      toast({ title: "¡Mensaje enviado!", description: "Nos pondremos en contacto contigo pronto." });
      setFormData({ name: "", email: "", phone: "", message: "" });
      setLoading(false);
    }, 1000);
  };

  return (
    <section id="contacto" className="py-24 bg-[#0f172a] relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full -mr-64 -mt-64 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-light-blue uppercase tracking-wider">Contacto</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">¿Listo para empezar?</h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Cuéntanos sobre tu proyecto y te contactaremos en menos de 24 horas.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            {[
              { icon: Mail, label: "Email", value: "contacto@cloudmarket.cl" },
              { icon: Phone, label: "Teléfono", value: "+56 9 8155 6804" },
              { icon: MapPin, label: "Ubicación", value: "Santiago, Chile" },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 group-hover:border-primary/30 transition-all">
                  <item.icon className="w-6 h-6 text-light-blue" />
                </div>
                <div>
                  <div className="text-sm text-slate-400">{item.label}</div>
                  <div className="font-semibold text-white text-lg">{item.value}</div>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 space-y-6 bg-white/5 p-8 md:p-10 rounded-[2.5rem] border border-white/10 backdrop-blur-sm"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase ml-2">Nombre Completo</label>
                <input
                  type="text"
                  placeholder="Ej: Juan Pérez"
                  maxLength={100}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-5 py-4 rounded-2xl border border-white/10 bg-white/5 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase ml-2">Email Corporativo</label>
                <input
                  type="email"
                  placeholder="Ej: juan@empresa.com"
                  maxLength={255}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-5 py-4 rounded-2xl border border-white/10 bg-white/5 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase ml-2">Teléfono de Contacto</label>
              <input
                type="tel"
                placeholder="Ej: +56 9 1234 5678"
                maxLength={20}
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-5 py-4 rounded-2xl border border-white/10 bg-white/5 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase ml-2">Mensaje</label>
              <textarea
                placeholder="Cuéntanos brevemente sobre tu requerimiento..."
                maxLength={1000}
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-5 py-4 rounded-2xl border border-white/10 bg-white/5 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full gradient-primary text-white px-8 py-5 rounded-2xl font-bold text-lg hover:opacity-90 transition-all duration-300 shadow-glow flex items-center justify-center gap-2 disabled:opacity-60"
            >
              {loading ? "Enviando Solicitud..." : "Enviar Mensaje"}
              {!loading && <Send className="w-5 h-5" />}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
