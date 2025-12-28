'use client';

const SOUNDS = {
    hover: '/sounds/mixkit-interface-click-hover-1127.wav',
    click: '/sounds/mixkit-cool-interface-click-tone-2568.wav',
    menu: '/sounds/mixkit-clear-mouse-clicks-2997.wav',
    typing: '/sounds/mixkit-typing-on-a-laptop-keyboard-2531.wav'
};

export const playSound = (type: keyof typeof SOUNDS, volume = 0.1) => {
    if (typeof window === 'undefined') return undefined;
    try {
        const audio = new Audio(SOUNDS[type]);
        audio.volume = volume;
        audio.play().catch(e => console.warn("Sound blocked by browser policy", e));
        return audio;
    } catch (error) {
        console.error("Error playing sound", error);
        return undefined;
    }
};
