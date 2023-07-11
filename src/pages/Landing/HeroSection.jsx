import {Link} from "react-router-dom";

import LandingExperience from "../../scenes/experience/LandingExperience.jsx";
import {
    HERO_TITLE,
    NEW_FEATURE,
    NEW_VERSION,
    HERO_DESCRIPTION,
    LEARN_MORE, GET_STARTED
} from "../../services/constants/landing/heroSection.js";
import {toSignUpURL} from "../../services/constants/routes/urls.js";

import "../../assets/styles/landing/hero-section.scss"


const HeroSection = () => {
    return (
        <div className={"landing-hero-section"}>
            <div className={"content"}>
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
                    <Link to={`/${toSignUpURL}`}>
                        <button>
                            {GET_STARTED}
                        </button>
                    </Link>
                    <a href="#feature">{LEARN_MORE} <i className="bi bi-arrow-right"/></a>
                </div>
            </div>

            <div className={"character"}>
                <LandingExperience/>
            </div>
        </div>
    )
}

export default HeroSection
