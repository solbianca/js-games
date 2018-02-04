'use strict';

import * as LevelsFactory from './LevelsFactory';
import * as Music from './Music';

/**
 * @param {Phaser.Game} game
 */
export function init(game) {
  return {
    preload: function (game) {
      return preload(game);
    },
    create: function () {
      return create(game);
    },
  };
}

/**
 * @param {Phaser.Game} game
 */
function preload(game) {
  game.global.music = Music.createBackgroundMusic(game);
  game.global.music.play();

  let getBoneSfx = game.add.audio('getBone');

  game.global.sounds = {getBoneSfx: getBoneSfx};
  game.global.cursors = game.input.keyboard.createCursorKeys();
  game.global.spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

  LevelsFactory.create(game);
}

/**
 * @param {Phaser.Game} game
 */
function create(game) {
  setTimeout(function () { game.state.start('01'); }, 500);
}
