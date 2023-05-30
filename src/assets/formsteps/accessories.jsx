import React, { useState, useEffect } from "react";
import "./accessories.scss";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import EastIcon from '@mui/icons-material/East';
import Button from '@mui/material/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation } from "react-router";
import { Navigate, useNavigate } from 'react-router';


const Accessories = () => {

    //get data after lens component
    const location = useLocation([]);
    const navigate = useNavigate();
    const { productData, productDetailObj: updatedProductDetailObj } = location.state;
    const [productDetailObj, setProductDetailObj] = useState(updatedProductDetailObj);
    const [accessories, setAccessories] = useState('');
    const lens = "No Spare Lens";


    //to check cameralens empty or not
    if (productDetailObj.cameraLens.lenth < 1) {

        setProductDetailObj((prevState) => ({
            ...prevState,
            cameraLens: [...prevState.cameraAccessories, lens],
        }));
    }

    const handleAssossoriesOnClick = (data) => {

        //created an accessorie variable so that can check if particular accessories already available then remove
        if (accessories !== data) { setAccessories(data); }
        else { setAccessories(""); }

        //to enter and remove accessories in productDetailObj.Accessiries oncCick
        if (!productDetailObj.cameraAccessories.includes(data)) {
            setProductDetailObj((prevState) => ({
                ...prevState,
                cameraAccessories: [...prevState.cameraAccessories, data],
            }));

        } else {
            setProductDetailObj((prevState) => ({
                ...prevState,
                cameraAccessories: prevState.cameraAccessories.filter((acces) => acces !== data),
            }));

        };
        console.log("data", data);
    }
    console.log("productobj Accessories", productDetailObj.cameraAccessories);

    console.log("accessories", accessories);

    // Handle CSS class for highlighting the selected lens item
    const getaccesItemClassName = (data) => {
        if (productDetailObj.cameraAccessories.includes(data)) {
            return 'accesitem-selected';
        }
        return 'acces-item';
    };

    console.log(productDetailObj);

    const handleAssossoriessubmit = () =>{
        navigate("/cameraAge",{state:{productData,productDetailObj:updatedProductDetailObj}})
    }



    return (
        <div className="container" >

            <div className="row-1">
                <div className="col-1">
                    <div className="section">
                    <div className="heading">
                        <h2>Select the original accessories of your device</h2>
                        <p>See what this means?</p>
                    </div>

                    <div className="accesories-list">
                        <div className={getaccesItemClassName("orignal bag")} onClick={() => handleAssossoriesOnClick("orignal bag")}>
                            <div className="imgsection"><img src={require("../img/accessories/bag.png")} alt="orignal bag" /></div>
                            <h4>Orignal Bag</h4>
                        </div>
                        <div className={getaccesItemClassName("orignal battery")} onClick={() => handleAssossoriesOnClick("orignal battery")}>
                            <div className="imgsection"><img src={require("../img/accessories/battery.png")} alt="orignal battery" /></div>
                            <h4>Orignal Battery</h4>
                        </div>
                        <div className={getaccesItemClassName("bill")} onClick={() => handleAssossoriesOnClick("bill")}>
                            <div className="imgsection"><img src={require("../img/accessories/bill.png")} alt="bill" /></div>
                            <h4>Bill</h4>
                        </div>
                        <div className={getaccesItemClassName("box")} onClick={() => handleAssossoriesOnClick("box")}>
                            <div className="imgsection"><img src={require("../img/accessories/box.png")} alt="box" /></div>
                            <h4>Box</h4>
                        </div>
                        <div className={getaccesItemClassName("orignal cable")} onClick={() => handleAssossoriesOnClick("orignal cable")}>
                            <div className="imgsection"><img src={require("../img/accessories/cable.png")} alt="orignal cable" /></div>
                            <h4>Orignal Cable</h4>
                        </div>
                        <div className={getaccesItemClassName("orignal charger")} onClick={() => handleAssossoriesOnClick("orignal charger")}>
                            <div className="imgsection"><img src={require("../img/accessories/charger.png")} alt="orignal charger" /></div>
                            <h4>Orignal Charger</h4>
                        </div>
                        <div className={getaccesItemClassName("orignal sdcard")} onClick={() => handleAssossoriesOnClick("orignal sdcard")}>
                            <div className="imgsection"><img src={require("../img/accessories/sdcard.png")} alt="orignal sdcard" /></div>
                            <h4>Orignal Card</h4>
                        </div>
                        <div className={getaccesItemClassName("tripod")} onClick={() => handleAssossoriesOnClick("tripod")}>
                            <div className="imgsection"><img src={require("../img/accessories/tripod.png")} alt="tripod" /></div>
                            <h4>Tri-Pod</h4>
                        </div>
                    </div>

                    <div>
                        <div className="submitButton"><Button onClick={handleAssossoriessubmit} className="contained" variant="contained" endIcon={<EastIcon />} >Continue</Button></div>
                    </div>
                    <ToastContainer></ToastContainer>

                    </div>
                </div>
                <div className="col-2">
                    {productData.map((product) => (

                        <div className="imgsection" key={product.id} >
                            <img src={require(`../img/canon/${product.image}.png`)} alt="canon" />
                            <div key="content" className="content-section" >
                                <h3 >{product.brand}</h3>
                                <p >{product.product_model}</p>
                            </div>
                        </div>

                    ))}

                    <div className="camera-evalution">
                        <label><CameraAltIcon color="primary" /><span>Camera Evalution</span></label>
                        {productDetailObj.cameraSwitchOn && <div><h3>Does Camera Switch On ?</h3><li>{productDetailObj.cameraSwitchOn}</li></div>}
                        {productDetailObj.functionalIssue && <div><h3>Any Functional Issue ?</h3><li>{productDetailObj.functionalIssue}</li></div>}
                        {productDetailObj.physicalCondition && <div><h3>Any Physical Damage ?</h3><li>{productDetailObj.physicalCondition}</li></div>}
                        {productDetailObj.additionalLens && <div><h3>Any Additional Lens ?</h3><li style={{margin:"0px 0px 8px 28px"}}>{productDetailObj.additionalLens}</li>
                        <div className='other-data'><label style={{margin:"16px 0px 5px 28px"}}>Lenses</label> {productDetailObj.cameraLens.map((lenses, index) => (
                                    <li style={{margin:"0px 0px 10px 45px"}} key={index}>{lenses} </li>
                                ))}
                                </div></div>}
                            {productDetailObj.cameraAccessories &&
                                <div><h3>Accessories</h3> {productDetailObj.cameraAccessories.map((accessories, index) => (
                                    <li style={{margin:"0px 0px 10px 45px"}} key={index}>{accessories} </li>
                                ))}
                                </div>
                            }
                            

                    </div>

                </div>
            </div>
        </div>

    )
}
export default Accessories;
