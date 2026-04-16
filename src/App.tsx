import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import { Privacy, Terms, LegalNotice } from "./pages/Legal.tsx";
import NotFound from "./pages/NotFound.tsx";
import DesarrolloWeb from "./pages/DesarrolloWeb.tsx";
import Automatizacion from "./pages/Automatizacion.tsx";
import SoftwareCloud from "./pages/SoftwareCloud.tsx";
import Marketing from "./pages/Marketing.tsx";
import ProyectosMoviles from "./pages/ProyectosMoviles.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/privacidad" element={<Privacy />} />
          <Route path="/terminos" element={<Terms />} />
          <Route path="/aviso-legal" element={<LegalNotice />} />
          <Route path="/servicios/desarrollo-web" element={<DesarrolloWeb />} />
          <Route path="/servicios/automatizacion-ia" element={<Automatizacion />} />
          <Route path="/servicios/software-cloud" element={<SoftwareCloud />} />
          <Route path="/servicios/marketing-digital" element={<Marketing />} />
          <Route path="/proyectos-moviles" element={<ProyectosMoviles />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
