import React from "react";
import cl from 'classnames';

import styles from './styles.module.scss';

interface ButtonProps {
    onClick: () => void;
    color?: 'white' | 'transparent';
    children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
    onClick,
    color = 'transparent',
    children
}) => {
    return (
        <button
            className={cl(styles.button, styles[`button--${color}`])}
            onClick={onClick}
        >
            { children }
        </button>
    )
}