/** Soft, additive point sprites with per-particle drift computed on the GPU. */
export const particleFieldVertexShader = /* glsl */ `
  uniform float uTime;
  uniform float uPixelRatio;
  attribute vec3 color;
  attribute float aPhase;
  attribute float aSize;
  varying vec3 vColor;

  void main() {
    vColor = color;

    vec3 pos = position;
    pos.y += sin(uTime * 0.15 + aPhase) * 0.18;
    pos.x += cos(uTime * 0.11 + aPhase) * 0.12;

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    gl_PointSize = aSize * uPixelRatio * (7.0 / -mvPosition.z);
  }
`;

export const particleFieldFragmentShader = /* glsl */ `
  varying vec3 vColor;

  void main() {
    vec2 centered = gl_PointCoord - vec2(0.5);
    float dist = length(centered);
    float alpha = smoothstep(0.5, 0.0, dist);
    gl_FragColor = vec4(vColor, alpha * 0.45);
  }
`;
