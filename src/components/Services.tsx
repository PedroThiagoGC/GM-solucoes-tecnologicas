
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      title: "Desenvolvimento de Sistemas",
      description: "Criamos sistemas personalizados que automatizam processos e aumentam a eficiência operacional da sua empresa.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gm-blue">
          <path d="m18 16 4-4-4-4" />
          <path d="m6 8-4 4 4 4" />
          <path d="m14.5 4-5 16" />
        </svg>
      ),
    },
    {
      title: "Websites e Landing Pages",
      description: "Desenvolvemos sites profissionais e landing pages de alto impacto para aumentar sua presença digital.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gm-green">
          <rect width="18" height="18" x="3" y="3" rx="2" />
          <path d="M3 9h18" />
          <path d="M9 21V9" />
        </svg>
      ),
    },
    {
      title: "Design Digital",
      description: "Criamos identidades visuais, layouts modernos e designs criativos que fortalecem a presença da sua marca no ambiente digital.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gm-blue">
          <path d="M16 3h5v5" />
          <path d="M8 3H3v5" />
          <path d="M3 16v5h5" />
          <path d="M16 21h5v-5" />
          <rect width="6" height="6" x="9" y="9" />
        </svg>
      ),
    },
    {
      title: "Consultoria Tecnológica",
      description: "Oferecemos orientação especializada para ajudar sua empresa a tomar as melhores decisões tecnológicas.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gm-green">
          <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
          <path d="M12 9v4" />
          <path d="M12 17h.01" />
        </svg>
      ),
    },
    {
      title: "Aplicações Móveis",
      description: "Desenvolvemos aplicativos móveis intuitivos que conectam sua empresa diretamente aos clientes.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gm-blue">
          <path d="M15 2H9a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z" />
          <path d="M12 17h.01" />
        </svg>
      ),
    },
    {
      title: "Integração de Sistemas",
      description: "Conectamos diferentes sistemas e aplicações para criar um fluxo de trabalho coeso e eficiente.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gm-green">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
    },
    {
      title: "Tráfego Pago",
      description: "Impulsione seu negócio com campanhas de anúncios estratégicas no Google, Facebook, Instagram e outras plataformas.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gm-blue">
          <circle cx="12" cy="12" r="10" />
          <path d="m16 8-4 4-4-4" />
          <path d="M12 16V8" />
        </svg>
      ),
      special: true,
      ctaText: "Solicitar orçamento",
      ctaPhone: "5585922484484"
    },
  ];

  const handlePhoneCall = (phoneNumber: string) => {
    window.open(`https://wa.me/${phoneNumber}?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20tráfego%20pago.`, '_blank');
  };

  return (
    <section id="servicos" className="services section-container bg-gray-50">
      <h2 className="section-title">Nossos Serviços</h2>
      <p className="section-subtitle">
        Oferecemos soluções tecnológicas completas para transformar e otimizar o seu negócio
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card key={index} className={`card-hover ${service.special ? 'border-t-4 border-t-gm-green bg-gradient-to-br from-white to-green-50' : 'border-t-4 border-t-gm-blue'}`}>
            <CardHeader className="pb-4">
              <div className="mb-4">{service.icon}</div>
              <CardTitle className="text-xl">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base text-gray-600">{service.description}</CardDescription>
              
              {service.special && (
                <div className="mt-6">
                  <Button 
                    className="w-full bg-gm-green hover:bg-gm-green/90" 
                    onClick={() => handlePhoneCall(service.ctaPhone)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.908.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    {service.ctaText}
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Services;
