import { useState } from "react";
import ComponentImg from "./assets/config.png";
import { CORE_CONCEPTS } from "./data";

import Header from "./components/Header"
import CoreConcept from "./components/Coreconcept"
import TabButton from "./components/TabButton";


function App() {
  const [selectedTopic,setselectedTopic]=useState("select any button from above");
  let tabContent="plese select the above button"
  function hendleSelect(selectedButton){
    console.log(selectedButton)
    // tabContent=selectedButton;
    setselectedTopic(selectedButton)
    
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
          <TabButton onSelect={()=>hendleSelect('components')}>Componets</TabButton>
          <TabButton onSelect={()=>hendleSelect("Jsx")}>Jsx</TabButton>
          <TabButton onSelect={()=>hendleSelect("Props")}>Props</TabButton>
          <TabButton onSelect={()=>hendleSelect("State")}>States</TabButton>
        </menu>
        {selectedTopic}
      </section>
        
    </div>
  </main>
  );
    
  
}

export default App;
