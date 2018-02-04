'use strict';

import * as Bones from './Bones';
import * as Score from './Score';

/**
 * @param {Phaser.Game} game
 * @param {string} level
 */
export function update(game, level) {

  let bones = game.global.level.bones;
  let staticPlatforms = game.global.level.staticPlatforms;
  let movablePlatforms = game.global.level.movablePlatforms;
  let ground = game.global.level.ground;
  let player = game.global.level.player;
  let sounds = game.global.sounds;

  const overlapPlayerBones = function (player, bone) {
    Bones.collect(game, bone, sounds.getBoneSfx);
    if (isGameEnded(game.global.collectedBones, level.totalBones)) {
      Score.calculate(game, true);
      const go = () => game.state.start(level.nextLevel);
      game.camera.fade('#000', 800);
      game.camera.onFadeComplete.add(go);
    }
  };

  game.physics.arcade.collide(bones, staticPlatforms);
  game.physics.arcade.collide(bones, movablePlatforms);
  game.physics.arcade.collide(bones, ground);
  game.physics.arcade.collide(player, staticPlatforms);
  game.physics.arcade.collide(player, movablePlatforms);
  game.physics.arcade.collide(player, ground);
  game.physics.arcade.collide(ground, movablePlatforms);
  game.physics.arcade.overlap(player, bones, overlapPlayerBones);
}

/**
 *
 * @param {integer} collectedBones
 * @param {integer} totalBonesCheck
 * @return {boolean}
 */
function isGameEnded(collectedBones, totalBonesCheck) {
  return (collectedBones === totalBonesCheck);
}
