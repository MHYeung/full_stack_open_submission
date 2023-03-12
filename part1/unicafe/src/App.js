import { useState } from "react";

const Statistics = (props) => {
  return props.all !== 0 ? (
    <div>
      <h3>Statistics</h3>
      <table>
        <StatisticsLine text="Good" value={props.good} />
        <StatisticsLine text="Neutral" value={props.neutral} />
        <StatisticsLine text="Bad" value={props.bad} />
        <StatisticsLine text="All" value={props.all} />
        <StatisticsLine
          text="Average"
          value={(props.good + props.bad * -1) / props.all}
        />
        <StatisticsLine
          text="Positive"
          value={(props.good / props.all) * 100 + "%"}
        />
      </table>
      {/* <p>Good: {props.good}</p>
      <p>Neutral: {props.neutral}</p>
      <p>Bad: {props.bad}</p>
      <p>All: {props.all}</p>
      <p>Average: {(props.good + props.bad * -1) / props.all}</p>
      <p>Positive: {(props.good / props.all) * 100}%</p> */}
    </div>
  ) : (
    <div>
      <h3>Statistics</h3>
      <p>No feedback given</p>
    </div>
  );
};

const StatisticsLine = (props) => {
  return (
    <tbody>
      <tr>
        <td>
          <strong>{props.text}: </strong>
        </td>
        <td>&nbsp;</td>
        <td> {props.value}</td>
      </tr>
    </tbody>
  );
};

const Button = (props) => {
  return <button onClick={props.onClick}>{props.description}</button>;
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h3>Give feedback</h3>
      <Button onClick={() => setGood(good + 1)} description="Good" />
      <Button onClick={() => setNeutral(neutral + 1)} description="Neutral" />
      <Button onClick={() => setBad(bad + 1)} description="Bad" />

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
