// // import React, { useState, useEffect } from 'react';
// // import './hero.scss';

// // const Hero = () => {
// //   const [activeIndex, setActiveIndex] = useState(0);
// //   const [slideData, setSlideData] = useState([
// //     {
// //       backgroundImage: "url(https://images.unsplash.com/photo-1625545013865-80da35181abf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZHNscnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60)",
// //       title: "Slide 1",
// //       content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus quam in dapibus faucibus. Nullam posuere luctus arcu vel finibus. Donec vehicula risus sed felis fringilla, sed consequat ante facilisis.",
// //     },
// //     {
// //       backgroundImage: "url(https://images.unsplash.com/photo-1625545013865-80da35181abf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZHNscnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60)",
// //       title: "Slide 2",
// //       content: "Duis quis lacus vel magna efficitur bibendum. Etiam euismod tellus vel purus iaculis, sed dapibus massa varius. Aliquam erat volutpat. Integer in quam eget ex aliquam bibendum. Sed dictum fermentum faucibus.",
// //     },
// //     {
// //       backgroundImage: "url(https://images.unsplash.com/photo-1625545013865-80da35181abf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZHNscnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60)",
// //       title: "Slide 3",
// //       content: "Suspendisse potenti. Integer ut mi ultricies, lacinia metus non, pretium felis. Duis at arcu libero. Aenean ac eros in nulla accumsan consectetur eu eget sem. Praesent malesuada justo eget dui blandit, at ultricies orci molestie.",
// //     }
// //   ]);

// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setActiveIndex((activeIndex + 1) % slideData.length);
// //     }, 5000);

// //     return () => clearInterval(interval);
// //   }, [activeIndex, slideData.length]);

// //   return (
// //     <div className="hero">
// //       {slideData.map((slide, index) => (
// //         <div
// //           key={index}
// //           className={`slide ${index === activeIndex ? "active" : ""}`}
// //           style={{ backgroundImage: slide.backgroundImage }}
// //         >
// //           <div className="slide-content">
// //             <h2>{slide.title}</h2>
// //             <p>{slide.content}</p>
// //           </div>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // }

// // export default Hero;



// import React, { useEffect, useRef } from 'react';
// import './hero.css';

// function Hero() {
//   const spanRef = useRef(null);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       const show = spanRef.current.querySelector('span[data-show]');
//       const next = show?.nextElementSibling || spanRef.current.querySelector('span:first-child');
//       const up = spanRef.current.querySelector('span[data-up]');

//       if (show) {
//         show.removeAttribute('data-show');
//         show.setAttribute('data-up', '');
//       }

//       if (up) {
//         up.removeAttribute('data-up');
//       }

//       next.setAttribute('data-show', '');
//     }, 2000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div>
//       <h1>
//         Sell Your Old Camera
//       </h1>
//       <div className="mask">
//       <span ref={spanRef}>
//         <span>Gradient</span>
//         <span>Text</span>
//         <span>Effect</span>
//       </span>
//     </div>
//     </div>
   
//   );
// }

// export default Hero;






import React from 'react';
import Button from '@mui/material/Button';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import "./hero.css";


const Hero = ({ isModalOpen, setIsModalOpen }) => {
  const handleCallRequest = () => {
    setIsModalOpen(true);
  }
  const handleMakeCall = () => {
    // Replace the phone number with the actual phone number you want to call
    window.location.href = 'tel:+91 9557755504'; // Example phone number
  }
   return (
     <div className="hero-section">
       <div className='hero-row'>
         <div className='hero-content'>
           <h1>
             Sell Your Camera @ Best Price
           </h1>
           <h3>
             Feel Free, We will be happy to make deal with you. 
           </h3>
           <Button
           startIcon={<ConnectWithoutContactIcon/>}
           onClick={handleCallRequest}
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
             onClick={handleMakeCall}
             sx={{
               fontSize: '1rem',
               padding: '0.5rem 1rem',
               marginLeft:'20px'
             }}
           > Make Call
           </Button>
         </div>
         <div className='hero-img'>
         <img
           src={require("../../assets/img/camerasell1.png")}
           alt="Hero"
         />
       </div>
       </div>
     </div>
   );
 };
 
 export default Hero;
