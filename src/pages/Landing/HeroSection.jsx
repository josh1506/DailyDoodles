import {
    HERO_TITLE,
    NEW_FEATURE,
    NEW_VERSION,
    HERO_DESCRIPTION,
    LEARN_MORE, GET_STARTED
} from "../../services/constants/landing/heroSection.js";

import "../../assets/styles/landing/hero-section.scss"


const HeroSection = () => {
    return (
        <div className={"landing-hero-section"}>
            <div>
                <a href="">
                    <span>{NEW_FEATURE}</span>
                    <span>{NEW_VERSION}</span>
                </a>
            </div>
            <div>
                <h1>{HERO_TITLE}</h1>
            </div>
            <div>
                <p>{HERO_DESCRIPTION}</p>
            </div>
            <div className={"button-container"}>
                <button>{GET_STARTED}</button>
                <a href="#feature">{LEARN_MORE} <i className="bi bi-arrow-right"></i></a>
            </div>
        </div>
    )
}

export default HeroSection
