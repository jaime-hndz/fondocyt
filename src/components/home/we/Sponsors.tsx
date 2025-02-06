export const Sponsors = () => {
  const partners = [
    {
      name: "Arcoiris",
      logo: "arcoiris",
    },
    {
      name: "Mescyt",
      logo: "mescyt",
    },
    {
      name: "Mescyt",
      logo: "barna",
    },
    {
      name: "Mescyt",
      logo: "haina",
    },
    {
      name: "Mescyt",
      logo: "intec",
    },
        {
      name: "Mescyt",
      logo: "participacion",
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
              src={`/src/assets/logos/${partner.logo}.png`}
              alt={partner.name}
              className="max-w-[200px] h-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
