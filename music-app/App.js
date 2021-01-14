import './App.css';
import Sidebar from './components/sidebar'
import {Player} from './components/musicPlayer'
import {useGlobalContext} from './context'

/* Don't be afraid of trying, you are gonna fail but you are gonna learn! 
Don't let failure get to your heart and success get to your head - Ralph Smart ❤️  */



function App() {
  const {isPlaying} = useGlobalContext();
  return (
    <div className="App">
      <Sidebar></Sidebar>
      {isPlaying ? <Player/> : <PlayerOFF/>}
    </div>
  );
}

// temp player off
function PlayerOFF(){
  return(
    <div className="Player-OFF"></div>
  )
}

export default App;
