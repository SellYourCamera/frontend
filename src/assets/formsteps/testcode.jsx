import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import EastIcon from '@mui/icons-material/East';
import Button from '@mui/material/Button';
import "./lens.scss";


const Lens = () => {

    const [lensData, setLensData] = useState([]);
    const [selectedLens, setSelectedLens] = useState(""); // use state to store the selected lens

    const location = useLocation([]);
    const { productData, productDetailObj: initialProductDetailObj } = location.state;

    // Define state for productDetailObj and initialize it with the initialProductDetailObj from the location state
    const [productDetailObj, setProductDetailObj] = useState(initialProductDetailObj);
    console.log("product data", productData[0]["brand"]);
    const [lens, setLens] = useState("");

    //to fetch lens of selected Brand  Camera
    useEffect(() => {

        async function fetchData() {
            const result = await axios.get(`http://localhost:3001/api/get-lens-by-brand?brandName=${productData[0]["brand"]}`);
            setLensData(result.data.data || []);

        }

        fetchData();
    }, [productData]);
  
    // Check if the cameraAccessories property is empty and set a default value if it is
    const handleLensDataOnClick = (value) => {
        if (selectedLens !== value) {
            setSelectedLens(value);
        } else {
            setSelectedLens("");
        }
        if (!productDetailObj.cameraLens.includes(value)) {
            setProductDetailObj((prevState) => ({
                ...prevState,
                cameraLens: [...prevState.cameraLens, value],
            }));
        } else {
            setProductDetailObj((prevState) => ({
                ...prevState,
                cameraLens: prevState.cameraLens.filter((lens) => lens !== value),
            }));
        }
    };
    // Handle CSS class for highlighting the selected lens item
    const getLensItemClassName = (lens_model) => {
        if (!lens_model.includes(selectedLens)) {
            return "lensitem";
        }
        return "lensitem-selected";
    };
     console.log("cameraLens", productDetailObj.cameraLens);

   const handleLensSubmit=(e) =>{

   }
    return (
        <div className='container'>
            <div className='row-1'>
                {
                    lensData.map((product) => (
                        <div className={console.log(getLensItemClassName(product.lens_model))} key={product.lens_model}  onClick={() => handleLensDataOnClick(product.lens_model)}>
                            <h2 key={product.brand}> {product.brand}</h2>
                            <p key={product.lens_model}> {product.lens_model}</p>
                        </div>
                    ))
                }
            </div>
            <Button onClick={handleLensSubmit} variant="contained" endIcon={<EastIcon />}>Continue </Button> 
            <div className='row-2'>

            </div>
        </div>
    );
};

export default Lens;
