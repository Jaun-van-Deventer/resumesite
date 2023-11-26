// Particle Effect
const numParticles = 100; // Adjust the number of particles
const particleContainer = document.querySelector('.particle-container');

function createParticle() {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.width = `${Math.random() * 10}px`; // Adjust particle size
    particle.style.height = particle.style.width;
    particle.style.animationDuration = `${Math.random() * 5 + 2}s`; // Adjust animation duration

    particleContainer.appendChild(particle);

    particle.addEventListener('animationiteration', () => {
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
    });
}

for (let i = 0; i < numParticles; i++) {
    createParticle();
}

