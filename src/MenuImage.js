'use strict';

import templates from './MenuImage.soy.js';
import Menu from './Menu.js';
import Soy from 'metal-soy';

class MenuImage extends Menu {
}
Soy.register(MenuImage, templates);

MenuImage.STATE = {
};

export default MenuImage;
