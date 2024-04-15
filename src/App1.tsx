import { useState } from 'react'
import React from 'react'
import './App.css'

import { TaskCard } from './components/Tasks/TaskCard'
import { TaskList } from './components/Tasks/TaskList'


// interface MyComponentProps {
//   name: string;
//   age: number;
// }

// // Define the functional component
// const MyComponent: React.FC<MyComponentProps> = ({ name, age }) => {
//   return (
//     <div>
//       <p>Name: {name}</p>
//       <p>Age: {age}</p>
//     </div>
//   );
// };
// const menu = [
//   {
//     name: "Recents",
//     age: 3
//   },
//   {
//     name: "Favorites",
//     age: 3

//   },
//   {
//     name: "Contacts",
//     age: 3
//   },
// ]


function App() {

  let components: React.ReactElement[] = [];
  menu.forEach(character=>{
    console.log(character)
    components.push(<MyComponent {... character}/>)
  })
  return (
    <>
      <div>
        <TaskList />
{/* 
        {components} */}

      </div>
    </>
  )
}

export default App
