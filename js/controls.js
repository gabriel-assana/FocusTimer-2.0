export default function ({
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
}) {
  let audioButtons = {
    buttonTree,
    buttonFlame,
    buttonMarket,
    buttonRain
  }

  let volumeButtons = {
    buttonTreeAudio: treeVolumeButton,
    buttonRainAudio: rainVolumeButton,
    buttonMarketAudio: marketVolumeButton,
    buttonFlameAudio: flameVolumeButton
  }

  function toggleAudioButton(whichButton) {
    Object.keys(audioButtons).forEach(key => {
      audioButtons[key].classList.remove('selected')
    })

    audioButtons[whichButton].classList.add('selected')
    sound.chooseAudio(whichButton + 'Audio')
  }

  function toggleLightDarkMode() {
    
    if (body.classList.contains('light')) {
      body.classList.remove('light')
      body.classList.add('dark')
    } else if (body.classList.contains('dark')) {
      body.classList.remove('dark')
      body.classList.add('light')
    }
  }

  function play() {
    timer.countdown()
  }

  function pause(){
    timer.hold()
  }

  function stop() {
    timer.reset()
  }

  function increaseCountdown() {
    timer.increaseMinutes(5)
  }

  function decreaseCountdown() {
    timer.decreaseMinutes(5)
  }

  function handleVolume(audio, volume) {
    Object.keys(volumeButtons).forEach(key => {
      volumeButtons[key].value = 0
    })
    volumeButtons[audio].value = volume
    sound.adjustVolume(audio, volume)
  }

  return {
    toggleAudioButton,
    toggleLightDarkMode,
    play,
    pause,
    stop,
    increaseCountdown,
    decreaseCountdown,
    handleVolume
  }
}
