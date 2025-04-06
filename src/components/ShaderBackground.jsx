import { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';

const DistortedPlane = () => {
  const mesh = useRef();
  const texture = useLoader(THREE.TextureLoader, '/imgs/portfolioBackground.png');

  useFrame(({ clock }) => {
    if (mesh.current) {
      mesh.current.material.uniforms.uTime.value = clock.getElapsedTime();
    }
  });

  return (
    <mesh ref={mesh}>
      <planeGeometry args={[10, 10, 128, 128]} />
      <shaderMaterial
        uniforms={{
          uTime: { value: 0 },
          uTexture: { value: texture },
        }}
        vertexShader={`
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}
        fragmentShader={`
          uniform float uTime;
          uniform sampler2D uTexture;
          varying vec2 vUv;

          void main() {
            // Distort UVs with sine waves
            vec2 distortedUv = vUv;
            distortedUv.y += sin(vUv.x * 10.0 + uTime) * 0.02;
            distortedUv.x += cos(vUv.y * 10.0 + uTime) * 0.02;

            vec4 texColor = texture2D(uTexture, distortedUv);
            gl_FragColor = texColor;
          }
        `}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};

export default DistortedPlane;
