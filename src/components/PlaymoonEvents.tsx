import { useRef } from "react";

function PlaymoonEvents() {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  // ORDEN INVERSO: Playmoon25 → Playmoon1
  const flyers = Array.from({ length: 25 }, (_, i) => `/Playmoon${25 - i}.jpg`);

  const scrollLeft = () => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollBy({ left: -400, behavior: "smooth" });
  };

  const scrollRight = () => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollBy({ left: 400, behavior: "smooth" });
  };

  return (
    <div className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* TÍTULO */}
        <h2 className="text-5xl font-bold mb-12 text-center tracking-tight">
          Playmoon Events
        </h2>

        {/* DESCRIPCIÓN */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg text-zinc-400 leading-relaxed">
            Playmoon is our main event series, connecting artists and audiences
            across the underground electronic music community.
          </p>
        </div>

        {/* SLIDER */}
        <div className="relative bg-zinc-900 border border-zinc-800 rounded-lg p-8 overflow-hidden">

          {/* Flecha izquierda */}
          <button
            onClick={scrollLeft}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black/80 text-white px-3 py-2 rounded-full"
          >
            ‹
          </button>

          {/* CARRUSEL */}
          <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-10"
          >
            {flyers.map((src, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-48 h-64 bg-zinc-800 rounded-lg overflow-hidden border border-zinc-700"
              >
                <img
                  src={src}
                  alt={`Playmoon Flyer ${25 - index}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Flecha derecha */}
          <button
            onClick={scrollRight}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black/80 text-white px-3 py-2 rounded-full"
          >
            ›
          </button>
        </div>

        {/* REPRODUCTOR YOUTUBE */}
        <div className="mt-12 flex justify-center">
          <iframe
            width="100%"
            height="400"
            className="max-w-3xl rounded-lg border border-zinc-800 shadow-lg"
            src="https://www.youtube.com/embed/VLnVCiP0AjA?list=PLtEkO6L700iS-VoIyrX6rfHj0246COZB8"
            title="Playmoon Playlist"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

      </div>
    </div>
  );
}

export default PlaymoonEvents;