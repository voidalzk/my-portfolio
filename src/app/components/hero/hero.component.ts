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
          <h1 class="tracking-in-expand">Gabriel Voidaleski</h1>
          <p class="subtitle">Desenvolvedor Web Full Stack</p>
          <div class="cta-buttons">
            <a href="#projects" class="btn primary">Ver Projetos</a>
            <a href="#contact" class="btn secondary">Contato</a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .hero {
        height: 100vh;
        display: flex;
        align-items: center;
        background: linear-gradient(
          135deg,
          var(--primary) 0%,
          var(--primary) 10%,
          var(--secondary) 100%
        );
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

      .tracking-in-expand {
        -webkit-animation: tracking-in-expand 0.7s
          cubic-bezier(0.215, 0.61, 0.355, 1) both;
        animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.61, 0.355, 1)
          both;
      }

      @-webkit-keyframes text-pop-up-top {
        0% {
          -webkit-transform: translateY(0);
          transform: translateY(0);
          -webkit-transform-origin: 50% 50%;
          transform-origin: 50% 50%;
          text-shadow: none;
        }
        100% {
          -webkit-transform: translateY(-50px);
          transform: translateY(-50px);
          -webkit-transform-origin: 50% 50%;
          transform-origin: 50% 50%;
          text-shadow: 0 1px 0 #cccccc, 0 2px 0 #cccccc, 0 3px 0 #cccccc,
            0 4px 0 #cccccc, 0 5px 0 #cccccc, 0 6px 0 #cccccc, 0 7px 0 #cccccc,
            0 8px 0 #cccccc, 0 9px 0 #cccccc, 0 50px 30px rgba(0, 0, 0, 0.3);
        }
      }

      @-webkit-keyframes tracking-in-expand {
        0% {
          letter-spacing: -0.5em;
          opacity: 0;
        }
        40% {
          opacity: 0.6;
        }
        100% {
          opacity: 1;
        }
      }
      @keyframes tracking-in-expand {
        0% {
          letter-spacing: -0.5em;
          opacity: 0;
        }
        40% {
          opacity: 0.6;
        }
        100% {
          opacity: 1;
        }
      }

      @media (max-width: 768px) {
        h1 {
          font-size: 2.5rem;
        }

        .subtitle {
          font-size: 1.2rem;
        }
      }
    `,
  ],
})
export class HeroComponent {}
