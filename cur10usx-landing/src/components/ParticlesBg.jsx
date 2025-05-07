// src/components/ParticlesBackground.jsx
import React from 'react';
import Particles from 'react-tsparticles';

export default function ParticlesBackground() {
  return (
    <Particles
      options={{
        background: { color: '#378181' },
        particles: {
          number: { value: 50 },
          size: { value: 2 },
          move: { enable: true, speed: 1 },
          links: { enable: true, color: "#ffffff", distance: 150 }
        }
      }}
    />
  );
}
