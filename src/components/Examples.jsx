import { useState } from "react";
import TabButton from "./TabButton";
import { EXAMPLES } from "../data";
import Section from "./Section";
export default function Examples(){

    const [selectedTopic,setselectedTopic]=useState();
  // let tabContent="plese select the above button"
        function hendleSelect(selectedButton){
            console.log(selectedButton)
            // tabContent=selectedButton;
            setselectedTopic(selectedButton)
    
  }
    return(
        <Section title ="example" id="examples">
      {/* <h2>Examples</h2> */}
      <menu>
          <TabButton isSelected={selectedTopic==="components"} onClick={()=>hendleSelect('components')}>Componets</TabButton>
          <TabButton isSelected={selectedTopic==="jsx"} onClick={()=>hendleSelect("jsx")}>Jsx</TabButton>
          <TabButton isSelected={selectedTopic==="props"} onClick={()=>hendleSelect("props")}>Props</TabButton>
          <TabButton isSelected={selectedTopic==="state"} onClick={()=>hendleSelect("state")}>State</TabButton>
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
        
      </Section>
    )
}