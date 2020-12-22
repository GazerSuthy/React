import React from 'react'
import {CocktailDrink} from './cocktail'
import {useGlobalContext} from '../context'
import Form from './form'
import Loading from './loading'

export const DisplayUi = () => {
    let {loading, data} = useGlobalContext();
    const {drinks} = data;  //destructure object to get array

    if(loading){
        return(
            <Loading></Loading>
        )
    }
    if(drinks === null){
        return(
            <main>
                <Form/>
                <h1 className="noSearch">No Search Matches!</h1>
            </main>
        )
    }
    
    return (
        <main>
            <Form/>
            <h1 className="heading">Cocktails</h1>
            <section className="cocktails-layout">
                {/* map each cocktail to a cocktail component */}
                {drinks.map((drink)=>{
                    //map has return 
                    return(<CocktailDrink key={drink.idDrink} {...drink}/>);
                })}
            </section>
        </main>
    )
}
