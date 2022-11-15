import React from "react";
import styles from './styles.module.scss';

import logoImage from './images/logo.png'

import Link from 'next/link';
import Image from "next/image";

interface LogoProps {}

export const Logo: React.FC<LogoProps> = ({}) => {
    return (
        <h1 className={styles.logo}>
            <Link href="/">
                Dusktopia
                {/*<Image
                    src={logoImage}
                    alt={'Dusktopia'}
                    width={156}
                    height={19}
                    quality={100}
                />*/}
            </Link>
        </h1>
    )
}