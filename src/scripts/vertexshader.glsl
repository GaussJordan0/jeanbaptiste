

uniform float uTime;
uniform vec2 uMouse;
uniform float uHoverState;
varying float vNoise;
varying vec2 vUv;


void main () {
  float frequency = 2.;
  float speed =3.;
 vec3 newposition = position;

 newposition.x +=  uHoverState * 10.*sin( (uv.x  + uTime /speed ) *frequency);
newposition.z +=  uHoverState * 1.5*sin( (uv.x  + uTime /speed) *frequency *10.);
newposition.z +=  -uHoverState * 0.5*sin( (uv.y   + uTime /speed) *frequency ); 

vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4( newposition, 1.0 );
}










// void main() {
//     vec3 newposition = position;
//     float PI = 3.1415925;

//     float noise = 10.* cnoise(3.*vec3(position.x,position.y,position.z + uTime));
//     newposition.z += 0.1*sin( (newposition.x  + 0.25 + uTime/10.)*2.*PI);
    
//     float dist = distance(uv,uMouse);

//     newposition.xy += uHoverState*3.5*sin(dist*5. + uTime*4.);

//     // newposition.z += 0.05*sin(dist*40. );

// //  newposition.z += 2.*sin(10.*newposition.x +uTime*10.);


//     vNoise =  uHoverState*sin(dist*2. - uTime);
//     vUv = uv;

//     gl_Position = projectionMatrix * modelViewMatrix * vec4( newposition, 1.0 );
// }