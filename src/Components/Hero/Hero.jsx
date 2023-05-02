import React, { useState, useEffect, useMemo } from "react";
import image1 from "./Assets/p1.png";
import image2 from "./Assets/p2.png";
import image3 from "./Assets/p3.png";
import "./Hero.css";

function HeroSection() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = useMemo(() => [image1, image2, image3],[]);
    
    
        
    useEffect(() => {
        // switch to the next image every 5 seconds
        const intervalId = setInterval(() => {
        setCurrentImageIndex((currentImageIndex) => {
            return (currentImageIndex + 1) % images.length;
        });
        }, 5000);

        return () => {
        clearInterval(intervalId);
        };
    }, [images.length]);

    return (
        <section className="hero-section">
        <div className="hero-info">
            <div className="hero-content">
            <h3>0{currentImageIndex+1 }/03</h3>
            <div className="hero-content-down">
                <h5>PUT ON TARGET PRO AND STEP OFF</h5>
                <h1>TARGET PRO WEARS</h1>
                <p>Quiet Luxury, the real luxury</p>
            </div>
            <div className="hero-content-btn">
                <button>SHOP MEN</button>
                <button>SHOP WOMEN</button>
            </div>
            </div>
            <div className="hero-img">
            <img src={images[currentImageIndex]} alt="" />
            </div>
        </div>
        </section>
    );
}

export default HeroSection;
