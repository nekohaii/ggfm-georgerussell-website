// src/components/SmoothScroll.tsx

import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

// IMPORTANT: Register ScrollTrigger plugin once globally
gsap.registerPlugin(ScrollTrigger);

const SmoothScroll: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    
    useEffect(() => {
        // 1. Initialize Lenis instance
        const lenis = new Lenis();

        // 2. Connect Lenis scroll event to ScrollTrigger update
        // This makes GSAP follow Lenis's smooth scroll position.
        lenis.on('scroll', ScrollTrigger.update);

        // 3. Use GSAP's Ticker for the Lenis requestAnimationFrame loop
        // This is a common and robust way to manage the scroll loop.
        gsap.ticker.add((time) => {
            lenis.raf(time * 1000); // Convert GSAP's seconds to Lenis's milliseconds
        });

        // 4. Disable GSAP's lag smoothing to ensure no conflict with Lenis's timing
        gsap.ticker.lagSmoothing(0);

        // Cleanup function for React
        return () => {
             lenis.destroy();
             gsap.ticker.remove(lenis.raf);
        };
    }, []);

    return <>{children}</>;
};

export default SmoothScroll;