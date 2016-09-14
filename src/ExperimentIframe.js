'use strict';

import templates from './ExperimentIframe.soy.js';
import Component from 'metal-component';
import Soy from 'metal-soy';

import dom from 'metal-dom';

import ExperimentImageElement from './ExperimentImageElement.js'
import Overlay from './Overlay.js'

class ExperimentIframe extends Component {
	createOverlay_(iframeDOM) {
		return new Overlay(
			{},
			iframeDOM.body
		);
	}

	getPosition_(element) {
		let elementPosition = element.getBoundingClientRect();
		return {
			x: elementPosition.left,
			y: elementPosition.top
		};
	}

	iframeLoaded_(event) {
		let iframe = event.delegateTarget;

		let iframeDOM = iframe.contentWindow.document;

		this.replaceWithInitialData(iframeDOM);

		this.overlay = this.createOverlay_(iframeDOM);

		dom.delegate(
			iframeDOM.body,
			'click',
			'body *',
			(event) => {
				this.onClickedElement(event);
			}
		);
	}

	hideOverlay() {
		this.overlay.hide();
	}

	replaceWithInitialData(iframeDOM) {
		for(var selector in this.initialData) {
			let selectorAttributes = this.initialData[selector];

			for(var attribute in selectorAttributes) {
				let element = iframeDOM.querySelector(selector)
				if(element) {
					element.setAttribute(attribute, selectorAttributes[attribute]);
				}
			}
		}
	}

	showOverlay() {
		this.overlay.show();
	}

	updateOverlay(element) {
		let elementPosition = this.getPosition_(element);

		this.overlay.updatePosition(
			elementPosition.y + 'px',
			elementPosition.x + 'px',
			element.offsetWidth + 'px',
			element.offsetHeight + 'px'
		);
	}
}

Soy.register(ExperimentIframe, templates);

ExperimentIframe.STATE = {
	initialData: {
		value: {}
	},

	onClickedElement: {
		value: function() {}
	},

	saveChanges: {
		value: function() {}
	}

};

export default ExperimentIframe;
