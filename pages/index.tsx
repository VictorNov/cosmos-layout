import styles from '../styles/home.module.scss';
import cl from 'classnames';

import { Logo } from '../components/Logo';
import { SocialNetworks } from '../components/SocialNetworks';
import { Button } from '../components/Button';
import { Navigation } from "../components/Navigation";
import { Title } from "../components/Title";

const navigationLinks = [
    {
        href: '#home',
        label: 'Home'
    },
    {
        href: '#factions',
        label: 'Factions'
    },
    {
        href: '#roadmap',
        label: 'Roadmap'
    },
];

export default function Home() {
    return (
        <div>
            <section
                id={'home'}
                className={cl(styles.section, styles.sectionMain)}
            >
                <header className={styles.header}>
                    <Logo />
                    <SocialNetworks />
                    <Button
                        onClick={() => console.log('click')}
                        color={'transparent'}
                    >
                        Whitepaper
                    </Button>
                </header>
                <Navigation links={navigationLinks}/>
                <div className={styles.title}>
                    <Title
                        type="h2"
                        fontSize={66}
                    >
                        From dusk to dawn
                    </Title>
                    <ul>
                        <li>
                            <Button
                                onClick={() => console.log('click')}
                                color={'transparent'}
                            >
                                Mint
                            </Button>
                        </li>
                        <li>
                            <Button
                                onClick={() => console.log('click')}
                                color={'white'}
                            >
                                Connect Wallet
                            </Button>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    )
}
