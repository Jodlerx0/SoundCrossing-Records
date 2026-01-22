import { useState, useEffect, useRef } from 'react';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

declare global {
  interface Window {
    SC: any;
  }
}

function Header({ activeSection, setActiveSection }: HeaderProps) {
  const [scLoaded, setScLoaded] = useState(false);
  const [currentTitle, setCurrentTitle] = useState<string>('');
  const widgetRef = useRef<any>(null);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  // Load SoundCloud API script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://w.soundcloud.com/player/api.js';
    script.async = true;
    script.onload = () => setScLoaded(true);
    document.body.appendChild(script);

    return () => document.body.removeChild(script);
  }, []);

  // Initialize widget when script + iframe are ready
  useEffect(() => {
    if (!scLoaded || !iframeRef.current || !window.SC) return;

    widgetRef.current = window.SC.Widget(iframeRef.current);

    widgetRef.current.bind(window.SC.Widget.Events.PLAY, () => {
      widgetRef.current.getCurrentSound((sound: any) => {
        if (sound?.title) setCurrentTitle(sound.title);
      });
    });
  }, [scLoaded]);

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
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 h-[110px]">

        {/* Margen de 5mm a cada lado */}
        <div className="w-full flex items-center justify-between h-full px-[5mm]">

          {/* LOGO IZQUIERDA */}
          <div className="flex-shrink-0 m-0 p-0">
            <img
              src="/soundcrossingrecords.net.png"
              alt="SoundCrossing Records"
              className="h-[99px] w-auto cursor-pointer"
              onClick={() => scrollToSection('about')}
            />
          </div>

          {/* BOTONES + REPRODUCTOR A LA DERECHA */}
          <div className="flex items-center gap-6">

            {/* BOTONES PEGADOS AL REPRODUCTOR */}
            <nav className="flex items-center gap-6">
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

            {/* REPRODUCTOR DERECHA */}
            <div className="flex flex-col items-end justify-center gap-1">

              {currentTitle && (
                <span className="text-xs text-gray-700 max-w-[260px] text-right truncate">
                  {currentTitle}
                </span>
              )}

              <div className="w-[260px] h-[60px] overflow-hidden rounded-md shadow-sm">
                <iframe
                  ref={iframeRef}
                  id="sc-player"
                  width="100%"
                  height="100%"
                  scrolling="no"
                  frameBorder="no"
                  allow="autoplay"
                  src={
                    'https://w.soundcloud.com/player/?url=' +
                    encodeURIComponent('https://soundcloud.com/soundcrossingrecords/sets') +
                    '&auto_play=false&hide_related=false&show_comments=false&show_user=false&show_reposts=false&visual=true'
                  }
                />
              </div>
            </div>

          </div>

        </div>
      </header>
    </>
  );
}

export default Header;