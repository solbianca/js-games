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
    update: function (game) {
      return update(game);
    },
  };
}

/**
 * @param {Phaser.Game} game
 */
function preload(game) {
  game.global.music.stop();
  let mainMsgEnd = 'COMPLETE GAME, CONGRATULATIONS!';
  let sizeMainMsg = 50;
  if (game.global.timeLevel == -1) {
    let soundGameOver = game.add.audio('gameOver');
    soundGameOver.play();
    mainMsgEnd = 'GAME OVER';
    sizeMainMsg = 70;
  }

  let textGameOver = game.add.text(game.world.centerX, 280, mainMsgEnd,
    {font: sizeMainMsg + 'px grobold', fill: '#fff'});
  textGameOver.anchor.set(0.5);

  let textScore = game.add.text(game.world.centerX, 150, 'YOUR SCORE: ' +
    game.global.score, {font: '11.5px emulogic', fill: '#fff'});
  textScore.anchor.set(0.5);
}

/**
 * @param {Phaser.Game} game
 */
function create(game) {
  let txtPressEnter = game.add.text(game.world.centerX, 555,
    'PRESS ENTER TO RESTART', {font: '15px emulogic', fill: '#fff'});
  txtPressEnter.anchor.set(0.5);
  game.add.tween(txtPressEnter).to({y: 355}, 1000).start();

  const txtBlink = () => game.add.tween(txtPressEnter)
    .to({alpha: 1}, 700)
    .to({alpha: 0}, 700)
    .loop()
    .start();
  game.time.events.add(1000, txtBlink);
}

/**
 * @param {Phaser.Game} game
 */
function update(game) {
  const enterKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
  if (enterKey.isDown) {
    game.global.timeLevel = 0;
    game.global.score = 0;
    game.global.collectedBones = 0;
    game.state.start('levels'); //for now, later wil go to menu
  }
}