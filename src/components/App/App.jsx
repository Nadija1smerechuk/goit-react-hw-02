import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Description from '../Description/Description';
import Options from '../Options/Options';
import Feedback from '../Feedback/Feedback';



export default function App() {
const [clicks, setClicks] = useState(0);

const state = {
    feedback: {
      good: 0,
      neutral: 0,
      bad: 0
    }
};
  


  return (
    <>
      <Description />
      <Options state={state}  />
      
      <Feedback state={state}/>
    
    </>
  )
}


