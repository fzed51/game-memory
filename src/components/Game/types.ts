export interface Card {
    ref: string;
    display: string;
}


export interface State {
    start: Date;
    cards: Card[];
    lockedCards: Card[];
    selectedCards: Card[];
    try: number;
}
