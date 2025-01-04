function moveRandomEl(elm) {
    elm.style.position = "absolute";
    elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
    elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";
  }
  
  const moveRandom = document.querySelector("#move-random");
  
  moveRandom.addEventListener("mouseenter", function (e) {
    moveRandomEl(e.target);
  });

$( document ).ready(function() {
var scaleCurve = mojs.easing.path('M0,100 L25,99.9999983 C26.2328835,75.0708847 19.7847843,0 100,0');
   var el = document.querySelector('.button'),
	// mo.js timeline obj
	timeline = new mojs.Timeline(),

	// tweens for the animation:

	// burst animation
	tween1 = new mojs.Burst({
		parent: el,
  radius:   { 0: 100 },
  angle:    { 0: 45 },
  y: -10,
  count:    10,
   radius:       100,
  children: {
    shape:        'circle',
    radius:       30,
    fill:         [ 'red', 'white' ],
    strokeWidth:  15,
    duration:     500,
  }
	});
    el.addEventListener('click', function () {
    tween1.replay();
});
