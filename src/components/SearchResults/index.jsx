
/*
import React from "react";
import Song from "../Song";
import "../styles/SearchResults.css";
import { v4 as uuidv4 } from 'uuid';

function SearchResults({ songs, onAdd }) {
  //console.log("Estamos en Results");
  //console.log(songs);

  return (
    <div className="search-results">
      <h2>Resultados de Búsqueda</h2>
      {songs.map((song) => (
        <Song key={uuidv4()} song={song} onAdd={onAdd} />
      ))}
    </div>
  );
}

export default SearchResults;
*/


//----------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------


import React from "react";

import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import "../styles/SearchResults.css";

//import { v4 as uuidv4 } from 'uuid';

function SearchResults({ searchTerm}) {
  const url = searchTerm
    ? `https://www.theaudiodb.com/api/v1/json/2/searchalbum.php?s=${searchTerm}`

    : null;
  console.log("Entre al fetch - esta es la url");
  console.log(url);

  const { data, loading, error, refetch } = useFetch(url);

  if (loading) return <p>Cargando...</p>;
  if (error) return <div><p>{error}</p><button onClick={refetch}>Reintentar</button></div>;
  console.log("Vemos que tiene data");
  console.log(data);

  //const albums = data?.strAlbum || [];
  const albums =  data ? [...data] : [];

  console.log("Vemos el arreglo Albums");
  console.log(albums);

  const albumList = albums.map((album) => ({
    idAlbum: album.idAlbum,   //cambiarlo por el uuid
    title: album.strAlbum,
    artist: album.strArtist,
    strintYearReleased: album.intYearReleased
  }));



  console.log("Generamos el arrglo de Songs");
  console.log(albumList);

  /*const urlSong = searchTerm
    ? `https://www.theaudiodb.com/api/v1/json/2/searchalbum.php?s=${searchTerm}`

    : null;
  */

  //const { dataSong, loadingSong, errorSong, refetchSong } = useFetch(urlSong);



  return (
    <div className="search-results">
      <h2>Resultados de Búsqueda</h2>
      { albumList.map((album) => (
        <div key={album.idAlbum} className="song">
          <Link to={`/song/${album.idAlbum}`}>
            <p><strong>{album.title}</strong> - {album.artist}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default SearchResults;
//<button onClick={() => onAdd(album)}>Agregar a mi biblioteca</button>