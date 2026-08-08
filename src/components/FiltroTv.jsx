import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const APIFiltroTv = 'https://api.themoviedb.org/3/genre/tv/list?api_key=ecbcdcf9044928d12b179d9153f5a269&language=es-VE';

const FiltroTv = ({ onSelect }) => {
    const [datos, setDatos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        const controller = new AbortController();

        const getDatos = async () => {
            try {
                const response = await fetch(APIFiltroTv, { signal: controller.signal });
                if (!response.ok) {
                    throw new Error(
                        `HTTP error! status: ${response.status}`
                    );
                }
                const data = await response.json();
                setDatos(data.genres);
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
            <div className="flex justify-center items-center py-4">
                <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="px-4 py-2 text-sm text-red-400 text-center">
                Error al cargar
            </div>
        );
    }

    return (
        <div className="max-h-60 overflow-y-auto custom-scrollbar py-1">
            {datos.map((genre) => (
                <Link
                    key={genre.id}
                    to={`/tv/${genre.id}/${genre.name.toLowerCase()}`}
                    onClick={() => {
                        if (typeof onSelect === 'function') onSelect();
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
                >
                    {genre.name}
                </Link>
            ))}
        </div>
    )
}

export default FiltroTv