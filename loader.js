var borderRadius = '12px';
var direction = 'alternate';
var loop = true;
var elasticity = 400;
var easing = 'easeInElastic';
var duration = 800;
var delay = 600;
var endDelay = 600;
var height = '24px';
var width = '24px';

var circleSalad = anime ({
  targets: ['.circle-salad'],
  direction: direction,
  loop: loop,
  elasticity: elasticity,
  easing: easing,
  duration: duration,
  delay: delay,
  endDelay: endDelay,
  translateY: -18,
  translateX: 24,
  borderRadius: borderRadius,
  height: height,
  width: width
});

var circleKetchup = anime ({
  targets: ['.circle-ketchup'],
  direction: direction,
  loop: loop,
  elasticity: elasticity,
  easing: easing,
  duration: duration,
  delay: delay,
  endDelay: endDelay,
  translateY: 22,
  translateX: -18,
  borderRadius: borderRadius,
  height: height,
  width: width
});

var circleMustard = anime ({
  targets: ['.circle-mustard'],
  direction: direction,
  loop: loop,
  elasticity: elasticity,
  easing: easing,
  duration: duration,
  delay: delay,
  endDelay: endDelay,
  translateY: -18,
  translateX: -20,
  borderRadius: borderRadius,
  height: height,
  width: width
});
