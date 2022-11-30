import React from "react";
import _2C from "../assets/cards/2_of_clubs.png"
import _2D from "../assets/cards/2_of_diamonds.png"
import _2H from "../assets/cards/2_of_hearts.png"
import _2S from "../assets/cards/2_of_spades.png"
import _3C from "../assets/cards/3_of_clubs.png"
import _3D from "../assets/cards/3_of_diamonds.png"
import _3H from "../assets/cards/3_of_hearts.png"
import _3S from "../assets/cards/3_of_spades.png"
import _4C from "../assets/cards/4_of_clubs.png"
import _4D from "../assets/cards/4_of_diamonds.png"
import _4H from "../assets/cards/4_of_hearts.png"
import _4S from "../assets/cards/4_of_spades.png"
import _5C from "../assets/cards/5_of_clubs.png"
import _5D from "../assets/cards/5_of_diamonds.png"
import _5H from "../assets/cards/5_of_hearts.png"
import _5S from "../assets/cards/5_of_spades.png"
import _6C from "../assets/cards/6_of_clubs.png"
import _6D from "../assets/cards/6_of_diamonds.png"
import _6H from "../assets/cards/6_of_hearts.png"
import _6S from "../assets/cards/6_of_spades.png"
import _7C from "../assets/cards/7_of_clubs.png"
import _7D from "../assets/cards/7_of_diamonds.png"
import _7H from "../assets/cards/7_of_hearts.png"
import _7S from "../assets/cards/7_of_spades.png"
import _8C from "../assets/cards/8_of_clubs.png"
import _8D from "../assets/cards/8_of_diamonds.png"
import _8H from "../assets/cards/8_of_hearts.png"
import _8S from "../assets/cards/8_of_spades.png"
import _9C from "../assets/cards/9_of_clubs.png"
import _9D from "../assets/cards/9_of_diamonds.png"
import _9H from "../assets/cards/9_of_hearts.png"
import _9S from "../assets/cards/9_of_spades.png"
import _10C from "../assets/cards/10_of_clubs.png"
import _10D from "../assets/cards/10_of_diamonds.png"
import _10H from "../assets/cards/10_of_hearts.png"
import _10S from "../assets/cards/10_of_spades.png"
import _JC from "../assets/cards/jack_of_clubs.png"
import _JD from "../assets/cards/jack_of_diamonds.png"
import _JH from "../assets/cards/jack_of_hearts.png"
import _JS from "../assets/cards/jack_of_spades.png"
import _QC from "../assets/cards/queen_of_clubs.png"
import _QD from "../assets/cards/queen_of_diamonds.png"
import _QH from "../assets/cards/queen_of_hearts.png"
import _QS from "../assets/cards/queen_of_spades.png"
import _KC from "../assets/cards/king_of_clubs.png"
import _KD from "../assets/cards/king_of_diamonds.png"
import _KH from "../assets/cards/king_of_hearts.png"
import _KS from "../assets/cards/king_of_spades.png"
import _AC from "../assets/cards/ace_of_clubs.png"
import _AD from "../assets/cards/ace_of_diamonds.png"
import _AH from "../assets/cards/ace_of_hearts.png"
import _AS from "../assets/cards/ace_of_spades.png"
import axios from "axios";
import { useEffect } from "react";


function getCardAsset(num, suit){
    if(suit === "C"){
        if(num === "2"){
            return(_2C)
        }
        if(num === "3"){
            return(_3C)
        }
        if(num === "4"){
            return(_4C)
        }
        if(num === "5"){
            return(_5C)
        }
        if(num === "6"){
            return(_6C)
        }
        if(num === "7"){
            return(_7C)
        }
        if(num === "8"){
            return(_8C)
        }
        if(num === "9"){
            return(_9C)
        }
        if(num === "10"){
            return(_10C)
        }
        if(num === "J"){
            return(_JC)
        }
        if(num === "Q"){
            return(_QC)
        }
        if(num === "K"){
            return(_KC)
        }
        if(num === "A"){
            return(_AC)
        }
    }
    if(suit === "D"){
        if(num === "2"){
            return(_2D)
        }
        if(num === "3"){
            return(_3D)
        }
        if(num === "4"){
            return(_4D)
        }
        if(num === "5"){
            return(_5D)
        }
        if(num === "6"){
            return(_6D)
        }
        if(num === "7"){
            return(_7D)
        }
        if(num === "8"){
            return(_8D)
        }
        if(num === "9"){
            return(_9D)
        }
        if(num === "10"){
            return(_10D)
        }
        if(num === "J"){
            return(_JD)
        }
        if(num === "Q"){
            return(_QD)
        }
        if(num === "K"){
            return(_KD)
        }
        if(num === "A"){
            return(_AD)
        }
    }
    if(suit === "H"){
        if(num === "2"){
            return(_2H)
        }
        if(num === "3"){
            return(_3H)
        }
        if(num === "4"){
            return(_4H)
        }
        if(num === "5"){
            return(_5H)
        }
        if(num === "6"){
            return(_6H)
        }
        if(num === "7"){
            return(_7H)
        }
        if(num === "8"){
            return(_8H)
        }
        if(num === "9"){
            return(_9H)
        }
        if(num === "10"){
            return(_10H)
        }
        if(num === "J"){
            return(_JH)
        }
        if(num === "Q"){
            return(_QH)
        }
        if(num === "K"){
            return(_KH)
        }
        if(num === "A"){
            return(_AH)
        }
    }
    if(suit === "S"){
        if(num === "2"){
            return(_2S)
        }
        if(num === "3"){
            return(_3S)
        }
        if(num === "4"){
            return(_4S)
        }
        if(num === "5"){
            return(_5S)
        }
        if(num === "6"){
            return(_6S)
        }
        if(num === "7"){
            return(_7S)
        }
        if(num === "8"){
            return(_8S)
        }
        if(num === "9"){
            return(_9S)
        }
        if(num === "10"){
            return(_10S)
        }
        if(num === "J"){
            return(_JS)
        }
        if(num === "Q"){
            return(_QS)
        }
        if(num === "K"){
            return(_KS)
        }
        if(num === "A"){
            return(_AS)
        }
    }
}





const Card = (card) => {

    if(!card){
        return;
    }

    return(
        <div><img src={getCardAsset(card.Number, card.Suit)} className="card"></img></div>
    )
}

export default Card;