import {
  buttonFlame,
  buttonLess,
  buttonMarket,
  buttonPause,
  buttonPlay,
  buttonPlus,
  buttonRain,
  buttonStop,
  buttonTree,
  darkButton,
  flameVolumeButton,
  lightButton,
  marketVolumeButton,
  rainVolumeButton,
  treeVolumeButton,
} from './elements.js';

export default function ({ controls }) {
  buttonFlame.addEventListener('click', event => {
    controls.toggleAudioButton('buttonFlame')
    if (event.target.nodeName == 'INPUT') {
      controls.handleVolume('buttonFlameAudio', flameVolumeButton.value)
    } else {
      controls.handleVolume('buttonFlameAudio', 50)
    }
  })

  buttonTree.addEventListener('click', event => {
    controls.toggleAudioButton('buttonTree')
    if (event.target.nodeName == 'INPUT') {
      controls.handleVolume('buttonTreeAudio', treeVolumeButton.value)
    } else {
      controls.handleVolume('buttonTreeAudio', 50)
    }
  })

  buttonRain.addEventListener('click', event => {
    controls.toggleAudioButton('buttonRain')
    if (event.target.nodeName == 'INPUT') {
      controls.handleVolume('buttonRainAudio', rainVolumeButton.value)
    } else {
      controls.handleVolume('buttonRainAudio', 50)
    }
  })

  buttonMarket.addEventListener('click', event => {
    controls.toggleAudioButton('buttonMarket')
    if (event.target.nodeName == 'INPUT') {
      controls.handleVolume('buttonMarketAudio', marketVolumeButton.value)
    } else {
      controls.handleVolume('buttonMarketAudio', 50)
    }
  })

  buttonPlay.addEventListener('click', () => {
    controls.play()
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
  })

  buttonPause.addEventListener('click', () => {
    controls.pause()
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
  })


  buttonStop.addEventListener('click', () => {
    controls.stop()
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
  })

  buttonPlus.addEventListener('click', () => {
    controls.increaseCountdown()
  })

  buttonLess.addEventListener('click', () => {
    controls.decreaseCountdown()
  })

  lightButton.addEventListener('click', () => {
    controls.toggleLightDarkMode()
  })

  darkButton.addEventListener('click', () => {
    controls.toggleLightDarkMode()
  })
}
