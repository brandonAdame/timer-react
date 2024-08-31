import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPause } from '@fortawesome/free-solid-svg-icons'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import Wave from 'react-wavify'
import Timer from './components/timer/Timer'
import './App.css'

function App() {
  const [isRunning, setIsRunning] = useState(false);

  function handleOnClickPause() {
    if (isRunning === true) {
      setIsRunning(!isRunning);
    }
  }

  function handleOnClickPlay() {
    if (isRunning === false) {
      setIsRunning(!isRunning);
    }
  }

  return (
    <div className='flex flex-col justify-between items-center w-screen h-screen'>
      <div className='mt-4 w-screen text-end pr-9 text-5xl'>
        <button className='mr-14 text-slate-50/40'><FontAwesomeIcon icon={faPause} onClick={handleOnClickPause} /></button>
        <button className='text-slate-50/40'><FontAwesomeIcon icon={faPlay} onClick={handleOnClickPlay} /></button>
      </div>

      <div>
        <Timer hours={99} minutes={59} seconds={59} running={isRunning} setIsRunning={setIsRunning} />
      </div>

      <div className='w-screen'>
        <Wave fill='url(#paint0_radial_11_316)'
          paused={false}
          style={{ display: 'flex' }}
          options={{
            height: 50,
            amplitude: 25,
            speed: 0.30,
            points: 7
          }}
        >
          <defs>
            <radialGradient id="paint0_radial_11_316" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(634 203.5) rotate(4.27127) scale(758.607 390.028)">
              <stop offset="0.29546" stop-color="#3593BB" />
              <stop offset="0.859818" stop-color="#7D9C95" stop-opacity="0.890821" />
              <stop offset="1" stop-color="#D9A764" stop-opacity="0.75" />
            </radialGradient>
          </defs>
        </Wave>
      </div>
    </div>
  )
}

export default App
