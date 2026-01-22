import { useState, useEffect } from 'react';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

function Header({ activeSection, setActiveSection }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
      setActiveSection(sectionId);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-0 flex items-start justify-between">

        {/* LOGO ESQUINA SUPERIOR IZQUIERDA */}
        <div className="flex-shrink-0 m-0 p-0">
          <img
            src="/soundcrossingrecords.net.png"
            alt="SoundCrossing Records"
            className="h-[99px] w-auto cursor-pointer"
            onClick={() => scrollToSection('about')}
          />
        </div>

        {/* BOTONES CENTRADOS VERTICALMENTE */}
        <nav className="flex items-center gap-8 pr-4">
          <button
            onClick={() => scrollToSection('about')}
            className={`text-sm font-medium tracking-wider uppercase transition-colors ${
              activeSection === 'about' ? 'text-black' : 'text-gray-600 hover:text-black'
            }`}
          >
            About Us
          </button>

          <button
            onClick={() => scrollToSection('discography')}
            className={`text-sm font-medium tracking-wider uppercase transition-colors ${
              activeSection === 'discography' ? 'text-black' : 'text-gray-600 hover:text-black'
            }`}
          >
            Discography
          </button>

          <button
            onClick={() => scrollToSection('playmoon')}
            className={`text-sm font-medium tracking-wider uppercase transition-colors ${
              activeSection === 'playmoon' ? 'text-black' : 'text-gray-600 hover:text-black'
            }`}
          >
            Playmoon Events
          </button>
        </nav>

      </div>
    </header>
  );
}

export default Header;