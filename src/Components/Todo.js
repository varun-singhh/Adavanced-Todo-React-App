import React, { useContext } from 'react'
import {
    ListGroup, ListGroupItem
} from "reactstrap"
import { FaTrash, FaStrikethrough } from "react-icons/fa"
import { ThemeContext } from "./ThemeContext"
import "./Todo.css"
const Todo = ({ todo, markdelete }) => {
    const theme = useContext(ThemeContext)
    
    return (
        <ListGroup className="mt-5 mb-2 items">
            {todo.map(todo => (
                <ListGroupItem key={todo.id} className={theme}>
                    <h4>{todo.todoState}</h4>
                    <span className="float-right" style={{ cursor: "pointer" }}
                        onClick={() => {
                            markdelete(todo.id)

                        }}
                    ><FaTrash /></span>
                </ListGroupItem >
            ))}
        </ListGroup>
    )
}
export default Todo