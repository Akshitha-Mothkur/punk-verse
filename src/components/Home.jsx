import React ,{useState,useEffect} from "react";
import axios from 'axios'
import { MdSearch } from "react-icons/md";
import './Home.css'

function Home(){
    const [data,setData]= useState([])
    const [searchbeer, setSearchBeer]=useState("")

    useEffect(()=>{
        axios.get("https://punkapi-alxiw.amvera.io/v3/beers?page=1&per_page=16")
        .then(res=>res.data)
        .then(d=>setData(d))
    
        
    } ,[searchbeer])

    function implementSearch(e){
        e.preventDefault()
        axios.get("https://punkapi-alxiw.amvera.io/v3/beers?page=1&beer_name="+searchbeer)
        .then(res=>res.data)
        .then(d=>setData(d))
    }
    console.log(data)
    console.log(searchbeer)
    return(
        <div className="beer_page">
            
            <div className="searchbar">
                <input type="search" name="" id="" placeholder="Search beers..."  onChange={(e)=>setSearchBeer(e.target.value)} onKeyDown={(e)=>{
                    if (e.key==="Enter") implementSearch(e)
                }}/>
                <button onClick={implementSearch}><MdSearch/></button>
            </div>
            <div className="beers">
                {
                    data.map((obj)=>{
                        return(
                            <div className="beercard">
                                <img src={`https://punkapi-alxiw.amvera.io/v3/images/${obj.image}` } alt={`${obj.name}`} height="180px"/>
                                <h3>{obj.name}</h3>
                                <h6>{obj.tagline}</h6>
                                <div className="stats">
                                <span>🍺 ABV {obj.abv}%</span>
                                <span>🌿 IBU {obj.ibu}</span>
                                </div>
                                <button>View details</button>

                            </div>
                        )
                    })
                }
            </div>

           
           
        </div>
    )
}

export default Home