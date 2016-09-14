'use strict';

import templates from './Input.soy.js';
import Component from 'metal-component';
import Soy from 'metal-soy';

class Input extends Component {

	updateValue(event) {
		this.value = event.delegateTarget.value;
	}
}
Soy.register(Input, templates);

export default Input;
