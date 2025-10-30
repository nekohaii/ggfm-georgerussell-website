// src/components/ImageReveal.tsx

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

interface ImageRevealProps {
    src: string;
    alt: string;
    title?: string;
    description?: string;
    className?: string; // For Tailwind/Shadcn styling
}

const ImageReveal: React.FC<ImageRevealProps> = ({ src, alt, title, description, className }) => {
    const imageRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // 1. Initial State: The image starts hidden and slightly displaced
        gsap.set(imageRef.current, { 
            opacity: 0, 
            x: 50
        });

        // 2. The Animation: Fades in and moves from right
        gsap.to(imageRef.current, {
            opacity: 1, 
            x: 0,
            duration: 1.5,
            ease: "power2.out",
            
            // 3. The ScrollTrigger Configuration
            scrollTrigger: {
                trigger: imageRef.current,
                start: "top 85%", // Animation starts when the top of the image hits 85% from the top of the viewport
                toggleActions: "play none none none", // Play once on scroll down, then do nothing
                // markers: true // <-- Uncomment this line to debug the scroll start/end points in the browser!
            }
        });
        
    }, { scope: imageRef, dependencies: [] }); // Empty dependencies array means it runs once on mount

    return (
        <div className={`image-reveal-section ${className || ''}`}>
            {/* Text on the left (if provided) */}
            {(title || description) && (
                <div className="text-content">
                    {title && <h2>{title}</h2>}
                    {description && <p>{description}</p>}
                </div>
            )}
            
            {/* Image on the right (animated) */}
            <div ref={imageRef} className="image-content">
                <img 
                    src={src} 
                    alt={alt} 
                    className="reveal-image" 
                />
            </div>
        </div>
    );
};

export default ImageReveal;