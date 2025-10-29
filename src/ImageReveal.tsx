// src/components/ImageReveal.tsx

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

interface ImageRevealProps {
    src: string;
    alt: string;
    className?: string; // For Tailwind/Shadcn styling
}

const ImageReveal: React.FC<ImageRevealProps> = ({ src, alt, className }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // 1. Initial State: The image starts hidden and slightly displaced
        gsap.set(containerRef.current, { 
            opacity: 0, 
            y: 50
        });

        // 2. The Animation: Fades in and moves up
        gsap.to(containerRef.current, {
            opacity: 1, 
            y: 0,
            duration: 1.5,
            ease: "power2.out",
            
            // 3. The ScrollTrigger Configuration
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 85%", // Animation starts when the top of the image hits 85% from the top of the viewport
                toggleActions: "play none none none", // Play once on scroll down, then do nothing
                // markers: true // <-- Uncomment this line to debug the scroll start/end points in the browser!
            }
        });
        
    }, { scope: containerRef, dependencies: [] }); // Empty dependencies array means it runs once on mount

    return (
        <div className={`my-32 flex justify-center items-center ${className || ''}`}>
            <div ref={containerRef} className="max-w-xl overflow-hidden">
                <img 
                    src={src} 
                    alt={alt} 
                    className="w-full h-auto object-cover" 
                />
            </div>
        </div>
    );
};

export default ImageReveal;