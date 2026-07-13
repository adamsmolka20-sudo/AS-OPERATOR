import * as THREE from "three";
import { SCENE_COLORS } from "./sceneConfig";

interface LightPatch {
  x: number;
  y: number;
  radius: number;
  color: string;
  alpha: number;
}

const WIDTH = 512;
const HEIGHT = 256;

/**
 * Generates the Signet's environment reflection map procedurally instead of
 * loading a stock/photographic HDRI — per Design Bible §5/§11/§20, any
 * photographic environment risks reintroducing warm tones the palette bans.
 * The three patches below stand in for the key/fill/rim light positions.
 */
export function createProceduralEnvironmentTexture(): THREE.Texture {
  const canvas = document.createElement("canvas");
  canvas.width = WIDTH;
  canvas.height = HEIGHT;
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    throw new Error("2D canvas context unavailable for procedural environment");
  }

  const base = ctx.createLinearGradient(0, 0, 0, HEIGHT);
  base.addColorStop(0, "#FFFFFF");
  base.addColorStop(0.55, "#F1F3F6");
  base.addColorStop(1, "#D8DEE6");
  ctx.fillStyle = base;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  const patches: LightPatch[] = [
    { x: WIDTH * 0.26, y: HEIGHT * 0.3, radius: WIDTH * 0.24, color: SCENE_COLORS.accentBlue, alpha: 0.55 },
    { x: WIDTH * 0.68, y: HEIGHT * 0.58, radius: WIDTH * 0.28, color: SCENE_COLORS.accentIndigo, alpha: 0.4 },
    { x: WIDTH * 0.87, y: HEIGHT * 0.2, radius: WIDTH * 0.18, color: SCENE_COLORS.accentViolet, alpha: 0.35 },
  ];

  for (const patch of patches) {
    const gradient = ctx.createRadialGradient(patch.x, patch.y, 0, patch.x, patch.y, patch.radius);
    gradient.addColorStop(0, hexToRgba(patch.color, patch.alpha));
    gradient.addColorStop(1, hexToRgba(patch.color, 0));
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.mapping = THREE.EquirectangularReflectionMapping;
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.needsUpdate = true;
  return texture;
}

function hexToRgba(hex: string, alpha: number): string {
  const value = hex.replace("#", "");
  const r = parseInt(value.substring(0, 2), 16);
  const g = parseInt(value.substring(2, 4), 16);
  const b = parseInt(value.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
