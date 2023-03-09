const Header = (course) => {
  return (
    <div>
      <h1>{course.name}</h1>
    </div>
  );
};

const Content = (part) => {
  return(
    <div>
      <h3>{part.name}</h3>
      <p>Number of exercises: {part.numberOfExercise}</p>
      <br></br>
    </div>
  )
};

const Total = (exercise) => {
  return (
    <div>
      <p>Total number of exercises: {exercise.ex1 + exercise.ex2 + exercise.ex3}</p>
    </div>
  )
};

function App() {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header name = {course}/>
      <Content name = {part1} numberOfExercise = {exercises1}/>
      <Content name = {part2} numberOfExercise = {exercises2}/>
      <Content name = {part3} numberOfExercise = {exercises3}/>
      <Total ex1 = {exercises1} ex2 = {exercises2} ex3 = {exercises3}/>
    </div>
  );
}

export default App;
