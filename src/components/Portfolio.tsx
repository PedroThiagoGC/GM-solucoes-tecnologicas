
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  const portfolioItems = [
    {
      id: 1,
      title: "Barbearia Moderna",
      description: "Landing page para uma barbearia com agendamento online e galeria de cortes.",
      category: "landing-page",
      image: "barbershop.jpg",
      tags: ["Design Moderno", "Agendamento Online", "SEO Otimizado"]
    },
    {
      id: 2,
      title: "Desentupidora e Limpa Fossa",
      description: "Landing page para serviços de desentupimento com sistema de orçamentos rápidos.",
      category: "landing-page",
      image: "plumbing.jpg",
      tags: ["Responsivo", "Formulário de Contato", "Catálogo de Serviços"]
    },
    {
      id: 3,
      title: "Sistema de Gestão para Clínica",
      description: "Transformação de planilhas Excel em um sistema completo de agendamentos e prontuários.",
      category: "system",
      image: "clinic.jpg",
      tags: ["Automação", "Migração de Dados", "Dashboard"]
    },
    {
      id: 4,
      title: "ERP para Distribuidora",
      description: "Sistema completo que substituiu processos manuais por um fluxo digital integrado.",
      category: "system",
      image: "erp.jpg",
      tags: ["Controle de Estoque", "Relatórios", "Área do Cliente"]
    },
  ];
  
  const filteredItems = activeTab === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeTab);
  
  // Mock images - would be replaced with actual project images
  const getImageUrl = (imageName: string) => {
    if (imageName === "barbershop.jpg") {
      return "https://images.unsplash.com/photo-1582562124811-c09040d0a901";
    } else if (imageName === "plumbing.jpg") {
      return "https://images.unsplash.com/photo-1517022812141-23620dba5c23";
    } else if (imageName === "clinic.jpg") {
      return "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158";
    } else if (imageName === "erp.jpg") {
      return "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d";
    }
    return "https://via.placeholder.com/600x400";
  };

  return (
    <section id="portfolio" className="section-container">
      <h2 className="section-title">Portfólio</h2>
      <p className="section-subtitle">
        Conheça alguns dos projetos que desenvolvemos para nossos clientes, transformando ideias em soluções reais
      </p>
      
      <div className="flex justify-center flex-wrap gap-2 mb-12">
        <Button 
          variant={activeTab === 'all' ? 'default' : 'outline'} 
          onClick={() => setActiveTab('all')}
          className={activeTab === 'all' ? 'bg-gm-blue' : ''}
        >
          Todos
        </Button>
        <Button 
          variant={activeTab === 'landing-page' ? 'default' : 'outline'} 
          onClick={() => setActiveTab('landing-page')}
          className={activeTab === 'landing-page' ? 'bg-gm-blue' : ''}
        >
          Landing Pages
        </Button>
        <Button 
          variant={activeTab === 'system' ? 'default' : 'outline'} 
          onClick={() => setActiveTab('system')}
          className={activeTab === 'system' ? 'bg-gm-blue' : ''}
        >
          Sistemas
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredItems.map((item) => (
          <Card key={item.id} className="overflow-hidden card-hover">
            <div className="h-[250px] w-full overflow-hidden">
              <img 
                src={getImageUrl(item.image)} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, index) => (
                  <span key={index} className="inline-block bg-gm-lightblue text-gm-blue text-sm px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <Button className="bg-gm-green hover:bg-gm-green/90 px-8 py-6 text-lg">
          Ver todos os projetos
        </Button>
      </div>
    </section>
  );
};

export default Portfolio;
