import img from '@/assets/doc1.png'
export const FeaturedDocuments = () => {
  const documents = [
    {
      id: 1,
      image: img,
      title: "TU MUNICIPIO EN CIFRAS Bajos de Haina",
      alt: "Portada del Plan de Inversiones"
    },
  ];

  return (
    <div className="bg-gray-50 w-full py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left side - Featured Documents */}
          <div>
            <h2 className="text-4xl font-bold mb-8">
              Destacamos
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {documents.map((doc,i) => (
                <a key={i} href='https://www.one.gob.do/publicaciones/2024/tu-municipio-en-cifras-bajos-de-haina/'>
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
                </a>

              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
