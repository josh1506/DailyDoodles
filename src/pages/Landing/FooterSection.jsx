import {
    COMPANY_LINK,
    COMPANY_NAME,
    DATE_YEAR,
    ILLUSTRATION_CREDIT,
    MESSAGE,
    MODEL_CREDIT,
} from "../../services/constants/landing/footerSection.js";

import "../../assets/styles/landing/footer-section/footer-section.scss"


const FooterSection = () => {
    return (
        <footer className={"landing-footer"}>
            <span>
                &copy; {DATE_YEAR} &nbsp;
            </span>
            <a href={COMPANY_LINK} target={"_blank"} rel="noreferrer">{COMPANY_NAME}</a>
            <span>
                , {MESSAGE}
            </span>
            <p className={"landing-credits"}>
                3D model: <a href={MODEL_CREDIT.url} target={"_blank"} rel="noreferrer">{MODEL_CREDIT.title}</a> by{" "}
                <a href={MODEL_CREDIT.authorUrl} target={"_blank"} rel="noreferrer">{MODEL_CREDIT.author}</a>,{" "}
                <a href={MODEL_CREDIT.licenseUrl} target={"_blank"} rel="noreferrer">{MODEL_CREDIT.license}</a>.
                {" "}Illustration by {ILLUSTRATION_CREDIT.author} /{" "}
                <a href={ILLUSTRATION_CREDIT.url} target={"_blank"} rel="noreferrer">{ILLUSTRATION_CREDIT.source}</a>.
            </p>
        </footer>
    )
}

export default FooterSection
