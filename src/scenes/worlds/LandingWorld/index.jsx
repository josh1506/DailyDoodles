import * as THREE from "three"
import {useGLTF} from "@react-three/drei";
import {useFrame} from "@react-three/fiber";


const LandingWorld = () => {
    const gltf = useGLTF("/assets/models/takodachi_rigged_hololive/scene.gltf")
    const mixer = new THREE.AnimationMixer(gltf.scene)
    gltf.animations.map(clip => {
        if (clip.name === "Hop") {
            const action = mixer.clipAction(clip)
            action.play()
        }
    })

    useFrame((state, delta) => mixer.update(delta * 0.3))

    return (
        <>
            <primitive
                object={gltf.scene}
                position={[0, -20, -75]}
                rotation-y={-Math.PI * 0.1}
            />
        </>
    )
}

export default LandingWorld
