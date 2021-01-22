import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
const color = {
    Dark:{
        padding: "5px",
    display: "flex",
    flexDirection: "column",
    margin: "0px",
    backgroundColor: "#E8BD0D",
    wifth: "100%",
    height: "90px",
    justifyContent: "center",
    alignItems: "center",
    }
    ,Light:{
    padding: "5px",
    display: "flex",
    flexDirection: "column",
    margin: "0px",
    backgroundColor: "#758283",
    color:"#ffffff",
    wifth: "100%",
    height: "90px",
    justifyContent: "center",
    alignItems: "center",
    }

}


function Header() {
    const theme = useContext(ThemeContext)
    return (
        <div style={color[theme]}>
            <h1>Todo App </h1>
            <u><p>(All your todos are stored locally) </p></u>
        </div>
    )
}

export default Header
