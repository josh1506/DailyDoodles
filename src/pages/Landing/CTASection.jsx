import {Link} from "react-router-dom";

import {
    CTA_MESSAGE_1,
    CTA_MESSAGE_2,
    GET_STARTED,
    LOG_IN,
} from "../../services/constants/landing/ctaSection.js";
import {loginURL, toSignUpURL} from "../../services/constants/routes/urls.js";


const CTASection = () => {
    return (
        <section className={"landing-cta"} aria-labelledby={"cta-title"}>
            <div className={"sticky-note"}>
                <h2 id={"cta-title"}>{CTA_MESSAGE_1}</h2>
                <p>{CTA_MESSAGE_2}</p>
                <div className={"actions"}>
                    <Link to={`/${toSignUpURL}`} className={"dd-btn"}>{GET_STARTED}</Link>
                    <Link to={`/${loginURL}`} className={"text-link"}>{LOG_IN}</Link>
                </div>
            </div>
        </section>
    )
}

export default CTASection
