/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from Experiment.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Experiment.
 * @public
 */

goog.module('Experiment.incrementaldom');

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

var $templateAlias1 = Soy.getTemplate('Input.incrementaldom', 'render');


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  ie_open('div', null, null,
      'id', 'experiment',
      'class', 'experiment');
    ie_open('div', null, null,
        'class', 'management-bar row');
      ie_open('div', null, null,
          'class', 'col-md-2 text-center');
        ie_open('h5');
          itext('Experiment');
        ie_close('h5');
      ie_close('div');
      ie_open('div', null, null,
          'class', 'col-md-8 text-center');
        $templateAlias1({label: 'URL', events: {valueChanged: opt_data.onTargetUrl_}}, null, opt_ijData);
      ie_close('div');
      ie_open('div', null, null,
          'class', 'col-md-2 text-center');
        ie_open('button', null, null,
            'data-onclick', 'storeChanges_',
            'class', 'btn btn-primary');
          itext('Save');
        ie_close('button');
      ie_close('div');
    ie_close('div');
    ie_void('div', null, null,
        'class', 'iframe-container');
  ie_close('div');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'Experiment.render';
}

exports.render.params = ["onTargetUrl_"];
exports.render.types = {"onTargetUrl_":"any"};
templates = exports;
return exports;

});

class Experiment extends Component {}
Soy.register(Experiment, templates);
export { Experiment, templates };
export default templates;
/* jshint ignore:end */
