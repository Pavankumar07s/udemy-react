import Reactimage from "./assets/state-mgmt.png"
import ComponentImg from "./assets/config.png"
import { CORE_CONCEPTS } from "./data"
const arrayForDiscription=["hiii","hello","holla"]
const getRandomIndex=(max)=>{
  return Math.floor(Math.random()*(max+1))
}

function Header(){
  let discription =arrayForDiscription[getRandomIndex(2)]
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

const CoreConcept=({image,title,description})=>{
    return(
      <li>
        <img src={image} alt="..." />
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    )
}

function App() {
  return (
  <div>
    <Header></Header>
    <section id="core-concepts">
      <ul>
        <CoreConcept {...CORE_CONCEPTS[0]}/>
        <CoreConcept {...CORE_CONCEPTS[1]}/>
        <CoreConcept {...CORE_CONCEPTS[2]}/>
        <CoreConcept {...CORE_CONCEPTS[3]}/>
      </ul>
    </section>
    <main>
      <h2>Time to get started!</h2>
    </main>
  </div>
  );
    
  
}

export default App;
