// SmoothScroll
// - Wires Lenis (smooth scrolling) to GSAP + ScrollTrigger
// - Kept as small and clear as possible

import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

// Register ScrollTrigger once globally
gsap.registerPlugin(ScrollTrigger);

const SmoothScroll: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    useEffect(() => {
        // 1) Create Lenis instance
        const lenis = new Lenis();

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
            lenis.destroy();
        };
    }, []);

    return <>{children}</>;
};

export default SmoothScroll;