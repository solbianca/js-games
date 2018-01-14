'use strict';

export function create(game) {
  // let player = game.add.sprite(32, game.world.height - 150, 'character');
  let player = game.add.sprite(32, game.world.height - 150, 'character');
  player.frame = 4;

  game.physics.arcade.enable(player);

  player.body.bounce.y = 0.1;
  player.body.gravity.y = 300;
  player.body.collideWorldBounds = true;

  // player.animations.add('left', [0], 10, true);
  // player.animations.add('right', [1], 10, true);
  //  Our two animations, walking left and right.
  player.animations.add('left', [0, 1, 2, 3], 10, true);
  player.animations.add('right', [5, 6, 7, 8], 10, true);

  return player;
}

export function update(player, cursors, spaceKey) {
  player.body.velocity.x = 0;

  if (cursors.left.isDown) {
    player.body.velocity.x = -165;
    player.animations.play('left');
  } else if (cursors.right.isDown) {
    player.body.velocity.x = 165;
    player.animations.play('right');
  } else {
    player.animations.stop();
    player.frame = 4;
  }

  if ((cursors.up.isDown || spaceKey.isDown) && player.body.touching.down) {
    player.body.velocity.y = -350;
  } else if (cursors.down.isDown && !player.body.touching.down) {
    player.body.velocity.y = 200;
  }
}


