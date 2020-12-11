import React, {useEffect, useReducer, useContext } from 'react'
import {defaultState,reducer} from './reducer'

const AppContext = React.createContext();   // return's two component's (provider and consumer)

//component which wraps around root component to "Mark it as Root"
const AppProvider = ({children})=>{
    const [state, dispatch] = useReducer(reducer,defaultState);

    // app functions
    const clearItems = ()=>{
        dispatch({type:"CLEARITEMS"})
    }

    const removeItem = (id)=>{
        //filter out the removed item from the list
        let updatedList = state.cartItems.filter((item)=>{
            //return to updatedList only if the id does not match the id of the removed item"
            if(item.id !== id){
                return item;
            }
        })

        // pass updatedList to reducer
        dispatch({type:"REMOVE_ITEM", payload:updatedList})
    }

    const increaseItem = (id)=>{
        dispatch({type:"INCREASE", payload:id})
    }

    const decreaseItem = (id)=>{
        dispatch({type:"DECREASE", payload:id})
    }

    //fetch data
    const retrieveData = async function(){
        const response = await fetch("https://course-api.com/react-useReducer-cart-project")
        let data = await response.json();
        dispatch({type:"FETCHED_DATA", payload:data})
    }


    /* Since i want to change state's after every rerender i want to use useEffect, i considered this but thought 
    we only use useEffect for stuff outside component such as fetching and eventListner's but we can use the fact
    that useEffect get's called after every rerender
    */

    //this useEffect will only trigger once to fetch data
    useEffect(()=>{
        retrieveData()
    },[])

    useEffect(()=>{
        //update total price 
        dispatch({type:"UPDATE_PRICE"})
        
        //update itemCount
        dispatch({type:"UPDATE_ITEMCOUNTER"})

    },[state.itemCount,state.cartItems])
    
    return(
        //provider is gonna return a context which stores the values we passed in, [How do we pass a function though>]
        <AppContext.Provider value={{...state,clearItems,removeItem, increaseItem, decreaseItem}}>{children}</AppContext.Provider>
    );
}


//create a custom hook (use...) which gives access to the context we created along any of the children components
export const useChildrenContext = ()=>{   
    //useContext returns the current context value (of the context we created)
    return useContext(AppContext);
}

export {AppContext, AppProvider}