import React from "react";
import Sellimg from "../assets/img/Sellimg.jpg";
import DSLR from "../assets/img/DSLR.jpg";
import ActionCamera from "../assets/img/ActionCamera.jpg";
import VideoCamera from "../assets/img/VideoCamera.jpg";
import { Link } from 'react-router-dom';
import SellDSLR from "./DSLR";

const Sell = () => {
    return (

  <div className="row">
    <div className="col">
    <img src={Sellimg} alt="Selling Img" className="image-fluid sellimg" />
    </div>
    <div className="col">
        
    <div className="heading">
        Select The Category:
    </div>
    <Link to="/DSLR" target="_self" rel="noreferrer">
    <div className="item">
        <img src={DSLR} alt="DSLR" />
        <p className="cam">DSLR</p>
        </div>
    </Link>
    <Link to="#" target="_self" rel="noreferrer">
    <div className="item">
        <img src={ActionCamera} alt="ActionCamera" />
        <p className="cam">Action Camera</p>
    </div>
    </Link>
    <Link to="#" target="_self" rel="noreferrer">
    <div className="item">
    <img src={VideoCamera} alt="VideoCamera" />
    <p className="cam">Video Camera</p>
    </div>
    </Link>

</div>
</div>

    )
};

export default Sell;