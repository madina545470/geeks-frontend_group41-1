import './App.css';


function Header(){
  return(
      <>
        <h2>Hello world</h2>
        <Title/>
      </>
  )
}
function Container(){
  return(
      <>
        <h2>Good day</h2>
        <Title/>
      </>
  )
}
function Footer(){
  return(
      <>
        <h2>Hello world </h2>
        <Title/>
      </>
  )
}
function Title(){
  return(
      <>
        <p>Goodbye World</p>
      </>
  )
}
function App() {
  return (
      <div className="App">
        <Header/>
        <h3>----</h3>
        <Container/>
        <h3>-----</h3>
        <Footer/>
      </div>
  );
}


export default App;
