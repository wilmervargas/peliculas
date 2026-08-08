import { useEffect, useState } from "react";

import CardPe from "../components/CardPe";
const APIProximamente = 'https://api.themoviedb.org/3/movie/upcoming?api_key=ecbcdcf9044928d12b179d9153f5a269&language=es-VE';

const Proximamente = () => {
    const [datos, setDatos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedPelicula, setSelectedPelicula] = useState(null);

    useEffect(() => {
        const controller = new AbortController();

        const getDatos = async () => {
            try {
                const response = await fetch(APIProximamente, { signal: controller.signal });
                if (!response.ok) {
                    throw new Error(
                        `HTTP error! status: ${response.status}`
                    );
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

        getDatos();

        return () => controller.abort(); // Cleanup de la petición
    }, []);

    if (loading) {
        return (
            <div className="text-center py-10">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-emerald-500 mx-auto"></div>
                <p className="text-emerald-400 mt-4">Cargando productos...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center py-10 text-red-400 bg-red-500/10 rounded-xl border border-red-500/20">
                <h4 className="font-bold mb-2">Error al cargar</h4>
                <p>{error}</p>
            </div>
        );
    }
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
            <h1 className="text-3xl font-bold text-white mb-8 text-center md:text-left">
                Proximamente
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {datos.map((item) => (
                    <CardPe
                        key={item.id} 
                        item={item}    
                        selectedPelicula = {selectedPelicula}
                        setSelectedPelicula = {setSelectedPelicula}
                    />
                ))}
            </div>
            
        </div>
    );
}

export default Proximamente