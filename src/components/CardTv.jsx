
import { Link } from "react-router-dom";


const CardTv = ({item, selectedPelicula, setSelectedPelicula}) => {
  return (
    
    <div>
      <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg border border-gray-800 hover:border-gray-700 hover:-translate-y-1 transition-all duration-300 group flex flex-col">
          <div className="relative overflow-hidden aspect-[2/3]">
              <img
                  src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  alt={item.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
              />
              <div className="absolute top-3 right-3 bg-gray-900/80 backdrop-blur-sm text-yellow-400 font-bold px-2 py-1 rounded-md text-sm flex items-center gap-1 border border-gray-700">
                  <span>★</span> {item.vote_average.toFixed(1)}
              </div>
          </div>
          <div className="p-5 flex flex-col flex-grow">
              <h3 className="font-bold text-lg text-white mb-1 line-clamp-1" title={item.name}>
                  {item.name}
              </h3>
              <p className="text-gray-400 text-sm mb-4 capitalize">
                  {new Date(item.first_air_date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>

              <div className="mt-auto grid grid-cols-2 gap-3">
                  <button 
                      onClick={() => setSelectedPelicula(item)}
                      className="w-full bg-gray-800 hover:bg-gray-700 text-white font-medium py-2 rounded-xl transition-colors border border-gray-700 text-sm flex items-center justify-center gap-2"
                  >
                      <svg className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      Modal
                  </button>
                  <Link to={`/detalle-tv/${item.id}`} className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-2 rounded-xl transition-colors shadow-lg shadow-blue-500/20 text-sm flex items-center justify-center">
                      Detalle
                  </Link>
              </div>
          </div>
      </div>

     
      {/* Modal */}
      {selectedPelicula && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm">
              <div 
                  className="bg-gray-900 border border-gray-800 rounded-2xl w-full max-w-4xl overflow-hidden shadow-2xl relative flex flex-col md:flex-row"
              >
                  {/* Botón de cerrar */}
                  <button 
                      onClick={() => setSelectedPelicula(null)}
                      className="absolute top-4 right-4 z-20 bg-black/50 hover:bg-black/80 text-white rounded-full p-2 transition-colors backdrop-blur-md"
                  >
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                  </button>
                  
                  {/* Contenido (Derecha) */}
                  <div className="p-6 sm:p-8 md:w-1/2 flex flex-col justify-center order-2 md:order-2 z-10 bg-gray-900">
                      <h2 className="text-3xl font-bold text-white mb-2">{selectedPelicula.title}</h2>
                      <div className="flex items-center gap-4 mb-6">
                          <span className="bg-yellow-500/20 text-yellow-500 font-bold px-3 py-1 rounded-lg text-sm border border-yellow-500/30 flex items-center gap-1">
                              <span>★</span> {selectedPelicula.vote_average.toFixed(1)}
                          </span>
                          <span className="text-gray-400 text-sm capitalize">
                              {new Date(selectedPelicula.first_air_date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
                          </span>
                      </div>
                      <div className="mb-8 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
                          <h3 className="text-gray-400 font-semibold mb-2 uppercase text-xs tracking-wider">Sinopsis</h3>
                          <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                              {selectedPelicula.overview || "No hay descripción disponible para esta película."}
                          </p>
                      </div>
                      <button 
                          onClick={() => setSelectedPelicula(null)}
                          className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-xl transition-colors shadow-lg shadow-blue-500/30 w-full sm:w-auto self-start mt-auto">
                          Cerrar
                      </button>
                  </div>

                  {/* Imagen (Izquierda) */}
                  <div className="md:w-1/2 relative min-h-[300px] md:min-h-[500px] order-1 md:order-1">
                      <img 
                          src={`https://image.tmdb.org/t/p/w780${selectedPelicula.poster_path}`} 
                          alt={selectedPelicula.title}
                          className="absolute inset-0 w-full h-full object-cover object-top"
                      />
                      {/* Gradiente para transición suave con el contenido en desktop */}
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent md:bg-gradient-to-l md:from-gray-900 md:via-transparent md:to-transparent"></div>
                  </div>
              </div>
          </div>
      )}
    </div>  
  )
}

export default CardTv
