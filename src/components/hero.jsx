import "./hero.scss"
import heroImage from "../assets/grocborder3.png"
const Hero = () => { 
    return (
        <div className="container">
            <div className="hero">
                <span></span>
                <h3>get 20% cashback on first order</h3>
            </div>
            <div className="heroImgCont">
                <img src={heroImage } />
            </div>
            
        </div>
    )
} 

export default Hero;