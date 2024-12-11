import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { CheckCircle, Upload, Download, Sparkles } from "lucide-react";

const features = [
  {
    icon: <Upload className="h-6 w-6" />,
    title: "Upload Simples",
    description: "Faça upload do seu currículo em PDF ou DOCX"
  },
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: "IA Avançada",
    description: "Nossa IA adapta seu currículo para a vaga desejada"
  },
  {
    icon: <Download className="h-6 w-6" />,
    title: "Exportação Flexível",
    description: "Exporte o resultado em PDF ou DOCX"
  },
  {
    icon: <CheckCircle className="h-6 w-6" />,
    title: "5 Adaptações Grátis",
    description: "Comece gratuitamente com 5 adaptações"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-custom-dark">
      <Hero />
      
      <div className="relative">
        {/* Gradient overlay between sections */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-custom-dark to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-custom-darker to-transparent" />
        
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Como Funciona
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Processo simples e eficiente para adaptar seu currículo em minutos
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-custom-dark p-6 rounded-lg border border-gray-800 hover:border-custom-accent/50 transition-colors"
                >
                  <div className="text-custom-accent mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;