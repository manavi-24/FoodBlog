
import Link from 'next/link';
import Image from 'next/image';
import NavLink from './nav-link';
import logoImg from '@/assets/logo.png';
import classes from './main-header.module.css';
import MainHeaderBackground from './main-header-background';
import { use } from 'react';
export default function MainHeader() {
    
    return (
        <>
        <MainHeaderBackground />
        <header className={classes.header}>
            <Link  className={classes.logo} href="/">
            <Image src={logoImg} alt='image here' priority/>
            Next Level Food
            </Link>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <NavLink href='/meals'>Browse Meals</NavLink>
                    </li>
                    <li>
                        <NavLink href='/community'>Foodies Community</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
        </>
    );
}