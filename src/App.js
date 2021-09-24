import './App.css';
import Player from "./Components/Player/Player"
import { useState,useEffect } from 'react';

function App() {
  const [songs] = useState([
    {
      tittle: "Many Men",
      artist: "50 Cent",
      src: "../../audio/track1.mp3"
    },
    {
      tittle: "Knockdown",
      artist: "Basta",
      src: "../../audio/track2.mp3"
    },
    {
      tittle: "Ritmo",
      artist: "Black Eyed Peas ft. J Balvin",
      src: "../../audio/track3.mp3"
    },
    {
      tittle: "Hate Bein Sober",
      artist: "50 Cent, Chief Keef, Wiz Khalifa",
      src: "../../audio/track4.mp3"
    },
    {
      tittle: "Yes",
      artist: "Fat Joe, Cardi B, Anuel AA, Dre",
      src: "../../audio/track5.mp3"
    },
    {
      tittle: "Mallboro",
      artist: "Grant(Staff)",
      src: "../../audio/track6.mp3"
    },
    {
      tittle: "Khalifas Afair",
      artist: "Hambik A'shot",
      src: "../../audio/track7.mp3"
    },
    {
      tittle: "Warriors",
      artist: "Imagine Dragons",
      src: "../../audio/track8.mp3"
    },
    {
      tittle: "Oh My God",
      artist: "Inna",
      src: "../../audio/track9.mp3"
    },
    {
      tittle: "Barz",
      artist: "Latifah",
      src: "../../audio/track10.mp3"
    },
  ]
  )


  const [currentSongIndex, setCurrentSongIndex] = useState(0)
  const [nextSongIndex,setNextSongIndex] = useState(currentSongIndex + 1)

  useEffect(() => {

    setNextSongIndex(currentSongIndex + 1 > songs.length - 1 ? 0 : currentSongIndex + 1)
  },[currentSongIndex])

  return (
    <div className="App">
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </div>
  );
}

export default App;
