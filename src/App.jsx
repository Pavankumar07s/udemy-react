import ComponentImg from "./assets/config.png";
import { CORE_CONCEPTS } from "./data";

import Header from "./components/Header"
import CoreConcept from "./components/Coreconcept"

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
