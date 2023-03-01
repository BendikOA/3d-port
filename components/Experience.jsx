import { OrbitControls, ScrollControls } from '@react-three/drei';
import { AmbientLight, BoxGeometry, MeshNormalMaterial } from 'three';
import { Keys } from './Keys';
import { Overlay } from './Overlay';

export const Experience = () => {
  return (
<>
    <ambientLight intesity={0.1} />
    <ScrollControls pages={3} damping={0.25} >
      <Overlay />
      <Keys />
    </ScrollControls>
    </>
  );
};

