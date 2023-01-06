import { useState } from 'react'
import './App.css'
import { UserContextProvider } from './context'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <div className="App"></div>
    </UserContextProvider>

  )
}

export default App
