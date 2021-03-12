#pragma glslify: updateFragmentColor = require('../base/updateFragmentColor.glsl')
#pragma glslify: determineVisibility = require('../base/determineVisibility.glsl');
#pragma glslify: determineColor = require('../base/determineColor.glsl')
#pragma glslify: isSliced = require('../base/isSliced.glsl', NUM_CLIPPING_PLANES=NUM_CLIPPING_PLANES, UNION_CLIPPING_PLANES=UNION_CLIPPING_PLANES)

uniform sampler2D colorDataTexture;
uniform sampler2D overrideVisibilityPerTreeIndex;
uniform sampler2D matCapTexture;

uniform vec2 treeIndexTextureSize;

varying float v_treeIndex;
varying vec3 v_color;
varying vec3 v_normal;

uniform int renderMode;

varying vec3 vViewPosition;

void main() {
    if (!determineVisibility(colorDataTexture, treeIndexTextureSize, v_treeIndex, renderMode)) {
        discard;
    }
    if (isSliced(vViewPosition)) {
        discard;
    }

    vec4 color = determineColor(v_color, colorDataTexture, treeIndexTextureSize, v_treeIndex);
    updateFragmentColor(renderMode, color, v_treeIndex, v_normal, gl_FragCoord.z, matCapTexture, false);
}
