import React from "react";
import Link from "next/link";
import cl from "classnames";

import styles from './styles.module.scss';

type NavigationLink = {
    href: string;
    label: string;
}
interface NavigationProps {
    links: NavigationLink[];
}

export const Navigation: React.FC<NavigationProps> = ({
    links
}) => {
    const linksLength = links.length;
    return (
        <ul className={cl(styles.navigation)}>
            {links.map((link, index) => (
                <>
                    <li
                        className={cl(styles.navigationItem)}
                        key={index}
                    >
                        <Link
                            className={cl(styles.navigationLink)}
                            href={link.href}
                        >
                            {link.label}
                        </Link>
                    </li>
                    {index < (linksLength - 1) &&
                        <li className={cl(styles.navigationSeparator)} />
                    }
                </>
            ))}
        </ul>
    )
}