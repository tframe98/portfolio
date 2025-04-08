// src/shaders/swirlVertex.js
export const swirlVertex = `
  precision highp float;

  varying vec2 vUv;

  void main() {
    // "position" and "uv" are automatically provided by Three.js
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;