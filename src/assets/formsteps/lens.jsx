import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router';
import EastIcon from '@mui/icons-material/East';
import Button from '@mui/material/Button';
import '../formsteps/lens.scss';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { ToastContainer, toast } from 'react-toastify';

const Lens = () => {
    const [lensData, setLensData] = useState([]);
    const [selectedLens, setSelectedLens] = useState('');
    const location = useLocation([]);
    const navigate = useNavigate();
    const { productData, productDetailObj: initialProductDetailObj } = location.state;

    // Define state for productDetailObj and initialize it with the initialProductDetailObj from the location state
    const [productDetailObj, setProductDetailObj] = useState(initialProductDetailObj);

    //to fetch lens of selected Brand  Camera
    useEffect(() => {
        async function fetchData() {
            const result = await axios.get(
                `http://localhost:3001/api/get-lens-by-brand?brandName=${productData[0]["brand"]}`
            );
            setLensData(result.data.data || []);
        }

        fetchData();
    }, [productData]);

    // Handle CSS class for highlighting the selected lens item
    const getLensItemClassName = (lens_model) => {
        if (productDetailObj.cameraLens.includes(lens_model)) {
            return 'lensitem-selected';
        }
        return 'lensitem';
    };

    // Handle click event for lens item
    const handleLensDataOnClick = (lens_model) => {
        if (selectedLens !== lens_model) {
            setSelectedLens(lens_model);
        } else {
            setSelectedLens("");
        }
        if (!productDetailObj.cameraLens.includes(lens_model)) {
            setProductDetailObj((prevState) => ({
                ...prevState,
                cameraLens: [...prevState.cameraLens, lens_model],
            }));
        } else {
            setProductDetailObj((prevState) => ({
                ...prevState,
                cameraLens: prevState.cameraLens.filter((lens) => lens !== lens_model),
            }));
        }
    };
    console.log("cameralens", productDetailObj.cameraLens, "selected lens", selectedLens)

    const handleLensSubmit = (e) => {
        // TODO: handle submit
        e.preventDefault();
        if (productDetailObj.cameraLens.length < 1) {
            toast.error("Selected for additional lens in Previous step. So select atleast 1 lens")
        } else {
            navigate("/accessories", { state: { productData, productDetailObj: productDetailObj } });
        }

    };

    return (
        <div className='container'>

            <div className='row-1'>
                <div className='col-1'>
                    <div className='section'>
                    <div className="heading">
                        <h2>Select Additional Lens of your device You Have.</h2>
                        <p>See what this means?</p>
                    </div>
                    <div className='camlenslist'>
                        {lensData.map((product) => (
                            <div
                                key={product.lens_model}
                                className={getLensItemClassName(product.lens_model)}
                                onClick={() => handleLensDataOnClick(product.lens_model)}
                            >
                                <h2>{product.brand}</h2>
                                <p>{product.lens_model}</p>
                            </div>
                        ))}
                    </div>

                    <div>
                        <div className="submitButton">
                            <Button
                                onClick={handleLensSubmit}
                                variant='contained'
                                endIcon={<EastIcon />}
                            >
                                Continue
                            </Button></div>
                    </div>

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
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Lens;
