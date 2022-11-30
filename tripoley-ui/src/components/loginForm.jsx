import axios from 'axios'
import React from "react"
import { useState } from "react"
import {useNavigate} from 'react-router'

function LoginForm(props) {
    let navigate = useNavigate();

    const url = props.url 
    const [name, setName] = useState("")

    return(<div>
        <label>Name:</label><input
            type={"text"}
            value={name}
            onChange={(e) => {
                setName(e.target.value)}
            }
        ></input>
        <br/>
        <button
            onClick={async () => {    
                axios.post(url+"newPlayer", JSON.stringify({
                    Name: name
                })).then((res) => {
                    console.log("New Player",name, "added")
                    sessionStorage.name = name
                    navigate("/game")
                }).catch((err) => {
                    try{
                        alert(err.response.data);
                    } catch (e) {
                        alert("failed to conenct to server")
                    }
                })    
            }}
        >Enter</button>
    </div>)
}

export default LoginForm