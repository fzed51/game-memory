import { Card, State } from "./types";

export function newState(): State {
    const cards: Card[] = [];
    for (let i = 0; i < 8; i++) {
        cards.push(newCard((i + 1).toString()))
        cards.push(newCard((i + 1).toString()))
    }
    return {
        start: new Date(),
        cards: cards.sort((a, b) => 0.5 - Math.random()),
        lockedCards: [],
        selectedCards: [],
        try: 0
    }
}

function getRandomInt(max: number, min: number = 0) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

export function newCard(display: string): Card {
    const ref = newRef();
    return { ref, display };
}
function newRef(): string {
    let out = "";
    const alpha = "0123456789aqwxszedcvfrtgbnhyujkiolmp".split('');
    for (let i = 0; i < 8; i++) {
        out = out + alpha[getRandomInt(alpha.length - 1)];
    }
    return out;
}

