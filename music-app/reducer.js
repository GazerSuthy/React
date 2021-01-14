import data from './data'
export const initalState = {
    // states for side bar component
    songQueue : data,
    formInput: "",
    isPlaying: false,
    selectedSong:null,
    currentSongIndex: 0,
    playBackStatus: "PLAY",
    songSwitch:false
}

export const reducer =(state,action)=>{
    switch(action.type){

        //play mode states
        case 'Play clicked Song':
            // player is already playing a song and user clicks different song
            if(state.isPlaying === true){
                return{
                    ...state,
                    songSwitch:true,
                    playBackStatus:"PLAY"
                }
            }
            return{
                ...state,
                isPlaying:true,
                selectedSong:action.payload
            }

        case 'Set Playback Status':
            let newPlayBackStatus;
            if(state.playBackStatus === "PLAY"){
                newPlayBackStatus = "PAUSE"
            }else{
                newPlayBackStatus = "PLAY"
            }
            return{
                ...state,
                playBackStatus:newPlayBackStatus
            }

        case 'Play Song Queue':
            return{
                ...state,
                isPlaying:true,
            }
        //song search state
        case 'User Input':
            //empty search bar when you are creating your playlist (about to create playlist)
            if(state.creatingPlaylistMode === true && action.payload ===""){
                return{
                    ...state,
                    songQueue:data,
                    formInput:action.payload
                }
            }
            //empty search bar display on playlist mode (already created playlist)
            if(state.playlistMode === true && action.payload === ""){
                return{
                    ...state,
                    songQueue:state.userPlayList,
                    formInput:action.payload
                }
            }
            // empty search bar display all songs
            if(action.payload === ""){
                return{
                    ...state,
                    songQueue:data,
                    formInput:action.payload
                }
            }
            // filter data based on user input
            let re = new RegExp(`${action.payload}`)
            let array = state.songQueue
            let filteredSongs = array.filter((songObject)=>{
                let {name} = songObject
                let matchLower = re.test(name.toLowerCase())
                let matchUpper = re.test(name.toUpperCase())

                if(matchLower || matchUpper){
                    return songObject
                }
            })

            
            return{
                ...state,
                songQueue:filteredSongs,
                formInput:action.payload
            }
    
        //song drag state
        case 'Update Song Queue Order when dragged':
            let {start, end} = action.payload;
            let {songQueue} = state;

            
            //dragging a song has two distinct motions either being dragged 'down' or 'up' 
            if(end !== null){
                let tempArray = []
                //moving song down 
                if(end.index > start.index){
                    // copy from end of array to end index
                    for(let i = songQueue.length-1; i > end.index; i--){
                        tempArray.push(songQueue[i])
                    }

                    //copy dragged song
                    tempArray.push(songQueue[start.index])

                    //copy rest of array from the end index, skip the start index
                    for(let i = end.index; i >= 0; i--){
                        if(i !== start.index){
                            tempArray.push(songQueue[i])
                        }
                    }

                    //reverse array
                    let array = tempArray.reverse();

                    return{
                        ...state,
                        songQueue:array
                    }
                }

                //moving song up
                if(end.index < start.index){
                    //copy from start of array to end index
                    for(let i = 0; i < end.index; i++){
                        tempArray.push(songQueue[i])
                    }

                    //copy dragged song
                    tempArray.push(songQueue[start.index])

                    //copy rest of array from end index to the end of array, skip the start index
                    for(let i = end.index; i < songQueue.length; i++){
                        if(i !== start.index){
                            tempArray.push(songQueue[i])
                        }
                    }

                    return{
                        ...state,
                        songQueue:tempArray
                    }
                }
            }
            return {...state}
    }     
}