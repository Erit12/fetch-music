import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import "../styles/SearchResults.css";


function SearchResults({ searchTerm}) {
  const url = searchTerm
    ? `https://www.theaudiodb.com/api/v1/json/2/searchalbum.php?s=${searchTerm}`

    : null;


  const { data, loading, error, refetch } = useFetch(url);

  if (loading) return <p>Cargando...</p>;
  if (error) return <div><p>{error}</p><button onClick={refetch}>Reintentar</button></div>;

  const albums =  data ? [...data] : [];


  const albumList = albums.map((album) => ({
    idAlbum: album.idAlbum,   //cambiarlo por el uuid
    title: album.strAlbum,
    artist: album.strArtist,
    strintYearReleased: album.intYearReleased
  }));

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