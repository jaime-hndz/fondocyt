export const Sponsors = () => {
  const partners = [
    {
      name: "Arcoiris",
      logo: "/src/assets/arcoiris.png",
      alt: "arcoiris logo"
    },
    {
      name: "Mescyt",
      logo: "/src/assets/mescyt.png",
      alt: "Mescyt logo"
    },
    {
      name: "Mescyt",
      logo: "/src/assets/barna.png",
      alt: "Mescyt logo"
    },
    {
      name: "Mescyt",
      logo: "/src/assets/haina.png",
      alt: "Mescyt logo"
    },
    {
      name: "Mescyt",
      logo: "/src/assets/intec.png",
      alt: "Mescyt logo"
    },
    {
      name: "Mescyt",
      logo: "/src/assets/participacion.png",
      alt: "Mescyt logo"
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-center mb-12 text-coral-500">
      </h2>
      
      <div className="flex flex-wrap justify-center items-center gap-12">
        {partners.map((partner) => (
          <div 
            key={partner.name}
            className="flex items-center justify-center p-4 transition-transform hover:scale-105"
          >
            <img
              src={partner.logo}
              alt={partner.alt}
              className="max-w-[200px] h-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
