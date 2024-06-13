import { image } from '@config/constant/image';
import { useState } from 'react';
import { FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";

import './Footer.css';

const Footer = () => {
    const [email, setEmail] = useState<string>("");

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleSubscribeButton();
        }
    };

    const handleSubscribeButton = () => {
        setEmail("");
    };
    return (
        <div className='footer'>
            <div className="footer-up">
                <div className="footer-up-left">
                    <div className="img-container">
                        <img src={image?.footer_logo} alt="image logo" />
                    </div>
                    <h2>Newsletter</h2>
                    <p>Subscribe to our newsletter for weekly updates and promotions.</p>

                    <div className="footer-input">
                        <input type="email" name="" id="subscribe-input"
                            placeholder='Your Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onKeyDown={handleKeyDown} />
                        <button onClick={handleSubscribeButton}>Subscribe</button>
                    </div>
                </div>

                <div className="footer-up-right">
                    <div className='footer-lists'>
                        <h2>Product</h2>
                        <ul>
                            <li>Features</li>
                            <li>Testimonials</li>
                            <li>Highlights</li>
                            <li>Pricing</li>
                            <li>FAQ</li>
                        </ul>

                    </div>
                    <div className='footer-lists'>
                        <h2>Company</h2>
                        <ul>
                            <li>About us</li>
                            <li>Careers</li>
                            <li>Press</li>
                        </ul>
                    </div>
                    <div className='footer-lists'>
                        <h2>Legal</h2>
                        <ul>
                            <li>Term</li>
                            <li>Legacy</li>
                            <li>Contact</li>
                        </ul>
                    </div>

                </div>
            </div>
            <hr />
            <div className="footer-down">
                <div className="footer-down-left">
                    <p>Privacy Policy  &bull; Terms of Service</p>
                    <p>Copyright &copy; Sitemark 2024</p>
                </div>
                <div className="footer-down-left">
                    <span><FaFacebook size={25} /></span>
                    <span><FaInstagramSquare size={25} /></span>
                    <span><FaLinkedin size={25} /></span>
                </div>
            </div>
        </div>
    )
}

export default Footer