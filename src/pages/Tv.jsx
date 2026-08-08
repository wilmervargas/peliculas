import React from 'react'
import { useParams } from 'react-router-dom'

const Tv = () => {
    const { id, name } = useParams()

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
            <h1 className="text-4xl font-bold text-white mb-6 capitalize">
                Películas y Series de {name}
            </h1>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 text-center text-gray-400">
                <p className="text-xl mb-2 text-white">Mostrando películas y series del género con ID: <span className="font-bold text-blue-400">{id}</span></p>
                <p className="text-sm">Próximamente aquí se mostrará la lista de películas.</p>
            </div>
        </div>
    )
}

export default Tv