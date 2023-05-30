import React from 'react';

import { getAuth, RecaptchaVerifier, signInWithPhoneNumber,connectAuthEmulator } from "firebase/auth";

const Login = () => {

    const handleMobileSubmit = e => {
        e.preventDefault();
        console.log(e.target.value)
        const { name, value } = e.target;
        console.log([name],value);
        console.log(e);
    }

    const configureCapta = e => {


        const auth = getAuth();
        connectAuthEmulator(auth, "http://localhost:9099");
        console.log("capta process")
        window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
            'size': 'invisible',
            'callback': (response) => {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
                onSignInSubmit();
            },
            defaultCountry:"IN"
        }, auth);
        console.log("capta done")
    };

    const onSignInSubmit = (e) => {
        e.preventDefault();
        configureCapta();
        const phoneNumber = '+91' + e.target.mobile;
        console.log(phoneNumber);
        const appVerifier = window.recaptchaVerifier;

        const auth = getAuth();
        signInWithPhoneNumber(auth, phoneNumber, appVerifier)
            .then((confirmationResult) => {
                // SMS sent. Prompt user to type the code from the message, then sign the
                // user in with confirmationResult.confirm(code).
                window.confirmationResult = confirmationResult;
                console.log("Otp is send");
                // ...
            }).catch((error) => {
                // Error; SMS not sent
                // ...
                console.log("Some Error");
            });

    }

    return (
        <div>
            <h2> Login </h2>
            <form onSubmit={onSignInSubmit}>
                <input name='mobile' type='number' placeholder='Mobile No.' /><br /><br />
                <button type='submit' onClick={handleMobileSubmit}>Continue</button>
            </form>
            <h2>Enter Otp</h2>
            <form>
                <input name='otp' type='number' placeholder='Enter Otp' /><br /><br />
                <button type='submit'>Submit Otp</button>
            </form>
        </div>
    )
}

export default Login;