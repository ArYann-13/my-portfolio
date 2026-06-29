import React, { useEffect, useRef } from 'react';
import { useTheme } from './ThemeContext';

const ParticleBackground = () => {
  const canvasRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isDark = theme === 'dark';

    let animationFrameId;
    let particles = [];
    let mouse = { x: null, y: null };
    let width = 0;
    let height = 0;
    let dpr = 1;

    const MOUSE_RADIUS = 160;

    const getPalette = () => {
      if (isDark) {
        return {
          core: { r: 245, g: 240, b: 230 },
          glow: { r: 196, g: 181, b: 253 },
          line: { r: 167, g: 139, b: 250 },
          lineAlpha: 0.16,
          minOpacity: 0.12,
          maxOpacity: 0.92,
        };
      }
      return {
        core: { r: 38, g: 38, b: 46 },
        glow: { r: 65, g: 65, b: 72 },
        line: { r: 75, g: 75, b: 82 },
        lineAlpha: 0.09,
        minOpacity: 0.15,
        maxOpacity: 0.52,
      };
    };

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    class Star {
      constructor() {
        this.reset(true);
      }

      reset(initial = false) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.baseRadius = Math.random() * 1.4 + 0.6;
        this.radius = this.baseRadius;
        this.vx = (Math.random() - 0.5) * (prefersReducedMotion ? 0.05 : 0.25);
        this.vy = (Math.random() - 0.5) * (prefersReducedMotion ? 0.05 : 0.25);
        this.phase = Math.random() * Math.PI * 2;
        this.twinkleSpeed = 0.012 + Math.random() * 0.028;
        this.twinkleOffset = Math.random() * Math.PI * 2;
        this.brightness = Math.random();
        this.hoverLift = 0;
        if (!initial) {
          this.x = Math.random() < 0.5 ? 0 : width;
          this.y = Math.random() * height;
        }
      }

      twinkle(proximity = 0) {
        const speed = this.twinkleSpeed * (1 + proximity * 3);
        this.phase += prefersReducedMotion ? speed * 0.3 : speed;

        const wave =
          Math.sin(this.phase + this.twinkleOffset) * 0.6 +
          Math.sin(this.phase * 2.7 + this.twinkleOffset) * 0.4;

        const sparkle = Math.pow(Math.max(0, (wave + 1) / 2), 2.2);
        const palette = getPalette();
        const range = palette.maxOpacity - palette.minOpacity;
        const boosted = sparkle * range + palette.minOpacity;
        const peak = proximity > 0 ? boosted + proximity * 0.35 : boosted;

        return Math.min(peak, 1);
      }

      update() {
        let proximity = 0;

        if (mouse.x !== null && mouse.y !== null) {
          const dx = this.x - mouse.x;
          const dy = this.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist > 0 && dist < MOUSE_RADIUS) {
            proximity = 1 - dist / MOUSE_RADIUS;

            // Gentle hover — float toward cursor with a slight upward lift
            const pull = proximity * 0.018;
            this.vx += ((mouse.x - this.x) / dist) * pull;
            this.vy += ((mouse.y - this.y) / dist) * pull - proximity * 0.012;
            this.hoverLift += (proximity * 0.6 - this.hoverLift) * 0.08;
          } else {
            this.hoverLift *= 0.92;
          }
        } else {
          this.hoverLift *= 0.92;
        }

        this.vx *= 0.985;
        this.vy *= 0.985;

        this.x += this.vx;
        this.y += this.vy - this.hoverLift * 0.04;

        if (this.x < -10) this.x = width + 10;
        if (this.x > width + 10) this.x = -10;
        if (this.y < -10) this.y = height + 10;
        if (this.y > height + 10) this.y = -10;

        this.radius = this.baseRadius * (1 + proximity * 0.55 + this.hoverLift * 0.15);

        return { opacity: this.twinkle(proximity), proximity };
      }

      draw(colors, opacity, proximity) {
        const glowSize = this.radius * (3.5 + proximity * 2);
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, glowSize);
        gradient.addColorStop(0, `rgba(${colors.glow.r},${colors.glow.g},${colors.glow.b},${opacity * 0.85})`);
        gradient.addColorStop(0.4, `rgba(${colors.glow.r},${colors.glow.g},${colors.glow.b},${opacity * 0.25})`);
        gradient.addColorStop(1, `rgba(${colors.glow.r},${colors.glow.g},${colors.glow.b},0)`);

        ctx.beginPath();
        ctx.arc(this.x, this.y, glowSize, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // 4-point star flare on bright twinkle or near cursor
        if (opacity > 0.55 || proximity > 0.25) {
          const flare = (opacity - 0.4) * (1 + proximity);
          ctx.save();
          ctx.translate(this.x, this.y);
          ctx.strokeStyle = `rgba(${colors.core.r},${colors.core.g},${colors.core.b},${flare * 0.5})`;
          ctx.lineWidth = 0.6;
          const len = this.radius * (2 + proximity * 2);
          ctx.beginPath();
          ctx.moveTo(-len, 0);
          ctx.lineTo(len, 0);
          ctx.moveTo(0, -len);
          ctx.lineTo(0, len);
          ctx.stroke();
          ctx.restore();
        }

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${colors.core.r},${colors.core.g},${colors.core.b},${opacity})`;
        ctx.fill();
      }
    };

    const initStars = () => {
      const count = Math.min(Math.floor(width / 10), prefersReducedMotion ? 60 : 110);
      particles = Array.from({ length: count }, () => new Star());
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    const drawConnections = (colors) => {
      const maxDist = isDark ? 120 : 100;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * colors.lineAlpha;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(${colors.line.r},${colors.line.g},${colors.line.b},${alpha})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      const colors = getPalette();

      drawConnections(colors);

      particles.forEach((star) => {
        const { opacity, proximity } = star.update();
        star.draw(colors, opacity, proximity);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      resize();
      initStars();
    };

    resize();
    initStars();
    animate();

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
};

export default ParticleBackground;
