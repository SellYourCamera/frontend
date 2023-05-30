import { useLocation,useNavigate } from "react-router";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./modelDescription.scss";
import EastIcon from '@mui/icons-material/East';
import Button from '@mui/material/Button';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';




const ModelDescription = () => {

  try {
    const location = useLocation([]);
    var ModelName = location.state?.ModelName;
    console.log("Model Name:"+ModelName);
  } catch (error) {
    console.log(error.message);
  }

  const [productData, setProductData] = useState([]);
  useEffect(() => {
    
    async function fetchData() {
      const result = await axios.get(`${process.env.REACT_APP_Backend_URL}:${process.env.REACT_APP_Backend_PORT}/api/get-brand-product?product_model=${ModelName}`);
      console.log(result);
      setProductData(result.data.data || []);
    }

    fetchData();
  }, [ModelName]);


//to get exact value redirect to Product Details Form Page
const navigate = useNavigate();
const handleModelClick = (product) => {
  navigate('/ProductDetails', { state: { productData: productData } });
};


  return (
    <div className="container" >
      {
        productData.map((product) => (
          <div key={product._id}>
            <div className="header">
              <h2>Sell Old {product.brand} DSLR {product.product_model}</h2>
              <h4>path section</h4>
            </div>

            <div className="row">
              <div className="col-1">
                <div className="content">
                  <img src={require(`../assets/img/canon/${product.image}.png`)} alt="canon" />
                </div>
              </div>
              <div className="col-2">
                <h2>{product.brand} DSLR {product.product_model}</h2>
                <h4>Get Upto</h4>
                <h1>{<CurrencyRupeeIcon/>} {product.price}</h1>
                <Button onClick={()=>handleModelClick(productData)} className="contained" variant="contained" endIcon={<EastIcon />}>Get Exact Value </Button>

              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ModelDescription;
