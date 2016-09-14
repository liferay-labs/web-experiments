/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from MenuImage.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace MenuImage.
 * @public
 */

goog.module('MenuImage.incrementaldom');

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
  ie_open('div', null, null,
      'class', 'menu',
      'style', 'left: ' + opt_data.position.x + 'px; top: ' + opt_data.position.y + 'px;');
    ie_open('ul');
      ie_open('li', null, null,
          'class', 'header');
        itext('Image <img>');
      ie_close('li');
      ie_open('li');
        ie_open('label');
          itext('Change Image:');
          ie_void('input', null, null,
              'type', 'text',
              'value', opt_data.image.src,
              'data-onchange', opt_data.onChangeImageSrc);
        ie_close('label');
      ie_close('li');
    ie_close('ul');
  ie_close('div');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'MenuImage.render';
}

exports.render.params = ["image","position","onChangeImageSrc"];
exports.render.types = {"image":"any","position":"any","onChangeImageSrc":"any"};
templates = exports;
return exports;

});

class MenuImage extends Component {}
Soy.register(MenuImage, templates);
export { MenuImage, templates };
export default templates;
/* jshint ignore:end */
