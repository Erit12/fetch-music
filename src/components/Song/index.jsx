
import React from "react";
import "../styles/Song.css";

function Song({ song }) {
  return (
    <div className="song">
      <p>Cancion: <strong>{song.strTrack}</strong> - Artista:  {song.strArtist} - Album: ({song.strAlbum})</p>
    </div>
  );
}

//{onAdd && <button onClick={() => onAdd(song)}>Agregar a mi biblioteca</button>}
export default Song;