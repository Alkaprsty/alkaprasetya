'use client';

import { useEffect } from 'react';
import styles from '@/styles/components/cursor.module.css';

export default function Cursor() {
  useEffect(() => {
    const cursor = document.querySelector(`.${styles.cursor}`);
    
    const handleMouseMove = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };
    
    const handleMouseDown = () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(0.8)';
    };
    
    const handleMouseUp = () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    
    // Hover effects
    const hoverElements = document.querySelectorAll('a, button, .project-card, .blog-card');
    hoverElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
        cursor.style.backgroundColor = 'rgba(255, 107, 107, 0.4)';
      });
      el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        cursor.style.backgroundColor = 'rgba(74, 99, 231, 0.3)';
      });
    });
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      hoverElements.forEach(el => {
        el.removeEventListener('mouseenter');
        el.removeEventListener('mouseleave');
      });
    };
  }, []);
  
  return <div className={styles.cursor} />;
}