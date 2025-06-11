/*

import React from "react";
import "../styles/Song.css";

function Song({ song, onAdd }) {
  return (
    <div className="song">
      <p><strong>{song.strAlbum}</strong> - {song.intYearReleased} </p>
      {onAdd && <button onClick={() => onAdd(song)}>Agregar a mi biblioteca</button>}
    </div>
  );
}

export default Song;
*/

//----------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------



import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import "../styles/SongDetail.css";

function SongDetail( { onAdd } ) {
  const { id } = useParams();
  const url = `https://www.theaudiodb.com/api/v1/json/2/track.php?m=${id}`;
  console.log("Entre al Detail");
  console.log(url);

  const { data, loading, error, refetch } = useFetch(url);

  if (loading) return <p>Cargando...</p>;
  if (error) return <div><p>{error}</p><button onClick={refetch}>Reintentar</button></div>;
  console.log("Informacion del data");
  console.log(data);

  //const album = data?.album?.[0];
  const songs =  data ? [...data] : [];


  if (!songs) return <p>No se encontró información del álbum.</p>;

  console.log("Que datos del album desplegar");
  console.log(songs);

  return (
    <div className="song-detail">
      <Link to={`/`}>Go back</Link>
      { songs.map((song) => (
        <div key={song.idTrack} className="song">
          
            <p>Cancion: <strong>{song.strTrack}</strong> - Artista:  {song.strArtist}  -  Album: {song.strAlbum}</p>
            <button onClick={() => onAdd(song)}>Agregar a mi biblioteca</button> 
          
        </div>
      ))}


    </div>
  );
}
/*
<h2>{album.strAlbum}</h2>
<p><strong>Artista:</strong> {album.strArtist}</p>
<p><strong>Cancion:</strong> {album.strTrack}</p>
*/
//<img src={album.strAlbumThumb} alt={album.strAlbum} style={{ maxWidth: "300px" }} />
//<p>{album.strDescriptionEN || "Sin descripción disponible."}</p>
export default SongDetail;