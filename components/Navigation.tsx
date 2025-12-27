'use client';

import { useLayoutEffect, useRef, useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useLoader } from '@/context/LoaderContext';

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);
    const { isLoaded } = useLoader();

    useLayoutEffect(() => {
        if (!isLoaded) return;

        gsap.from(navRef.current, {
            y: -100,
            opacity: 0,
            duration: 1.2,
            ease: "expo.out",
            delay: 1 // Start shortly after preloader finishes
        });
    }, [isLoaded]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        // Menu animation would go here
    };

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Projects', href: '/projects' },
        { name: 'About', href: '#narrative' },
        { name: 'Contact', href: 'mailto:hello@ifeanyi.dev' },
    ];

    return (
        <nav ref={navRef} className="fixed top-0 left-0 w-full z-80 py-8 px-6 md:px-12 lg:px-20 mix-blend-difference pointer-events-none">
            <div className="flex justify-between items-center max-w-[2200px] mx-auto w-full">
                {/* Logo */}
                <Link href="/" className="pointer-events-auto">
                    <span className="text-xl font-black uppercase tracking-tighter text-white">
                        Ifeanyi<span className="text-accent italic">.</span>
                    </span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex gap-12 pointer-events-auto">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-[10px] uppercase tracking-[0.3em] font-bold text-white hover:text-accent transition-colors py-2"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden pointer-events-auto flex flex-col gap-1.5 p-2"
                >
                    <span className={`w-6 h-0.5 bg-white transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                    <span className={`w-4 h-0.5 bg-accent ml-auto transition-opacity ${isOpen ? 'opacity-0' : ''}`} />
                    <span className={`w-6 h-0.5 bg-white transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                </button>
            </div>

            {/* Mobile Menu Overlay (Simplified) */}
            <div className={`fixed inset-0 bg-black z-[-1] transition-transform duration-700 ease-expo pointer-events-auto ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
                <div className="flex flex-col items-center justify-center h-full gap-10">
                    {navLinks.map((link, i) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-4xl font-black uppercase tracking-tighter text-white hover:text-accent transition-colors"
                            style={{ transitionDelay: `${i * 100}ms` }}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}
