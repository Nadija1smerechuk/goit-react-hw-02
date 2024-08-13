
export default function Feedback({ state }) {
    // console.log(state);
  return (
    <>
      
      <p>Good: {state.feedback.good}</p>
      <p>Neutral: {state.feedback.neutral}</p>
      <p>Bad: {state.feedback.bad}</p>
    </>
  );
}