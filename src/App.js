import { useState } from "react";
import Todo from "./components/Todo";


function App() {
  const originalCourses = ['Learn React', 'Master React', 'Explore the full React course']

  const [courses, setCourses] = useState(originalCourses)

  const [newName, setNewName] = useState('inicio')

  const handleChange = (event) => {
    setNewName(event.target.value)
  }

  const deleteCourse = c => {
    setCourses(courses.filter(el => el !== c))
  }

  const addCourse = e => {
    e.preventDefault()
    setCourses([...courses, newName])
    setNewName('')
  }

  return <div>
    <h1>My Todos</h1>
    { 
      courses.map(c => {
      return <Todo text={c} deleteTodo={deleteCourse}/>
    })}

    <form onSubmit={addCourse}>
    <input type="text" onChange={handleChange} value={newName}/>
    <button className="btn" type="submit">ADD</button>
    </form>
    
  </div>
}

export default App;
