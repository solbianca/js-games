'use strict';

/**
 * @param {Phaser.Game} game
 */
export function createBackgroundMusic(game) {
  let music = game.add.audio('bgSound');
  music.loop = true;
  music.volume = 0.2;

  return music;
}