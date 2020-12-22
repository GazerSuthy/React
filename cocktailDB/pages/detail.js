import React from 'react'
import {useParams, Link} from 'react-router-dom'
import Loading from '../components/loading'
import {NavBar} from '../components/navbar'

/* Component display's a single cocktail */
const Detail = () => {
    const [fetchCocktail,setFetchCocktail] = React.useState({});
    const [loading, setLoading] = React.useState(true);

    //retrieve id from url ":/{id} the ":" stores the values that come after which can be used by useParams"
    const {id} = useParams();

    //fetch a specific Cocktail
    const fetchCockTailID = async()=>{
        let data = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        let response = await data.json();
        return response
    }

    React.useEffect(()=>{
        setLoading(true);
        //fetch for specific id
        let data = fetchCockTailID();
        data.then((cocktail)=>{
            setFetchCocktail(cocktail);
            setLoading(false);
        })
    },[])

    let {drinks} = fetchCocktail;

    if(loading === true){
        return(
            <Loading></Loading>
        )
    }

    //destructure fetched object
    let {strDrink,strDrinkThumb,strInstructions,strGlass,strAlcoholic, strCategory, strIngredient1, strIngredient2, strIngredient3, strIngredient4} = drinks[0]

    return (
        <div>
            <NavBar/>
            <Link to="/" className="backhome-btn">Back Home</Link>
            <h1 className="detail-title">{strDrink}</h1>
            <div className="detail-layout">
                <div className="detail-picture">
                <img src={strDrinkThumb} alt=""/>
                </div>
                <div className="detail-info">
                    <h3 className="detail-name"><span className="detail-info-heading" >Name :</span>{strDrink}</h3>
                    <h3 className="detail-category"><span className="detail-info-heading">Category :</span>{strCategory}</h3>
                    <h3 className="detail-alcoholic"><span className="detail-info-heading">Info :</span>{strAlcoholic}</h3>
                    <h3 className="detail-glass"><span className="detail-info-heading">Glass :</span> {strGlass}</h3>
                    <h3 className="detail-instructions"><span className="detail-info-heading">Instructions :</span> {strInstructions}</h3>
                    <h3 className="detail-ingredients"><span className="detail-info-heading">Ingredients : </span><p className="ingredients">{strIngredient1}, {strIngredient2}, {strIngredient3}, {strIngredient4}</p></h3>
                </div>
            </div>
        </div>
    )
}

export default Detail
