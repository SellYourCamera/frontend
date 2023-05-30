import React from 'react';
import Button from '@mui/material/Button';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';


const Login = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '8   0vh',
      }}
    >
      <div
        style={{
          flex: 1,
          padding: '1rem',
        }}
      >
        <div
          style={{
            maxWidth: 400,
            margin:"0px 70px",
          }}
        >
          <h1
            style={{
              fontSize: '3rem',
              fontWeight: 'bold',
              marginBottom: '1rem',
            }}
          >
            Sell Your Camera @ Best Price
          </h1>
          <h3
            style={{
              fontSize: '1.5rem',
              marginBottom: '1rem',
            }}
          >
            Feel Free, We will be happy to make deal with you.
            
          </h3>
          <Button
          startIcon={<ConnectWithoutContactIcon/>}
            variant="contained"
            color="primary"
            sx={{
              fontSize: '1rem',
              padding: '0.5rem 1rem',
              
            }}
          >
            Request Call
          </Button>
          <Button
            variant="contained"
            color="success"
            startIcon={<PhoneForwardedIcon />}
            sx={{
              fontSize: '1rem',
              padding: '0.5rem 1rem',
              marginLeft:'20px'
            }}
          > Make Call
          </Button>
        </div>
      </div>
      <div
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img
          src={require("./camerasell.jpeg")}
          alt="Hero"
          style={{
            width:"700px"
          }}
        />
      </div>
    </div>
  );
};

export default Login;
