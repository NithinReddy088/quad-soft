import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const HeroAnimation = ({ onComplete }) => {
  const containerRef = useRef(null);
  const figure1Ref = useRef(null);
  const figure2Ref = useRef(null);
  const figure3Ref = useRef(null);
  const tableRef = useRef(null);
  const ringRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({ 
      onComplete: () => onComplete?.(),
      defaults: { ease: 'power2.inOut' }
    });

    // Phase 1: Formation (0-2s) - Particles converge
    tl.from(particlesRef.current, {
      duration: 1,
      scale: 0,
      opacity: 0,
      stagger: 0.05,
      ease: 'back.out(1.7)',
    })
    .from([figure1Ref.current, figure2Ref.current, figure3Ref.current], {
      duration: 0.8,
      scale: 0,
      opacity: 0,
      stagger: 0.15,
      ease: 'elastic.out(1, 0.5)',
    }, '-=0.5')
    .from(tableRef.current, {
      duration: 0.6,
      scaleX: 0,
      transformOrigin: 'center',
    }, '-=0.3');

    // Phase 2: Interaction (2-4s) - Figures pulse and connect
    tl.to([figure1Ref.current, figure2Ref.current, figure3Ref.current], {
      duration: 0.5,
      scale: 1.1,
      repeat: 1,
      yoyo: true,
      stagger: 0.1,
    })
    .to([figure1Ref.current, figure2Ref.current, figure3Ref.current], {
      duration: 0.8,
      y: -5,
      repeat: 1,
      yoyo: true,
      stagger: 0.15,
    }, '-=0.5');

    // Phase 3: Partnership Ring (4-6s)
    tl.from(ringRef.current, {
      duration: 1.2,
      scale: 0.5,
      opacity: 0,
      ease: 'power2.out',
    })
    .to(ringRef.current, {
      duration: 1,
      scale: 1.5,
      opacity: 0.3,
    });

    // Phase 4: Reveal (6-8s) - Final state
    tl.to(containerRef.current, {
      duration: 0.8,
      scale: 0.8,
      y: -50,
    })
    .to(containerRef.current, {
      duration: 0.6,
      opacity: 0.2,
    });

    return () => tl.kill();
  }, [onComplete]);

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div ref={containerRef} className="relative w-64 h-64">
        {/* Particles */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            ref={el => particlesRef.current[i] = el}
            className="absolute w-1 h-1 bg-gold rounded-full"
            style={{
              left: `${50 + 40 * Math.cos(i * 30 * Math.PI / 180)}%`,
              top: `${50 + 40 * Math.sin(i * 30 * Math.PI / 180)}%`,
            }}
          />
        ))}

        {/* Partnership Ring */}
        <div
          ref={ringRef}
          className="absolute inset-0 border-2 border-gold rounded-full opacity-0"
          style={{ boxShadow: '0 0 30px rgba(200,169,81,0.5)' }}
        />

        {/* Three Figures (representing consultation) */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            ref={figure1Ref}
            className="absolute w-8 h-8 bg-gradient-to-br from-gold-start to-gold-end rounded-full"
            style={{ left: '30%', top: '40%', boxShadow: '0 4px 20px rgba(200,169,81,0.6)' }}
          />
          <div
            ref={figure2Ref}
            className="absolute w-8 h-8 bg-gradient-to-br from-gold-start to-gold-end rounded-full"
            style={{ left: '50%', top: '30%', transform: 'translateX(-50%)', boxShadow: '0 4px 20px rgba(200,169,81,0.6)' }}
          />
          <div
            ref={figure3Ref}
            className="absolute w-8 h-8 bg-gradient-to-br from-gold-start to-gold-end rounded-full"
            style={{ right: '30%', top: '40%', boxShadow: '0 4px 20px rgba(200,169,81,0.6)' }}
          />
        </div>

        {/* Table/Foundation Line */}
        <div
          ref={tableRef}
          className="absolute bottom-1/3 left-1/4 right-1/4 h-1 gold-gradient rounded-full"
          style={{ boxShadow: '0 2px 15px rgba(200,169,81,0.5)' }}
        />
      </div>
    </div>
  );
};

export default HeroAnimation;
