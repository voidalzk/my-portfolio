import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';

interface ExperienceArea {
  titlePt: string;
  titleEn: string;
  detailsPt: string[];
  detailsEn: string[];
}

interface Experience {
  periodPt: string;
  periodEn: string;
  companyPt: string;
  companyEn: string;
  rolePt: string;
  roleEn: string;
  contextPt?: string;
  contextEn?: string;
  detailsPt?: string[];
  detailsEn?: string[];
  areas?: ExperienceArea[];
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
      areas: [
        {
          titlePt: 'Desenvolvimento full stack',
          titleEn: 'Full stack development',
          detailsPt: [
            'Desenvolvimento e sustentação de aplicações corporativas com Node.js, Vue.js e PHP, implementando funcionalidades e realizando manutenção evolutiva e corretiva.',
            'Criação e manutenção de APIs e backends em Node.js para integrar interfaces web, serviços internos, sistemas corporativos, bancos de dados e diferentes fontes de informação.',
          ],
          detailsEn: [
            'Developed and maintained enterprise applications with Node.js, Vue.js and PHP, implementing features, enhancing existing systems and fixing issues.',
            'Built and maintained Node.js APIs and backends to connect web interfaces, internal services, enterprise systems, databases and multiple information sources.',
          ],
        },
        {
          titlePt: 'Inteligência artificial',
          titleEn: 'Artificial intelligence',
          detailsPt: [
            'Desenvolvimento de APIs intermediárias e fluxos de integração com LLMs e serviços de IA, estruturando rotas, tratamento de requisições e respostas e comunicação com aplicações consumidoras.',
            'Participação em soluções RAG (Retrieval-Augmented Generation) e indexação vetorial, com consulta, recuperação e preparação de informações para gerar respostas contextualizadas a partir de fontes corporativas.',
          ],
          detailsEn: [
            'Developed intermediary APIs and integration workflows for LLMs and AI services, handling routes, requests, responses and communication with consuming applications.',
            'Contributed to RAG (Retrieval-Augmented Generation) solutions and vector indexing, querying, retrieving and preparing information to generate responses grounded in enterprise sources.',
          ],
        },
        {
          titlePt: 'Dados e analytics',
          titleEn: 'Data and analytics',
          detailsPt: [
            'Desenvolvimento de consultas SQL e modelos de dados em PostgreSQL, MySQL e DB2, com tratamento, validação e integração de informações em processos ETL e ELT.',
            'Criação de rotinas e automações em Python para processamento de dados, execução de tarefas recorrentes e integração entre sistemas.',
            'Utilização de Power BI em atividades de análise e visualização de dados.',
          ],
          detailsEn: [
            'Developed SQL queries and data models in PostgreSQL, MySQL and DB2, processing, validating and integrating information through ETL and ELT workflows.',
            'Built Python routines and automations for data processing, recurring tasks and system integration.',
            'Used Power BI for data analysis and visualization.',
          ],
        },
        {
          titlePt: 'Sustentação e infraestrutura',
          titleEn: 'Application support and infrastructure',
          detailsPt: [
            'Administração e sustentação de servidores SUSE Linux, ambientes de aplicação e serviços internos, apoiando a disponibilidade das soluções da equipe.',
            'Análise, diagnóstico e resolução de problemas em aplicações, APIs, bases de dados, servidores, integrações e processos automatizados.',
          ],
          detailsEn: [
            'Administered and supported SUSE Linux servers, application environments and internal services, supporting the availability of team solutions.',
            'Investigated, diagnosed and resolved issues across applications, APIs, databases, servers, integrations and automated processes.',
          ],
        },
      ],
      stack: ['Node.js', 'Vue.js', 'PHP', 'LLMs', 'RAG', 'SQL', 'PostgreSQL', 'MySQL', 'DB2', 'ETL / ELT', 'Python', 'Power BI', 'SUSE Linux'],
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
