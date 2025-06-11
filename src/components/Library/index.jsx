import React from "react";
import Song from "../Song";
import "../styles/Library.css";

function Library({ songs }) {
  return (
    <div className="library">
      <h2>Mi Biblioteca</h2>
      {songs.length === 0 ? (
        <p>No has agregado canciones aún.</p>
      ) : (
        songs.map((song) => <Song key={song.idTrack} song={song} />)
      )}
    </div>
  );
}

export default Library;