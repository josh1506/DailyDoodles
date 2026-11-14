import {useMemo} from "react";
import * as THREE from "three"
import {useGLTF} from "@react-three/drei";
import {useFrame} from "@react-three/fiber";

import {prefersReducedMotion} from "../../../services/utils/a11y.js";


const LandingWorld = () => {
    const {scene, animations} = useGLTF("/assets/models/takodachi_rigged_hololive/scene.gltf")

    // One mixer per loaded model (previously a new mixer was built on every render).
    const mixer = useMemo(() => {
        const animationMixer = new THREE.AnimationMixer(scene)
        const hop = animations.find(clip => clip.name === "Hop")
        if (hop && !prefersReducedMotion()) {
            animationMixer.clipAction(hop).play()
        }
        return animationMixer
    }, [scene, animations])

    useFrame((state, delta) => mixer.update(delta * 0.3))

    return (
        <>
            <primitive
                object={scene}
                position={[0, -20, -75]}
                rotation-y={-Math.PI * 0.1}
            />
        </>
    )
}

export default LandingWorld
