
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import * as fotos from '../assets'; // Assuming you have an index file exporting all images
import { url } from 'inspector';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  const portfolioItems = [
    {
      id: 1,
      title: "Barbearia Moderna",
      description: "Landing page para uma barbearia com agendamento online e galeria de cortes.",
      category: "landing-page",
      image: "barberShop",
      url: "https://barbearia-la-marfia.vercel.app/",
      tags: ["Design Moderno", "Agendamento Online", "SEO Otimizado"]
    },
    {
      id: 2,
      title: "Desentupidora e Limpa Fossa",
      description: "Landing page para serviços de desentupimento com sistema de orçamentos rápidos.",
      category: "landing-page",
      image: "fortalimp",
      url: "https://fortalimp.vercel.app/",
      tags: ["Responsivo", "Formulário de Contato", "Catálogo de Serviços"]
    },
    {
      id: 3,
      title: "Ecommerce",
      description: "Oferecemos uma plataforma completa para vendas online, com navegação simples, design moderno e integração com meios de pagamento.",
      category: "system",
      image: "erp",
      tags: ["Automação", "Migração de Dados", "Dashboard"]
    },
    {
      id: 4,
      title: "Saas",
      description: "Sistema completo conforme a necessidade do cliente.",
      category: "system",
      image: "saas",
      tags: ["Controle de Estoque", "Relatórios", "Área do Cliente"]
    },
  ];
  
  const filteredItems = activeTab === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeTab);
  
  // Mock images - would be replaced with actual project images
  const getImageFromFotos = (imageKey: string): string => {
  // fotos: Record<string, string>
  return fotos[imageKey] || "https://via.placeholder.com/600x400";
};

  return (
    <section id="portfolio" className="section-container">
      <h2 className="section-title">Nossos Projetos</h2>
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
            <a key={item.id} href={item.url} target="_blank" rel="noopener noreferrer" className="block hover:opacity-90 transition">
            <div className="h-[250px] w-full overflow-hidden">
              <img 
                src={getImageFromFotos(item.image)} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
              />
            </div>
            </a>
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
      
      <a
        href="https://wa.me/5585994334597?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20GM%20Soluções%20Tecnológicas."
        target="_blank"
        rel="noopener noreferrer"
      >
      <div className="text-center mt-12">
        <Button className="bg-gm-green hover:bg-gm-green/90 px-8 py-6 text-lg">
          Solicitar orçamento
        </Button>
      </div>
      </a>
    </section>
  );
};

export default Portfolio;
