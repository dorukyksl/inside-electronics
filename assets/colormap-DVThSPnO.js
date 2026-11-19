import"./styles-GCZAF22h.js";var e=[`#22306e`,`#2b7bb9`,`#3fc8a8`,`#f0e65a`],t=[`#3653a8`,`#9a46a0`,`#e8553a`,`#ffd23f`],n=0,r=155;function i(e){let t=Number.parseInt(e.slice(1),16);return[(t>>16&255)/255,(t>>8&255)/255,(t&255)/255]}function a(e,t){let n=Math.min(Math.max(Number.isFinite(t)?t:0,0),1)*3,r=Math.min(2,Math.floor(n)),a=n-r,o=i(e[r]),s=i(e[r+1]);return[o[0]+(s[0]-o[0])*a,o[1]+(s[1]-o[1])*a,o[2]+(s[2]-o[2])*a]}function o([e,t,n]){return`rgb(${Math.round(e*255)} ${Math.round(t*255)} ${Math.round(n*255)})`}function s(e){return`linear-gradient(to right, ${e[0]} 0%, ${e[1]} 33.333%, ${e[2]} 66.667%, ${e[3]} 100%)`}function c(e){return(e-n)/(r-n)}var l=`
  vec3 ramp(vec3 c0, vec3 c1, vec3 c2, vec3 c3, float t) {
    float x = clamp(t, 0.0, 1.0) * 3.0;
    if (x < 1.0) return mix(c0, c1, x);
    if (x < 2.0) return mix(c1, c2, x - 1.0);
    return mix(c2, c3, x - 2.0);
  }
`;export{n as a,a as c,r as i,o as l,e as n,s as o,t as r,i as s,l as t,c as u};