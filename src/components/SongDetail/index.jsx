import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import "../styles/SongDetail.css";

function SongDetail( { onAdd } ) {
  const { id } = useParams();
  const url = `https://www.theaudiodb.com/api/v1/json/2/track.php?m=${id}`;

  const { data, loading, error, refetch } = useFetch(url);

  if (loading) return <p>Cargando...</p>;
  if (error) return <div><p>{error}</p><button onClick={refetch}>Reintentar</button></div>;

  const songs =  data ? [...data] : [];

  if (!songs) return <p>No se encontró información del álbum.</p>;

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

export default SongDetail;