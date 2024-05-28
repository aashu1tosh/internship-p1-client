import { image } from '@config/constant/image'
import './TrustedBy.css'

const TrustedBy = () => {
    return (
        <div className='trusted-by'>
            <h3>Trusted by the best companies</h3>
            <div className="companies">
            <div className="img-container">
                    <img src={image?.syd} alt="" />
                </div>

                <div className="img-container">
                    <img src={image?.bern} alt="" />
                </div>

                <div className="img-container">
                    <img src={image?.montreal} alt="" />
                </div>

                <div className="img-container">
                    <img src={image?.tera} alt="" />
                </div>

                <div className="img-container">
                    <img src={image?.colorado} alt="" />
                </div>

                <div className="img-container">
                    <img src={image?.ankara} alt="" />
                </div>

            </div>

        </div>
    )
}

export default TrustedBy