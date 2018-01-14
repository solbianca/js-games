'use strict';

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
  game.physics.startSystem(Phaser.Physics.ARCADE);
  game.load.image('progressBar', 'assets/images/progress_bar.png');
}

/**
 * @param {Phaser.Game} game
 */
function create(game) {
  game.state.start('load');
}

/**
 * @param {Phaser.Game} game
 */
export function setGlobal(game) {
  game.global = {music: {}, timeLevel: 0, score: 0, collectedBones: 0};
}