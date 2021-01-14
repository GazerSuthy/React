import React from 'react'
import { Draggable } from 'react-beautiful-dnd';
import {useGlobalContext} from '../context'

// Song Component for each individual song
const Song = ({name,index, songid,songfile}) => {
    const {playSpecificSong} = useGlobalContext();
    return (
        //solved the problem of everything being dragged together, by using the console, and my own knowledge "200iq plays, Im hyped, there's levels to this shit!"
        <Draggable index={index} draggableId={`draggable-${songid}`}> 
            {/* we don't want the draggableId to be index based since the id's will always change then */}
            {(provided)=>(
                <div className="song-layout"
                // housekeeping for Draggable
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                onDoubleClick={()=>{playSpecificSong(name,songfile)}}
                >
                    <input type="checkbox"
                    className="checkBox hide"
                    name={songid}/>
                    <label htmlFor={songid} className="songName">{name}</label>
                </div>
            )
            }
        </Draggable>
    )
}

export default Song
