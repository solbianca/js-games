'use strict';

import * as Score from './Score';

export function create(game, timer, level) {
  let txtTimer = game.add.text(game.width - 10, 10, '00:' + timer,
    {font: '35px grobold', fill: '#fff'});
  txtTimer.anchor.set(1, 0);

  const updateTime = () => {
    if (timer > 0) {
      timer--;
    } else if (timer === 0) {
      Score.calculate(game, true);
      const go = () => game.state.start('end');
      game.camera.fade('#000',800);
      game.camera.onFadeComplete.add(go);
    }

    txtTimer.text = '00:' + (timer < 10 ? '0' : '') + timer;
    if (game.global.timeLevel !== -1) game.global.timeLevel = timer;
  };

  game.time.events.loop(1000, updateTime);
}

