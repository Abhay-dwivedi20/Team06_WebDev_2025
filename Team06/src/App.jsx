import { useState } from 'react'
import './App.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


function App() {
  const [count, setCount] = useState(0);
  gsap.registerPlugin(ScrollTrigger)

  return (
    <>
      <div className='svg fixed'></div>
    </>
  )
}

export default App
