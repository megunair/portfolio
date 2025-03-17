import { Particle } from './particles.js';

class PortfolioApp {
    constructor() {
        this.canvas = document.getElementById('bgCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];

        this.init();
    }

    init() {
        this.setupCanvas();
        this.createParticles();
        this.animate();

        window.addEventListener('resize', () => this.setupCanvas());
    }

    setupCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    createParticles() {
        this.particles = [];
        for (let i = 0; i < 100; i++) {
            this.particles.push(new Particle());
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.particles.forEach(particle => {
            particle.update();
            particle.draw(this.ctx);
        });

        requestAnimationFrame(() => this.animate());
    }
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    new PortfolioApp();
});