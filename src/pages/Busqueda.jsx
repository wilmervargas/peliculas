import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CardPe from '../components/CardPe';
import CardTv from '../components/CardTv';

const Busqueda = () => {

    const { query } = useParams()
    const [datos, setDatos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedPelicula, setSelectedPelicula] = useState(null);

 useEffect(() => {
        const controller = new AbortController();
        const APIBusqueda = `https://api.themoviedb.org/3/search/multi?api_key=ecbcdcf9044928d12b179d9153f5a269&language=es-VE&query=${encodeURIComponent(query)}&include_adult=false`;

        const getDatos = async () => {
            try {
                setLoading(true);
                const response = await fetch(APIBusqueda, { signal: controller.signal });
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setDatos(data.results);
            } catch (err) {
                if (err.name !== 'AbortError') {
                    setError(err.message || 'Error de red o parseo');
                }
            } finally {
                setLoading(false);
            }
        };

        if (query) {
            getDatos();
        }

        return () => controller.abort();
    }, [query]);

    if (loading) {
        return (
            <div className="text-center py-10">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
                <p className="text-blue-400 mt-4">Buscando...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center py-10 text-red-400 bg-red-500/10 rounded-xl border border-red-500/20">
                <h4 className="font-bold mb-2">Error al buscar</h4>
                <p>{error}</p>
            </div>
        );
    }
    
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
            <h1 className="text-3xl font-bold text-white mb-8 text-center ">
                Resultados para: "{query}"
            </h1>
            
            {datos.length === 0 ? (
                <div className="text-center text-gray-400 py-10">
                    No se encontraron resultados para esta búsqueda.
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {datos.filter(item => item.media_type === 'movie' || item.media_type === 'tv').map((item) => {
                        if (item.media_type === 'tv') {
                            return <CardTv key={item.id} item={item} setSelectedPelicula={setSelectedPelicula} selectedPelicula={selectedPelicula} />
                        }
                        return <CardPe key={item.id} item={item} setSelectedPelicula={setSelectedPelicula} selectedPelicula={selectedPelicula} />
                    })}
                </div>
            )}
        </div>
    )
}

export default Busqueda