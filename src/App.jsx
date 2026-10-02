const Header = (props) => {
  return <h1>{props.course.name}</h1>
}

const Part = (props) => {
  return (
    <p>{props.part.name}: {props.part.units} units</p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part = {props.parts[0]}/>
      <Part part = {props.parts[1]}/>
      <Part part = {props.parts[2]}/>
    </div>
  )
}

const Total = (props) => {
  return <p><strong>Total Number of Units: {props.parts[0].units + props.parts[1].units + props.parts[2].units}</strong></p>
}

const Footer = (props) => {
  return (
    <footer>
      <p>{props.name} - {props.subject} - {props.section}</p>
    </footer>
  )
}

const App = () => {
  const course = {name: 'BS Information Technology',
    parts: [
      {name: 'Industry Elective', units: 3},
      {name: 'Project Management',units: 3},
      {name: 'App Development',units: 3}
    ]
  }
  const name = 'Hynes Gavin C. Daugdaug'
  const subject = 'CSIT340'
  const section = 'G7'

  return (
    <div style = {{textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
      <Header course = {course}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
      <Footer name = {name} subject = {subject} section = {section} />
    </div>
  )
}

export default App