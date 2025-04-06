import {FC, MouseEvent} from "react";
import styles from "./WhiteButton.module.css";

interface WhiteButtonProps {
    text: string;
    onClick: (event: MouseEvent<HTMLButtonElement>) => void;
    className?: string;
    buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}

const WhiteButton: FC<WhiteButtonProps> = ({text, onClick, className = "", buttonProps}) => {
    return (
        <button
            className={`${styles.whiteButton} ${className}`}
            onClick={onClick}
            {...buttonProps}
        >
            {text}
        </button>
    );
};

export default WhiteButton;