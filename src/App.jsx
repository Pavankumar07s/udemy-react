import Reactimage from "./assets/state-mgmt.png"

const arrayForDiscription=["hiii","hello","holla"]
const gentRandomIndex=(max)=>{
  return Math.floor(Math.random()*(max+1))
}

function Header(){
  let discription =arrayForDiscription[gentRandomIndex(2)]
  return(
    <header>
      <img src={Reactimage} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {discription} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
    
  )
}

function App() {
  return (
  <div>
    <Header></Header>
    <main>
      <h2>Time to get started!</h2>
    </main>
  </div>
  );
    
  
}

export default App;
