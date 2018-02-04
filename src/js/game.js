'use strict';

import * as Boot from './modules/Boot';
import * as Load from './modules/Load';
import * as End from './modules/End';
import * as Levels from './modules/Levels';

/**
 * @type {Phaser.Game}
 */
let game = new Phaser.Game(1067, 600, Phaser.AUTO, 'gameDiv');

game.state.add('boot', Boot.init(game));
game.state.add('load', Load.init(game));
game.state.add('levels', Levels.init(game));
game.state.add('end', End.init(game));

game.state.start('boot');
