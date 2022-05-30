import Controls from './controls.js';
import {
  body,
  buttonFlame,
  buttonMarket,
  buttonRain,
  buttonTree,
  flameVolumeButton,
  marketVolumeButton,
  minutesDisplay,
  rainVolumeButton,
  secondsDisplay,
  treeVolumeButton,
} from './elements.js';
import Events from './events.js';
import Sound from './sounds.js';
import Timer from './timer.js';

let sound = Sound()
let timer = Timer(minutesDisplay, secondsDisplay)
let controls = Controls({
  buttonTree,
  buttonRain,
  buttonMarket,
  buttonFlame,
  sound,
  timer,
  body,
  treeVolumeButton,
  rainVolumeButton,
  marketVolumeButton,
  flameVolumeButton
})

Events({ controls })
