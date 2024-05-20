import CoreConcept from "./Coreconcept"
import { CORE_CONCEPTS } from "../data"

export default function CoreConcepts(){
    return(
        <section id="core-concepts">
      <ul>
        {CORE_CONCEPTS.map((conceptItem)=>(<CoreConcept key={conceptItem.title}{...conceptItem}/>))}
        {/* <CoreConcept {...CORE_CONCEPTS[0]}/>
        <CoreConcept {...CORE_CONCEPTS[1]}/>
        <CoreConcept {...CORE_CONCEPTS[2]}/>
        <CoreConcept {...CORE_CONCEPTS[3]}/> */}

      </ul>
    </section>
    )
}