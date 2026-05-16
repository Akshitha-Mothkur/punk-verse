import React ,{useState,useEffect} from "react";
import axios from 'axios'
import { MdSearch } from "react-icons/md";
import { FaAngleLeft ,FaAngleRight} from "react-icons/fa";
import './Home.css'
import ViewBeerDetails from "./ViewBeerDetails";

import { Link } from "react-router-dom";

function Home(){
    const [data,setData]= useState([])
    const [searchbeer, setSearchBeer]=useState("")
    const [count, setCount]=useState(1)
    
    
    function PageCounter(){
        function increment(){
            setCount(count+1)
        }
        function decrement(){
            (count-1===0)?setCount(count):setCount(count-1)
        }

        return(
            <div className="counter">
                <button onClick={decrement} className="switchpage"><FaAngleLeft/></button>
                <button className="num">{count}</button>
                <button onClick={increment} className="switchpage"><FaAngleRight/></button>
            </div>
        )
    }
    useEffect(()=>{
        axios.get("https://punkapi-alxiw.amvera.io/v3/beers?page="+count+"&per_page=16")
        .then(res=>res.data)
        .then(d=>setData(d))
    } ,[searchbeer,count])

    function implementSearch(e){
        e.preventDefault()
        axios.get("https://punkapi-alxiw.amvera.io/v3/beers?page=1&beer_name="+searchbeer)
        .then(res=>res.data)
        .then(d=>setData(d))
    }
    console.log(data)
    console.log(searchbeer)
    console.log(count)
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

                                <span className={getAbvLevel(obj.abv)}>
                                    {getAbvLevel(obj.abv)}
                                </span>

                                <span className={getIbuLevel(obj.ibu)}>
                                    {getIbuLevel(obj.ibu)}
                                </span>

                                </div>
                                <Link to={`/viewdetails/${obj.id}`}>view details</Link>
                                
                            </div>
                        )
                    })
                }
            </div>

        
        <PageCounter/>
        
        </div>
    )
}

function getAbvLevel(abv){
    if(abv<=5){
        return "light"
    }
    else if(abv<=9){
        return "strong"
    }
    else{
        return "xstrong"
    }
}

function getIbuLevel(ibu){
    if(ibu<=20){
        return "mild"
    }
    else if(ibu<=40){
        return "balanced"
    }
    else if(ibu<=60){
        return "bitter"
    }
    else{
        return "xbitter"
    }
}
export default Home
