// src/shaders/swirlFragment.js
export const swirlFragment = `
  precision highp float;

  varying vec2 vUv;
  uniform float u_time;
  uniform vec2 u_resolution;

  // -- Random and Noise Functions --
  float rand(vec2 n) {
    return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);

    // Four corners in 2D of a tile
    float a = rand(i);
    float b = rand(i + vec2(1.0, 0.0));
    float c = rand(i + vec2(0.0, 1.0));
    float d = rand(i + vec2(1.0, 1.0));

    // Smooth interpolation
    vec2 u = f * f * (3.0 - 2.0 * f);

    return mix(a, b, u.x) +
           (c - a) * u.y * (1.0 - u.x) +
           (d - b) * u.x * u.y;
  }

  // Fractal Brownian Motion for detail
  float fbm(vec2 p) {
    float value = 0.0;
    float amplitude = 0.5;
    float frequency = 5.0;
    for (int i = 0; i < 5; i++) {
      value += amplitude * noise(p * frequency);
      frequency *= 2.0;
      amplitude *= 0.5;
    }
    return value;
  }

  void main() {
    // Transform UV coordinates to [-1, 1] and adjust for aspect ratio
    vec2 uv = vUv * 1.0 - 1.0;
    float aspect = u_resolution.x / u_resolution.y;
    uv.x *= aspect;

    // Animate time
    float t = u_time * 0.2;

    // Domain warp for swirling effect: offset the UVs with FBM
    vec2 warp = vec2(
      fbm(uv + vec2(0.9, t)),
      fbm(uv + vec2(t, 0.0))
    ) * 0.5;
    uv += warp;

    // Compute FBM noise value from warped coordinates and time
    float n = fbm(uv + t);

    // Define a threshold to separate black and white areas
    float threshold = 0.5;
    float edgeWidth = .4;
    float boundary = smoothstep(threshold - edgeWidth, threshold + edgeWidth, n);

    // Calculate a rough derivative to emphasize edges
    float gradMag = length(fwidth(n));
    float line = 1.0 - smoothstep(0.0, 0.01, gradMag);

    // Base colors: white background, black shapes (or invert as desired)
    vec3 colorInside = vec3(0.1);  // black
    vec3 colorOutside = vec3(1.0); // white
    vec3 baseColor = mix(colorInside, colorOutside, boundary);

    // Darken along the detected edges
    baseColor = mix(baseColor, vec3(0.9), line * 0.6);

    gl_FragColor = vec4(baseColor, 7.0);
  }
`;