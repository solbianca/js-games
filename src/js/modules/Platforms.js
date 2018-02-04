'use strict';

/**
 * @param {Phaser.Game} game
 * @param {array} platformsLevelData
 * @return {Phaser.Group}
 */
export function createStatic(game, platformsLevelData) {
  let platforms = game.add.group();
  platforms.enableBody = true;

  for (let key in platformsLevelData) {
    let platform = platforms.create(platformsLevelData[key].x, platformsLevelData[key].y, 'platform');

    platform.body.immovable = true;

    if ('scale' in platformsLevelData[key]) {
      platform.scale.setTo(platformsLevelData[key].scale[0], platformsLevelData[key].scale[1]);
    }
  }

  return platforms;
}

/**
 * @param {Phaser.Game} game
 * @param {array} platformsLevelData
 * @return {Phaser.Group}
 */
export function createMovable(game, platformsLevelData) {
  let platforms = game.add.group();
  platforms.enableBody = true;

  for (let key in platformsLevelData) {
    let platform = platforms.create(platformsLevelData[key].x, platformsLevelData[key].y, 'platform');

    platform.body.immovable = true;
    platform.body.bounce.y = 1;
    platform.body.collideWorldBounds = true;
    platform.body.gravity.y = 200;

    if ('scale' in platformsLevelData[key]) {
      platform.scale.setTo(platformsLevelData[key].scale[0], platformsLevelData[key].scale[1]);
    }
  }

  return platforms;
}

/**
 * @param {Phaser.Game} game
 * @return {Phaser.Group}
 */
export function createGround(game) {
  let ground = game.add.group();
  ground.enableBody = true;

  let platform = ground.create(0, game.world.height - 57.6, 'platform');
  platform.scale.setTo(2.6675, 1.8);
  platform.body.immovable = true;

  return ground;
}