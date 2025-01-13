import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="about section">
      <div class="container">
        <h2 class="section-title">Sobre Mim</h2>
        <div class="about-content">
  <img
    src="assets/profile2.jpeg"
    alt="Minha foto"
    class="profile-image"
    loading="lazy"
    width="150"
    height="150"
  >
         <div class="about-text">
            <p>Olá! Sou Gabriel Francelino Voidaleski, um desenvolvedor Full Stack de 20 anos apaixonado por criar soluções web inovadoras e eficientes.</p>
            <p>Tenho experiência como estagiário no Ministério Público do Estado do Paraná, onde desenvolvi aplicações de suporte administrativo e implementei automatizações para otimizar processos.</p>
            <p>Estou cursando Tecnologia em Análise e Desenvolvimento de Sistemas na Universidade Federal do Estado do Paraná, sempre buscando aprender novas tecnologias e aprimorar minhas habilidades.</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about {
      background-color: white;
      padding: 6rem 0;
    }

    .section-title {
      text-align: center;
      font-size: 2.5rem;
      color: var(--primary);
      margin-bottom: 3rem;
    }

    .about-content {
      display: flex;
      justify-content: center;
      gap: 2rem;
      max-width: 800px;
      margin: 0 auto;
      align-items: center;
    }

    .profile-image {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      object-fit: cover;
    }

    .about-text p {
      margin-bottom: 1.5rem;
      font-size: 1.1rem;
      line-height: 1.8;
      color: var(--text);
      text-indent: 20px;
    }

    @media (max-width: 768px) {
      .about {
        padding: 4rem 0;
      }

      .about-content {
        flex-direction: column;
        align-items: center;
      }

      .profile-image {
        width: 100px;
        height: 100px;
      }
    }
  `]
})
export class AboutComponent {
}
