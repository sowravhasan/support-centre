import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Course from './components/Course/Course'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl text-center font-bold my-6'>Course Registration</h1>
      <Course></Course>
    </>
  )
}

export default App
