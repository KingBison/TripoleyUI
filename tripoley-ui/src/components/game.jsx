import React, {useEffect, useState} from "react";
import axios from "axios";
import ServerStatus from "./serverStatus";
import Board from "./board"
import PlayerData from "./playerData"
import MyData from "./myData";

var url = "";

function Game() {

    const [serverStatus, setServerStatus] = useState(null)
    const [gameData, setGameData] = useState({
        Players: []
    })
    const name = sessionStorage.name

    const getGameData = async () => {
        axios.get(url + "getGameData")
        .then((res) => {
            setServerStatus(true);
            var d = res.data;
            setGameData({
                Players: d.Players,
                BiddingPointer: d.BiddingPointer,
                Dealer: d.Dealer
            });
        })
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
    }, [])

    return(<div className="game">
        <div>
            <h1>Hello, {name}</h1>
            <Board game={gameData}/>
        </div>
        <div>
            <ServerStatus serverStatus={serverStatus}/>
            <div className="player-data-area">
                <MyData game={gameData} name={name}/>
                <div>
                    {gameData.Players.map((player) => {
                        return(<PlayerData 
                            player={player} 
                            name={name} 
                            pokerpointer={gameData.BiddingPointer.Name}
                            dealer={gameData.Dealer.Name}
                        />)
                    })}
                </div>
            </div>
        </div>
    </div>)
}

export default Game;