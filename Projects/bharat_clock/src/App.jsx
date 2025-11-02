import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppName from './components/AppName.jsx'
import ShowText from './components/ShowText.jsx'
import CurrentTime from './components/CurrentTime.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <center className="items-container">
      <AppName />
      <ShowText />
      <CurrentTime />
    </center>
  )
    
}

export default App
