import { useState } from 'react';
import './Hero.css';

const Hero = () => {
    const [email, setEmail] = useState<string>("");

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleKeyDown = (e: any) => {
        if (e.key === "Enter") {
            handleSubscribeButton();
        }
    };

    const handleSubscribeButton = () => {
        setEmail("");
    };
    return (
        <div className='hero'>

            <h1>Our Latest <span className="blue-text">Products</span></h1>
            <p>
                Explore our cutting-edge dashboard, delivering high-quality
                solutions tailored to your needs. Elevate your experience with top-tier features and services.
            </p>

            <div className="hero-footer">
                <input type="email" name="" id="subscribe-input"
                    placeholder='Your Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyDown={handleKeyDown} />
                <button onClick={handleSubscribeButton}>Start now</button>
            </div>
            <p>By clicking "Start now" you agree to our <span className='blue-text'>"Terms and Condition"</span></p>

        </div>
    )
}

export default Hero