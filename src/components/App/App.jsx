import { useState, useEffect } from 'react'
import './App.css'

import Description from '../Description/Description';
import Options from '../Options/Options';
import Feedback from '../Feedback/Feedback';
import Notification from '../Notification/Notification';


export default function App() {
  const [count, setCount] = useState(() => {
    const savedCount = window.localStorage.getItem("count");
    if (savedCount !== null) {
      return JSON.parse(savedCount);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0
    };
  });
  
  const resetFeedback = () => {
    setCount({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };


  useEffect(() => {
    window.localStorage.setItem ("count", JSON.stringify(count));
  }, [count]);


const totalFeedback = count.good + count.neutral + count.bad;

const updateFeedback = (feedbackType) => {
    setCount({ ...count, [feedbackType]: count[feedbackType] + 1 });
};

  const positiveFeedback = Math.round((count.good / totalFeedback) * 100);
  
  return (
    <>
      <Description />

      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback} />
      
      {totalFeedback > 0 && (
        <Feedback
          value={count}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      )}

      {totalFeedback === 0 && <Notification />}
    </>
  )
}
