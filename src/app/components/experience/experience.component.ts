import { Component } from '@angular/core';

interface Experience {
  period: string;
  company: string;
  role: string;
  context?: string;
  details: string[];
  stack: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent {
  readonly experiences: Experience[] = [
    {
      period: '03/2025 — 07/2026',
      company: 'Banco do Brasil',
      role: 'Desenvolvedor Full Stack Estagiário',
      context: 'Equipe de Automação e Analytics',
      details: [
        'Desenvolvimento full stack e manutenção evolutiva e corretiva de aplicações internas com PHP, Node.js e Vue.js.',
        'Suporte a bancos DB2, MySQL e PostgreSQL, incluindo consultas, tratamento de dados e apoio às aplicações.',
        'Sustentação de servidores SUSE Linux, ambientes de aplicação e serviços internos.',
        'Rotinas em Python para automação, manipulação de dados e apoio às atividades de analytics.',
        'Participação em integrações com inteligência artificial e arquiteturas RAG.',
      ],
      stack: ['PHP', 'Node.js', 'Vue.js', 'Python', 'DB2', 'MySQL', 'PostgreSQL', 'SUSE Linux', 'IA / RAG'],
    },
    {
      period: '07/2026 — atual',
      company: 'Projetos de software',
      role: 'Desenvolvedor Freelancer',
      details: [
        'Desenvolvimento e evolução de soluções sob demanda em diferentes camadas das aplicações.',
        'Implementação de funcionalidades, integrações, correções e melhorias conforme a necessidade de cada projeto.',
        'Organização de código, controle de versão e acompanhamento técnico durante o desenvolvimento.',
      ],
      stack: ['Desenvolvimento sob demanda', 'Integrações', 'Git'],
    },
    {
      period: '07/2022 — 08/2024',
      company: 'Ministério Público do Estado do Paraná',
      role: 'Estagiário',
      details: [
        'Desenvolvimento de automações administrativas com Google Apps Script e JavaScript.',
        'Criação e manutenção de dashboards no Google Sheets para acompanhamento e visualização de dados gerenciais.',
        'Apoio à organização de documentos, protocolos e rotinas administrativas.',
      ],
      stack: ['JavaScript', 'Google Apps Script', 'Google Sheets'],
    },
  ];
}
