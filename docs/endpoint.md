const APIPelTendenciasCine  ='https://api.themoviedb.org/3/trending/movie/day?api_key=ecbcdcf9044928d12b179d9153f5a269&language=es-VE'; //tendencias cine

const APIEnTelevision       ='https://api.themoviedb.org/3/tv/on_the_air?api_key=ecbcdcf9044928d12b179d9153f5a269&language=es-VE';  //en television

const APIPelProximamente    ='https://api.themoviedb.org/3/movie/upcoming?api_key=ecbcdcf9044928d12b179d9153f5a269&language=es-VE';   //proximamente 

const APIPelRecientes       ='https://api.themoviedb.org/3/movie/now_playing?api_key=ecbcdcf9044928d12b179d9153f5a269&language=es-VE'; //en cartelera hoy

const APIPelMCTMDBEl        ='https://api.themoviedb.org/3/movie/top_rated?api_key=ecbcdcf9044928d12b179d9153f5a269&language=es-VE';  //mejor valoradas cine

const APIPelMCTMDBElTv      ='https://api.themoviedb.org/3/tv/top_rated?api_key=ecbcdcf9044928d12b179d9153f5a269&language=es-VE';  //mejor valoradas tv


const APIPeliculas       =`https://api.themoviedb.org/3/person/${id}/credits?api_key=ecbcdcf9044928d12b179d9153f5a269&language=es-ES&sort_by=popularity.desc`;


filtros cine
const APIFiltroCine   ='https://api.themoviedb.org/3/genre/movie/list?api_key=ecbcdcf9044928d12b179d9153f5a269&language=es-VE';

filtro tv
const APIFiltroTv   ='https://api.themoviedb.org/3/genre/tv/list?api_key=ecbcdcf9044928d12b179d9153f5a269&language=es-VE';

detalles para el cine 
API=`https://api.themoviedb.org/3/movie/${id}?api_key=ecbcdcf9044928d12b179d9153f5a269&language=es-ES`

detalles para la tv
API=`https://api.themoviedb.org/3/tv/${id}?api_key=ecbcdcf9044928d12b179d9153f5a269&language=es-ES`;