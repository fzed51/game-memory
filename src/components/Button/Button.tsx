import { type FC } from "react";
import "./button.css";

export interface ButtonProps {
    label: string;
    onClick: () => void;
}

export const Button: FC<ButtonProps> = ({ label, onClick }) => {
    return <button className="btn" type="button" onClick={onClick}>{label}</button>;
};

export default Button;
