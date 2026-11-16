import {
    CATCHPHRASE,
    FEATURE_DESCRIPTION,
    FEATURE_LISTS,
    FEATURE_TITLE,
} from "../../services/constants/landing/featureSection.js";


const FeatureSection = () => {
    return (
        <section className={"landing-features"} id={"feature"} aria-labelledby={"feature-title"}>
            <div className={"features-intro"}>
                <p className={"eyebrow"}>{CATCHPHRASE}</p>
                <h2 id={"feature-title"}>{FEATURE_TITLE}</h2>
                <p>{FEATURE_DESCRIPTION}</p>
            </div>
            <ol className={"features-list"}>
                {FEATURE_LISTS.map(feature => (
                    <li key={feature.id}>
                        <i className={`bi ${feature.icon}`} aria-hidden="true"/>
                        <div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    </li>
                ))}
            </ol>
        </section>
    )
}

export default FeatureSection
