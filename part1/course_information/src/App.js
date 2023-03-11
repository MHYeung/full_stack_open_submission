const Header = (course) => {
  return (
    <div>
      <h1>{course.name}</h1>
    </div>
  );
};

const Content = (props) => {
  return (
    <div>
      <p>
        <strong>Part 1: {props.parts[0].name}</strong> <br></br> Number of
        exercises: {props.parts[0].exercises}
      </p>
      <p>
      <strong>Part 2: {props.parts[1].name}</strong> <br></br> Number of
        exercises: {props.parts[1].exercises}
      </p>
      <p>
      <strong>Part 3: {props.parts[2].name}</strong> <br></br> Number of
        exercises: {props.parts[2].exercises}
      </p>
    </div>
  );
};

const Total = (props) => {
  return (
    <div>
      <p>
        Total number of exercises:{" "}
        {props.parts[0].exercises +
          props.parts[1].exercises +
          props.parts[2].exercises}
      </p>
    </div>
  );
};

function App() {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
}

export default App;
