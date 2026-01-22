import { ExternalLink } from 'lucide-react';

interface Release {
  image: string;
  title: string;
  artist: string;
  catalogNumber: string;
  link: string;
}

function Discography() {
  const vinylReleases: Release[] = [
    {
      image: '/soundcro01b.jpg',
      title: 'Sugar EP',
      artist: 'Faster, (Inc Dr. Kozo remix)',
      catalogNumber: 'SOUNDCRO01',
      link: 'https://www.discogs.com/release/3916648-Faster-Sugar-EP',
    },
    {
      image: '/soundcro02b.jpg',
      title: 'Varios EP',
      artist: 'Manuel Jelen, Dr. Kozo, Nu Zau, Psykoloco',
      catalogNumber: 'SOUNDCRO02',
      link: 'https://www.discogs.com/release/4369184-Various-Varios-EP',
    },
  ];

  const digitalReleases: Release[] = [
    {
      image: '/scr001.jpg',
      title: 'Can Carmina EP',
      artist: 'Papol & D.Jordan',
      catalogNumber: 'SCR001',
      link: '#',
    },
    {
      image: '/SCR002.jpg',
      title: 'Limitare EP',
      artist: 'Little Hado',
      catalogNumber: 'SCR002',
      link: '#',
    },
    {
      image: '/SCR003.jpg',
      title: 'Silence EP',
      artist: 'MAAB',
      catalogNumber: 'SCR003',
      link: '#',
    },
    {
      image: '/SRC004.jpg',
      title: 'De larna EP',
      artist: 'Marcman, (Inc Dorian Paic Remix)',
      catalogNumber: 'SCR004',
      link: '#',
    },
    {
      image: '/scr005.jpg',
      title: 'Untitled EP',
      artist: 'Manuel Jelen',
      catalogNumber: 'SCR005',
      link: '#',
    },
  ];

  const ReleaseCard = ({ release }: { release: Release }) => (
    <a
      href={release.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden hover:border-zinc-600 transition-all duration-300 hover:shadow-xl hover:shadow-white/5"
    >
      <div className="relative aspect-square overflow-hidden bg-zinc-950">
        <img
          src={release.image}
          alt={release.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
          <ExternalLink className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={32} />
        </div>
      </div>
      <div className="p-4">
        <p className="text-xs text-zinc-500 mb-1">{release.catalogNumber}</p>
        <h3 className="text-white font-semibold mb-1">{release.title}</h3>
        <p className="text-zinc-400 text-sm">{release.artist}</p>
      </div>
    </a>
  );

  return (
    <div className="bg-zinc-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-5xl font-bold mb-16 text-center tracking-tight">
          Discography
        </h2>

        <div className="mb-20">
          <h3 className="text-3xl font-bold mb-8 text-zinc-300 border-b border-zinc-800 pb-4">
            Vinyl
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {vinylReleases.map((release) => (
              <ReleaseCard key={release.catalogNumber} release={release} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold mb-8 text-zinc-300 border-b border-zinc-800 pb-4">
            Digital
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {digitalReleases.map((release) => (
              <ReleaseCard key={release.catalogNumber} release={release} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Discography;
