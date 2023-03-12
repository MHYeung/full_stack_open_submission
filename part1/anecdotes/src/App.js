import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);

  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));

  const voteAnecdote = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
  };

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const Heading = ({ title }) => {
    return <h1>{title}</h1>;
  };

  const Content = ({ text }) => {
    return <h4>{text}</h4>;
  };

  const Button = ({ text, onClick }) => {
    return <button onClick={onClick}>{text}</button>;
  };

  const HighestAnecdote = ({ anecdotes, allVotes }) => {
    const highestVote = Math.max(...votes);
    const highestAnecdote = anecdotes[allVotes.indexOf(highestVote)];
    return (
      <div>
        <h4>{highestAnecdote}</h4>
        <p>Has {highestVote} votes</p>
      </div>
    );
  };

  return (
    <div>
      <Heading title="Anecdote of the day" />
      <Content text={anecdotes[selected]} />
      <p>Has {votes[selected]} votes</p>
      <Button onClick={voteAnecdote} text="Vote" />
      <Button
        onClick={() => setSelected(getRandomInt(anecdotes.length))}
        text="Next Anecdote"
      />
      <hr></hr>
      <Heading title="Anecdote with most votes" />
      <HighestAnecdote anecdotes={anecdotes} allVotes={votes} />
    </div>
  );
};

export default App;
