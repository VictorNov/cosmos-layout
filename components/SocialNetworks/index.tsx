import React from "react";
import cl from "classnames";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

import styles from './styles.module.scss';

import twitch from './images/game_icon.svg';
import twitter from './images/twitter_icon.svg';
import antDesign from './images/ant-design-icon.svg';

interface SocialNetworksProps {}
interface ISocialNetwork {
    image: StaticImageData;
    link: string;
    name: string;
    id: number;
}

const socialNetworks: ISocialNetwork[] = [
    {
        id: 1,
        name: 'Twitch',
        image: twitch,
        link: 'https://www.twitch.tv/',
    },
    {
        id: 2,
        name: 'Twitter',
        image: twitter,
        link: 'https://twitter.com/',
    },
    {
        id: 3,
        name: 'Ant Design',
        image: antDesign,
        link: 'https://ant.design/',
    },
];

export const SocialNetworks: React.FC<SocialNetworksProps> = ({}) => {
    return (
        <ul className={cl(styles.socialNetworks)}>
            {socialNetworks.map(({ id, name, image, link }: ISocialNetwork) => (
                <li key={id}>
                    <Link
                        className={cl(
                            styles.socialNetworks__link,
                            styles[`socialNetworks__link--${name.replaceAll(' ', '')}`]
                        )}
                        href={link}
                        title={name}
                        target={'_blank'}
                        rel={'noopener noreferrer'}
                        aria-label={name}
                    >
                        <Image src={image} alt={name} width={25} height={25} />
                    </Link>
                </li>
            ))}
        </ul>
    )
}