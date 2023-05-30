import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { useLocation } from "react-router";
import { Navigate,useNavigate } from "react-router";
import "./cameraAge.scss";

const CameraPeriod = () => {

    const location = useLocation([]);
    const navigate = useNavigate();
    const { productData, productDetailObj: updatedProductDetailObj } = location.state;
    const [productDetailObj,setProductDetailObj]=useState(updatedProductDetailObj);
    const [duration,setDuration]=useState('');
    

    const handleDurationonClick = (value) =>{
        setDuration(value);
        const updatedProductDetailObj = { 
            ...productDetailObj, 
            cameraAge: value 
          };
          navigate("/quotation",{state: {productData, productDetailObj:updatedProductDetailObj}});
        
    }

    return (
        <div className="container" >

            <div className="row-1">
                <div className="col-1">
                    
                    <div className="section">
                    <div className="heading">
                        <h2>Age of your device!</h2>
                        <p>See what this means?</p>
                    </div>

                   <div className="age-section">
                   <div className="age-item" onClick={()=>handleDurationonClick("Less than 1 year")} >
                    <h4>less than 1 year</h4>
                    </div>
                    <div className="age-item"  onClick={()=>handleDurationonClick("Between 1-2 year")} >
                    <h4>Between 1 & 2 Years</h4>
                    </div>
                    <div className="age-item"  onClick={()=>handleDurationonClick("More than 2 year")} >
                    <h4>more than 2 year</h4>
                    </div>
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
                                    <li style={{margin:"0px 0px 10px 45px"}} key={index}>{accessories}, </li>
                                ))}
                                </div>
                            }
                            

                    </div>

                </div>
            </div>
        </div>

    )
}
export default CameraPeriod;
