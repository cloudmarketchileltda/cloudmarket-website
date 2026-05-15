import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Mail, Lock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic for login would go here
    console.log("Login attempt with:", email, password);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center gradient-hero relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />
      
      <div className="container relative z-10 flex items-center justify-center px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-[450px]"
        >
          {/* Logo Section */}
          <div className="flex flex-col items-center mb-10">
            <Link to="/">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                src="/images/logo final.png" 
                alt="CloudMarket Chile Logo" 
                className="h-20 w-auto mb-4"
              />
            </Link>
            <h1 className="text-2xl font-bold text-white tracking-tight">Acceso Privado</h1>
            <p className="text-gray-400 mt-2 text-sm">Gestiona tus proyectos y servicios con nosotros</p>
          </div>

          {/* Login Card */}
          <div className="bg-black/40 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-2xl relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
            
            <form onSubmit={handleSubmit} className="space-y-6 relative">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-gray-300 ml-1">
                  Correo Electrónico
                </Label>
                <div className="relative group">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 group-focus-within:text-primary transition-colors" />
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="ejemplo@correo.com" 
                    required 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white/5 border-white/10 pl-10 h-12 focus:ring-primary/20 text-white placeholder:text-gray-600 rounded-xl"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between ml-1">
                  <Label htmlFor="password" name="password" className="text-sm font-medium text-gray-300">
                    Contraseña
                  </Label>
                  <Link to="#" className="text-xs text-primary hover:underline transition-all">
                    ¿Olvidaste tu contraseña?
                  </Link>
                </div>
                <div className="relative group">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 group-focus-within:text-primary transition-colors" />
                  <Input 
                    id="password" 
                    type="password" 
                    required 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-white/5 border-white/10 pl-10 h-12 focus:ring-primary/20 text-white placeholder:text-gray-600 rounded-xl"
                  />
                </div>
              </div>

              <div className="flex items-center space-x-2 ml-1">
                <Checkbox id="remember" className="border-white/20 data-[state=checked]:bg-primary" />
                <Label htmlFor="remember" className="text-xs font-medium text-gray-400 cursor-pointer">
                  Mantener sesión iniciada
                </Label>
              </div>

              <Button 
                type="submit" 
                className="w-full h-12 gradient-primary hover:opacity-90 transition-all duration-300 rounded-xl font-bold group"
              >
                Iniciar Sesión
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>

          <p className="text-center mt-8 text-sm text-gray-500">
            ¿No tienes una cuenta?{" "}
            <Link to="/contacto" className="text-primary font-semibold hover:underline">
              Contáctanos
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
