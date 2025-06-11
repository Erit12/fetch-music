import axios from "axios";
/*import { useEffect, useState } from "react";


const useFetch = ( {artist} ) =>{
  const [albumState, setAlbumState] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect( () => {

    const fecthAlbums = async ()=> {
      try {
        const response = await axios.get(`https://www.theaudiodb.com/api/v1/json/2/discography.php?s=${artist}`);


        setAlbumState(response.data.album);

        if ( response.data.album === null ) { setError("No hay albums para mostrar"); }
        //console.log(response);

      } catch (error) {
        console.log("Entre al error");
        setAlbumState([]);
        setError("Failed to fecth albums");
      }
    setIsLoading(false);
    }
    fecthAlbums();
  }, [artist])

  return { albumState, isLoading, error};

}

export default useFetch;

*/
//----------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------

import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(url);
      console.log(response);
      const result = url.includes("track") ? response.data.track : response.data.album;
      console.log("datos del response");
      console.log(result);
      setData(result);
    } catch (err) {
      setError("Hubo un problema al cargar los datos. Intenta nuevamente");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (url) fetchData();
  }, [url]);

  return { data, loading, error, refetch: fetchData };
}

export default useFetch;