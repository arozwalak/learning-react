const Hello = (props) => {
    return (
        <div>
            <p>Hello {props.name}! You are {props.age} years old.</p>
        </div>
    )
}
function App() {
    const name = 'Peter'
    const age = 10
  return (
    <>
        <h1>Greetings</h1>
      <Hello name='Artur' age={26 + 10}/>
      <Hello name={name} age={age}/>
    </>
  )
}

export default App
