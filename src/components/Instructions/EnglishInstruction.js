import React, { Component } from "react";
import '../Instructions/English.css';
import BackButton from '../ButtonContainer/BackButton';
import InstruccionesButton from '../ButtonContainer/InstruccionesButton';

class EnglishInstruction extends Component{
    render(){
        return(
            <form className = "English-page">
                <h1>Instruction</h1>
                <p>
                    The game Rock, Paper, Scissors, is a game to help 
                    people socialize, especially during these times due to
                    the Coronavirus. Whether you want to play with a 
                    friend using your device or perhaps a person who is 
                    thousands of miles away. To play Rock, Paper, 
                    Scissors, there are a few simple steps that you must 
                    practice. 
                </p>
                <p>
                    The rules are very simple and probably you 
                    remember them from your childhood: 
                    If you choose Rock, you will win against Scissors but 
                    lose against Paper. 
                    If you choose Scissors, you will win against Paper but 
                    lose against Rock. 
                    If you choose Paper, you will win against Rock but 
                    lose against Scissors. 
                    There can be 3 to 5 rounds. The game ends when 
                    somebody gets 3 wins. If you want to play again, just 
                    click “Play again” button after a game is finished. 

                </p>
                <BackButton/>
                <InstruccionesButton/>
            </form>
        )
    }
}

export default EnglishInstruction;