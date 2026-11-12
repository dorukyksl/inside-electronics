import{a as e,n as t,t as n}from"./jsx-runtime-Wy9s6hX0.js";import{it as r,mt as i,q as a,s as o,t as s}from"./react-three-fiber.esm-DfL50cIG.js";import{_ as c,c as l,d as u,f as d,m as f,u as p}from"./lab-DaOpG6cm.js";var m=e(t(),1),h=n(),g=1.4,_=1.5,v=`#d9d2c3`,y=1.25,b=.7,x=e=>e<=0?0:e>=1?1:e*e*(3-2*e),S=e=>{let t=parseInt(e.slice(1),16);return new i((t>>16&255)/255,(t>>8&255)/255,(t&255)/255)};function C(){return new r({uniforms:{uMorph:{value:0},uR:{value:1.1},uC:{value:6.9},uL:{value:4},uSpin:{value:0},uTurns:{value:7},uMinimal:{value:0},uGroove:{value:.1},uFilm:{value:S(l)},uGrooveCol:{value:S(p)}},vertexShader:`
      uniform float uMorph;
      uniform float uR;
      varying vec2 vUv;
      varying float vShade;
      void main() {
        vUv = uv;
        vec3 p = position;
        float m = clamp(uMorph, 0.0, 1.0);
        vec3 n = vec3(0.0, 0.0, 1.0);
        if (m < 0.999) {
          float rm = uR / (1.0 - m);
          float a = p.x / rm;
          p = vec3(rm * sin(a), p.y, rm * cos(a) - rm + uR);
          n = vec3(sin(a), 0.0, cos(a));
        } else {
          p = vec3(p.x, p.y, uR);
        }
        // Flat (n = +z) gives exactly the base colour, matching the SVG film.
        vShade = 0.5 + 0.5 * dot(n, normalize(vec3(-0.35, 0.0, 1.0))) / dot(vec3(0.0, 0.0, 1.0), normalize(vec3(-0.35, 0.0, 1.0)));
        gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
      }
    `,fragmentShader:`
      uniform float uSpin;
      uniform float uTurns;
      uniform float uMinimal;
      uniform float uGroove;
      uniform vec3 uFilm;
      uniform vec3 uGrooveCol;
      varying vec2 vUv;
      varying float vShade;
      void main() {
        float phi = fract(vUv.x + uSpin);
        float yTop = 1.0 - vUv.y;
        float h = yTop * uTurns - phi;
        float d = abs(fract(h) - 0.5);
        float aa = fwidth(h) * 0.75;
        float g = 1.0 - smoothstep(uGroove * 0.5 - aa, uGroove * 0.5 + aa, d);
        if (uMinimal > 0.5) g *= step(phi, 0.5) * step(abs(yTop - (0.5 + phi)), 0.6);
        vec3 col = mix(uFilm * clamp(vShade, 0.35, 1.0), uGrooveCol, g);
        gl_FragColor = vec4(col, 1.0);
      }
    `,side:2,toneMapped:!1})}function w({d:e,t,w:n,h:r}){let i=c(e.geom),s=d(n,r,e),l=(0,m.useMemo)(C,[]);(0,m.useEffect)(()=>()=>l.dispose(),[l]);let u=o(e=>e.invalidate),p=o(e=>e.camera),S=i.C/(2*Math.PI),w=x(t/g),T=x((t-_)/1.5);l.uniforms.uMorph.value=T,l.uniforms.uR.value=S,l.uniforms.uSpin.value=w,l.uniforms.uTurns.value=i.turns,l.uniforms.uMinimal.value=+!!i.minimal,l.uniforms.uGroove.value=Math.min(.12,f/i.pitch),(0,m.useEffect)(()=>{p instanceof a&&(p.zoom=s.scale,p.updateProjectionMatrix()),u()});let E=(s.x+s.w/2-n/2)/s.scale,D=-(s.y+s.h/2-r/2)/s.scale,O=.22*(1-T),k=1-x(T*2.5);return(0,h.jsx)(`group`,{position:[E,D,-S],children:(0,h.jsxs)(`group`,{rotation:[O,0,0],children:[(0,h.jsx)(`mesh`,{material:l,children:(0,h.jsx)(`planeGeometry`,{args:[i.C,i.L,256,4]})}),k>.01&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(`mesh`,{children:[(0,h.jsx)(`cylinderGeometry`,{args:[S-.03,S-.03,i.L-.02,64]}),(0,h.jsx)(`meshBasicMaterial`,{color:v,transparent:!0,opacity:k,toneMapped:!1})]}),[1,-1].map(e=>(0,h.jsxs)(`mesh`,{position:[0,e*(i.L/2+b/2),0],children:[(0,h.jsx)(`cylinderGeometry`,{args:[y,y,b,64]}),(0,h.jsx)(`meshBasicMaterial`,{color:`#7a8288`,transparent:!0,opacity:k,toneMapped:!1})]},e))]})]})})}function T({d:e,t,w:n,h:r}){if(t>u.svgFull+.1)return null;let i=t<=u.svgIn?1:Math.max(0,1-(t-u.svgIn)/(u.svgFull-u.svgIn));return(0,h.jsx)(`div`,{className:`ix2-layer`,style:{opacity:i},"aria-hidden":`true`,children:(0,h.jsx)(s,{orthographic:!0,flat:!0,frameloop:`demand`,dpr:[1,2],gl:{antialias:!0},camera:{position:[0,0,50],zoom:100,near:.1,far:200},children:(0,h.jsx)(w,{d:e,t,w:n,h:r})})})}export{T as default};