import CTASection from "./CTASection.jsx";
import FeatureSection from "./FeatureSection.jsx";
import FooterSection from "./FooterSection.jsx";
import HeroSection from "./HeroSection.jsx";
import LandingNavbar from "./LandingNavbar.jsx";


const Landing = () => {
    return (
        <>
            <LandingNavbar/>
            <HeroSection/>
            <FeatureSection/>
            <CTASection/>
            <FooterSection/>
        </>
    )
}

export default Landing
