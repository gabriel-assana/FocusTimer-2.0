const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonPause = document.querySelector('.pause')


const buttonPlus = document.querySelector('.plus')
const buttonLess = document.querySelector('.less')

const buttonTree = document.querySelector('.tree')
const buttonRain = document.querySelector('.rain')
const buttonMarket = document.querySelector('.market')
const buttonFlame = document.querySelector('.flame')

const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

const body = document.querySelector('body')
const lightButton = document.querySelector('#light')
const darkButton = document.querySelector('#dark')

const treeVolumeButton = document.querySelector(
  '.card.tree input[type="range"]'
)
const rainVolumeButton = document.querySelector(
  '.card.rain input[type="range"]'
)
const marketVolumeButton = document.querySelector(
  '.card.market input[type="range"]'
)
const flameVolumeButton = document.querySelector(
  '.card.flame input[type="range"]'
)

export {
  buttonPlay,
  buttonStop,
  buttonPlus,
  buttonPause,
  buttonLess,
  buttonTree,
  buttonRain,
  buttonMarket,
  buttonFlame,
  minutesDisplay,
  secondsDisplay,
  body,
  lightButton,
  darkButton,
  treeVolumeButton,
  rainVolumeButton,
  marketVolumeButton,
  flameVolumeButton
}
