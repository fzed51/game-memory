import React, { FC, useMemo } from "react";
import Button from "../Button/Button";
import DiffTime from "../DiffTime/DiffTime";
import { State } from "../Game/types";
import "./info.scss"
export interface InfoProps {
    state: State;
    onReset: () => void;
}

export const Info: FC<InfoProps> = ({ state, onReset }) => {

    const paire = useMemo(() => state.cards.length / 2, [state.cards])
    const finded = useMemo(() => state.lockedCards.length / 2, [state.lockedCards])
    const handleReset = () => onReset()
    return <div className="info">
        <div>⏳<DiffTime from={state.start} /></div>
        <div><span>Paire(s)</span> : {paire}</div>
        <div><span>Essai(s)</span> : {state.try}</div>
        <div><span>Trouvé(s)</span> : {finded}</div>
        <div><Button label="Reset" onClick={handleReset} /></div>
    </div>;
};

export default Info;
