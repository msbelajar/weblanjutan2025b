import Card from "./Card"
import {Persons} from "../lib/persons"

function App() {
    // let person1 = Persons[1];
  return (
    <div className="container mx-auto mt-7">
        <div className="flex flex-wrap gap-2">
        {/* {Persons.map((person, index) =>
            <Card key={index} name={person.name} occupation={person.occupation} email={person.email} phone={person.phone}/>
         )} */}

        {Persons.map((person, index) =>
            <Card key={index} {...person}/>
         )}
        </div>
    </div>
  )
}

export default App