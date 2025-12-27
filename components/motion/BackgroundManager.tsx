'use client';

import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function BackgroundManager() {
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        let ctx = gsap.context(() => {
            // Set initial state (Dark)
            gsap.set('html', {
                '--bg-color': '#0c0c0c',
                '--text-color': '#f1f1f1'
            });

            const sections = document.querySelectorAll('[data-theme]');

            sections.forEach((section) => {
                const theme = section.getAttribute('data-theme');
                const isLight = theme === 'light';
                const bgColor = isLight ? '#f1f1f1' : '#0c0c0c';
                const textColor = isLight ? '#0c0c0c' : '#f1f1f1';

                ScrollTrigger.create({
                    trigger: section,
                    start: "top 60%", // Earlier start to ensure transition is done by midway
                    end: "bottom 40%",
                    onEnter: () => {
                        gsap.to('html', {
                            '--bg-color': bgColor,
                            '--text-color': textColor,
                            duration: 1,
                            overwrite: true,
                            ease: "power2.inOut"
                        });
                    },
                    onEnterBack: () => {
                        gsap.to('html', {
                            '--bg-color': bgColor,
                            '--text-color': textColor,
                            duration: 1,
                            overwrite: true,
                            ease: "power2.inOut"
                        });
                    }
                });
            });

            // Force refresh on load to ensure correct initial theme
            ScrollTrigger.refresh();
        });

        return () => ctx.revert();
    }, []);

    return null;
}
