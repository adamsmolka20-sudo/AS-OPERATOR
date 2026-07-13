/**
 * Cheap view-dependent "glass edge" look for background elements that stay
 * permanently out of focus — reserves the expensive real transmission
 * material (MeshTransmissionMaterial) for the Signet itself, per the
 * Signet spec's materials/performance guidance.
 */
export const fresnelGlassVertexShader = /* glsl */ `
  varying vec3 vNormal;
  varying vec3 vViewPosition;

  void main() {
    vNormal = normalize(normalMatrix * normal);
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    vViewPosition = -mvPosition.xyz;
    gl_Position = projectionMatrix * mvPosition;
  }
`;

export const fresnelGlassFragmentShader = /* glsl */ `
  uniform vec3 uBaseColor;
  uniform vec3 uEdgeColor;
  uniform float uOpacity;
  uniform float uFresnelPower;

  varying vec3 vNormal;
  varying vec3 vViewPosition;

  void main() {
    vec3 viewDir = normalize(vViewPosition);
    float fresnel = pow(1.0 - clamp(dot(normalize(vNormal), viewDir), 0.0, 1.0), uFresnelPower);
    vec3 color = mix(uBaseColor, uEdgeColor, fresnel);
    float alpha = uOpacity + fresnel * (1.0 - uOpacity) * 0.8;
    gl_FragColor = vec4(color, alpha);
  }
`;
