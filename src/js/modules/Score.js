'use strict';

/**
 * @param {Phaser.Game} game
 * @param {boolean} isGameOver
 */
export function calculate(game, isGameOver) {
  let score = game.global.collectedBones;
  game.global.score += score;
  game.global.scoreText.text = 'Score: ' + game.global.score;
  game.global.timeLevel = 0;
  game.global.collectedBones = 0;
  if (isGameOver) {
    game.global.timeLevel = -1;
  }
}

