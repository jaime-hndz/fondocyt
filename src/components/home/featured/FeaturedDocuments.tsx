export const FeaturedDocuments = () => {
  const documents = [
    {
      id: 1,
      image: "/api/placeholder/280/180",
      title: "Plan de Inversiones en Infraestructura de Movilidad y Espacio Público PIIMEP-STGO 2023-2033",
      alt: "Portada del Plan de Inversiones"
    },
    {
      id: 2,
      image: "/api/placeholder/280/180",
      title: "Plan de Salud Municipal",
      alt: "Portada del Plan de Salud 2024"
    },
    {
      id: 3,
      image: "/api/placeholder/280/180",
      title: "Plan Anual de Educación Municipal",
      alt: "Portada del Plan Anual de Educación"
    },
    {
      id: 4,
      image: "/api/placeholder/280/180",
      title: "Cuentas Públicas",
      alt: "Portada de Cuentas Públicas"
    }
  ];

  return (
    <div className="bg-gray-50 w-full py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left side - Featured Documents */}
          <div>
            <h2 className="text-4xl font-bold mb-8 text-red-500">
              Destacamos
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {documents.map((doc) => (
                <div 
                  key={doc.id} 
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-40">
                    <img
                      src={doc.image}
                      alt={doc.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-medium text-gray-800 leading-tight">
                      {doc.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
