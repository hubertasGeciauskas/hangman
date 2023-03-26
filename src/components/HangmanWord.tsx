import React from 'react';


type HangmanWordProps= {
    reveal?: boolean
    wordToGuess: string,
    guessedLetters:string[]
}
const HangmanWord = ({wordToGuess, guessedLetters, reveal = false }:HangmanWordProps) => {
    return (
        <div style={{display: "flex", gap: ".25em", fontSize: "6rem", fontWeight: "bold", textTransform: "uppercase", fontFamily: "monospace"}}>
            {wordToGuess.split("").map((letter, i) => (
                <span style={{borderBottom: ".1em solid black"}} key={i}>
                    <span style={{visibility: guessedLetters.includes(letter) || reveal
                            ? "visible"
                            : "hidden",
                        color:
                            !guessedLetters.includes(letter) && reveal? "red" : "black",
                    }}>{letter}</span>

                </span>
            ))}


            </div>
    );
};

export default HangmanWord;