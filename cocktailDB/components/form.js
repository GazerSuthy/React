import React from 'react'
import {useGlobalContext} from '../context'

/* since were passing handleInput() from context this is an uncontrolled input because DOM handles
   form data, the data is controlled outside of this Form component since were using context */
const Form = () => {
    let {userInput,handleInput} = useGlobalContext();
    let focusSearchbar = React.useRef("");

    // I'm only using useRef to focus search bar after every render, need to learn how to do uncontrolled input's using useRef
    React.useEffect(()=>{
        focusSearchbar.current.focus();
    },[])

    return (
        <section className="input-form">
            <form>
                <div className="label"> <label>Search your favorite Cocktail!</label></div>
                <div className="input">
                    <input type="text"
                    name="cocktail-search"
                    id="cocktail-form"
                    //ref access's DOM elements (apparently we dont need value if we have ref, let's find)
                    ref={focusSearchbar}
                    // uncontrolled input because both value "state" and onChange are passed from outside this component 
                    value={userInput}
                    onChange={handleInput}
                    />
                </div>
            </form>
        </section>
    )
}

export default Form
