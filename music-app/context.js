import React, {useReducer,useContext} from 'react'
import {reducer,initalState} from './reducer'
import $ from 'jquery'

// create a context which gives us a provider and a consumer
export const MusicContext = React.createContext();

// main app wrapper
export const MusicApp = ({children})=>{
    const [state,dispatch] = useReducer(reducer, initalState);

    //functions
    const handleSongDrags = (e)=>{
        const coords = {start:e.source, end:e.destination}
        dispatch({type:'Update Song Queue Order when dragged', payload:coords})
    }

    const handleSearchInput = (e)=>{
        e.preventDefault();
        dispatch({type:'User Input', payload:e.target.value})
    }

    const handleSongPlay = (e) =>{
        e.preventDefault();
        dispatch({type:'Play Song Queue'})
    }


    // play's a specific song when a song is double clicked
    const playSpecificSong = (name,songfile)=>{
        let songObj = {name,songfile}
        dispatch({type:"Play clicked Song", payload:songObj})
    }

    const setPlayBackStatus = ()=>{
        dispatch({type:"Set Playback Status"})
    }

    
    return(
        // return our context with children inside it [house keeping for context's]
        <MusicContext.Provider value={{...state,handleSongDrags,handleSearchInput,playSpecificSong,handleSongPlay,setPlayBackStatus}}>{children}</MusicContext.Provider>
    )
}

// custom hook that call's our context
export const useGlobalContext = ()=>{
    // gives us access to the musicContext we created in each of our children components
    return useContext(MusicContext);
}

