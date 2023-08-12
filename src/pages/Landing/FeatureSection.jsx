import {
    CATCHPHRASE,
    FEATURE_DESCRIPTION,
    FEATURE_TITLE,
    LEARN_MORE,
    FEATURE_LISTS,
} from "../../services/constants/landing/featureSection.js";

import "../../assets/styles/landing/feature-section/feature-section.scss"


const FeatureSection = () => {
    const generateFeature = () => {
        return (
            <>
                {FEATURE_LISTS.map(feature => (
                    <div key={feature.id} className={"feature-card"}>
                        <div>
                            <img src={feature.icon.src} alt={feature.icon.alt}/>
                            <h3>{feature.title}</h3>
                        </div>
                        <div>
                            <p>{feature.description}</p>
                            <a href="">{LEARN_MORE}</a>
                        </div>
                    </div>
                ))}
            </>
        )
    }

    return (
        <div className={"landing-feature-section"} id={"feature"}>
            <div>
                <div>
                    <span>{CATCHPHRASE}</span>
                    <h2>{FEATURE_TITLE}</h2>
                    <p>{FEATURE_DESCRIPTION}</p>
                </div>
            </div>
            <div className={"feature-list-container"}>
                {generateFeature()}
            </div>
        </div>
    )
}

export default FeatureSection
