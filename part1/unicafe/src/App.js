import { useState } from "react";

const Statistics = (props) => {
  return props.all !== 0 ? (
    <div>
      <h3>Statistics</h3>
      <p>Good: {props.good}</p>
      <p>Neutral: {props.neutral}</p>
      <p>Bad: {props.bad}</p>
      <p>All: {props.all}</p>
      <p>Average: {(props.good + props.bad * -1) / props.all}</p>
      <p>Positive: {(props.good / props.all) * 100}%</p>
    </div>
  ) : (
    <div>
      <h3>Statistics</h3>
      <p>No feedback given</p>
    </div>
  );
};

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
      
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={good + neutral + bad}
      />
    </div>
  );
};

export default App;
