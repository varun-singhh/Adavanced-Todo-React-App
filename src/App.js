import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import reducer from "./Components/reducer"
import { TodoContext } from "./Components/Context.js"
import TodoForm from './Components/TodoForm';
import Todo from './Components/Todo';
import Header from './Components/Header';
import { Button } from 'reactstrap';
import { ThemeContext } from './Components/ThemeContext';
import "./App.css"
import {FaSun,FaMoon} from "react-icons/fa"
import color from './Components/FormStyles';
function App() {
  const [todo, setTodo] = useState([])
  const [theme, setTheme] = useState("Dark")
  //Syntax of useEffect: useEffect(()=>{},[])
  useEffect(() => {
    const localtodo = localStorage.getItem("todo")
    if (localtodo) { setTodo(JSON.parse(localtodo)) }

  }, [])
  const addTodo = async task => { //async is used to avoid waiting while loading the application
    setTodo([...todo, task])
  }
  // in array part of use effect we write dependencies,
  //for eg; if there is any change in todo then i want to run below
  //useEffect so i will pass todo in array part of it.
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo))
  }, [todo])

  const markdelete = id => {
    setTodo(todo.filter(todo => todo.id !== id))
  }
  return (

    <ThemeContext.Provider value={theme} >
      <Header />
      <div className={theme+"bg"}>
        <Button color="link" className={theme + "button"} onClick={() => { setTheme(theme === "Dark" ? "Light" : "Dark") }}>{theme === "Dark" ? <FaSun/>: <FaMoon/>}</Button>
        <Todo todo={todo} markdelete={markdelete} />
        <TodoForm addTodo={addTodo} />
        <footer>
          <i style={{ bottom: "0px", display: "flex", justifyContent: "center", color: "#758283" }}>copyright 2021, All rights reserved</i>
        </footer>
      </div>
    </ThemeContext.Provider>

  )
}

export default App

