import {Canvas} from "@react-three/fiber";

import LandingWorld from "../worlds/LandingWorld/index.jsx";
import {prefersReducedMotion} from "../../services/utils/a11y.js";


const LandingExperience = () => {
    // With reduced motion the mascot is static, so only render frames on demand.
    return (
        <Canvas frameloop={prefersReducedMotion() ? "demand" : "always"}>
            <LandingWorld/>
        </Canvas>
    )
}

export default LandingExperience
