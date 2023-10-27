import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/Header/Header'
import Programming from './component/Programming/Programming'
import Question from './component/Question/Question'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
      
      <Programming></Programming>

      <Question></Question>
      

      
     
    </div>
  )
}

export default App
