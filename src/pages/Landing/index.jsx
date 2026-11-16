import {useEffect} from "react";

import CTASection from "./CTASection.jsx";
import FeatureSection from "./FeatureSection.jsx";
import FooterSection from "./FooterSection.jsx";
import HeroSection from "./HeroSection.jsx";
import LandingNavbar from "./LandingNavbar.jsx";

import "../../assets/styles/landing/landing.scss"


const Landing = () => {
    useEffect(() => {
        document.title = "DailyDoodles"
    }, [])

    return (
        <div className={"landing"}>
            <LandingNavbar/>
            {/* role=main, not <main>: the global `main` rule sizes the app's task column. */}
            <div role="main" className={"landing-main"}>
                <HeroSection/>
                <FeatureSection/>
                <CTASection/>
            </div>
            <FooterSection/>
        </div>
    )
}

export default Landing
