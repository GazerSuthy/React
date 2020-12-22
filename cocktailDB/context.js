import React,{useContext, useState} from 'react'

//context archetype
export const myContext = React.createContext();

//wrapped around app sharing context to children
export const AppProvider = ({children})=>{
    // states
    const [userInput, setUserInput] = useState("");
    const [loading,setLoading] = useState(true);
    const [data, setData] = useState({});

    //fetch data
    const fetchCockTails = async()=>{
        let data = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${userInput}`);
        let response = await data.json();
        return response
    }


    //functions
    const handleInput = (e)=>{
        e.preventDefault();
        setUserInput(e.target.value)               

        /* [We are going to use cocktailDb's api instead of filtering our own data]  - my custom regex works though,
        let re = new RegExp(`${e.target.value}`)
        const {drinks} = data;

        let searchData = drinks.filter((drink)=>{
            let match = re.test(drink.strDrink.toLowerCase())
            if(match){
                return drink;
            }
        })

        setFilteredData(searchData); */
    }

    React.useEffect(()=>{
        setLoading(true)
        // update data state after fetch
        let cockTails_data = fetchCockTails();
        cockTails_data.then((data)=>{
            setData(data);
            setLoading(false);
        })

    },[userInput])

    return(
        // we are passing an object as value so rereference object in component's
        <myContext.Provider value={{userInput,data,loading,handleInput}}>{children}</myContext.Provider>
    )
}

export const useGlobalContext = ()=>{
    // access's context {saves importing useContext in every child component and passing myContext; we just have to pass custom hook we created!}
    return useContext(myContext)
}



