import React from 'react';
import { Link } from "react-router-dom";
import Logo from "../../Images/logo.jpg"
import "./Header.css" ;

const Header = () => {
  return (
    <div className='header'>
        <div className='header-left'>
        <Link to="/"><img className="header__icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" /></Link>
        <Link to="/trending" style={{textDecoration: "none"}}><span>Trending</span></Link>
        <Link to="/movies" style={{textDecoration: "none"}}><span>Movies</span></Link>
        <Link to="/series" style={{textDecoration: "none"}}><span>TV Series</span></Link>      
        </div>
    </div>
  )
}

export default Header