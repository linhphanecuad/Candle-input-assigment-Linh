const lighter = document.querySelector(".lighterposition");
const candle1 = document.querySelector(".candle1position");
const candle2 = document.querySelector(".candle2position");
const candle3 = document.querySelector(".candle3position");
const candle4 = document.querySelector(".candle4position");
const candle5 = document.querySelector(".candle5position");
const wrapper = document.querySelector(".wrapper");

/* function that calculates how much the mouse has moved, and how fast it moved there!
it then uses these values to set the 'Top' and 'Left' of the lighter!  */
function lighterfollow(event) {
	let distX = event.clientX;
	let distY = event.clientY;
	lighter.style.left = distX + "px";
	lighter.style.top = distY + "px";
}


var activeLighter = false;
lighter.setAttribute("active", activeLighter);
document.addEventListener("mousemove", (event) => {
	if (activeLighter === true){
		lighterfollow(event);
	}
});
lighter.addEventListener("mousedown", (event) => {
	activeLighter = !activeLighter;
	lighter.setAttribute("active", activeLighter);
});
window.addEventListener("click", (event) => {
	activeLighter = false;
	lighter.setAttribute("active", activeLighter);
});

//the candles to active when the lighter mouses over them

candle1.addEventListener("mouseover", (event) => {
	if (activeLighter === true){
		candle1.setAttribute("active", activeLighter);
	}
});
candle2.addEventListener("mouseover", (event) => {
	if (activeLighter === true){
		candle2.setAttribute("active", activeLighter);
	}
});
candle3.addEventListener("mouseover", (event) => {
	if (activeLighter === true){
		candle3.setAttribute("active", activeLighter);
	}
});
candle4.addEventListener("mouseover", (event) => {
	if (activeLighter === true){
		candle4.setAttribute("active", activeLighter);
	}
});
candle5.addEventListener("mouseover", (event) => {
	if (activeLighter === true){
		candle5.setAttribute("active", activeLighter);
	}
});

//check when the candles are active, brighness changes as the candle height channges

function checkWax() {
	var brightnessTotal = 0;
	if (candle1.getAttribute("active") === "true"){
		brightnessTotal += candle1.querySelector(".candle-wax").getBoundingClientRect().height;
	}
	if (candle2.getAttribute("active") === "true"){
		brightnessTotal += candle2.querySelector(".candle-wax").getBoundingClientRect().height;
	}
	if (candle3.getAttribute("active") === "true"){
		brightnessTotal += candle3.querySelector(".candle-wax").getBoundingClientRect().height;
	}
	if (candle4.getAttribute("active") === "true"){
		brightnessTotal += candle4.querySelector(".candle-wax").getBoundingClientRect().height;
	}
	if (candle5.getAttribute("active") === "true"){
		brightnessTotal += candle5.querySelector(".candle-wax").getBoundingClientRect().height;
	}
	
	var brightness = 1 - (brightnessTotal / 110 / 5);
	wrapper.style.background = `rgba(0,0,0,${brightness})`;
  setTimeout(function(){checkWax()}, 100);
}
checkWax();