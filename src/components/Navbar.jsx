import React from "react";
import './Navbar.css'
import { NavLink } from "react-router-dom";


function Navbar(){
    return(
        <div className="navbar">
            <h2>Punk <span>Verse</span></h2>
            <ul>
               <li><NavLink to={'/'}>Home</NavLink></li>
               <li><NavLink to={'/randomb'}>RandomBeer</NavLink></li>
               <li><NavLink to={'/fav'}>Favourite</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar