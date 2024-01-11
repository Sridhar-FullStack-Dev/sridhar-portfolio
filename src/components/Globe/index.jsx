import { useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { useFrame, Canvas } from "@react-three/fiber";
import { useScroll } from "framer-motion";
import { motion } from "framer-motion-3d";
import { OrbitControls } from "@react-three/drei";
import { TextureLoader } from "three/src/loaders/TextureLoader";

export default function Globe() {
  const scene = useRef(null);
  const mesh = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scene,
    offset: ["start end", "end start"],
  });

  const [color, normal, aoMap] = useLoader(TextureLoader, [
    "/assets/color.jpg",
    "/assets/normal.png",
    "/assets/occlusion.jpg",
  ]);

  return (
    <Canvas ref={scene}>
      <ambientLight intensity={0.1} />
      <directionalLight intensity={3.5} position={[1, 0, -0.25]} />
      <OrbitControls
        enableRotate={true}
        enableDamping={true}
        enableZoom={false}
        enablePan={false}
      />
      <motion.mesh ref={mesh} scale={3} rotation-y={scrollYProgress}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial map={color} normalMap={normal} aoMap={aoMap} />
      </motion.mesh>
      <GlobeMesh mesh={mesh} />
    </Canvas>
  );
}

function GlobeMesh({ mesh }) {
  useFrame(({ clock }) => {
    mesh.current.rotation.y += 0.001;
  });

  return null;
}
