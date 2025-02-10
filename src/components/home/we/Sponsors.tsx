import arcoiris from '@/assets/logos/arcoiris.png'
import mescyt from '@/assets/logos/mescyt.png'
import barna from '@/assets/logos/barna.png'
import haina from '@/assets/logos/haina.png'
import intec from '@/assets/logos/intec.png'
import participacion from '@/assets/logos/participacion.png'

export const Sponsors = () => {
  const partners = [
    {
      name: "Arcoiris",
      logo: arcoiris,
      link: "https://arcoirisrd.org"
    },
    {
      name: "Mescyt",
      logo: mescyt,
      link: "https://mescyt.gob.do"
    },
    {
      name: "Barna",
      logo: barna,
      link: "https://barna.edu.do"
    },
    {
      name: "Haina",
      logo: haina,
      link: "https://ayuntamientohaina.gob.do"
    },
    {
      name: "Intec",
      logo: intec,
      link: "https://www.intec.edu.do"
    },
    {
      name: "Participación Ciudadana",
      logo: participacion,
      link: "https://pciudadana.org"
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-center mb-12 text-coral-500"></h2>

      <div className="flex flex-wrap justify-center items-center gap-12">
        {partners.map((partner, i) => (
          <a href={partner.link} key={i}>
            <div
              key={partner.name}
              className="flex items-center justify-center p-4 transition-transform hover:scale-105"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-w-[200px] h-auto object-contain"
              />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
