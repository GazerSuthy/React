import React from 'react'
import {useChildrenContext} from './context'

const Cartitem = ({amount,id,img,price,title}) => {
    //pass in functionalities and values from context
    const {removeItem, increaseItem, decreaseItem} = useChildrenContext();
    return (
        <section>
            <div className="item-display">
                <img className="item-img" src={img} alt=""/>
                <div className="item-info">
                    <h4 className="item-title">{title}</h4>
                    <p className="price">${price}</p>
                    <div className="remove-button">
                    
                    <button className="remove" onClick={
                        //invoke function that call's removeItem(param)
                        ()=>{removeItem(id)}
                    }>Remove</button>
                    </div>
                </div>
        
                <div className="update-item">
                    {/* update on deep work training: on 4th session forgot to pass id to func and spend 20 min debugging... 
                        however you got to start of somewhere though! first day of deep work noticed that my focus level's dropped
                        intensively after the 1 hour... I love the challenge :D The more I pratice the more attentive I can
                        be for a longer period of time meaning more productive work in the given energy/time period, */}
                    <button className="arrow upArrow" onClick={()=>{increaseItem(id)}} >^</button>
                    <p className="item-amount">{amount}</p>
                    <button className="arrow downArrow" onClick={()=>{decreaseItem(id)}}>v</button>
                </div>
            </div>
        </section>
    )
}

export default Cartitem
