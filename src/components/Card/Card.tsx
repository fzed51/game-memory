import { type FC } from "react";
import cn from "classnames"
import "./card.css"

export interface CardProps {
    display: string;
    show: boolean
    onClick: () => void;
}

export const Card: FC<CardProps> = ({ display, onClick, show }) => {
    const handleShow = () => show || onClick()
    return (
        <div className={cn("card", { "card-show": show })} onClick={handleShow}>
            <div className="card-flip">
                <div className="card-front">
                    <div className="card-display">
                        {display}
                    </div>
                </div>
                <div className="card-back">
                    <div className="card-display">
                        🧠
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
