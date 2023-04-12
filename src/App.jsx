import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import LanSelection from './components/LanSelection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <LanSelection />
    </div>
  )
}

export default App
