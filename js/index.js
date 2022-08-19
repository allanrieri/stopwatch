import Controls from './controls.js'
import Timer from './timer.js'
import Sound from './sounds.js'
import Events from './events.js'
import { 
  buttonPause, 
  buttonPlay, 
  buttonSet, 
  buttonSoundOff, 
  buttonSoundOn, 
  buttonStop, 
  minutesDisplay, 
  secondsDisplay 
} from './elements.js'

let minutes = Number(minutesDisplay.textContent)

const controls = Controls({
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet
})

const configTimer = {
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
  minutes,
}

const timer = Timer(configTimer)

const sound = Sound()

Events({controls, timer, sound})