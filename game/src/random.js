let s=1;export function setSeed(n){s=(n>>>0)||1}export function rand(){s=(s*1664525+1013904223)>>>0;return s/4294967296}export function between(a,b){return a+(b-a)*rand()}
