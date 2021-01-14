import React from 'react'
import {useGlobalContext} from '../context'
// react-beautiful-dnd api: https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/api/droppable.md
import { DragDropContext, Droppable} from 'react-beautiful-dnd';
import Song from './individualSong'

const Sidebar = () => {
    const {songQueue,formInput,handleSearchInput,handleSongDrags,handleSongPlay} = useGlobalContext();
       
    return (
        <DragDropContext onDragEnd={handleSongDrags}>
            <section className="sidebar-container">
                <form className="search">
                    <input
                    type="text"
                    name="music-search"
                    value={formInput}
                    onChange={handleSearchInput}
                    placeholder="Enter a song"
                    />
                </form>

                <Droppable droppableId="droppable-1">
                    {/* housekeeping function for Droppable*/}
                    {(provided) =>(
                        <div className="songs-menu"
                        // housekeeping
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        >
                            {/* display each song */}
                            {<form className="pickSong">
                                {/* map each song in the songQueue to a song component */}
                                {songQueue.map((song, index)=>{
                                    let {name,id,songfile} = song
                                    return(<Song key={id} name={name} index={index} songid={id} songfile={songfile}/>)
                                })}
                                <button className="playButton" type="submit" onClick={handleSongPlay}>▶️</button>
                            </form>}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </section>
        </DragDropContext>
    )
}

export default Sidebar
