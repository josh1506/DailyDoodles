import {Link} from "react-router-dom";

import {
    CTA_MESSAGE_1,
    CTA_MESSAGE_2,
    GET_STARTED,
    LEARN_MORE
} from "../../services/constants/landing/ctaSection.js";
import {toSignUpURL} from "../../services/constants/routes/urls.js";

import "../../assets/styles/landing/cta-section/cta-section.scss"


const CTASection = () => {
    return (
        <div className={"cta-section"}>
            <div className={"message-container"}>
                <div>
                    <span>{CTA_MESSAGE_1}</span>
                </div>
                <div>
                    <span>{CTA_MESSAGE_2}</span>
                </div>
            </div>
            <div className={"button-container"}>
                <div>
                    <Link to={`/${toSignUpURL}`}>
                        <button>{GET_STARTED}</button>
                    </Link>
                    <a href="#feature">{LEARN_MORE} <i className="bi bi-arrow-right"></i></a>
                </div>
            </div>
        </div>
    )
}

export default CTASection
