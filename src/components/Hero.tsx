import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="parallax-container min-h-screen">
      <div className="parallax-layer parallax-layer-0 flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-custom-dark/50 to-custom-dark pointer-events-none" />
      </div>
      
      <div className="parallax-layer parallax-layer-1">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-custom-accent/20 via-custom-dark/5 to-transparent" />
      </div>

      <div className="parallax-layer parallax-layer-0 flex items-center justify-center">
        <div className="container mx-auto px-4 py-32 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              Transforme seu Currículo com IA
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Adapte automaticamente seu currículo para cada vaga usando inteligência artificial avançada
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-custom-accent hover:bg-custom-accent/90 text-white"
                onClick={() => navigate("/app")}
              >
                Começar Agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-600 hover:bg-gray-800"
              >
                Saiba Mais
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};