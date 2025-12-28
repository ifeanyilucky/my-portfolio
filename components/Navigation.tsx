'use client';

import { useLayoutEffect, useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useLoader } from '@/context/LoaderContext';
import { playSound } from '@/utils/sounds';

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [visible, setVisible] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);
    const { isLoaded } = useLoader();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useLayoutEffect(() => {
        if (isLoaded) {
            const timer = setTimeout(() => setVisible(true), 500);
            return () => clearTimeout(timer);
        }
    }, [isLoaded]);

    const toggleMenu = () => {
        if (!isOpen) {
            playSound('menu');
            setIsOpen(true);
            document.body.style.overflow = 'hidden';
            gsap.fromTo(".mobile-link",
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: "power4.out", delay: 0.3 }
            );
        } else {
            setIsOpen(false);
            document.body.style.overflow = 'auto';
        }
    };

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Projects', href: '/projects' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: 'mailto:ifeanyilucky360@gmail.com' },
    ];

    const handleLinkClick = () => {
        playSound('click');
        setIsOpen(false);
        document.body.style.overflow = 'auto';
    };

    return (
        <>
            <nav
                ref={navRef}
                className={`fixed top-0 left-0 w-full px-6 md:px-12 lg:px-20 z-[9999] transition-all duration-700 pointer-events-none ${visible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
                    } ${scrolled ? 'py-4' : 'py-8'}`}
            >
                <div className={`nav-container mx-auto max-w-[2200px] w-full flex justify-between items-center px-8 py-3 rounded-full border transition-all duration-500 pointer-events-auto shadow-2xl ${scrolled
                        ? 'bg-black/90 backdrop-blur-xl border-white/20 scale-[0.95]'
                        : 'bg-black/40 backdrop-blur-md border-white/10'
                    }`}>
                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex items-center gap-2"
                        onClick={() => playSound('click')}
                        onMouseEnter={() => playSound('hover')}
                    >
                        <span className="text-xl md:text-2xl font-black uppercase tracking-tighter text-white">
                            Ifeanyi<span className="text-accent italic">.</span>
                        </span>
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/70 hover:text-accent transition-colors"
                                onClick={() => playSound('click')}
                                onMouseEnter={() => playSound('hover')}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden flex flex-col gap-1.5 p-2 relative group"
                        aria-label="Toggle Menu"
                    >
                        <div className="flex flex-col gap-1.5 items-end">
                            <span className={`h-0.5 bg-white transition-all duration-500 ${isOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`} />
                            <span className={`h-0.5 bg-accent transition-all duration-500 ${isOpen ? 'w-0 opacity-0' : 'w-4'}`} />
                            <span className={`h-0.5 bg-white transition-all duration-500 ${isOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-6'}`} />
                        </div>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-black z-[99999] md:hidden transition-all duration-700 ease-expo ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'
                    }`}
            >
                <div className="absolute top-10 right-10">
                    <button onClick={toggleMenu} className="text-white text-xs uppercase tracking-widest font-bold p-4">[ Close ]</button>
                </div>
                <div className="flex flex-col items-center justify-center h-full gap-10">
                    {navLinks.map((link, i) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={handleLinkClick}
                            className="mobile-link text-5xl font-black uppercase tracking-tighter text-white hover:text-accent transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}
