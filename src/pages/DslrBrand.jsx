import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';


const DslrBrand = () => {

    const navigate = useNavigate();
  const [brandName, setBrandName] = useState("");
  const handleBrandClick = (name) => {
    setBrandName(name);
    navigate('/single-product', { state: { brandName: name } });
  }

    return (

        <div className="dslr_brand">
            <div className="content-heading">
                <h1>Best DSLR Camera Selling Brand</h1>
                <p>Sell Your DSLR Camera of Any Brand  ✌🙂</p>
            </div>
            <div className="MyGallery">
               
                    
                        <button className="brandName" style={{ background: 'none', border: 'none' }} onClick={() => handleBrandClick("canon")}>
                            <img  src={require("../assets/img/canon.jpeg")} alt="canon" />
                        </button>
                   
                
                        <button className="brandName" style={{ background: 'none', border: 'none' }} onClick={() => handleBrandClick('nikon')}>
                            <img   src={require("../assets/img/nikon.jpeg")} alt="nikon" />
                        </button>

                    
                        <button className="brandName" style={{ background: 'none', border: 'none' }} onClick={() => handleBrandClick('panasonic')}>
                            <img  src={require("../assets/img/panasonic.jpeg")} alt="panasonic" />
                        </button>
               
                    
                        <button className="brandName" style={{ background: 'none', border: 'none' }} onClick={() => handleBrandClick('sony')}>
                            <img src={require("../assets/img/sony.jpeg")} alt="sony" />
                        </button>
                   
                   
                        <button className="brandName" style={{ background: 'none', border: 'none' }} onClick={() => handleBrandClick('fujifilm')}>
                            <img src={require("../assets/img/fujifilm.jpeg")} alt="fujifilm" />
                        </button>
                   
                   
                        <button  className="brandName" style={{ background: 'none', border: 'none' }} onClick={() => handleBrandClick('black magic design')}>
                            <img src={require("../assets/img/Blackmagic.jpeg")} alt="balck magic design" />
                        </button>
                     

            </div> 
                 </div>
    )
}

export default DslrBrand;