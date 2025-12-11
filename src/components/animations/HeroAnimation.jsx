import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const HeroAnimation = ({ onComplete }) => {
  const containerRef = useRef(null);
  const person1Ref = useRef(null);
  const person2Ref = useRef(null);
  const person3Ref = useRef(null);
  const tableRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ 
      onComplete: () => onComplete?.(),
      defaults: { ease: 'power2.inOut' }
    });

    // Phase 1: Table appears (0-0.5s)
    tl.from(tableRef.current, {
      duration: 0.5,
      scaleX: 0,
      opacity: 0,
    });

    // Phase 2: Three people come from different sides (0.5-1.5s)
    tl.from(person1Ref.current, {
      duration: 0.8,
      x: -200,
      opacity: 0,
      ease: 'back.out(1.5)',
    }, '-=0.2')
    .from(person2Ref.current, {
      duration: 0.8,
      y: -200,
      opacity: 0,
      ease: 'back.out(1.5)',
    }, '-=0.6')
    .from(person3Ref.current, {
      duration: 0.8,
      x: 200,
      opacity: 0,
      ease: 'back.out(1.5)',
    }, '-=0.6');

    // Phase 3: People settle and pulse (1.5-2.5s)
    tl.to([person1Ref.current, person2Ref.current, person3Ref.current], {
      duration: 0.3,
      scale: 1.1,
      yoyo: true,
      repeat: 1,
      stagger: 0.1,
    });

    // Phase 4: Ring expansion (2.5-3.5s)
    tl.from(ringRef.current, {
      duration: 0.6,
      scale: 0.5,
      opacity: 0,
    })
    .to(ringRef.current, {
      duration: 0.4,
      scale: 2,
      opacity: 0,
    });

    // Phase 5: Fade out (3.5-4s)
    tl.to(containerRef.current, {
      duration: 0.5,
      opacity: 0,
    });

    return () => tl.kill();
  }, [onComplete]);

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div ref={containerRef} className="relative w-80 h-80">
        {/* Golden Ring */}
        <div
          ref={ringRef}
          className="absolute inset-0 border-4 border-gold rounded-full"
          style={{ boxShadow: '0 0 60px rgba(200,169,81,0.6)' }}
        />

        {/* Table */}
        <div
          ref={tableRef}
          className="absolute bottom-1/3 left-1/4 right-1/4 h-2 gold-gradient rounded-full"
          style={{ boxShadow: '0 4px 20px rgba(200,169,81,0.6)' }}
        />

        {/* Three People */}
        <div
          ref={person1Ref}
          className="absolute w-12 h-12 bg-gradient-to-br from-gold-start to-gold-end rounded-full"
          style={{ 
            left: '20%', 
            top: '45%',
            boxShadow: '0 4px 20px rgba(200,169,81,0.6)'
          }}
        />
        <div
          ref={person2Ref}
          className="absolute w-12 h-12 bg-gradient-to-br from-gold-start to-gold-end rounded-full"
          style={{ 
            left: '50%', 
            top: '30%',
            transform: 'translateX(-50%)',
            boxShadow: '0 4px 20px rgba(200,169,81,0.6)'
          }}
        />
        <div
          ref={person3Ref}
          className="absolute w-12 h-12 bg-gradient-to-br from-gold-start to-gold-end rounded-full"
          style={{ 
            right: '20%', 
            top: '45%',
            boxShadow: '0 4px 20px rgba(200,169,81,0.6)'
          }}
        />
      </div>
    </div>
  );
};

export default HeroAnimation;
