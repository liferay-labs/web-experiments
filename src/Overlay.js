'use strict';

import templates from './Overlay.soy.js';
import Component from 'metal-component';
import Soy from 'metal-soy';

class Overlay extends Component {
	show() {
		this.style.display = 'block';
		this.style = this.style;
	}

	hide() {
		this.style.display = 'none';
		this.style = this.style;
	}

	updatePosition(top, left, width, height) {
		this.style.height = height;
		this.style.left = left;
		this.style.top = top;
		this.style.width = width;

		this.style = this.style;
	}
}
Soy.register(Overlay, templates);

Overlay.STATE = {
	style: {
		value: {
			'background-color': '#3875D7',
			'opacity': 0.2,
			'position': 'absolute'
		}
	}
};

export default Overlay;
