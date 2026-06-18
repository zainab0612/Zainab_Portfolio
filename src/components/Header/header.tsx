'use client'
import Image from 'next/image'
import Link from 'next/link'
import LogoImg from '../../../public/images/logoIcon.png';
import MenuIcon from '../../../public/images/Menu.svg'
import CloseIcon from '../../../public/images/Close.svg'
import github from '../../../public/images/Github.svg'
import linkedIn from '../../../public/images/Linkedin.svg'
import email from '../../../public/images/Email.svg'
import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import './header.css'

interface NavigationItem {
    name: string;
    href: string;
}

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    const navigation: NavigationItem[] = [
        { name: 'home', href: '/' },
        { name: 'work', href: '/work' },
        { name: 'about-me', href: '/about' },
        { name: 'contacts', href: '/contact' },
    ];
    const handleLinkClick = () => {
        setMenuOpen(false);
    };
    return (
        <>
            <header className="header-container">
                <nav className="header-nav">
                    <div className="header-logo-container">
                        <Link href="/" className="flex justify-center items-center xl:gap-4">
                            <Image alt="Logo" src={LogoImg} className='p-2 xl:p-0' />
                            <h1 className="text-white text-xl xl:text-2xl font-bold">Zainab</h1>

                        </Link>
                    </div>
                    <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? (
                            <Image src={CloseIcon} alt='CloseIcon' className='size-8' />
                        ) : (
                            <Image src={MenuIcon} alt='MenuIcon' className='size-8' />
                        )}
                    </button>
                    <div className={`menu-container ${menuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}>
                        <ul className="menu-links">
                            {navigation.map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className={`menu-link group ${(item.href === '/' && pathname === '/') ||
                                        (item.href !== '/' && pathname.startsWith(item.href)) ? 'menu-link-active' : ''}`} onClick={handleLinkClick}>
                                        <span className='text-primary'>#</span>
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
            </header>
            <div className="hidden xl:fixed left-2 2xl:left-5 top-0 xl:flex flex-col items-center space-y-4 px-2">
                <div className="w-[2px] h-64 bg-white bg-opacity-50"></div>
                <div className="header-icons">
                    <a href="https://github.com/zainab0612" target='_blank'>
                        <Image src={github} alt='Github' className='header-icon' />
                    </a>
                    <a href="https://www.linkedin.com/in/zainab0612" target='_blank'>
                        <Image src={linkedIn} alt='linkedIn' className='header-icon' />
                    </a>
                    <a href="mailto:znaeem0612@gmail.com">
                        <Image src={email} alt='email' className='header-icon' />
                    </a>
                </div>
            </div>

        </>
    )
}
