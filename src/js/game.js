'use strict';

import * as Boot from './modules/Boot';
import * as Load from './modules/Load';
import * as End from './modules/End';
import * as LevelsFactory from './modules/LevelsFactory';

/**
 * @type {Phaser.Game}
 */
let game = new Phaser.Game(1067, 600, Phaser.AUTO, 'gameDiv');

Boot.setGlobal(game);

game.state.add('boot', Boot.init(game));
game.state.add('load', Load.init(game));
LevelsFactory.create(game);
game.state.add('end', End.init(game));
game.state.start('boot');
