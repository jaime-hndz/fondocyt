import analisis from "@/assets/img/analisis.svg";

export const WeAre = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-1 text-justify">
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
          Es un espacio de concertación política y social para promover el
              desarrollo municipal inclusivo y sostenible. Se estructura desde
              un espacio real asambleario integrado por organizaciones locales,
              instituciones privadas, dependencias del gobierno con presencia en
              el municipio y el ayuntamiento municipal.
          </p>

          <p className="leading-relaxed">
          Incorporando este espacio una plataforma técnica-participativa
              digital que integra datos críticos, análisis geoespacial y
              mecanismos de gobernanza colaborativa siempre en crecimiento, para
              la toma de decisiones informadas en ordenamiento territorial y
              gestión de riesgos.
          </p>

          <p className="leading-relaxed">
          <div>
              Combina a futuro inteligencia artificial predictiva, sensores IoT
              y metodologías de co-creación ciudadana, priorizando tres ejes:
            </div>

            <div>
              <ul>
                <li>Ordenamiento territorial</li>
                <li>Gestión de Riesgos</li>
                <li>Participación ciudadana</li>
              </ul>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};
