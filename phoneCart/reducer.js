import React from 'react'
import data from './data'

const defaultState = {
    isLoading:true,
    cartItems:data,
    itemCount:0,
    totalPrice:0,
}

function reducer(state,action){
    switch(action.type){
        case "CLEARITEMS":
            return{
                ...state,
                cartItems:[]
            };
        case "REMOVE_ITEM":
            return{
                ...state,
                cartItems:action.payload
            }
        case "UPDATE_PRICE":
            /* felt drained on thursday, it take's pratice to build up that deep work consistency baby :D 
            {update: 1 hour later}
            - after eating food "replanishing my energy and feeling good" i legit solved problem i was working on for a hour in 
            4 mins... 😮 this shows that i have to resond to the present moment and that if my energy is not right,
            hold of on my focus training, feel good and start. I was trying to force focus training while "feeling bad" / low vibration

            law of correspondance and causating:
            -> how we feel internally will affect what we do externally (productivity)
            -> what we do now echoes on for eternity meaning we waste energy [distractions], we will feel it the next day! 
            -> thank you universe ❤️ for this important lesson and 
            -> thank you mentor ralph smart ❤️   or teaching hematite principles 
            */
            let total = 0;
            state.cartItems.forEach((item)=>{
                total = total + (item.amount * item.price) 
            })

            total = total.toFixed(2);

            return{
                ...state,
                totalPrice: total
            }

        case "UPDATE_ITEMCOUNTER":
            let totalItems = 0
            //add up all the amount's of each items
            state.cartItems.forEach((item)=>{
                totalItems = totalItems + item.amount
            })

            return{
                ...state,
                //"key" : value
                itemCount: totalItems
            }
        case "INCREASE":
            /* in order to access a property in a state object we have to iterate over it and return a new object
               cant do "state.cartItems[id].amount" */
            let updatedCart = state.cartItems.map((item)=>{
                //update a specific item 
                if(item.id === action.payload){
                    //copy all the properties from the item "...item"; create the amount property "amount:" and increase it with the old item's amount property
                    let updateItemObject = {
                        ...item,
                        //[key = amount of this new object]: [value = old item's amount + 1]  -> the key can be any name but we want to stay consistent since were replacing objects */
                        amount: item.amount + 1
                    }
                    return updateItemObject;
                }else{
                    //return unchanged item's so we don't lose info
                    return item
                }
            })
            //update state's cartItem with the new updated cart
            let updateState = {
                ...state,
                cartItems:updatedCart
            }
            return updateState;
        case "DECREASE":
            //check if amount is equal to one or not
            let isAmountEqual1 = true
            state.cartItems.forEach((item)=>{
                if(item.id === action.payload){
                    if(item.amount !== 1){
                        isAmountEqual1 = false;
                    }
                }
            })

            // if amount is one we will remove item (filter), else we just update amount number (map)
            if(isAmountEqual1 === false){
                let updatedCart = state.cartItems.map((item)=>{
                    if(item.id === action.payload){
                        //copy all the properties from the item "...item"; create the amount property "amount:" and increase it with the old item's amount property
                        let updateItemObject = {
                            ...item,
                            //[key = amount of this new object]: [value = old item's amount - 1]  -> the key can be any name but we want to stay consistent since were replacing objects */
                            amount: item.amount - 1
                        }
                        return updateItemObject;
                    }else{
                        //return unchanged item's so we don't lose info
                        return item
                    }
                })
                //update state's cartItem with the new updated cart
                let updateState = {
                    ...state,
                    cartItems:updatedCart
                }
                return updateState;
            }else{
                let updateCart = state.cartItems.filter((item)=>{
                    if(item.id === action.payload){
                        //only return if the amount is greater than 1 else item will get deleted
                        if(item.amount > 1){
                            //return a new item object
                            let updatedItem = {
                                ...item,
                                amount: item.amount - 1
                            }
                            return updatedItem
                        }
                    }else{
                        return item
                    }
                })
                return{
                    ...state,
                    cartItems:updateCart
                }
            }

        case "FETCHED_DATA":
            console.log("AFter")
            return{
                ...state,
                cartItems:action.payload,
                isLoading:false
            }
    }
}


export {defaultState,reducer};

