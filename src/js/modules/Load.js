'use strict';

/**
 * @param {Phaser.Game} game
 */
export function init(game) {
  return {
    preload: function () {
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
  let textLoading = game.add.text(game.world.centerX, 250, 'LOADING...',
    {font: '70px grobold', fill: '#fff'});
  textLoading.anchor.set(0.5);

  let progressBar = game.add.sprite(game.world.centerX, 310, 'progressBar');
  progressBar.anchor.set(0.5);

  game.load.setPreloadSprite(progressBar);
  loadDefaultAssets(game);
}

/**
 * @param {Phaser.Game} game
 */
function create(game) {
  setTimeout(function () { game.state.start('01'); }, 500);
}

/**
 * @param {Phaser.Game} game
 */
function loadDefaultAssets(game) {
  game.load.image('background', 'assets/images/paw_patrol_bg.png');
  game.load.image('platform', 'assets/images/platform.png');
  game.load.image('bone', 'assets/images/bone.png');

  //sprites
  // game.load.spritesheet('character', 'assets/images/rubble.png', 80.5, 71);
  // game.load.spritesheet('character', 'assets/images/rubble.png', 80.5, 71);
  game.load.spritesheet('character', 'assets/images/dude.png', 32, 48);

  //sounds
  game.load.audio('bgSound', 'assets/sounds/paw-patrol-theme-song.mp3');
  game.load.audio('getBone', 'assets/sounds/get-item.ogg');
  game.load.audio('gameOver', 'assets/sounds/game-over.ogg');
}