import React, { FC } from "react";
import Card from "../Card/Card";
import { Card as CardType } from "../Game/types";

export interface TrayProps {
    cards: CardType[];
    showed: CardType[];
    onSelect: (CardType: CardType) => void;
}

export const Tray: FC<TrayProps> = ({ cards, showed, onSelect }) => {
    const handleSelectFactory = (card: CardType) => () => onSelect(card)
    const showedRefs = showed.map((s) => s.ref)
    return <div className="tray">
        {cards.map((card) => <Card
            key={card.ref}
            display={card.display}
            show={showedRefs.includes(card.ref)}
            onClick={handleSelectFactory(card)}
        />)}
    </div>;
};

export default Tray;
