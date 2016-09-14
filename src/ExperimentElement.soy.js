/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from ExperimentElement.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace ExperimentElement.
 * @public
 */

goog.module('ExperimentElement.incrementaldom');

/** @suppress {extraRequire} */
var soy = goog.require('soy');
/** @suppress {extraRequire} */
var soydata = goog.require('soydata');
/** @suppress {extraRequire} */
goog.require('goog.i18n.bidi');
/** @suppress {extraRequire} */
goog.require('goog.asserts');
/** @suppress {extraRequire} */
goog.require('goog.string');
var IncrementalDom = goog.require('incrementaldom');
var ie_open = IncrementalDom.elementOpen;
var ie_close = IncrementalDom.elementClose;
var ie_void = IncrementalDom.elementVoid;
var ie_open_start = IncrementalDom.elementOpenStart;
var ie_open_end = IncrementalDom.elementOpenEnd;
var itext = IncrementalDom.text;
var iattr = IncrementalDom.attr;


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  ie_void('div', null, null,
      'class', 'experiment-element');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'ExperimentElement.render';
}

exports.render.params = [];
exports.render.types = {};
templates = exports;
return exports;

});

class ExperimentElement extends Component {}
Soy.register(ExperimentElement, templates);
export { ExperimentElement, templates };
export default templates;
/* jshint ignore:end */
