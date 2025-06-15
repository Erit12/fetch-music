import "../styles/Song.css";

function Song({ song }) {
  return (
    <div className="song">
      <p>Cancion: <strong>{song.strTrack}</strong> - Artista:  {song.strArtist} - Album: ({song.strAlbum})</p>
    </div>
  );
}

export default Song;