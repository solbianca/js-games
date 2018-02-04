'use strict';

import * as Random from './Random';

/**
 * @param {Phaser.Game} game
 * @param {integer} quantity
 */
export function create(game, quantity) {
  let bones = game.add.group();
  bones.enableBody = true;

  for (let i = 0; i < quantity; i++) {
    let bone;
    let skin = Random.int(0, 4);
    if (i === 0) {
      bone = bones.create(10, 0, 'bone', skin);
    } else {
      bone = bones.create(i * 68, 0, 'bone', skin);
    }

    bone.body.gravity.y = 200;
    bone.body.bounce.y = 0.5 + Math.random() * 0.2;
  }

  return bones;
}

/**
 * @param {Phaser.Game} game
 * @param {Phaser.Sprite} bone
 * @param {Phaser.Sound} sfx
 */
export function collect(game, bone, sfx = false) {
  if (sfx) {
    sfx.play();
  }
  bone.kill();
  game.global.collectedBones++;
  let score = game.global.score + game.global.collectedBones;
  game.global.scoreText.text = 'Score: ' + score;
  game.global.levelScoreText.text = 'Level score: ' + game.global.collectedBones;
}