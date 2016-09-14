'use strict';

import templates from './ExperimentElement.soy.js';
import Component from 'metal-component';
import Soy from 'metal-soy';

class ExperimentElement extends Component {
	constructor(opt_config, opt_element) {
		super(opt_config, opt_element);
	}
}

Soy.register(ExperimentElement, templates);

export default ExperimentElement;
