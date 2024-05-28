import { image } from '@config/constant/image'
import './Testimonials.css'

const Testimonials = () => {
    return (
        <div className="testimonials">
            <h1>Testimonials</h1>
            <p>See what our customers love about our products.
                Discover how we excel in efficiency, durability, and satisfaction.
                Join us for quality, innovation, and reliable support.
            </p>

            <div className="testimonials-content">

                <div className="testimonials-box">
                    <div>
                        <p>
                            I absolutely love how versatile this product is! Whether I'm tackling work projects or indulging in my favorite hobbies,
                            it seamlessly adapts to my changing needs. Its intuitive design has truly enhanced my daily routine, making tasks more
                            efficient and enjoyable.
                        </p>
                    </div>
                    <div className='testimonials-box-below'>
                        <div className='testimonials-box-below-left'>

                            <div className="identity">
                                <div className='img-container'>
                                    <img src={image?.p1} alt="image" />
                                </div>
                                <div className="name-role">
                                    <p>Remy Sharp</p>
                                    <p>Software Engineer</p>
                                </div>
                            </div>

                        </div>
                        <div className='testimonials-box-below-right'>
                            <img src={image?.syd} alt="image" />
                        </div>

                    </div>
                </div>

                <div className="testimonials-box">
                    <div>
                        <p>
                            One of the standout features of this product is the exceptional customer support. In my experience,
                            the team behind this product has been quick to
                            respond and incredibly helpful. It's reassuring to know that they stand firmly behind their product.
                        </p>
                    </div>
                    <div className='testimonials-box-below'>
                        <div className='testimonials-box-below-left'>

                            <div className="identity">
                                <div className='img-container'>
                                    <img src={image?.p2} alt="image" />
                                </div>
                                <div className="name-role">
                                    <p>Travis Howard</p>
                                    <p>Lead Product Designer</p>
                                </div>
                            </div>

                        </div>
                        <div className='testimonials-box-below-right'>
                            <img src={image?.bern} alt="image" />
                        </div>

                    </div>
                </div>


                <div className="testimonials-box">
                    <div>
                        <p>
                        The level of simplicity and user-friendliness in this product has significantly simplified my life. 
                        I appreciate the creators for delivering a solution that not only meets but exceeds user expectations.
                        </p>
                    </div>
                    <div className='testimonials-box-below'>
                        <div className='testimonials-box-below-left'>

                            <div className="identity">
                                <div className='img-container'>
                                    <img src={image?.p3} alt="image" />
                                </div>
                                <div className="name-role">
                                    <p>Cindy Baker</p>
                                    <p>CTO</p>
                                </div>
                            </div>

                        </div>
                        <div className='testimonials-box-below-right'>
                            <img src={image?.montreal} alt="image" />
                        </div>

                    </div>
                </div>


                <div className="testimonials-box">
                    <div>
                        <p>
                        I appreciate the attention to detail in the design of this product. 
                        The small touches make a big difference, and it's evident that the creators focused on delivering 
                        a premium experience.
                        </p>
                    </div>
                    <div className='testimonials-box-below'>
                        <div className='testimonials-box-below-left'>

                            <div className="identity">
                                <div className='img-container'>
                                    <img src={image?.p4} alt="image" />
                                </div>
                                <div className="name-role">
                                    <p>Julia Stewart</p>
                                    <p>Senior Engineer</p>
                                </div>
                            </div>

                        </div>
                        <div className='testimonials-box-below-right'>
                            <img src={image?.tera} alt="image" />
                        </div>

                    </div>
                </div>



                <div className="testimonials-box">
                    <div>
                        <p>
                        I've tried other similar products, but this one stands out for its innovative features. 
                        It's clear that the makers put a lot of thought into creating a solution that truly addresses user 
                        needs.
                        </p>
                    </div>
                    <div className='testimonials-box-below'>
                        <div className='testimonials-box-below-left'>

                            <div className="identity">
                                <div className='img-container'>
                                    <img src={image?.p5} alt="image" />
                                </div>
                                <div className="name-role">
                                    <p>John Smith</p>
                                    <p>Product Designer</p>
                                </div>
                            </div>

                        </div>
                        <div className='testimonials-box-below-right'>
                            <img src={image?.colorado} alt="image" />
                        </div>

                    </div>
                </div>



                <div className="testimonials-box">
                    <div>
                        <p>
                        The quality of this product exceeded my expectations. It's durable, well-designed, and built to last. 
                        Definitely worth the investment!
                        </p>
                    </div>
                    <div className='testimonials-box-below'>
                        <div className='testimonials-box-below-left'>

                            <div className="identity">
                                <div className='img-container'>
                                    <img src={image?.p6} alt="image" />
                                </div>
                                <div className="name-role">
                                    <p>Daniel Wolf</p>
                                    <p>CDO</p>
                                </div>
                            </div>

                        </div>
                        <div className='testimonials-box-below-right'>
                            <img src={image?.ankara} alt="company logo" />
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Testimonials