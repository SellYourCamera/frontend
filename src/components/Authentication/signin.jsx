import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';


import { useState } from 'react';
import { RecaptchaVerifier, signInWithPhoneNumber, connectAuthEmulator } from "firebase/auth";
import { MuiTelInput, matchIsValidTel } from 'mui-tel-input';
import { MuiOtpInput } from 'mui-one-time-password-input'
import CircularProgress from '@mui/joy/CircularProgress';
import { toast, ToastContainer } from 'react-toastify';
import { auth } from "./firebase";

// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const theme = createTheme();

export default function SignIn() {

  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const [phone, setPhone] = useState('');
  const [showOtp, setShowOtp] = useState(false);
  const [user, setUser] = useState(null);
  const [phoneError, setPhoneError] = useState(false);

  const handleOtp = (newValue) => {
    setOtp(newValue);
  }

  //mui tel input triggers

  const handlePhoneChange = (newPhone) => {
    setPhone(newPhone);
  }

  const handlePhoneFocus = () => {
    if (!phone) {
      setPhoneError(true);
    }
  }

  const handlePhoneBlur = () => {
    if (!matchIsValidTel(phone)) {
      setPhoneError(true);
    } else {
      setPhoneError(false);
    }
  }
  //------------------------------------------------//

  const onCaptchVerify = () => {
    if (!window.recaptchaVerifier) {

      window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
        'size': 'invisible',
        'callback': (response) => {
          onSignInSubmit();
        },
        'expired-callback': () => {
          // Response expired. Ask user to solve reCAPTCHA again.
          // ...
        }
      }, auth);
    }
  }

  const onSignInSubmit = () => {
    console.log(phone);

    setLoading(true);

    onCaptchVerify();
    const phoneNumber = phone;

    console.log(phoneNumber);

    const appVerifier = window.recaptchaVerifier;

    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        setLoading(false);
        setShowOtp(true);
        toast.success("Otp Send to Your Phone")
      }).catch((error) => {
        console.log(error);
        setLoading(false);

      });


  }

  const otpVerify = () => {
    setLoading(true);
    window.confirmationResult.confirm(otp).then(async (res) => {
      // User signed in successfully.
      console.log(res);
      setUser(res.user);
      setLoading(false);

    }).catch((error) => {
      // User couldn't sign in (bad verification code?)
      console.log(error);
      setLoading(false);
    });
  }



  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   });
  // };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <ToastContainer />
        <div id='recaptcha-container'></div>
      </div>

      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div>{!user? (
        
          !showOtp ? (
          
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              {/* <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}> */}
                {/* <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            /> */}
                <MuiTelInput
                  margin="normal"
                  required
                  fullWidth
                  id="phone"
                  
                  name="phone"
                  autoComplete="phone"
                  label="Phone Number"
      
        onChange={handlePhoneChange}
        onFocus={handlePhoneFocus}
        onBlur={handlePhoneBlur}
        helperText={!matchIsValidTel(phone) && !phone && phoneError ? "Phone number is required" : ""}
                  
                  defaultCountry="IN"
                  display="flex"
                  value={phone}
                  
                  error={phoneError && !matchIsValidTel(phone)} // Check if the phone number is not valid
                  sx={{
                    '& .MuiInputBase-root.Mui-error': { // Styles for invalid input
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'red', // Change the border color to red for invalid input
                      },
                      '& .MuiOutlinedInput-input': {
                        color: 'red', // Change the input text color to red for invalid input
                      },
                    },
                  }}
                />
                <Button type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={onSignInSubmit} >
                  {/* {loading && <CircularProgress variant="soft" size='sm' color="primary" />} */}
                  <span style={{ margin: "0px 8px" }}> Send Otp to Mobile</span>
                </Button>


                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                {/* <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button> */}

                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="#" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            
          ) : (
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <Box component="form"  noValidate sx={{ mt: 1 }}>
                {/* <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            /> */}

                <MuiOtpInput
                  margin="normal"
                  required
                  fullWidth
                  id="otp"
                  label="Email Otp"
                  name="otp"
                  autoComplete="phone"
                  autoFocus
                  value={otp}
                  length={6}
                  onChange={handleOtp} />

                <div>
                  <Button type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={otpVerify}>
                    {/* {loading && <CircularProgress variant="soft" size='sm' color="primary" />} */}
                    <span style={{ margin: "0px 8px" }}> Verify Otp</span>
                  </Button>
                </div>
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                {/* <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button> */}

                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="#" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          )
         ) : (
            <h2>
              User Logged in successfully
            </h2>

        ) }
        </div>
        


        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </Container>

    </ThemeProvider>
  );
}