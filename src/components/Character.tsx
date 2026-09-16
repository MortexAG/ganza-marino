import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import type { Group } from "three";

type CharacterProps = {
  progress?: number;
};

const modelPath = `${import.meta.env.BASE_URL}models/gta-character.glb`;

export default function Character({
  progress = 0,
}: CharacterProps) {
  const group = useRef<Group>(null);

  const { scene, animations } = useGLTF(modelPath);

  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    const action = actions.HatRaise;

    if (!action) {
      console.log("HatRaise animation not found");
      return;
    }

    action.reset();
    action.play();
    action.paused = true;

    return () => {
      action.stop();
    };
  }, [actions]);

  useEffect(() => {
    const action = actions.HatRaise;

    if (!action) return;

    action.time = progress * action.getClip().duration;
  }, [progress, actions]);

  return (
    <group
      ref={group}
      position={[0, -1.5, 0]}
      scale={1.5}
    >
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload(modelPath);