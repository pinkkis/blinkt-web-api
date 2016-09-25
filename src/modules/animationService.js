'use strict';


const Led = require('../model/led');
const Animation = require('../model/animation');
const AnimationFrame = require('../model/animationFrame');
const ledServices = require('./ledService');

const animations = [];
const defaultBrightness = 0.3;


let addAnimation = (name, frames) => {
	// TODO: unique / validation
	animations.push(new Animation(name, frames));
};

let play = (name) => {
	// TODO
};

let removeAnimation = (name) => {
	// TODO
};



module.exports = {
	addAnimation: addAnimation,
	removeAnimation: removeAnimation,
	play: play
};