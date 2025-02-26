import Card from "./Card"
import {Persons} from "../lib/persons"

function App() {
    // let person1 = Persons[1];
  return (
    <div className="container mx-auto mt-7">
        {Persons.map((person, index) =>
            <Card key={index} name={person.name} occupation={person.occupation} email={person.email} phone={person.phone}/>
         )}
    </div>
  )
}

export default App