import { useState } from "react";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h3>Give feedback</h3>
      <button onClick={() => setGood(good + 1)}> Good </button>
      <button onClick={() => setNeutral(neutral + 1)}> Neutral </button>
      <button onClick={() => setBad(bad + 1)}> Bad </button>
      <br></br>
      <h3>Statistics</h3>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>All: {good + neutral + bad}</p>
      <p>Average: {(good*1+ bad*-1)/(good+bad+neutral)}</p>
      <p>Positive: {good/(good+bad+neutral)*100}%</p>
    </div>
  );
};

export default App;
