import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'

const DetalleTv = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [pelicula, setPelicula] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchDetalle = async () => {
            try {
                setLoading(true)
                const response = await fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=ecbcdcf9044928d12b179d9153f5a269&language=es-ES`)
                if (!response.ok) {
                    throw new Error('No se pudo cargar la información de la película')
                }
                const data = await response.json()
                setPelicula(data)
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }
        
        if (id) {
            fetchDetalle()
        }
    }, [id])

    if (loading) {
        return (
            <div className="min-h-[80vh] flex flex-col justify-center items-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
                <p className="text-blue-400">Cargando detalles...</p>
            </div>
        )
    }

    if (error) {
        return (
            <div className="min-h-[80vh] flex justify-center items-center">
                <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-8 rounded-xl max-w-md text-center">
                    <h2 className="text-2xl font-bold mb-4">Error</h2>
                    <p>{error}</p>
                    <Link to="/" className="inline-block mt-6 px-6 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors">Volver al inicio</Link>
                </div>
            </div>
        )
    }

    if (!pelicula) return null;

    return (
        <div className="relative min-h-screen pb-12">
            {/* Backdrop Background */}
            <div 
                className="absolute top-0 left-0 w-full h-[60vh] opacity-20 z-0"
                style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/original${pelicula.backdrop_path})`,
                    backgroundPosition: 'center top',
                    backgroundSize: 'cover'
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/80 to-transparent"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-8 sm:pt-16">
                <button onClick={() => navigate(-1)} className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 bg-gray-900/50 px-4 py-2 rounded-lg border border-gray-800 backdrop-blur-sm">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Volver
                </button>

                <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
                    {/* Poster */}
                    <div className="w-full md:w-1/3 lg:w-1/4 shrink-0 mx-auto md:mx-0 max-w-xs">
                        <img 
                            src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`} 
                            alt={pelicula.title} 
                            className="w-full rounded-2xl shadow-2xl shadow-black/50 border border-gray-800"
                        />
                    </div>

                    {/* Contenido */}
                    <div className="w-full md:w-2/3 lg:w-3/4 flex flex-col justify-center mt-4 md:mt-0">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 shadow-sm">
                            {pelicula.title}
                        </h1>
                        {pelicula.tagline && (
                            <p className="text-xl text-gray-400 italic mb-6">"{pelicula.tagline}"</p>
                        )}

                        <div className="flex flex-wrap items-center gap-4 mb-8 text-sm">
                            <span className="bg-yellow-500/20 text-yellow-500 font-bold px-3 py-1.5 rounded-lg border border-yellow-500/30 flex items-center gap-1">
                                <span>★</span> {pelicula.vote_average?.toFixed(1)}
                            </span>
                            {pelicula.runtime > 0 && (
                                <span className="text-gray-300 bg-gray-800 px-3 py-1.5 rounded-lg border border-gray-700">
                                    {pelicula.runtime} min
                                </span>
                            )}
                            <span className="text-gray-400">
                                {new Date(pelicula.release_date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
                            </span>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                                <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Sinopsis
                            </h3>
                            <p className="text-gray-300 leading-relaxed text-lg max-w-4xl">
                                {pelicula.overview || 'No hay sinopsis disponible para esta película.'}
                            </p>
                        </div>

                        <div>
                            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Géneros</h3>
                            <div className="flex flex-wrap gap-2">
                                {pelicula.genres?.map(g => (
                                    <span key={g.id} className="bg-blue-600/20 text-blue-400 px-3 py-1.5 rounded-lg border border-blue-600/30 text-sm font-medium">
                                        {g.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetalleTv