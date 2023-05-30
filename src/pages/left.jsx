<div className="col-1">
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