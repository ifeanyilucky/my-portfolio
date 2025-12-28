'use client';

const SOUNDS = {
    hover: '/sounds/mixkit-interface-click-hover-1127.wav',
    click: '/sounds/mixkit-cool-interface-click-tone-2568.wav',
    menu: '/sounds/mixkit-clear-mouse-clicks-2997.wav',
    typing: '/sounds/mixkit-typing-on-a-laptop-keyboard-2531.wav'
};

const audioCache: Record<string, HTMLAudioElement> = {};

export const preloadSounds = async () => {
    if (typeof window === 'undefined') return;

    const promises = Object.entries(SOUNDS).map(([key, url]) => {
        return new Promise<void>((resolve) => {
            try {
                const audio = new Audio();

                // Safety timeout: If sound takes too long or fails silently, resolve anyway
                const timeout = setTimeout(() => {
                    resolve();
                }, 2000);

                const onLoaded = () => {
                    clearTimeout(timeout);
                    audioCache[key] = audio;
                    resolve();
                };

                const onError = () => {
                    clearTimeout(timeout);
                    resolve();
                };

                // Attach listeners BEFORE setting src
                audio.addEventListener('canplaythrough', onLoaded, { once: true });
                audio.addEventListener('error', onError, { once: true });

                audio.preload = 'auto';
                audio.src = url;
                audio.load();
            } catch (e) {
                resolve();
            }
        });
    });

    try {
        await Promise.all(promises);
    } catch (e) {
        // Ignore errors
    }
};

export const playSound = (type: keyof typeof SOUNDS, volume = 0.5) => {
    if (typeof window === 'undefined') return undefined;
    try {
        // Try to use cached audio, fallback to new Audio if not ready
        const template = audioCache[type];
        const audio = template ? (template.cloneNode() as HTMLAudioElement) : new Audio(SOUNDS[type]);

        audio.volume = volume;
        audio.play().catch(e => {
            // Context might not be ready or autoplay blocked
            // console.warn("Sound play prevented", e);
        });
        return audio;
    } catch (error) {
        console.error("Error playing sound", error);
        return undefined;
    }
};
