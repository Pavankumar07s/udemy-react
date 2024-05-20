import { useState } from "react";
// import ComponentImg from "./assets/config.png";
import { CORE_CONCEPTS } from "./data";
import { EXAMPLES } from "./data";
import Header from "./components/Header"
import CoreConcept from "./components/Coreconcept"
import TabButton from "./components/TabButton";


function App() {
  const [selectedTopic,setselectedTopic]=useState();
  // let tabContent="plese select the above button"
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
        {CORE_CONCEPTS.map((conceptItem)=>(<CoreConcept {...conceptItem}/>))}
        {/* <CoreConcept {...CORE_CONCEPTS[0]}/>
        <CoreConcept {...CORE_CONCEPTS[1]}/>
        <CoreConcept {...CORE_CONCEPTS[2]}/>
        <CoreConcept {...CORE_CONCEPTS[3]}/> */}

      </ul>
    </section>

      <section id="examples">
      <h2>Examples</h2>
      <menu>
          <TabButton isSelected={selectedTopic==="components"} onSelect={()=>hendleSelect('components')}>Componets</TabButton>
          <TabButton isSelected={selectedTopic==="jsx"} onSelect={()=>hendleSelect("jsx")}>Jsx</TabButton>
          <TabButton isSelected={selectedTopic==="props"} onSelect={()=>hendleSelect("props")}>Props</TabButton>
          <TabButton isSelected={selectedTopic==="state"} onSelect={()=>hendleSelect("state")}>State</TabButton>
        </menu>
        {/* {selectedTopic} */}
        {!selectedTopic ? <p>please select the topic</p>:
        <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>
            {EXAMPLES[selectedTopic].code}
            </code>
          </pre>
        </div>}
        
      </section>
      {/* <section>

      </section> */}
        
    </div>
  </main>
  );
    
  
}

export default App;
