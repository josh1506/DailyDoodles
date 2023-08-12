import {COMPANY_LINK, COMPANY_NAME, DATE_YEAR, MESSAGE} from "../../services/constants/landing/footerSection.js";

import "../../assets/styles/landing/footer-section/footer-section.scss"


const FooterSection = () => {
    return (
        <footer>
            <span>
                &copy; {DATE_YEAR} &nbsp;
            </span>
            <a href={COMPANY_LINK} target={"_blank"} rel="noreferrer">{COMPANY_NAME}</a>
            <span>
                , {MESSAGE}
            </span>
        </footer>
    )
}

export default FooterSection
