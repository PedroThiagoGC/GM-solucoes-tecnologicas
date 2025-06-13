
import { Card, CardContent } from "@/components/ui/card";

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Diagnóstico",
      description: "Identificamos seus processos manuais e entendemos suas necessidades específicas."
    },
    {
      number: "02",
      title: "Planejamento",
      description: "Desenhamos a solução digital ideal para transformar seus processos em sistemas eficientes."
    },
    {
      number: "03",
      title: "Desenvolvimento",
      description: "Criamos sua solução com as tecnologias mais adequadas para seu negócio."
    },
    {
      number: "04",
      title: "Implantação",
      description: "Implementamos o sistema, migramos os dados e treinamos sua equipe."
    },
    {
      number: "05",
      title: "Suporte",
      description: "Oferecemos suporte contínuo para garantir que seu sistema evolua com seu negócio."
    },
  ];

  return (
    <section id="processo" className="process text-white pt-32 pb-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-gm-blue/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gm-green/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-gm-blue/10 rounded-full blur-xl"></div>
      </div>
      
      <div className="relative">
        <h2 className="section-title text-white">Como Trabalhamos</h2>
        <p className="section-subtitle text-white">
          Transformamos ideias e necessidades em sites modernos e funcionais, otimizando processos e levando sua presença digital para o próximo nível.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-8 mt-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 h-full">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <span className="block text-4xl md:text-5xl font-bold text-amber-200 mb-4">{step.number}</span>
                  <h3 className="text-xl text-white font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </CardContent>
              </Card>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform translate-x-1/2 -translate-y-1/2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gm-green">
                    <path d="m9 18 6-6-6-6"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="card mt-16 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Do Papel ao Digital</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="flex items-start">
              <div className="bg-green-500/20 p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-400">
                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
                  <line x1="3" x2="21" y1="9" y2="9"/>
                  <line x1="3" x2="21" y1="15" y2="15"/>
                  <line x1="9" x2="9" y1="9" y2="21"/>
                  <line x1="15" x2="15" y1="9" y2="21"/>
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Depois: Sistemas Digitais</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Interface intuitiva e personalizada</li>
                  <li>• Dados centralizados e integrados</li>
                  <li>• Automatização de processos</li>
                  <li>• Relatórios em tempo real</li>
                  <li>• Acesso de qualquer dispositivo</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
