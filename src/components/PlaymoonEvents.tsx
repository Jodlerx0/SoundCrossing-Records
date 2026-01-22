import { Calendar } from 'lucide-react';

function PlaymoonEvents() {
  return (
    <div className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-5xl font-bold mb-12 text-center tracking-tight">
          Playmoon Events
        </h2>

        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg text-zinc-400 leading-relaxed">
            Playmoon is our main event series, connecting artists and audiences across the underground electronic music community.
          </p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-12 min-h-[400px] flex flex-col items-center justify-center">
          <Calendar className="text-zinc-600 mb-4" size={64} />
          <p className="text-zinc-500 text-lg">Event flyers coming soon</p>
          <p className="text-zinc-600 text-sm mt-2">Stay tuned for upcoming Playmoon events</p>
        </div>
      </div>
    </div>
  );
}

export default PlaymoonEvents;
