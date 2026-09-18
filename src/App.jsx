const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Content = (props) => {
  return (
    <div>
      <p>{props.s1}</p>
      <p>Units: {props.u1}</p>

      <p>{props.s2}</p>
      <p>Units: {props.u2}</p>

      <p>{props.s3}</p>
      <p>Units: {props.u3}</p>
    </div>
  )
}

const Total = (props) => {
  return <p><strong>Total Number of Units: {props.u1 + props.u2 + props.u3}</strong> </p>
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
  const subject1 = 'Industry Elective'
  const units1 = 3
  const subject2 = 'Project Management'
  const units2 = 3
  const subject3 = 'App Development'
  const units3 = 3

  const name = 'Hynes Gavin C. Daugdaug'
  const subject = 'CSIT340'
  const section = 'G7'

  return (
    <div style = {{textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
      <Header course = {course}/>
      <Content
        s1 = {subject1} u1 = {units1}
        s2 = {subject2} u2 = {units2}
        s3 = {subject3} u3 = {units3}
      />
      <Total style = {{fontWeight: 'bold'}} u1={units1} u2={units2} u3={units3}/>
      <Footer name = {name} subject = {subject} section = {section} />
    </div>
  )
}

export default App

