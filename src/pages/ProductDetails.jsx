import React, { useState } from "react";
import { Await, Navigate, useLocation, useNavigate } from "react-router";
import "./ProductDetails.scss";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import EastIcon from '@mui/icons-material/East';
import Button from '@mui/material/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';


const ProductDetails = () => {
  const location = useLocation([]);
  var { productData } = location.state;
  //to receive product details  from Model Description Component
  try {
    console.log("Model Name:" + productData);
  } catch (error) {
    console.log(error.message);
  }
  const [productDetailObj, setProductDetailObj] = useState({
    cameraSwitchOn: "",
    functionalIssue: "",
    physicalCondition: "",
    additionalLens: "",
    cameraLens:[],
    cameraAccessories:[],
    cameraAge:""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProductDetailObj((prevProductDetailObj) => {
      return { ...prevProductDetailObj, [name]: value };
    });
  };

  //check validation

  const checkValidation = () => {
    for (const [key, value] of Object.entries(productDetailObj)) {
      switch (key) {
        case "cameraSwitchOn":
          if (!value) {
            toast.error("Does the Camera switch on ?");
            return false;
          }
          break;
        case "functionalIssue":
          if (!value) {
            toast.error("Is there any Functional issues ?");
            return false;
          }
          break;
        case "physicalCondition":
          if (!value) {
            toast.error("Is there any Physical Damage ?");
            return false;
          }
          break;
        case "additionalLens":
          if (!value) {
            toast.error("Do You Have Additional Lens ?");
            return false;
          }
          break;
        default: break;
      }

    }
    return true;
    // alert("All fields are filled");
  }


  // const checkValidation = () => {
  //   for (const [key, value] of Object.entries(productDetailObj)) {
  //     if (!value) {
  //       toast.error(`Please fill out the (${key}) field.`);
  //       return false;
  //     }
  //   }
  //   return true;
  // };
  //on click continue check 
  const navigate = useNavigate();
  const handleClick =async (event) => {
    event.preventDefault();
    if (checkValidation()) {
      if (
        productDetailObj.cameraSwitchOn === "No" ||
        productDetailObj.functionalIssue === "Yes" ||
        productDetailObj.physicalCondition === "Yes"
      ) {
        // toast.info("redirect to last page and Say no to the Cunsumer");
        const productDataForLens=productData;
        navigate('/damageQuatation', { state: { productData:productDataForLens, productDetailObj:productDetailObj } });

      } else if (productDetailObj.additionalLens === "Yes"){
          const productDataForLens=productData;
          navigate('/lens', { state: { productData:productDataForLens, productDetailObj:productDetailObj } });
          console.log(productData);
      }else  if(productDetailObj.cameraLens.length<1){
        const productDataForLens=productData;
        const updatedProductDetailObj = { 
          ...productDetailObj, 
          cameraLens: ["No Spare Lens"] 
        };
        navigate("/accessories",{state: {productData, productDetailObj:updatedProductDetailObj}})
        
      }
    }
  };

  console.log(productDetailObj);

  return (
    <div className="container" >

      <div className="row-1">
        <div className="col-1">
          <div className="section">
          <div className="heading">
            <h2>Tell us a few things about your device!</h2>
            <p>See what this means?</p>
          </div>
          <div>
            <h3>Does the Camera switch on ?</h3>
            <p>We currently only accept devices that switch on</p>
            <label><input
              type="radio"
              name="cameraSwitchOn"
              value="Yes"
              onChange={handleChange}
            />
              Yes</label>
            <label>
              <input
                type="radio"
                name="cameraSwitchOn"
                value="No"
                onChange={handleChange}
              />
              No
            </label>
            <h3>Are there any functional issues in your device ?</h3>
            <p>Check your device's functional issues carefully</p>
            <label>
            <input
              type="radio"
              name="functionalIssue"
              value="Yes"
              onChange={handleChange}
            />
            Yes
            </label>
           <label>
           <input
              type="radio"
              name="functionalIssue"
              value="No"
              onChange={handleChange}
            />
            No

           </label>
            <h3>Are there any defects on your device's body ?</h3>
            <p>Check your device's body or buttons condition carefully</p>
            <label>
            <input
              type="radio"
              name="physicalCondition"
              value="Yes"
              onChange={handleChange}
            />
            Yes
            </label>
           <label>
           <input
              type="radio"
              name="physicalCondition"
              value="No"
              onChange={handleChange}
            />
            No
           </label>

            <h3>Do you have any additional lens ?</h3>
            <p>Choose this option if you have additional lens of the same brand</p>
            <label>
           <input
              type="radio"
              name="additionalLens"
              value="Yes"
              onChange={handleChange}
            />
            Yes
            </label>
           <label>
           <input
              type="radio"
              name="additionalLens"
              value="No"
              onChange={handleChange}
            />
            No
            </label>
            
            <div className="submitButton"><Button className="contained" variant="contained" endIcon={<EastIcon />} onClick={handleClick}>Continue</Button></div>
          </div>
          <ToastContainer></ToastContainer>

          </div>
        </div>
        <div className="col-2">
        
  {/* your content */}


          {productData.map((product) => (

            <div key={product._id} className="imgsection">
               <img src={require(`../assets/img/canon/${product.image}.png`)} alt="canon" />
             <div className="content-section" >
             <h3>{product.brand}</h3>
              <p>{product.product_model}</p>
             </div>
            </div>

          ))}

          <div className="camera-evalution">

            <label><CameraAltIcon color="primary"/><span>Camera Evalution</span></label>
            <SimpleBar forceVisible="y" autoHide={false}>
            {productDetailObj.cameraSwitchOn && <div><h3>Does Camera Switch On ?</h3><li>{productDetailObj.cameraSwitchOn}</li></div>}
            {productDetailObj.functionalIssue && <div><h3>Any Functional Issue ?</h3><li>{productDetailObj.functionalIssue}</li></div>}
            {productDetailObj.physicalCondition && <div><h3>Any Physical Damage ?</h3><li>{productDetailObj.physicalCondition}</li></div>}
            </SimpleBar>
          </div>

        </div>
      </div>
    </div>

  )
}
export default ProductDetails;
