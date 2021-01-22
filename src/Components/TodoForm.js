import React, { useContext, useState } from "react"
import {
    Form, Button, Input, InputGroup, FormGroup, Container, InputGroupAddon
} from "reactstrap"
import { FaPlus } from "react-icons/fa"
import color from "./FormStyles"
import { v4 } from "uuid"
import { ThemeContext } from "./ThemeContext"

function TodoForm({ addTodo }) {
    const [todoState, settodoState] = useState("")
    const theme = useContext(ThemeContext)
    const handleSubmit = e => {
        e.preventDefault();
        if (todoState === "") {
            return alert("Please enter text!")
        }
        const todo = {
            todoState,
            id: v4()
        }
        addTodo(todo)
        settodoState("")
    }
    return (
        <Container className="fluid">
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <InputGroup>
                        <Input type="text" type="text" name="todo" id="todo" placeholder="Your text here!" onChange={e => settodoState(e.target.value)} value={todoState} style={color[theme]} />

                        <Button color={theme==="Dark"?"warning":"secondary"}><FaPlus /></Button>
                    </InputGroup>
                </FormGroup>
            </Form>
        </Container>
    )
}
export default TodoForm