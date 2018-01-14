'use strict';

import * as Bones from './Bones';
import * as Score from './Score';

export function update(game, level) {

  let bones = game.global.level.bones;
  let platforms = game.global.level.platforms;
  let player = game.global.level.player;
  let sounds = game.global.level.sounds;

  const overlapPlayerBones = function (player, bone) {
    Bones.collect(game, bone, sounds.getBoneSfx);
    if (isGameEnded(game.global.collectedBones, level.totalBones)) {
      Score.calculate(game, true);
      const go = () => game.state.start(level.nextLevel);
      game.camera.fade('#000',800);
      game.camera.onFadeComplete.add(go);
    }
  };

  game.physics.arcade.collide(bones, platforms);
  game.physics.arcade.collide(player, platforms);
  game.physics.arcade.overlap(player, bones, overlapPlayerBones);
}

function isGameEnded(collectedBones, totalBonesCheck) {
  return (collectedBones === totalBonesCheck);
}
