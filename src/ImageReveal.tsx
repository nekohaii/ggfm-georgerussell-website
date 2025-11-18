// src/components/ImageReveal.tsx

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

interface ImageRevealProps {
    src: string;
    alt: string;
    title?: string;
    description?: string;
    className?: string; // optional extra classes
}

const ImageReveal: React.FC<ImageRevealProps> = ({ src, alt, title, description, className }) => {
    const imageRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // 1) Start: hidden and shifted right
        gsap.set(imageRef.current, { opacity: 0, x: 200 });

        // 2) Animate in when scrolled into view
        gsap.to(imageRef.current, {
            opacity: 1,
            x: 0,
            duration: 1.6,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: imageRef.current,
                start: 'top 85%', // when image top reaches 85% down the viewport
                toggleActions: 'play none none none', // play once
                // markers: true, // uncomment to debug positions
            },
        });
    }, { scope: imageRef, dependencies: [] }); // runs once on mount

    return (
        <div className={`image-reveal-section ${className || ''}`}>
            {/* Text on the left (optional) */}
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