
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const WhatsappButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    
    // Initial check
    toggleVisibility();
    
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const openWhatsapp = () => {
    window.open('https://wa.me/5585994334597?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20GM%20Soluções%20Tecnológicas.', '_blank');
  };

  return (
    <div 
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ease-in-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}
    >
      <Button 
        onClick={openWhatsapp}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full h-16 w-16 flex items-center justify-center shadow-lg animate-float"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
          <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
          <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
          <path d="M8.5 14a5 5 0 0 0 7 0" />
        </svg>
      </Button>
    </div>
  );
};

export default WhatsappButton;
