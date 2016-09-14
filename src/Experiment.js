'use strict';

import templates from './Experiment.soy.js';
import Component from 'metal-component';
import Soy from 'metal-soy';

import ExperimentIframe from './ExperimentIframe.js'
import ExperimentImageElement from './ExperimentImageElement.js'
import Input from './Input.js'
import Alert from 'metal-alert';

import dom from 'metal-dom';
import unique from 'unique-selector/src/index.js';

class Experiment extends Component {
	constructor(opt_config) {
		super(opt_config);

		this.changes = {};
	}

	onClickedElement_(event) {

		if (this.selectedElement) {
			event.preventDefault();
			event.stopPropagation();

			this.selectedElement.dispose();
			this.selectedElement = null;

			this.iframe.hideOverlay();
		}
		else {
			let element = event.delegateTarget;

			let elementType = element.nodeName;

			let ExperimentElement;

			switch(elementType) {
				case 'IMG':
					ExperimentElement = ExperimentImageElement;
					break;
			};

			if (ExperimentElement) {
				event.preventDefault();
				event.stopPropagation();
				this.selectedElement = new ExperimentElement(
					{
						experimentElement: element,
						save: this.saveChanges_.bind(this)
					},
					this.element
				);
				this.iframe.updateOverlay(element);
				this.iframe.showOverlay();
			}
		}
	}

	onTargetUrl_(event) {
		let instance = this;

		this.targetUrl = event.newVal;

		let xhr = new XMLHttpRequest();

		xhr.open('GET', '/api/experiment/' + this.targetUrl);
		xhr.setRequestHeader('Content-Type', 'application/json');
		xhr.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				let data = (this.response !== '') ? JSON.parse(this.response) : {};
				instance.createExperimentIframe(data);
			}
		};
		xhr.send();
	}

	createExperimentIframe(data) {
		this.iframe = new ExperimentIframe(
			{
				initialData: data,
				onClickedElement: this.onClickedElement_.bind(this),
				saveChanges: this.saveChanges_,
				targetUrl: this.targetUrl
			},
			'#experiment .iframe-container'
		);
	}

	saveChanges_(data, element) {
		let cssSelector = unique(element);
		
		//TODO MERGE
		this.changes[cssSelector] = data;
	}

	storeChanges_() {
		let sendData = {
			experiment: this.targetUrl,
			data: this.changes
		};

		if (!this.alert) {
			this.alert = new Alert(
				{
					visible: false
				}
			);
		}

		let alert = this.alert;

		let xhr = new XMLHttpRequest();

		xhr.open('POST', '/api/experiment');
		xhr.setRequestHeader('Content-Type', 'application/json');
		xhr.onload = function() {
			if (xhr.status === 200) {
				let response = JSON.parse(this.response);
				alert.body = '<b>Changes saved correctly. Please, add following script on your web\'s head tag:</b> <code>&lt;script type="text/javascript" src="' + response.fileUrl + '"&gt;&lt;/script&gt;</code>';
				alert.visible = true;
			}
		};
		xhr.send(JSON.stringify(sendData));
	}
}
Soy.register(Experiment, templates);

export default Experiment;
