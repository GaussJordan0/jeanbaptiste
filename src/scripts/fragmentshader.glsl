vec2 aspectRatio ( vec2 textureSize, vec2 resolution, vec2 uv ) {

    vec2 s = resolution; // Screen
    vec2 i = textureSize; // Image
    float rs = s.x / s.y;
    float ri = i.x / i.y;
    vec2 new = rs < ri ? vec2(i.x * s.y / i.y, s.y) : vec2(s.x, i.y * s.x / i.x);
    vec2 offset = (rs < ri ? vec2((new.x - s.x) / 2.0, 0.0) : vec2(0.0, (new.y - s.y) / 2.0)) / new;
    vec2 newUv = uv * s / new + offset;

    return newUv;

}

    uniform vec2 uResolution;
    uniform vec2 uTextureSize;
    uniform float uHoverState;
    uniform sampler2D uTexture;
    varying  vec2 vUv;
    void main () {
        
    vec2 newUv = aspectRatio(uTextureSize, uResolution, vUv);


			vec2 p = newUv;
			float x = uHoverState;
			x = smoothstep(.0,1.0,(x*2.0+p.y-1.0));
			vec4 f = mix(
				texture2D(uTexture, (p-.5)*(1.-x)+.5), 
				texture2D(uTexture, (p-.5)*x+.5), 
				x);
			gl_FragColor = f;
    // gl_FragColor = texture2D(uTexture, newUv);

    }
