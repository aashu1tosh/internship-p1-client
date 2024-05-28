import { image } from '@config/constant/image';
import { MdDashboard } from "react-icons/md";
import './Feature.css';

const Feature = () => {
    return (
        <div className="feature">
            <div className="product-feature">
                <div className="product-feature-heading">
                    <h1>Product Feature</h1>
                    <p>
                        Here you can provide a brief overview of the key features of the product.
                        For example, you could list the number of features, the types of features, add-ons, or the benefits of the
                        features.
                    </p>

                    <div className="feature-box active">
                        <div className="feature-box-img">
                            <MdDashboard size={30} />
                        </div>
                        <div className="feature-box-description">
                            <h3>Dashboard</h3>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad unde autem
                                eaque modi quasi ducimus dicta. Labore non et quidem.
                            </p>
                            <p className='learn-more'>
                                Learn more &gt;
                            </p>
                        </div>
                    </div>

                    <div className="feature-box">
                        <div className="feature-box-img">
                            <MdDashboard size={30} />
                        </div>
                        <div className="feature-box-description">
                            <h3>Mobile Integration</h3>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad unde autem
                                eaque modi quasi ducimus dicta. Labore non et quidem.
                            </p>
                            <p className='learn-more'>
                                Learn more &gt;
                            </p>
                        </div>
                    </div>

                    <div className="feature-box">
                        <div className="feature-box-img">
                            <MdDashboard size={30} />
                        </div>
                        <div className="feature-box-description">
                            <h3>Available on all platforms</h3>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad unde autem
                                eaque modi quasi ducimus dicta. Labore non et quidem.
                            </p>
                            <p className='learn-more'>
                                Learn more &gt;
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="feature-img-container">
                <img src={image?.f1} alt="" />
            </div>
        </div>
    )
}

export default Feature