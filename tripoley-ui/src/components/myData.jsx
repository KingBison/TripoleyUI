import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Card from "../components/card";

function MyData(props) {

    const [myHand, setMyHand] = useState([]);

    useEffect(() => {
        if(!props.game){
            return;
        }
        console.log(props.game.Players)
        for(let i = 0; i<props.game.Players.length; i++){
            if (props.game.Players[i].Name === props.name){
                setMyHand(props.game.Players[i].Hand)
                return;
            }
        }
    }, [])
    


    return(<div>
        {myHand.map((card) => {
            return(Card(card))
        })}
    </div>)
}

export default MyData;