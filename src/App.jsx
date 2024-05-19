import ComponentImg from "./assets/config.png";
import { CORE_CONCEPTS } from "./data";

import Header from "./components/Header"
import CoreConcept from "./components/Coreconcept"
import TabButton from "./components/TabButton";
function App() {
  function hendleSelect(){
    console.log("hii button was selected")
  }
  return (
    <main>
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

      <section id="examples">
      <h2>Examples</h2>
      <menu>
          <TabButton onSelect={hendleSelect}>Componets</TabButton>
          <TabButton onSelect={hendleSelect}>Jsx</TabButton>
          <TabButton onSelect={hendleSelect}>Props</TabButton>
          <TabButton onSelect={hendleSelect}>States</TabButton>
        </menu>
      </section>
        
    </div>
  </main>
  );
    
  
}

export default App;
