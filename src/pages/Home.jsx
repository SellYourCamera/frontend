import React, {useState, useEffect} from "react"
import Hero from "../components/hero/Hero";
import Slider from "../components/sliders/Slider"
//import HeroSliderThree from "../../components/sliders/HeroSliderThree";
import SellSection from "./Sell";
import Modal from "../components/modal/homeModal";
import FAQ from '../components/Faq';
import Category from "./Category";
import DSLRBrand from "./DslrBrand";
import VideoHero from "../components/hero/videohero";
const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    useEffect(() => {
        // Trigger the modal after 3 seconds
        const timeoutId = setTimeout(() => {
            setIsModalOpen(true);
        }, 3000); // 3000 milliseconds = 3 seconds

        // Clean up the timeout when the component unmounts or when isModalOpen changes
        return () => {
            clearTimeout(timeoutId);
        };
    }, []);
 
    const handleRequest = () =>{
        setIsModalOpen(true);
    }


    
return (
    <div>
        <Hero isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
        <VideoHero></VideoHero>
        {/* <Slider/> */}
        {/* <SellSection/> */}
        {isModalOpen && <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>}
        <Category/>
        <DSLRBrand/>

        <FAQ/>


        
    </div>
    )
}

export default Home;