import Feature from 'Components/Feature/Feature'
import Footer from 'Components/Footer/Footer'
import Hero from 'Components/Hero/Hero'
import Navbar from 'Components/Navbar/Navbar'
import Testimonials from 'Components/Testimonials/Testimonials'
import TrustedBy from 'Components/TrustedBy/TrustedBy'
import './Home.css'

const Home = () => {
    return (
        <>

            <Navbar />
            <div className="main-container">
                <Hero />
                {/* <HomeDashboard /> */}
                <TrustedBy />
                <Feature />
                <Testimonials />
                <Footer />
            </div>
        </>
    )
}

export default Home