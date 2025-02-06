export const News = () => {
  const newsItems = [
    {
      id: 1,
      image: "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=",
      title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Volupt", 
      excerpt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi accusamus harum odio necessitatibus sed rerum  ",
      alt: "Vista aérea de Santiago mostrando cobertura vegetacional"
    },
    {
      id: 2,
      image: "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=",
      title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Volupt",
      excerpt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi accusamus harum odio necessitatibus sed rerum  ",
      alt: "Portada del cuaderno de información comunal"
    },
    {
      id: 3,
      image: "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=",
      title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Volupt",
      excerpt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi accusamus harum odio necessitatibus sed rerum  ",
      alt: "Imagen de parque con árboles"
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-center mb-12">
        Noticias
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsItems.map((item) => (
          <div key={item.id} className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative h-48">
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                {item.title}
              </h3>
              
              <p className="text-gray-600 mb-4 flex-grow">
                {item.excerpt}
              </p>
              
              <button className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                Leer más...
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
