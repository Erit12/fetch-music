import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import Library from "./components/Library";
import SongDetail from "./components/SongDetail";
import "./components/styles/App.css";


function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [library, setLibrary] = useState([]);

  const addToLibrary = (song) => {
    console.log("Que cancion agregamos");
    console.log(song);
    if (!library.find((s) => s.idTrack === song.idTrack)) {
      setLibrary([...library, song]);
    }
  };

  useEffect(() => {
    console.log("La biblioteca se ha actualizado:", library);
  }, [library]);

  return (

      <div className="App">
        <Header />
        <SearchBar setSearchTerm={setSearchTerm} />
        <Routes>
          <Route
            path="/*"
            element={
              <div className="sections">
                <SearchResults searchTerm={searchTerm}  />
                <Library songs={library} />
              </div>
            }
          />
          <Route path="/song/:id" element={<SongDetail onAdd={addToLibrary}/>} />
        </Routes>
      </div>

  );
}


export default App;