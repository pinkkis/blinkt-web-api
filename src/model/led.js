'use strict';

class Led {
	constructor(number) {
		this.number = number;
		this.red = 0;
		this.green = 0;
		this.blue = 0;
		this.brightness = 0;
	}

	set (r, g, b, a) {
		this.red = r;
		this.green = g;
		this.blue = b;
		if (a) { this.brightness = a; }
	}

	get () {
		return [this.red, this.green, this.blue, this.brightness];
	}

	toString() {
		return `[Led: R:${this.red}, G:${this.green}, B:${this.blue}, A:${this.brightness}]`;
	}
}

module.exports = Led;