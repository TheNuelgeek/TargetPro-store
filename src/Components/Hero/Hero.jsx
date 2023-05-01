import image1 from "./Assets/p1.png"
import "./Hero.css"

function HeroSection(){
    return(
        <section className="hero-section">
            <div className="hero-info">
                <div className="hero-content">
                    <h3>03/03</h3>
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
                <img src={image1} alt="" className=""/>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;