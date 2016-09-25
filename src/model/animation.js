'use strict';

class Animation {
	constructor(name) {
		this.name = name;
		this.frames = [];
	}

	get duration() {
		return this.frames.map(f => f.duration).reduce((a, b) => a + b);
	}

	get length() {
		return this.frames.length;
	}

	toString() {
		return `[Animation: Name:${this.name} Length:${this.length}]`;
	}
}

module.exports = Animation;