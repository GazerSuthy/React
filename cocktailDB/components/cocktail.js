import React from 'react'
import {Link} from 'react-router-dom'


export const CocktailDrink = ({idDrink,strDrink,strGlass,strDrinkThumb, strAlcoholic}) => {
    return (
        <div className="drink-card">
            <img src={strDrinkThumb} alt=""/>
            <div className="drink-card-info">
                <h1 className="drink-name">{strDrink}</h1>
                <h3 className="drink-glass">{strGlass}</h3>
                <h6 className="drink-info">{strAlcoholic}</h6>
                {/* we want to route to new page so we need a link not a button */}
                {/* <button className="details" onClick={()=>{viewDrink(strDrink,strGlass,strDrinkThumb,strAlcoholic)}}>Details</button> */}
                <Link to={`cocktails/${idDrink}`} className="detail-button">Details</Link>
            </div>
        </div>
    )
}


