export const vertexShader = `
  varying vec2 vUv;

  void main() {
    vUv = uv;

    vec3 pos = position;
    pos.z += sin(pos.x * 5.0) * 0.1;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

export const fragmentShader = `
  uniform sampler2D uTexture;
  varying vec2 vUv;

  void main() {
    vec4 color = texture2D(uTexture, vUv);

    gl_FragColor = color;
  }
`;