import analisis from '@/assets/anlisis.svg';

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
            Observatorio de Santiago es una iniciativa desarrollada por la Ilustre Municipalidad 
            de Santiago, pensada y diseñada como una plataforma que comunica y difunde 
            contenidos de interés público que colaboran en la toma de decisiones tanto en los 
            ámbitos de evaluación de políticas públicas locales, como en planificación de 
            iniciativas que demanda la comunidad.
          </p>

          <p className="leading-relaxed">
            Esta plataforma ha sido concebida bajo el principio de acceso universal, pensando en 
            todos aquellos actores (sociales, económicos, culturales y académicos) que requieren 
            información para el ejercicio de analizar y construir nuevos escenarios de desarrollo, 
            en un contexto de permanente colaboración y corresponsabilidad.
          </p>

          <p className="leading-relaxed">
            El fin último es y será asegurar mayor transparencia para el ejercicio libre y 
            responsable del derecho a la información, tanto para vecinos y vecinas como también 
            para investigadores que deseen conocer más sobre nuestra comuna y colaborar en el 
            mejoramiento de las condiciones de vida.
          </p>

          <p className="leading-relaxed">
            Durante el año 2021 presentamos una actualización del sitio Observatorio de 
            Santiago, que contó en esa oportunidad con la colaboración de la Fundación Konrad 
            Adenauer.
          </p>

          <p className="leading-relaxed">
            Comenzando este año 2024, ponemos a disposición de la comunidad una 
            actualización del Visor Interactivo Comunal que permitirá una mayor interacción para 
            los usuarios de esta plataforma.
          </p>
        </div>
      </div>
    </div>
  );
}
