precision highp float;

#pragma glslify: import('../../base/nodeAppearance.glsl')
#pragma glslify: import('../../base/updateFragmentColor.glsl')
#pragma glslify: import('../../base/determineNodeAppearance.glsl');
#pragma glslify: import('../../base/determineVisibility.glsl');
#pragma glslify: import('../../base/determineColor.glsl');
#pragma glslify: import('../../base/isClipped.glsl')
#pragma glslify: import('../../math/constants.glsl')

// TODO general cylinder and cone are very similar and used
// the same shader in the old code. Consider de-duplicating
// parts of this code

uniform sampler2D colorDataTexture;
uniform sampler2D matCapTexture;
uniform vec2 treeIndexTextureSize;
uniform mat4 projectionMatrix;
uniform int renderMode;

// Note! Must be placed after all uniforms in order for this to work on iOS (REV-287)
#pragma glslify: import('../../base/updateFragmentDepth.glsl')

in vec4 v_centerB;
in vec4 v_W;
in vec4 v_U;
in float v_angle;
in float v_arcAngle;
in float v_surfacePointY;
in vec4 v_planeA;
in vec4 v_planeB;
flat in float v_treeIndex;
in vec3 v_color;
in vec3 v_normal;

void main() {
    NodeAppearance appearance = determineNodeAppearance(colorDataTexture, treeIndexTextureSize, v_treeIndex);
    if (!determineVisibility(appearance, renderMode)) {
        discard;
    }

    vec4 color = determineColor(v_color, appearance);
    vec3 normal = normalize( v_normal );

    float R1 = v_centerB.w;
    vec4 U = v_U;
    vec4 W = v_W;
    vec4 V = vec4(normalize(cross(W.xyz, U.xyz)), v_surfacePointY);

    mat3 basis = mat3(U.xyz, V.xyz, W.xyz);
    vec3 surfacePoint = vec3(U.w, V.w, W.w);
    vec3 rayTarget = surfacePoint;

#if defined(COGNITE_ORTHOGRAPHIC_CAMERA)
    vec3 rayDirection = vec3(0.0, 0.0, -1.0);
#else
    vec3 rayDirection = normalize(rayTarget); // rayOrigin is (0,0,0) in camera space
#endif

    vec3 diff = rayTarget - v_centerB.xyz;
    vec3 E = diff * basis;
    vec3 D = rayDirection * basis;

    float a = dot(D.xy, D.xy);
    float b = dot(E.xy, D.xy);
    float c = dot(E.xy, E.xy) - R1*R1;

    // Calculate a dicriminant of the above quadratic equation
    float d = b*b - a*c;

    // d < 0.0 means the ray hits outside an infinitely long cone
    if (d < 0.0)
        discard;

    float sqrtd = sqrt(d);
    float dist1 = (-b - sqrtd) / a;
    float dist2 = (-b + sqrtd) / a;

    // Make sure dist1 is the smaller one
    if (dist2 < dist1) {
        float tmp = dist1;
        dist1 = dist2;
        dist2 = tmp;
    }

    float dist = dist1;
    vec3 intersectionPoint = E + dist * D;
    float theta = atan(intersectionPoint.y, intersectionPoint.x);
    if (theta < v_angle) theta += 2.0 * PI;

    // Intersection point in camera space
    vec3 p = rayTarget + dist * rayDirection;

    vec3 planeACenter = vec3(0.0, 0.0, v_planeA.w);
    vec3 planeANormal = v_planeA.xyz;
    vec3 planeBCenter = vec3(0.0, 0.0, v_planeB.w);
    vec3 planeBNormal = v_planeB.xyz;
    bool isInner = false;

    if (dot(intersectionPoint - planeACenter, planeANormal) > 0.0 ||
        dot(intersectionPoint - planeBCenter, planeBNormal) > 0.0 ||
        theta > v_arcAngle + v_angle ||
        isClipped(appearance, p)
       ) {
        // Missed the first point, check the other point
        isInner = true;
        dist = dist2;
        intersectionPoint = E + dist * D;
        theta = atan(intersectionPoint.y, intersectionPoint.x);
        p = rayTarget + dist*rayDirection;
        if (theta < v_angle) theta += 2.0 * PI;
        if (dot(intersectionPoint - planeACenter, planeANormal) > 0.0 ||
            dot(intersectionPoint - planeBCenter, planeBNormal) > 0.0 ||
            theta > v_arcAngle + v_angle || isClipped(appearance, p)
           ) {
            // Missed the other point too
            discard;
        }
    }

#if !defined(COGNITE_RENDER_COLOR_ID) && !defined(COGNITE_RENDER_DEPTH)
    // Regular cylinder has simpler normal vector in camera space
    vec3 p_local = p - v_centerB.xyz;
    normal = normalize(p_local - W.xyz * dot(p_local, W.xyz));
#endif

    float fragDepth = updateFragmentDepth(p, projectionMatrix);
    updateFragmentColor(renderMode, color, v_treeIndex, normal, fragDepth, matCapTexture, GeometryType.Primitive);
}
