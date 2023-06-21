import React, { FC } from "react";
import "./button.scss";

export interface ButtonProps {
    label: string;
    onClick: () => void;
}

export const Button: FC<ButtonProps> = ({ label, onClick }) => {
    return <button className="btn" type="button" onClick={onClick}>{label}</button>;
};

export default Button;
