import { useState } from 'react';
import Header from './components/Header';
import AboutUs from './components/AboutUs';
import Discography from './components/Discography';
import PlaymoonEvents from './components/PlaymoonEvents';

function App() {
  const [activeSection, setActiveSection] = useState('discography');

  return (
    <div
      className="
        min-h-screen text-white relative
        bg-[url('/background.png')]
        bg-cover bg-center bg-no-repeat
      "
    >
      {/* Overlay oscuro encima del background */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Contenido por encima del overlay */}
      <div className="relative z-10">
        <Header activeSection={activeSection} setActiveSection={setActiveSection} />

        <main className="pt-20">
          <section id="discography" className="min-h-screen">
            <Discography />
          </section>

          <section id="about" className="min-h-screen">
            <AboutUs />
          </section>

          <section id="playmoon" className="min-h-screen">
            <PlaymoonEvents />
          </section>
        </main>

        <footer className="bg-zinc-950 border-t border-zinc-800 py-8">
          <div className="max-w-7xl mx-auto px-4 text-center text-zinc-500 text-sm">
            <p>&copy; {new Date().getFullYear()} SoundCrossing Records. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;