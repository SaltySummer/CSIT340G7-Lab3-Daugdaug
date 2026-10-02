const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  return (
    <p>{props.part.name}: {props.part.units} units</p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part = {props.part1}/>
      <Part part = {props.part2}/>
      <Part part = {props.part3}/>
    </div>
  )
}

const Total = (props) => {
  return <p><strong>Total Number of Units: {props.u1 + props.u2 + props.u3}</strong></p>
}

const Footer = (props) => {
  return (
    <footer>
      <p>{props.name} - {props.subject} - {props.section}</p>
    </footer>
  )
}

const App = () => {
  const course = 'BS Information Technology'
  const part1={
    name: 'Industry Elective', 
    units: 3
  }

  const part2={
    name: 'Project Management',
    units: 3
  }

  const part3={
    name: 'App Development',
    units: 3
  }
 
  const name = 'Hynes Gavin C. Daugdaug'
  const subject = 'CSIT340'
  const section = 'G7'

  return (
    <div style = {{textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
      <Header course = {course}/>
      <Content part1={part1} part2={part2} part3={part3}/>
      <Total u1={part1.units} u2={part2.units} u3={part3.units}/>
      <Footer name = {name} subject = {subject} section = {section} />
    </div>
  )
}

export default App

