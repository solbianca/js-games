'use strict';

import * as Platforms from './Platforms';
import * as Player from './Player';
import * as Bones from './Bones';
import * as Timer from './Timer';
import * as Collision from './Collision';

let levels = require('../data/levels');

/**
 * @param {Phaser.Game} game
 */
export function create(game) {
  if (!isLevelsValid(levels)) {
    throw new Error(
      'Data level is not array or empty or dont have required property.');
  }

  for (let level of levels) {
    if (!isLevelValid(level)) {
      throw new Error(
        'Level must be an object and contain required properties.');
    }
    game.state.add(level.level,
      {
        create: function () { return createLevel(game, level);},
        update: function () { return updateLevel(game, level);},
      });
  }
}

/**
 * @param {Phaser.Game} game
 * @param {object} level
 */
function createLevel(game, level) {
  game.add.sprite(0, 0, 'background');

  let staticPlatforms = Platforms.createStatic(game, level.staticPlatforms);
  let movablePlatforms = Platforms.createMovable(game, level.movablePlatforms);
  let ground = Platforms.createGround(game);
  let player = Player.create(game);
  let bones = Bones.create(game, level.totalBones);

  Timer.create(game, 20, level);

  game.global.level = {
    staticPlatforms: staticPlatforms,
    movablePlatforms: movablePlatforms,
    ground: ground,
    player: player,
    bones: bones,
  };

  let score = 'Score: ' + game.global.score;
  let levelScore = 'Level score: 0';
  game.global.scoreText = game.add.text(16, 16, score,
    {fontSize: '32px', fill: '#000'});
  game.global.levelScoreText = game.add.text(16, 48, levelScore,
    {fontSize: '32px', fill: '#000'});
}

function updateLevel(game, level) {
  Collision.update(game, level);
  Player.update(
    game.global.level.player,
    game.global.cursors,
    game.global.spaceKey
  );
}

/**
 * @param {array} value
 * @returns {boolean}
 */
function isLevelsValid(value) {
  return (Array.isArray(value) && value.length > 0);
}

/**
 * @param {object} level
 * @return {boolean}
 */
function isLevelValid(level) {
  if (typeof level !== 'object') {
    return false;
  }

  let properties = ['level', 'staticPlatforms', 'movablePlatforms', 'totalBones', 'nextLevel'];
  for (let property of properties) {
    if (!level.hasOwnProperty(property)) {
      return false;
    }
  }

  return true;
}