// SmoothScroll
// - Wires Lenis (smooth scrolling) to GSAP + ScrollTrigger
// - Kept as small and clear as possible

import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

// Register ScrollTrigger once globally
gsap.registerPlugin(ScrollTrigger);

declare global {
    interface Window {
        __lenis?: Lenis & { stop?: () => void; start?: () => void };
    }
}

export const lenisReady = new Promise<void>((resolve) => {
    if (typeof window !== 'undefined' && window.__lenis) {
        resolve();
    } else {
        (window as typeof window & { __lenisReadyResolvers?: (() => void)[] }).__lenisReadyResolvers =
            (window as typeof window & { __lenisReadyResolvers?: (() => void)[] }).__lenisReadyResolvers || [];
        (window as typeof window & { __lenisReadyResolvers?: (() => void)[] }).__lenisReadyResolvers!.push(resolve);
    }
});

const SmoothScroll: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    useEffect(() => {
        // 1) Create Lenis instance
        const lenis = new Lenis({ smoothWheel: true });
        window.__lenis = lenis;
        const resolvers = (window as typeof window & { __lenisReadyResolvers?: (() => void)[] }).__lenisReadyResolvers;
        resolvers?.forEach((resolve) => resolve());

        // 2) Sync Lenis scroll position to ScrollTrigger
        lenis.on('scroll', ScrollTrigger.update);

        // 3) Drive Lenis with GSAP's ticker
        const tick = (time: number) => {
            // GSAP gives seconds; Lenis expects milliseconds
            lenis.raf(time * 1000);
        };
        gsap.ticker.add(tick);

        // 4) Avoid GSAP lag smoothing (prevents timing conflicts)
        gsap.ticker.lagSmoothing(0);

        // Cleanup on unmount
        return () => {
            gsap.ticker.remove(tick);
            if ((window as typeof window & { __lenis?: Lenis }).__lenis === lenis) {
                delete (window as typeof window & { __lenis?: Lenis }).__lenis;
            }
            lenis.destroy();
        };
    }, []);

    return <>{children}</>;
};

export default SmoothScroll;