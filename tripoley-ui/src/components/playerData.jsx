import React from "react";
import chip from "../assets/chip-icon.png";
import pp from "../assets/poker-pointer.png";

function PlayerData(props) {
    const getBorderColor = () => {
        if(props.player.Name === props.name){
            return({borderColor: "yellow"});
        } 
    }

    const getStyle = () => {
        if(props.player.Name === props.pokerpointer){
            return({display: "none"})
        }
    }

    const getDealer = () => {
        if(props.player.Name !== props.dealer){
            return(<div style={{color:"blue"}}>(dealer)</div>)
        }
    }

    return(<div className="player-data" style={getBorderColor()}> 
        <h3>{props.player.Name}{getDealer()}</h3>
        <div className="player-data-row">
            <div>
                <p>{props.player.Money}</p><img className="chip-icon" src={chip}/>
            </div>
        </div>
        <img className="poker-pointer" src={pp} style={getStyle()}></img>
    </div>)
}

export default PlayerData;