export default function () {
  let audios = {
    buttonTreeAudio: new Audio('./assets/sounds/Floresta.wav'),
    buttonRainAudio: new Audio('./assets/sounds/Chuva.wav'),
    buttonMarketAudio: new Audio('./assets/sounds/Cafeteria.wav'),
    buttonFlameAudio: new Audio('./assets/sounds/Lareira.wav')
  }

  Object.keys(audios).forEach(key => {
    audios[key].loop = true
  })

  function chooseAudio(audioName) {
    Object.keys(audios).forEach(key => {
      audios[key].pause()
    })

    audios[audioName].play()
  }

  function adjustVolume(audio, value) {
    value = value / 100
    audios[audio].volume = value
  }

  return {
    chooseAudio,
    adjustVolume
  }
}
