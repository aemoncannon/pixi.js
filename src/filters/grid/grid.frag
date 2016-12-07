precision mediump float;

uniform sampler2D uSampler;
uniform mat3 modelViewMatrix;
uniform float cellSize;
uniform float alpha;
uniform float lineWidth;
uniform vec4 lineColor;

// These values from vertex shader will be interpolated (perspective
// correct) for each pixel.
varying vec2 vTextureCoord;
varying vec3 vVertexCoord;

void main() {
    // Sample the color at current coordinate to blend with the grid line color.
    vec4 color = texture2D(uSampler, vTextureCoord);
    vec4 blendColor = color * (vec4(1,1,1,1) - vec4(alpha, alpha, alpha, alpha));

    float scale = modelViewMatrix[0][0];
    float width = lineWidth * scale;  // Line width should be scale invariant.

    vec3 v = vVertexCoord;
    float xMod = mod(v.x, cellSize);
    float yMod = mod(v.y, cellSize);

    if (xMod < width || yMod < width) {
      gl_FragColor = lineColor * alpha + blendColor;

    } else {
      gl_FragColor = color;
    }
}
