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
import AssignmentIcon from '@mui/icons-material/Assignment';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import emailjs from 'emailjs-com';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { MuiTelInput, matchIsValidTel } from 'mui-tel-input';
import axios from 'axios';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import "./homeModal.css";




const theme = createTheme();


const Modal = ({ setIsModalOpen }) => {

    const [email, setEmail] = useState('')
    const [username, setUserName] = useState('');
    const [phone, setPhone] = useState('');
    const [brand, setBrand] = useState('');

    console.log(email, username, phone, brand);


    //handle form submit

    const handleRequestCall = async (event) => {
        event.preventDefault();

        // Send email using emailjs
        const emailSend = await emailjs.send('service_xh3dsun', 'template_9w4llwc', {
            user_name: username,
            user_email: email,
            phone: phone,
            brand: brand
        }, 'Xr7TiVGL2mxbnjbe7')
            .then((result) => {
                console.log('Email sent successfully', result.text);
                //     <Stack sx={{ width: '100%' }} spacing={2}>
                //   <Alert 
                //   severity="success">Call Request Send You Get Confirmation Mail and We Will connect you soon.</Alert>   
                // </Stack>

            }, (error) => {
                console.log('Failed to send email', error);
            });


        //function to send data to the api for storing in database

        const userDataToSend = {
            user_name: username,
            user_email: email,
            phone: phone,
            cameraBrand: brand

        };
        console.log(userDataToSend)
        try {
            var apiResponse = await axios.post('${process.env.REACT_APP_Backend_URL}:${process.env.REACT_APP_Backend_PORT}/api/userCallRequest', username,email,phone,brand, {
                headers: {
                    "Content-Type": "multipart/form-data",
                }
            });
            console.log(apiResponse);
        } catch (error) {
            console.log(error);
        }


        //check data send or not

        if (apiResponse && emailSend) {
            alert("Data send Successfully")
        }
        else {
            alert("data not send")
        }

    };


    const handlemodalclose = () => {
        setIsModalOpen(false);
    }

    const handleMakeCall = () => {
        window.location.href = 'tel:+91 9897408751';
    }

    return (
        <div className="home-modal-box">
            <div className="home-modal-overlay">
                <div className="home-modal-pop">
                    <ThemeProvider theme={theme}>
                        <Container component="main" maxWidth="xs">
                            <CssBaseline />
                            <Box
                                sx={{
                                    marginTop: 4,
                                    marginBottom:4,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}
                            >
                                <IconButton aria-label="delete" color="primary"
                                    onClick={handlemodalclose}
                                    sx={{
                                        position: 'absolute',
                                        top: '2px',
                                        right: '2px',
                                        fontSize: 'large',

                                    }}>
                                    <CloseIcon />
                                </IconButton>

                                <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                                    <AssignmentIcon />
                                </Avatar>
                                <Typography component="h1" variant="h4">
                                    Call Request
                                </Typography>
                                <p style={{ textAlign: "center" }}>Help Us to Reach You </p>

                                <Box component="form" id="callRequestForm" noValidate sx={{ mt: 3 }}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                autoComplete="given-name"
                                                type="text"
                                                name="user_name"
                                                required
                                                fullWidth
                                                id="user_name"
                                                label="Name"
                                                autoFocus
                                                value={username}
                                                onChange={(event) => setUserName(event.target.value)}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                required
                                                fullWidth
                                                type="email"
                                                id="user_email"
                                                label="email"
                                                name="user_email"
                                                autoComplete="family-name"
                                                value={email}
                                                onChange={(event) => setEmail(event.target.value)}

                                            />
                                        </Grid>
                                        <Grid item xs={12}>

                                            <MuiTelInput
                                                margin="normal"
                                                required
                                                fullWidth
                                                id="phone"
                                                name="phone"
                                                value={phone}
                                                onChange={(newPhone) => setPhone(newPhone)}
                                                defaultCountry="IN"
                                                label="Phone Number"

                                            />
                                        </Grid>
                                        <Grid item xs={12}>

                                            <Box sx={{ minWidth: 120 }}>
                                                <FormControl fullWidth>
                                                    <InputLabel id="demo-simple-select-label">Camera</InputLabel>
                                                    <Select
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        value={brand}
                                                        label="Camera"
                                                        onChange={(event) => setBrand(event.target.value)}
                                                    >
                                                        <MenuItem value='Canon'>Canon</MenuItem>
                                                        <MenuItem value='Nikon'>Nikon</MenuItem>
                                                        <MenuItem value='Panasonic'>Panasonic</MenuItem>
                                                        <MenuItem value='Sony'>Sony</MenuItem>
                                                        <MenuItem value='FujiFilm'>FujiFilm</MenuItem>
                                                        <MenuItem value='Black Magic'>BlackMagic</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <FormControlLabel
                                                control={<Checkbox value="allowExtraEmails" color="primary" />}
                                                label="I want to receive inspiration via SMS."
                                            />
                                        </Grid>
                                    </Grid>
                                    <Button
                                        onClick={handleRequestCall}
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        sx={{ mt: 3, mb: 2 }}
                                    >
                                        Request Call
                                    </Button>
                                    <Grid item xs={12} justifyContent="center">
                                        <Grid >
                                            {/* <Link href="#" variant="body2">
                                                Already have an account? Sign in
                                            </Link> */}
                                            <Divider>OR</Divider>

                                            <p style={{ textAlign: "center" }}>Direct Call Us for any query</p>

                                        </Grid>
                                    </Grid>
                                    <Button
                                        startIcon={<PhoneForwardedIcon />}
                                        type="submit"
                                        color="success"
                                        fullWidth
                                        variant="contained"
                                        onClick={handleMakeCall}
                                        sx={{ mt: 1, mb: 2 }}
                                    >
                                        Make Call
                                    </Button>
                                </Box>

                            </Box>

                        </Container>
                    </ThemeProvider>

                </div>
            </div>
        </div>
    )
};

export default Modal;