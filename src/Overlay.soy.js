/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from Overlay.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Overlay.
 * @public
 */

goog.module('Overlay.incrementaldom');

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
  var styleAttributes__soy38 = function() {
    iattr('style', (opt_data.style['background-color'] ? 'background-color:' + opt_data.style['background-color'] + ';' : '') + (opt_data.style.bottom ? 'bottom:' + opt_data.style.bottom + ';' : '') + (opt_data.style.display ? 'display:' + opt_data.style.display + ';' : '') + (opt_data.style.height ? 'height:' + opt_data.style.height + ';' : '') + (opt_data.style.left ? 'left:' + opt_data.style.left + ';' : '') + (opt_data.style.opacity ? 'opacity:' + opt_data.style.opacity + ';' : '') + (opt_data.style.position ? 'position:' + opt_data.style.position + ';' : '') + (opt_data.style.right ? 'right:' + opt_data.style.right + ';' : '') + (opt_data.style.top ? 'top:' + opt_data.style.top + ';' : '') + (opt_data.style.width ? 'width:' + opt_data.style.width + ';' : ''));
  };
  ie_open_start('div');
      iattr('class', 'overlay-container');
      styleAttributes__soy38();
  ie_open_end();
    ie_void('div', null, null,
        'class', 'overlay');
  ie_close('div');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'Overlay.render';
}

exports.render.params = ["style"];
exports.render.types = {"style":"any"};
templates = exports;
return exports;

});

class Overlay extends Component {}
Soy.register(Overlay, templates);
export { Overlay, templates };
export default templates;
/* jshint ignore:end */
