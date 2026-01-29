function AboutUs() {
  return (
    <div className="bg-black text-white py-20 min-h-screen flex flex-col justify-between">
      
      {/* CONTENIDO SUPERIOR */}
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-5xl font-bold mb-12 text-center tracking-tight">
          About Us
        </h2>

        <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-8 md:p-12">
          <p className="text-lg leading-relaxed text-zinc-300">
            SoundCrossing Records is an independent electronic music label founded in 2009 and based in London, Uk,
            created with the mission of showcasing the deeper and more experimental side of underground electronic music.
            The label also extends its creative presence through Playmoon, its main event series.
          </p>
        </div>
      </div>

      {/* IMAGEN +75% MÁS GRANDE */}
      <div className="w-full flex justify-center mt-12 px-4 overflow-hidden">
        <img
          src="/plymoonwhitelogo.png"
          alt="Playmoon White Logo"
          className="w-full max-w-3xl h-auto max-h-[60vh] object-contain opacity-90"
        />
      </div>

    </div>
  );
}

export default AboutUs;