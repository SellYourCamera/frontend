<div className="col-2">
          {productData.map((product) => (

            <div key={product._id} className="imgsection">
              <img src={require("../assets/img/canon.jpeg")} alt="stack img" />
             <div className="content-section" >
             <h3>{product.brand}</h3>
              <p>{product.product_model}</p>
             </div>
            </div>

          ))}

          <div className="camera-evalution">
            <label><CameraAltIcon color="primary"/><span>Camera Evalution</span></label>
          
            {productDetailObj.cameraSwitchOn && <div><h3>Does Camera Switch On ?</h3><li>{productDetailObj.cameraSwitchOn}</li></div>}
            {productDetailObj.functionalIssue && <div><h3>Any Functional Issue ?</h3><li>{productDetailObj.functionalIssue}</li></div>}
            {productDetailObj.physicalCondition && <div><h3>Any Physical Damage ?</h3><li>{productDetailObj.physicalCondition}</li></div>}

          </div>

        </div>