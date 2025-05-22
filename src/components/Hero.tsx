
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="inicio" className="relative bg-gm-dark text-white pt-32 pb-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-gm-blue/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gm-green/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-gm-blue/10 rounded-full blur-xl"></div>
      </div>
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Transformando <span className="text-gm-blue">ideias</span> em <span className="text-gm-green">soluções</span> digitais
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg">
            Convertemos processos manuais em sistemas dinâmicos e eficientes, otimizando e digitalizando o seu negócio.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-gm-green hover:bg-gm-green/90 px-8 py-6 text-lg">
              Conheça nossos serviços
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
              Ver portfólio
            </Button>
          </div>
        </div>
        
        <div className="md:w-1/2 relative">
          <div className="w-full h-[400px] md:h-[500px] bg-gradient-to-br from-gm-blue/80 to-gm-green/80 rounded-lg shadow-2xl overflow-hidden flex items-center justify-center">
            <div className="w-[90%] h-[85%] bg-white/10 backdrop-blur-sm rounded-md border border-white/20 p-5">
              <div className="bg-white/5 h-12 w-full mb-5 rounded-md"></div>
              <div className="bg-white/10 h-8 w-3/4 mb-3 rounded-md"></div>
              <div className="bg-white/10 h-8 w-1/2 mb-6 rounded-md"></div>
              <div className="grid grid-cols-3 gap-3 mb-5">
                <div className="bg-white/10 h-20 rounded-md"></div>
                <div className="bg-white/10 h-20 rounded-md"></div>
                <div className="bg-white/10 h-20 rounded-md"></div>
              </div>
              <div className="bg-white/10 h-32 mb-4 rounded-md"></div>
              <div className="bg-gm-green/40 h-10 w-1/3 rounded-md mx-auto"></div>
            </div>
          </div>
          <div className="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 w-24 h-24 md:w-32 md:h-32 bg-gm-blue rounded-lg -rotate-6 -z-10"></div>
          <div className="absolute -top-4 -left-4 md:-top-8 md:-left-8 w-16 h-16 md:w-24 md:h-24 bg-gm-green rounded-lg rotate-12 -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
