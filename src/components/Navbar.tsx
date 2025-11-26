
import { Button } from "@/components/ui/button";
import { useEffect, useState } from 'react';
import { logo } from '../assets';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="GM Soluções Tecnológicas" className="h-12 w-auto mr-2" />
          <h1 className={`font-bold text-2xl ${isScrolled ? 'text-gm-blue' : 'text-white'}`}>
            GM <span className="text-gm-green">Soluções</span> Tecnológicas
          </h1>
        </div>
        
        <div className="hidden md:flex space-x-8">
          <a href="#inicio" className={`font-medium transition hover:text-gm-green ${isScrolled ? 'text-gray-700' : 'text-white'}`}>Início</a>
          <a href="#servicos" className={`font-medium transition hover:text-gm-green ${isScrolled ? 'text-gray-700' : 'text-white'}`}>Serviços</a>
          <a href="#portfolio" className={`font-medium transition hover:text-gm-green ${isScrolled ? 'text-gray-700' : 'text-white'}`}>Portfólio</a>
          <a href="#processo" className={`font-medium transition hover:text-gm-green ${isScrolled ? 'text-gray-700' : 'text-white'}`}>Como Trabalhamos</a>
          <a href="#contato" className={`font-medium transition hover:text-gm-green ${isScrolled ? 'text-gray-700' : 'text-white'}`}>Contato</a>
        </div>
        
        <div className="hidden md:block">
          <Button className="bg-gm-green hover:bg-gm-green/90">Fale Conosco</Button>
        </div>
        
        <div className="md:hidden">
          <Button variant="ghost" className={isScrolled ? 'text-gray-700' : 'text-white'}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu">
              <line x1="4" x2="20" y1="12" y2="12"/>
              <line x1="4" x2="20" y1="6" y2="6"/>
              <line x1="4" x2="20" y1="18" y2="18"/>
            </svg>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
