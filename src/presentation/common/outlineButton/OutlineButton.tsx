import {FC, MouseEvent} from "react";
import styles from "./OutlineButton.module.css";

interface OutlineButtonProps {
    text: string;
    onClick: (event: MouseEvent<HTMLButtonElement>) => void;
    className?: string;
    buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}

const OutlineButton: FC<OutlineButtonProps> = ({text, onClick, className = "", buttonProps}) => {
    return (
        <button
            className={`${styles.button} ${className}`}
            onClick={onClick}
            {...buttonProps}
        >
            {text}
        </button>
    );
};

export default OutlineButton;