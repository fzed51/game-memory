import React, { FC } from "react";
import Button from "../Button/Button";
import DiffTime from "../DiffTime/DiffTime";
import { State } from "../Game/types";

export interface WinProps {
    state: State,
    end: Date;
    onRestart: () => void;
}

export const Win: FC<WinProps> = ({ state, end, onRestart }) => {
    return <div>
        <h1>Gagné 🎉</h1>
        <p>temps : <DiffTime from={state.start} to={end} /></p>
        <p>en {state.try} essais</p>
        <div>
            <Button label="Recommencer" onClick={onRestart} />
        </div>
    </div>;
};

export default Win;
