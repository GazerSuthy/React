import React from 'react';
import ReactDom from 'react-dom';

import './onePiece.css'

//strawhat's crew bio page
const strawhats = [
    {
        name: "Monkey D. Luffy",
        img: "https://i.pinimg.com/originals/e8/fa/0d/e8fa0d8aaaf0949e135dee823a18c008.jpg",
        age: 19,
        bounty: "1.5 billion berries",
        birthday: "May 5 (Taurus)",
        color:"red"
    },
    {
        name: "Roronoa Zoro",
        img: "https://avatarfiles.alphacoders.com/250/thumb-250889.jpg",
        age: 21,
        bounty: "320 million berries",
        birthday: "November 11, 1503 (Scorpio)",
        color:"green"
    },
    {
        name: "Vinsmoke Sanji",
        img: "https://vignette.wikia.nocookie.net/onepiece/images/e/e5/Sanji_Post_Timeskip_Portrait.png/revision/latest/scale-to-width-down/340?cb=20200703030023",
        age: 21,
        bounty: "330 million berries",
        birthday: "March 2 (Pisces)",
        color:"blue"
    },
    {
        name: "Nami",
        img: "https://i.pinimg.com/originals/d7/81/a2/d781a277f2d92c9ae8e05346f7a986e8.png",
        age: 20,
        bounty: "66 million berries",
        birthday: "July 3 (Cancer)",
        color:"orange"

    },
    {
        name: "Tony Tony Chopper",
        img: "https://avatarfiles.alphacoders.com/173/thumb-173364.jpg",
        age: 17,
        bounty: "100 berries",
        birthday: "December 24 (Capricorn)",
        color:"pink"
    },
    {
        name: "Nico Robin",
        img: "https://vignette.wikia.nocookie.net/saintfairypirates/images/0/06/Nico_Robin.png/revision/latest/scale-to-width-down/340?cb=20170115125506",
        age: 30,
        bounty: "130 million berries",
        birthday: "Feb 6 (Aquarius)",
        color:"purple"
    },
    {
        name: "Usopp",
        img: "https://assets.mycast.io/characters/usopp-12089-normal.jpg?1569438254",
        age: 19,
        bounty: "200 million berries",
        birthday: "April 1 (Aries)",
        color:"yellow"
    },
    {
        name: "Franky",
        img: "https://vignette.wikia.nocookie.net/onepiece-fairytail/images/3/35/Franky.png/revision/latest/scale-to-width-down/340?cb=20200404131555",
        age: 36,
        bounty: "94 million berries",
        birthday: "March 9 (Pisces)",
        color:"lightblue"
    },
    {
        name: "Brook",
        img: "https://vignette.wikia.nocookie.net/fiveworldadventures/images/5/55/Brook.png/revision/latest?cb=20170211190329",
        age: 90,
        bounty: "83 million berries",
        birthday: "April 3, 1434 (Aries)",
        color:"white"
    },
]

//render each strawhat pirate info card
function Crew(){
    return(
        <section className="container">
            {
            /*
            mistake:
                tried to iteratorate through array using foreach instead of map, however foreach doesn't modify the array... map return's a new array
                with the components that have access to the object's data
            lesson: 
                if the array contain's objects than we must map the object to an component to be rendered, the render function take's care
                of rendering the map object "under the hood".
            */
            }
            {
                strawhats.map((pirate)=>{
                    //return a component for each object in the array
                    return <Bio key={pirate.color} {...pirate}/>
                })
            }
        </section>
    );
}

//bio-card layout of each pirate
function Bio(props){
    //props is an object so we need to dereference to it's key values
    const {name, img, age, bounty, birthday, color} = props
    return(
        // inside the html we use {} to go from html "JSX" back to javascript
        <div className="display-info" style={{backgroundColor:`${color}`}}>
            {/* display bio card */}
            <img src={img} alt=""/>
            <h2>{name}</h2>
            <span>{age} yrs,  {birthday}</span>
            <h4>{bounty}</h4>
        </div>
    );
}

ReactDom.render(<Crew />,document.getElementById('root'));

