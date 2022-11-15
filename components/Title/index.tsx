import React from "react";
import cl from 'classnames';

import styles from './styles.module.scss';

interface TitleProps {
    type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    fontSize?: number;
    children: React.ReactNode;
}

export const Title: React.FC<TitleProps> = ({
    type,
    fontSize = 66,
    children
}) => {
    return React.createElement(
        type,
        {
            className: cl(styles.title, styles[`title-${type}`]),
            style: {fontSize: `${fontSize}px`},
        },
        children,
    )
}