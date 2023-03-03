const phceEls = document.querySelectorAll(".phce") || [];
phceEls.forEach(phceEl => phceEl.addEventListener("pointermove", phceSetPositions))

function phceSetPositions({ currentTarget: el, layerX: x, layerY: y }){
  const { width: w, height: h }  = el.getBoundingClientRect();
  el.style.setProperty("--posX", phceMapPositions(x, [0, w]));
  el.style.setProperty("--posY", phceMapPositions(y, [0, h]));   
}

function phceMapPositions (value, from, to=[-1,1], decimals=2) {
  const newValue = (value - from[0]) * (to[1] - to[0]) / (from[1] - from[0]) + to[0];
  const val = Math.min(Math.max(newValue, to[0]) , to[1]);
  return decimals && decimals > 0 ? Number(Math.round(val+'e'+decimals)+'e-'+decimals) : val;
}