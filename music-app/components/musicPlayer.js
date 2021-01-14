import React, { useEffect } from 'react'
import {useGlobalContext} from '../context'
import {Howl, Howler} from 'howler';

// I think i might have to save as a url link in a database and than fetch the song from there
import blackclover from '../songs/Grandeur.mp3'
import onepiece from '../songs/onepiece.mp3'




export const Player = () => {
    const {isPlaying,songSwitch,playBackStatus,selectedSong,setPlayBackStatus} = useGlobalContext();
    const PlayerRef = React.useRef(null);
    const {name,songfile} = selectedSong;
    
    let clickedSong;
    if(songfile === 'blackclover'){
        clickedSong = blackclover
    }else{
        clickedSong = onepiece
    }


    useEffect(()=>{
        // use ref to access audio element, useEffect since playing audio is a sideeffect controlled by DOM not react component
        if(isPlaying && playBackStatus === "PLAY"){
            console.log(PlayerRef.current)
            console.log("Play")
            PlayerRef.current.play();
        }

        if(isPlaying && playBackStatus === "PAUSE"){
            console.log(PlayerRef.current)
            console.log("Pause")
            PlayerRef.current.pause();
        }

    }, [playBackStatus])

    

    return(
        <div className="Player-ON">
            <audio ref={PlayerRef} src={clickedSong} className="player"></audio>
            <div className="display">
                <div className="image"></div>
                <div className="media-controls">
                    <h1 className="title">{name}</h1>
                    {/* <button className="play-pause" onClick={setPlayBackStatus}>Play</button> */}
                </div>
            </div> 
        </div>
    )
}



