'use strict';

class AnimationFrame {
	constructor(leds, duration) {
		this.leds = leds;
		this.duration = duration;
	}

	toString() {
		return `[AnimationFrame: ${this.led} Duration:${this.duration}]`;
	}
}

module.exports = AnimationFrame;