import { useParams } from "react-router-dom";
import { useEffect, useState ,useRef} from "react";
import axios from "axios";
import './ViewBeer.css'
function ViewBeerDetails() {

    const { id } = useParams();
    const [beer, setBeer] = useState(null);
    const h4ref=useRef()
    useEffect(() => {
        axios.get(`https://punkapi-alxiw.amvera.io/v3/beers/${id}`)
            .then(res => setBeer(res.data));
    }, [id]);

    if (!beer) return <h2>Loading...</h2>;
    function showtip(){
        h4ref.current.style.display="block"
    }
    return (
        <div className="beer-details">
            <div className="beer-image">
                <img src={`https://punkapi-alxiw.amvera.io/v3/images/${beer.image}`} alt={beer.name} height="350px" />
            </div>
            <div className="details">
                <div className="heading">
                    <h2>{beer.name}</h2>
                    <div className="stats">
                <span className={getAbvLevel(beer.abv)}>
                    {getAbvLevel(beer.abv)}</span>

                <span className={getIbuLevel(beer.ibu)}>
                    {getIbuLevel(beer.ibu)}</span></div>
                </div>
                
                

                <div className="brew-date">
                    <h5>{beer.first_brewed}</h5>
                </div>
                <div className="desp">
                    <h5>{beer.description}</h5>
                <div className="beerlevels">
                    <button className={getAbvLevel(beer.abv)}>{beer.abv}% ABV</button>
                    <button className={getIbuLevel(beer.ibu)}>{beer.ibu} IBU </button>
                    <button className="ebcc">{beer.ebc} EBC</button>
                    </div>
                </div>
                <div className="foodpair">
                    <h3>Food Pairings: </h3>{
                   beer.food_pairing.map((obj)=>{
                    return(
                        <h6>{obj}</h6>
                    )
                   })

                   }
                </div>
          
            </div>
        </div>
    );
}
function getAbvLevel(abv) {
    if (abv <= 5) {
        return "light"
    }
    else if (abv <= 9) {
        return "strong"
    }
    else {
        return "xstrong"
    }
}

function getIbuLevel(ibu) {
    if (ibu <= 20) {
        return "mild"
    }
    else if (ibu <= 40) {
        return "balanced"
    }
    else if (ibu <= 60) {
        return "bitter"
    }
    else {
        return "xbitter"
    }
}
export default ViewBeerDetails;