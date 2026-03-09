import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

const Dot = styled.div`
  position: fixed;
  top: 0; left: 0;
  width: 12px; height: 12px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.sage};
  pointer-events: none;
  z-index: 99999;
  mix-blend-mode: multiply;
`;

const Ring = styled.div`
  position: fixed;
  top: 0; left: 0;
  width: 40px; height: 40px;
  border-radius: 50%;
  border: 1.5px solid ${({ theme }) => theme.colors.sage};
  opacity: 0.4;
  pointer-events: none;
  z-index: 99998;
`;

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    document.body.classList.add('cursor-active');
    let mouseX = -100, mouseY = -100;
    let ringX = -100, ringY = -100;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      gsap.set(dot, { x: mouseX - 6, y: mouseY - 6 });
    };

    const tickerFn = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      gsap.set(ring, { x: ringX - 20, y: ringY - 20 });
    };

    gsap.ticker.add(tickerFn);
    window.addEventListener('mousemove', onMove);

    const grow = () => {
      gsap.to(dot, { scale: 2, opacity: 0.5, duration: 0.3 });
      gsap.to(ring, { scale: 1.5, opacity: 0.3, duration: 0.3 });
    };
    const shrink = () => {
      gsap.to(dot, { scale: 1, opacity: 1, duration: 0.3 });
      gsap.to(ring, { scale: 1, opacity: 0.4, duration: 0.3 });
    };

    const interactives = document.querySelectorAll('a, button');
    interactives.forEach(el => {
      el.addEventListener('mouseenter', grow);
      el.addEventListener('mouseleave', shrink);
    });

    return () => {
      document.body.classList.remove('cursor-active');
      window.removeEventListener('mousemove', onMove);
      gsap.ticker.remove(tickerFn);
    };
  }, []);

  return (
    <>
      <Dot ref={dotRef} />
      <Ring ref={ringRef} />
    </>
  );
}
