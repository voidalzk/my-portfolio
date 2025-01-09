import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="hero">
      <div class="container">
        <div class="hero-content animate-fade-in">
          <h1>Gabriel Voidaleski</h1>
          <p class="subtitle">Desenvolvedor Web Full Stack</p>
          <div class="cta-buttons">
            <a href="#projects" class="btn primary">Ver Projetos</a>
            <a href="#contact" class="btn secondary">Contato</a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      height: 100vh;
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
      color: white;
    }

    .hero-content {
      text-align: center;
    }

    h1 {
      font-size: 3.5rem;
      margin-bottom: 1rem;
    }

    .subtitle {
      font-size: 1.5rem;
      margin-bottom: 2rem;
      opacity: 0.9;
    }

    .cta-buttons {
      display: flex;
      gap: 1rem;
      justify-content: center;
    }

    .btn {
      padding: 0.8rem 2rem;
      border-radius: 50px;
      text-decoration: none;
      font-weight: bold;
      transition: transform 0.3s ease;
    }

    .btn:hover {
      transform: translateY(-2px);
    }

    .btn.primary {
      background: white;
      color: var(--primary);
    }

    .btn.secondary {
      border: 2px solid white;
      color: white;
    }

    @media (max-width: 768px) {
      h1 {
        font-size: 2.5rem;
      }

      .subtitle {
        font-size: 1.2rem;
      }
    }
  `]
})
export class HeroComponent {}
