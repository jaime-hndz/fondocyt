export const Footer = () => {
    return (
        <footer className="bg-zinc-900 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              {/* Logo Section */}
              <div className="mb-6 md:mb-0">
                <div className="flex items-center">
                  <div className="mr-3">
                    {/* Crown icon */}
                    <span className="material-icons text-3xl">crown</span>
                  </div>
                  <div>
                    <div className="text-xl font-bold">SANTIAGO</div>
                    <div className="text-sm text-gray-300">Ilustre Municipalidad</div>
                  </div>
                </div>
              </div>
    
              {/* Contact Information */}
              <div className="text-right text-sm">
                <div className="mb-2 text-gray-300">SECRETARIA COMUNAL DE PLANIFICACION – ASESORIA URBANA</div>
                <div className="mb-2 font-semibold">ILUSTRE MUNICIPALIDAD DE SANTIAGO</div>
                <div className="mb-1">Santo Domingo N°916</div>
                <div className="mb-1">Santiago – Chile</div>
                <div className="mb-2">Mesa Central 800 20 30 11</div>
                <div className="text-gray-400 text-xs">Todos los derechos reservados</div>
              </div>
            </div>
          </div>
        </footer>
      );
}
