/**
 * Drives the "traveling bloom" inside the GlassRibbon — a soft band of
 * light that continuously loops along the tube's length rather than a
 * static glow, so the internal light reads as alive (Design Bible §11/§12).
 */
export const ribbonGlowVertexShader = /* glsl */ `
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

export const ribbonGlowFragmentShader = /* glsl */ `
  uniform float uTime;
  uniform float uBreath;
  uniform vec3 uColorA;
  uniform vec3 uColorB;

  varying vec2 vUv;

  void main() {
    float travel = fract(vUv.x - uTime * 0.06);
    float band = smoothstep(0.5, 0.0, abs(travel - 0.5) * 2.0);

    float breathUnit = uBreath * 0.5 + 0.5;
    vec3 color = mix(uColorA, uColorB, breathUnit);
    float breathBoost = 0.6 + 0.4 * breathUnit;

    float alpha = band * breathBoost * 0.9;
    gl_FragColor = vec4(color, alpha);
  }
`;
