import { useState, useEffect } from 'react';
import Gallery from './Gallery'
import './App.css';
import ButtonBar from './ButtonBar';

function App() {
  let [artId, setArtId] = useState(12720)
  let [data, setData] = useState({})

  const handleIterate = (e) => {
    setArtId(artId + Number(e.target.value))
  }

  useEffect(() => {
    document.title = 'Welcome to ArtWorld'
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`)
    .then(response => response.json())
    .then(resData => setData(resData))
    .catch(err => console.log(err))
  }, [artId])

  return (
    <div className="App">
      <Gallery objectImg={data.primaryImage} artist={data.artistDisplayName} title={data.title} />
      <ButtonBar handleIterate={handleIterate}/>
    </div>
  );
}

export default App;