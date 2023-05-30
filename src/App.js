import React from "react";
import Navbar from './components/navbar/Navbar';
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Sell from "./pages/Sell";
import Contact from "./pages/Contact";
import DSLR from "./pages/DSLR";
import SingleProduct from "./pages/SingleProduct";
import ModelDescription from "./pages/ModelDescription";
import "./pages/Sell.scss";
import { Route, Routes } from 'react-router-dom';
import ProductDetails from "./pages/ProductDetails";
import CustomizedSteppers from "../src/assets/progressbar/progressBar";
import Lens from "./assets/formsteps/lens";
import Accessories from "./assets/formsteps/accessories";
import CameraAge from "./assets/formsteps/cameraAge";
import Quotation from "./assets/formsteps/quotation";
import Hero from "./components/hero/Hero";
import DamageQuatation from "../src/assets/formsteps/damageQuatation";
import SignIn from "./components/Authentication/signin";
import Modal from "./components/modal/homeModal";



function App() {
  return (
    <div>
      <Navbar />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/DSLR" element={<DSLR />} />
        <Route path="/single-product" element={<SingleProduct />} />
        <Route path="/ModelDescription" element={<ModelDescription />} />
        <Route path="/ProductDetails" element={<ProductDetails />} />
        <Route path="/CustomizedSteppers" element={<CustomizedSteppers />} />
        <Route path="/lens" element={<Lens />}></Route>
        <Route path="accessories" element={<Accessories />} />
        <Route path="/cameraAge" element={<CameraAge />} />
        <Route path="/quotation" element={<Quotation />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/damageQuatation" element={<DamageQuatation />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/modal" element={<Modal />}  />
        

      </Routes>
      <Footer />
    </div>
  )
};
export default App;
