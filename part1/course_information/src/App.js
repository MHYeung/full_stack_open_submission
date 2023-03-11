const Header = (course) => {
  return (
    <div>
      <h1>{course.name}</h1>
    </div>
  );
};

const Part = (part) => {
  return(
    <div>
      <h3>{part.name}</h3>
      <p>Number of exercises: {part.numberOfExercise}</p>
      <br></br>
    </div>
  )
};

const Content = () => {
  const parts = [
    {name: "Fundamentals of React", numberOfExercise: 10},
    {name: "Using props to pass data", numberOfExercise: 7},
    {name: "State of a component", numberOfExercise: 14}

  ]
  return (
    <div>
      <Part name= {parts[0].name} numberOfExercise = {parts[0].numberOfExercise}/>
      <Part name= {parts[1].name} numberOfExercise = {parts[1].numberOfExercise}/>
      <Part name= {parts[2].name} numberOfExercise = {parts[2].numberOfExercise}/>
    </div>
  )
}

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
      <Content/>
      <Total ex1 = {exercises1} ex2 = {exercises2} ex3 = {exercises3}/>
    </div>
  );
}

export default App;
