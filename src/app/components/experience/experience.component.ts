import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';

interface Experience {
  periodPt: string;
  periodEn: string;
  companyPt: string;
  companyEn: string;
  rolePt: string;
  roleEn: string;
  contextPt?: string;
  contextEn?: string;
  detailsPt: string[];
  detailsEn: string[];
  stack: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent {
  readonly language = inject(LanguageService);

  readonly experiences: Experience[] = [
    {
      periodPt: '03/2025 — 07/2026',
      periodEn: 'Mar 2025 — Jul 2026',
      companyPt: 'Banco do Brasil',
      companyEn: 'Banco do Brasil',
      rolePt: 'Desenvolvedor Full Stack Estagiário',
      roleEn: 'Full Stack Developer Intern',
      contextPt: 'Equipe de Automação e Analytics',
      contextEn: 'Automation and Analytics Team',
      detailsPt: [
        'Desenvolvimento e manutenção de APIs e backends com Node.js para aplicações corporativas internas.',
        'Desenvolvimento full stack com Node.js, Vue.js e PHP, uso pontual de React e integração entre frontend, serviços e fontes de dados.',
        'Manutenção evolutiva e corretiva de aplicações e desenvolvimento de consultas SQL e modelos de dados em PostgreSQL, MySQL e DB2.',
        'Desenvolvimento de integrações com IA e participação em arquiteturas RAG.',
        'Sustentação de servidores SUSE Linux e ambientes de aplicação; rotinas em Python para automação e integração entre sistemas.',
      ],
      detailsEn: [
        'Developed and maintained APIs and Node.js backends for internal enterprise applications.',
        'Built full stack applications with Node.js, Vue.js and PHP, with occasional React work and integration across frontends, services and data sources.',
        'Enhanced and fixed applications and developed SQL queries and data models in PostgreSQL, MySQL and DB2.',
        'Developed AI integrations and contributed to RAG architectures.',
        'Supported SUSE Linux servers and application environments; built Python routines for automation and system integration.',
      ],
      stack: ['Node.js', 'Vue.js', 'PHP', 'React', 'SQL', 'PostgreSQL', 'MySQL', 'DB2', 'SUSE Linux', 'AI / RAG'],
    },
    {
      periodPt: '07/2026 — atual',
      periodEn: 'Jul 2026 — Present',
      companyPt: 'Projetos de software',
      companyEn: 'Software projects',
      rolePt: 'Desenvolvedor Freelancer',
      roleEn: 'Freelance Developer',
      detailsPt: [
        'Desenvolvimento de aplicações e interfaces web com React, Java e Spring Boot, implementando funcionalidades e melhorias conforme cada projeto.',
      ],
      detailsEn: [
        'Develop web applications and interfaces with React, Java and Spring Boot, implementing features and improvements for each project.',
      ],
      stack: ['React', 'Java', 'Spring Boot'],
    },
    {
      periodPt: '07/2022 — 08/2024',
      periodEn: 'Jul 2022 — Aug 2024',
      companyPt: 'Ministério Público do Estado do Paraná',
      companyEn: 'Public Prosecutor’s Office of Paraná',
      rolePt: 'Estagiário',
      roleEn: 'Intern',
      detailsPt: [
        'Desenvolvimento de automações administrativas com Google Apps Script e JavaScript e de dashboards no Google Sheets para acompanhamento de dados gerenciais.',
      ],
      detailsEn: [
        'Built administrative automations with Google Apps Script and JavaScript and Google Sheets dashboards to organize and monitor management data.',
      ],
      stack: ['JavaScript', 'Google Apps Script', 'Google Sheets'],
    },
  ];
}
