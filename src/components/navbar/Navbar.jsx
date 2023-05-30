import React from 'react'
//import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';
import "./Navbar.scss";



const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="wrapper">
        <div className="left">
            <div className="item"><Link to="/">Home</Link></div>
            <div className="item"><Link to="/Sell" >Sell</Link></div>
            <div className="item"><Link to="/About" >About</Link></div>
            <div className="item"><Link to="/Contact" >Contact</Link></div>
        </div>
        <div className="center">
           <Link to="/"><img src={require('../../assets/img/logo.jpg')}/></Link>
        </div>
        <div className="right">
           <div className="icons">
            <SearchIcon/>
            <PersonIcon/>
            <FavoriteBorderIcon/>
            <div className="carticon"><ShoppingCartIcon/><span>0</span></div>
           </div>
        </div>
        </div>
    </div>
  )
}

export default Navbar;