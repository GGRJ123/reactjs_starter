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
                    The game Rock, Paper, Scissors, is a game to help <br></br>
                    people socialize, especially during these times due to <br></br>
                    the Coronavirus. Whether you want to play with a <br></br>
                    friend using your device or perhaps a person who is <br></br>
                    thousands of miles away. To play Rock, Paper, <br></br>
                    Scissors, there are a few simple steps that you must <br></br>
                    practice. 
                </p>
                <p>
                    The rules are very simple and probably you <br></br>
                    remember them from your childhood: <br></br>
                    If you choose Rock, you will win against Scissors but <br></br>
                    lose against Paper. <br></br>
                    If you choose Scissors, you will win against Paper but <br></br>
                    lose against Rock. <br></br>
                    If you choose Paper, you will win against Rock but <br></br>
                    lose against Scissors. <br></br>
                    There can be 3 to 5 rounds. The game ends when <br></br>
                    somebody gets 3 wins. If you want to play again, just <br></br>
                    click “Play again” button after a game is finished. 

                </p>
                <BackButton/>
                <InstruccionesButton/>
            </form>
        )
    }
}

export default EnglishInstruction;