import React, {useEffect, useState} from "react";
import axios from "axios";
import LoginForm from "./loginForm";
import ServerStatus from "./serverStatus";

var url = "";

function Login() {

    const [serverStatus, setServerStatus] = useState(null)

    const getGameData = async () => {
        axios.get(url + "getGameData")
        .then(() => {setServerStatus(true)})
        .catch(() => {setServerStatus(false)})
          
        
    }

    const eff = async () => {
        await fetch("config.json").then(
            (res) => res.json())
            .then((config) => {
                url = config.serverAddr
            }
        )

        let updateInterval = setInterval(getGameData, 1000)
        return () => clearInterval(updateInterval)
    }

    useEffect(() => {
        eff()
    })


    return(<div className="login">
        <div>
            <h1>Welcome to Tripoley</h1>
            <LoginForm url={url}/>
        </div>
        <div>
            <ServerStatus serverStatus={serverStatus}/>
        </div>
    </div>)
}

export default Login;