'use client';

import { Fragment } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'About', href: '/about' },
];

export default function Navigation() {
    const pathname = usePathname();

    const isActive = (href: string) =>
        href === '/' ? pathname === '/' : pathname.startsWith(href);

    return (
        <nav className="flex flex-wrap justify-end items-center gap-4 mb-28">
            {links.map((link, i) => (
                <Fragment key={link.href}>
                    {i > 0 && <span className="text-[#3A3A37] text-[12px]">/</span>}
                    <Link
                        href={link.href}
                        className={`text-[12px] tracking-[0.15em] uppercase transition-colors hover:text-[#EFECE3] ${
                            isActive(link.href) ? 'text-[#EFECE3]' : 'text-[#6B6A66]'
                        }`}
                    >
                        {link.name}
                    </Link>
                </Fragment>
            ))}
        </nav>
    );
}