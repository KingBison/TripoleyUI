import React from "react"

function ServerStatus(props){

    const getServerStatus = () => {
        if (props.serverStatus === null){
            return(<h2 style={{color: "gray"}}>connecting to server...</h2>)
        } 
        if (props.serverStatus){
            return(<h2 style={{color: "green"}}>Server is running</h2>)
        } else {
            return(<h2 style={{color: "red"}}>Server is not running</h2>)
        }
        
    }

    return(getServerStatus())

}

export default ServerStatus