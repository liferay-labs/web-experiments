'use strict';

import Component from 'metal-component';
import Soy from 'metal-soy';

import core from 'metal/src/core';

import ExperimentElement from './ExperimentElement.js'
import MenuImage from './MenuImage.js'

class ExperimentImageElement extends ExperimentElement {
	constructor(opt_config, opt_element) {
		super(opt_config, opt_element);

		this.createMenuImage_();
	}

	changeImageSrc(event) {
		this.experimentElement.src = event.delegateTarget.value;

		this.save(
			{
				src: this.experimentElement.src
			},
			this.experimentElement
		);
	}

	createMenuImage_() {
		this.menu = new MenuImage(
			{
				image: this.experimentElement,
				onChangeImageSrc: this.changeImageSrc.bind(this),
				position: this.getPosition_(this.experimentElement)
			},
			this.element
		);
	}

	disposed() {
		this.menu.dispose();
	}

	getPosition_(element) {
		let elementPosition = element.getBoundingClientRect();
		return {
			x: elementPosition.left,
			y: elementPosition.top
		};
	}
}

ExperimentImageElement.STATE = {
	experimentElement: {
		validator: core.isObject
	},

	save: {
		value: function() {}
	}
};

export default ExperimentImageElement;
