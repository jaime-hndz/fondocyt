import arcoiris from "@/assets/logos/arcoiris.png";
import mescyt from "@/assets/logos/mescyt.png";
import barna from "@/assets/logos/barna.png";
import haina from "@/assets/logos/haina.png";
import ambiente from "@/assets/logos/ambiente.png";
import coe from "@/assets/logos/coe.png";
import defensa from "@/assets/logos/defensa.png";
import ign from "@/assets/logos/IGN.png";
import mepyd from "@/assets/logos/mepyd.png";
import mived from "@/assets/logos/mived.png";
import one from "@/assets/logos/one.png";
import salud from "@/assets/logos/salud.png";
import tecca from "@/assets/logos/tecca.png";

// import participacion from '@/assets/logos/participacion.png'

export const Sponsors = () => {
  const partners = [
    {
      name: "Arcoiris",
      logo: arcoiris,
      link: "https://arcoirisrd.org",
    },
    {
      name: "Barna",
      logo: barna,
      link: "https://barna.edu.do",
    },
    {
      name: "Mescyt",
      logo: mescyt,
      link: "https://mescyt.gob.do",
    },
    {
      name: "Tecca Caribe",
      logo: tecca,
      link: "https://teccacaribe.com",
    },
    {
      name: "Ministerio de Economía, Planificación y Desarrollo",
      logo: mepyd,
      link: "https://mepyd.gob.do",
    },
    {
      name: "Ministerio de Vivienda y Edificaciones",
      logo: mived,
      link: "https://mived.gob.do",
    },
    {
      name: "Ministerio de Medio Ambiente",
      logo: ambiente,
      link: "https://ambiente.gob.do",
    },
    {
      name: "Ministerio de Salud Pública",
      logo: salud,
      link: "https://msp.gob.do",
    },
    {
      name: "Ayuntamiento de Haina",
      logo: haina,
      link: "https://ayuntamientohaina.gob.do",
    },
    {
      name: "Instituto Geográfico Nacional (IGN)",
      logo: ign,
      link: "https://ign.gob.do",
    },
    {
      name: "Oficina Nacional de Estadística (ONE)",
      logo: one,
      link: "https://one.gob.do",
    },
    {
      name: "Defensa civil",
      logo: defensa,
      link: "https://defensacivil.gob.do",
    },
    {
      name: "Centro de Operaciones de Emergencias (COE)",
      logo: coe,
      link: "https://coe.gob.do",
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
