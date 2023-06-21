import React, { FC, useEffect, useState } from "react";
import Info from "../Info/Info";
import Tray from "../Tray/Tray";
import Win from "../Win/Win";
import { newState } from "./game-helper";
import { Card, State } from "./types";

export const Game: FC = () => {

    const [state, setState] = useState<State>(newState())

    const reset = () => {
        setState(newState())
    }

    const select = (card: Card) => {
        if (state.selectedCards.length < 2) {
            setState({
                ...state,
                selectedCards: [
                    ...state.selectedCards,
                    card
                ]
            })
        }
    }

    const showedCards = [
        ...state.lockedCards,
        ...state.selectedCards
    ]

    useEffect(() => {
        if (state.selectedCards.length === 2) {
            if (state.selectedCards[0].display === state.selectedCards[1].display) {
                setState({
                    ...state,
                    selectedCards: [],
                    lockedCards: [
                        ...state.lockedCards,
                        ...state.selectedCards
                    ],
                    try: state.try + 1
                })
            } else {
                setTimeout(() =>
                    setState({
                        ...state,
                        selectedCards: [],
                        try: state.try + 1
                    }), 2000)
            }
        }
    },[state])



    return <div className="game">
        {state.cards.length !== state.lockedCards.length
            ? <><div className="game-plateau"><Tray cards={state.cards} showed={showedCards} onSelect={select} /></div>
                <div className="game-ui">
                    <Info state={state} onReset={reset} />
                </div></>
            : <Win state={state} end={new Date()} onRestart={reset} />}
    </div>;
};

export default Game;
