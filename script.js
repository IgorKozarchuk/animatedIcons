// break chain animation
function breakChain() {
	let chainElem = document.getElementById("chain");
	chainElem.innerHTML = "&#xf0c1;";

	setTimeout(function() {
		chainElem.innerHTML = "&#xf127;";
	}, 1000);
}

// run animation
breakChain();

// animate every 2 seconds
setInterval(breakChain, 2000);

// --------------
// charge battery
function chargeBattery() {
	let batteryElem = document.getElementById("battery");
	batteryElem.innerHTML = "&#xf244;";

	setTimeout(function() {
		batteryElem.innerHTML = "&#xf243;";
	}, 1000);
	setTimeout(function() {
		batteryElem.innerHTML = "&#xf242;";
	}, 2000);
	setTimeout(function() {
		batteryElem.innerHTML = "&#xf241;";
	}, 3000);
	setTimeout(function() {
		batteryElem.innerHTML = "&#xf240;";
	}, 4000);
}

// run animation
chargeBattery();

// animate every 5 seconds
setInterval(chargeBattery, 5000);

// -------------------
// hourglass animation
function hourglassTip() {
	let hourglassElem = document.getElementById("hourglass");
	hourglassElem.innerHTML = "&#xf251;";

	setTimeout(function() {
		hourglassElem.innerHTML = "&#xf252;";
	}, 1000);
	setTimeout(function() {
		hourglassElem.innerHTML = "&#xf253;";
	}, 2000);
}

// run animation
hourglassTip();

// animate every 5 seconds
setInterval(hourglassTip, 3000);