import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { useLocation } from "react-router";
import { Navigate, useNavigate } from "react-router";
import './quotation.scss';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import './modal.css';

const Quotation = () => {

    const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

    // const [open, setOpen] = React.useState(false);
    // const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);

    const location = useLocation([]);
    const { productData, productDetailObj: updatedProductDetailObj } = location.state;
    const [productDetailObj, setProductDetailObj] = useState(updatedProductDetailObj);





    return (
        <div className="container" >
            <div className="row-1">
                <div className="col-1">
                    <div className="quotation-section">
                        <div className="img-section">
                            {productData.map((product) => (
                                <img src={require(`../img/canon/${product.image}.png`)} alt="canon" />
                            ))}
                        </div>

                        {productData.map((product) => (

                            <div key="content" className="content-section" >
                                {/* <h2 >{product.brand}</h2>
                                <p >{product.product_model}</p>
                                <h1>$ 16000</h1> */}
                                <h1>We’re Sorry</h1>

                                <h3>Currently we do not accept Dead or Damaged Device. Due to Low Reselling Value.</h3>
                                <div onClick={handleOpen} className="report-section">See Device Report</div>
                                <div className="feature-section"><img src={require("../img/quotation-feature.png")} alt="feature" /></div>
                            </div>

                        ))}
                    </div>

                    <ToastContainer></ToastContainer>

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


                    </div>

                </div>
            </div>

            {/* <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                </Box>
            </Modal> */}
            <div className="box" onClick={handleOpen}>
        Click to open
      </div>
      {isOpen && (
        <div className="overlay" onClick={handleOverlayClick}>
          <div className="modal">
            <div className="header1">
              <h3>Modal title</h3>
              <button onClick={handleClose}>Close</button>
            </div>
            <div className="content">
              <p>Modal content goes here</p>
            </div>
          </div>
        </div>
      )}
        </div>

    )
}
export default Quotation;




