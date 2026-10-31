import { useEffect, useRef } from 'react';
import './MatrixRain.css';

/**
 * Matrix-style falling code rain background effect
 * Inspired by the cybergoth aesthetic
 */
export const MatrixRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      console.error('MatrixRain: Canvas ref is null');
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.error('MatrixRain: Could not get 2d context');
      return;
    }

    // Set canvas size to window size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    console.log('MatrixRain initialized:', {
      width: canvas.width,
      height: canvas.height,
      columns: Math.floor(canvas.width / 14)
    });

    // Characters to display (mix of code symbols and katakana)
    const chars = 'ｦｱｳｴｵｶｷｹｺｻｼｽｾｿﾀﾂﾃﾅﾆﾇﾈﾊﾋﾎﾏﾐﾑﾒﾓﾔﾕﾗﾘﾜ01@#$%^&*()';
    const charArray = chars.split('');

    const fontSize = 14;
    const columns = canvas.width / fontSize;

    // Array to track drop position for each column
    const drops: number[] = Array(Math.floor(columns)).fill(1);

    // Purple color scheme for the rain - new palette
    const colors = [
      'rgba(181, 157, 199, 1)',    // #b59dc7 - light lavender
      'rgba(140, 132, 187, 1)',    // #8c84bb - medium lavender
      'rgba(112, 77, 130, 0.9)',   // #704d82 - purple
      'rgba(85, 61, 129, 0.9)',    // #553d81 - medium purple
      'rgba(128, 119, 139, 0.8)',  // #80778b - greyish purple
      '#b59dc7',                   // Solid light lavender
    ];

    const draw = () => {
      // Fade effect (creates the trail) - lighter fade for more visible characters
      ctx.fillStyle = 'rgba(10, 0, 20, 0.08)'; // Very dark purple with lighter fade
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `bold ${fontSize}px monospace`;

      // Draw characters
      for (let i = 0; i < drops.length; i++) {
        // Random character
        const char = charArray[Math.floor(Math.random() * charArray.length)];

        // Random color from our palette - brighter colors
        const color = colors[Math.floor(Math.random() * colors.length)];
        ctx.fillStyle = color;

        // Draw the character
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        ctx.fillText(char, x, y);

        // Add glow effect to leading character
        if (drops[i] * fontSize < canvas.height) {
          ctx.shadowBlur = 8;
          ctx.shadowColor = color;
          ctx.fillText(char, x, y);
          ctx.shadowBlur = 0;
        }

        // Randomly reset drop to top
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        // Move drop down
        drops[i]++;
      }
    };

    // Animation loop
    const interval = setInterval(draw, 50);

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="matrix-rain" />;
};
