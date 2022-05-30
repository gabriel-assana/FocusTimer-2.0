export default function (minutesDisplay, secondsDisplay) {
  let minutes = Number(minutesDisplay.textContent)
  let timerTimeOut

  function updateDisplay(newMinutes, seconds) {
    newMinutes = newMinutes === undefined ? minutes : newMinutes
    seconds = seconds === undefined ? 0 : seconds
    minutesDisplay.textContent = String(newMinutes).padStart(2, '0')
    secondsDisplay.textContent = String(seconds).padStart(2, '0')
  }

  function countdown() {
    timerTimeOut = setTimeout(() => {
      let seconds = Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)
      let isFinished = minutes <= 0 && seconds <= 0

      if (isFinished) {
        updateDisplay()
        return
      }

      if (seconds <= 0) {
        seconds = 60
        minutes--
      }

      updateDisplay(minutes, String(seconds - 1))

      countdown()
    }, 1000)
  
  
  }

  function hold() {
    clearTimeout(timerTimeOut)
  }

  function reset() {
    updateDisplay()
    clearTimeout(timerTimeOut)
  }

  function increaseMinutes(minutes) {
    let oldMinutes = Number(minutesDisplay.textContent)
    updateDisplay(
      Number(oldMinutes + minutes),
      Number(secondsDisplay.textContent)
    )
  }

  function decreaseMinutes(minutes) {
    let oldMinutes = Number(minutesDisplay.textContent)
    if (Number(oldMinutes - minutes) < 0) {
      reset()
    } else {
      updateDisplay(
        Number(oldMinutes - minutes),
        Number(secondsDisplay.textContent)
      )
    }
  }



  return {
    countdown,
    hold,
    reset,
    increaseMinutes,
    decreaseMinutes
  }
}
