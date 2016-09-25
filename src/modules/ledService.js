'use strict';

const Blinkt = require('blinktjs');
const Led = require('../model/led');

const leds = [];
const defaultBrightness = 0.3;

const blinkt = new Blinkt({
	defaultBrightness: defaultBrightness
});

for (let i = 0; i < 8; i++) {
	leds.push(new Led(i));
}

let getAll = () => {
	return leds;
};

let setPixels = (pixelData) => {
	if (!Array.isArray(pixelData)) {
		pixelData = [pixelData];
	}

	pixelData.forEach( (pixel) => {
		blinkt.setPixel(pixel.number, pixel.r, pixel.g, pixel.b, pixel.a);
	});

	blinkt.draw();
};

let off = () => {
	blinkt.off();
}

module.exports = {
	getAll: getAll,
	setPixels: setPixels,
	off: off
};