import analisis from "@/assets/img/analisis.svg";

export const WeAre = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold mb-12 text-coral-500">
        ¿Quiénes somos?
      </h2>

      <div className="flex flex-col lg:flex-row gap-12 items-center">
        {/* Left side - Illustration */}
        <div className="lg:w-1/2">
          <div className="relative">
            <img
              src={analisis}
              alt="Ilustración de personas mirando datos en un teléfono"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Right side - Text content */}
        <div className="lg:w-1/2 space-y-6 text-gray-700">
          <p className="leading-relaxed">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Aenean maecenas
            morbi libero luctus velit. Dignissim fermentum congue ac platea
            commodo elementum mus duis. Sagittis porttitor maecenas neque,
            suscipit metus lacus et consequat. Mollis habitasse volutpat justo
            in litora. Laoreet malesuada dui posuere fusce; diam nisi. Leo
            viverra nam tempor inceptos nascetur iaculis sociosqu tortor. Proin
            molestie nibh maximus risus enim magnis congue malesuada ultricies?
          </p>

          <p className="leading-relaxed">
            Diam rutrum imperdiet tempus, morbi a massa mollis inceptos diam?
            Vestibulum adipiscing mollis ac, odio sociosqu adipiscing odio. Eu
            curabitur senectus, venenatis vulputate vehicula non etiam
            consectetur sociosqu? Rhoncus neque elit turpis non sagittis diam
            nullam sapien. Neque feugiat vehicula interdum mauris molestie
            aenean dui sollicitudin scelerisque. Hac potenti pulvinar ultrices
            felis lacinia inceptos dolor consequat?
          </p>

          <p className="leading-relaxed">
            Bibendum semper finibus senectus eu nunc tempor parturient tortor
            cras. Iaculis enim est habitasse bibendum conubia ultrices posuere
            finibus? Diam lacinia lacus libero; senectus tempor primis finibus
            convallis? Auctor bibendum penatibus torquent sollicitudin eget
            mauris imperdiet. Odio lacinia porta euismod libero condimentum
            aliquam et tincidunt. Tristique urna id mi litora consequat facilisi
            leo.
          </p>
        </div>
      </div>
    </div>
  );
};
