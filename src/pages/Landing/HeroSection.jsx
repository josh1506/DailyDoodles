import {lazy, Suspense} from "react";
import {Link} from "react-router-dom";

import {
    HERO_TITLE,
    NEW_FEATURE,
    NEW_VERSION,
    HERO_DESCRIPTION,
    LEARN_MORE, GET_STARTED
} from "../../services/constants/landing/heroSection.js";
import {toSignUpURL} from "../../services/constants/routes/urls.js";

import "../../assets/styles/landing/hero-section/hero-section.scss"

// three.js + react-three are only needed here; load them as a separate chunk so the
// rest of the app (sign-in, tasks) doesn't download them. The .character box has a fixed
// size, so nothing shifts when the scene arrives.
const LandingExperience = lazy(() => import("../../scenes/experience/LandingExperience.jsx"))


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
                        <button tabIndex={-1}>
                            {GET_STARTED}
                        </button>
                    </Link>
                    <a href="#feature">{LEARN_MORE} <i className="bi bi-arrow-right"/></a>
                </div>
            </div>

            <div className={"character"} aria-hidden="true">
                <Suspense fallback={null}>
                    <LandingExperience/>
                </Suspense>
            </div>
        </div>
    )
}

export default HeroSection
