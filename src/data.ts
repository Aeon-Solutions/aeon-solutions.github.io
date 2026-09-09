export interface Profile {
  name: string;
  firstName: string;
  role: string;
  headline: string[];
  location: string;
  isCofounder: boolean;
  companyRole?: string;
  company: string;
  companyTagline: string;
  emails: { label: string; address: string }[];
  linkedin: string;
  photo: string;
  logo: string;
}

export interface Certification {
  name: string;
  level: string;
  issuer: string;
  code?: string;
  expires: string;
  url: string;
  highlight?: boolean;
  badgeId?: string;
  badgeImage?: string;
  badgeLarge?: boolean;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
  tags: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
}

export const profile: Profile = {
  name: 'Thyago Ferreira',
  firstName: 'Thyago',
  role: 'Analista de Suporte e Infraestrutura',
  headline: [
    'Cibersegurança',
    'Ethical Hacker',
    'Windows Server',
    'Active Directory',
    'Microsoft 365',
    'Redes',
    'VPN',
    'PowerShell',
    'Fortinet',
    'Azure AD',
    'Service Desk',
    'N1/N2'
  ],
  location: 'São Gonçalo, Rio de Janeiro, Brasil',
  isCofounder: true,
  companyRole: 'CEO & Cofundador',
  company: 'Aeon Enterprise Solutions',
  companyTagline: 'Tecnologia, segurança e inovação para ambientes corporativos.',
  emails: [
    { label: 'Pessoal', address: 'thyago.engenharia@outlook.com' },
    { label: 'Aeon Enterprise Solutions', address: 'aeon.enterprise.solutions@gmail.com' }
  ],
  linkedin: 'https://www.linkedin.com/in/thyagoferreira-1a5aa4207',
  photo: '/Foto.svg',
  logo: '/aeon.svg'
};

export const bio = {
  paragraphs: [
    'Apaixonado por tecnologia desde sempre, construí minha carreira atuando na linha de frente do suporte técnico e infraestrutura de TI. Ao longo de mais de 10 anos de experiência, desenvolvi a habilidade de traduzir problemas técnicos complexos em soluções ágeis e eficazes para o ambiente corporativo.',
    'Atuo diariamente com administração de servidores Windows/Linux, Active Directory, Azure AD e Microsoft 365, além da gestão de redes LAN/WAN/Wi-Fi e configuração de firewalls (Fortinet, Cisco, Ubiquiti). Tenho forte atuação em automação de processos com PowerShell, Bash e Python, o que me permitiu reduzir tarefas repetitivas e otimizar recursos.',
    'Minha missão é garantir ambientes de TI seguros, estáveis e eficientes, combinando tecnologia, segurança e inovação. Entusiasta de cibersegurança, participo de plataformas como Hack The Box e estou sempre buscando novas certificações e projetos desafiadores.'
  ]
};

export const skills: string[] = [
  'Windows Server',
  'Active Directory',
  'Azure AD',
  'Microsoft 365',
  'PowerShell',
  'Fortinet',
  'Redes LAN/WAN/Wi-Fi',
  'Service Desk N1/N2',
  'Linux',
  'Zabbix',
  'VPN',
  'SIEM',
  'ITIL / ITSM',
  'Threat Hunting',
  'Pentesting',
  'Análise de Incidentes',
  'Automação de Tarefas',
  'IAM Design',
  'Business Process Alignment',
  'Business Process Analysis'
];

export const capabilities: string[] = [
  'Administrar servidores Windows/Linux e Active Directory',
  'Gerenciar Azure AD, Microsoft 365 e identidade (IAM)',
  'Configurar redes LAN/WAN/Wi-Fi e firewalls (Fortinet, Cisco, Ubiquiti)',
  'Monitorar e responder a incidentes de segurança (SOC/Blue Team)',
  'Analisar e mitigar vulnerabilidades de sistemas e redes',
  'Implementar políticas de segurança e hardening',
  'Gerenciar endpoint protection (Sentinel One, Kaspersky)',
  'Automatizar tarefas com PowerShell, Bash e Python',
  'Implantar políticas de backup e recuperação de desastres (DRP)',
  'Criar dashboards e relatórios de KPIs (Power BI, Excel)'
];

export interface CompetencyGroup {
  title: string;
  items: string[];
}

export const competencyGroups: CompetencyGroup[] = [
  {
    title: 'Coordenação de TI & Documentação',
    items: [
      'Liderança e coordenação de equipes de suporte (N1/N2/N3)',
      'Gestão de KPIs: SLA, FCR, TMT e CSAT/NPS',
      'Processos ITSM/ITIL e padronização de procedimentos',
      'Governança de TI e gestão de ativos/licenciamento',
      'Treinamento e capacitação técnica da equipe',
      'Coordenação de projetos de infraestrutura e segurança',
      'Escalonamento de incidentes críticos para N3 e times especializados',
      'Documentação de troubleshooting, guias e políticas'
    ]
  },
  {
    title: 'Windows Server / Infraestrutura',
    items: [
      'Administração de servidores Windows/Linux',
      'Active Directory, GPOs, DNS e DHCP',
      'Azure AD e Microsoft 365',
      'Aplicação de atualizações e patches de segurança',
      'Gestão de ativos de TI e inventário'
    ]
  },
  {
    title: 'Segurança da Informação (Cibersegurança)',
    items: [
      'Monitoramento e resposta a incidentes (SOC)',
      'Governança de SOC e Threat Hunting',
      'Pentesting e testes de invasão',
      'SIEM (Wazuh, Splunk, ELK)',
      'Análise e mitigação de vulnerabilidades',
      'Políticas de segurança, controle de acessos e hardening',
      'Endpoint protection (Sentinel One, Kaspersky)',
      'Backup e recuperação de desastres (DRP)'
    ]
  },
  {
    title: 'Redes e Conectividade',
    items: [
      'Configuração e troubleshooting de LAN/WAN/Wi-Fi',
      'Switches, roteadores e firewalls (Fortinet, Cisco, Ubiquiti)',
      'Monitoramento de tráfego (Cisco Meraki, Ubiquiti)',
      'Cabeamento estruturado'
    ]
  },
  {
    title: 'Suporte Técnico N1/N2',
    items: [
      'Atendimento e diagnóstico de chamados (ITSM)',
      'Suporte mobile (Android/iOS) e CFTV',
      'Ferramentas colaborativas (Cisco Webex, Teams, Zoom, Protheus)',
      'Reset de senhas e suporte a acesso a sistemas'
    ]
  },
  {
    title: 'Automação e Monitoramento',
    items: [
      'Scripts de automação (PowerShell, Bash, Python)',
      'Monitoramento com Zabbix',
      'Dashboards e relatórios de KPIs (Power BI, Excel)'
    ]
  },
  {
    title: 'Montagem, Manutenção e Hardware',
    items: [
      'Montagem de PCs personalizados',
      'Diagnóstico e reparo de hardware e consoles',
      'Backup e restauração de dados'
    ]
  }
];

export const certifications: Certification[] = [
  {
    name: 'Analista SOC',
    level: 'Profissional',
    issuer: 'IBSEC',
    code: 'IC-SOC-353',
    expires: '2028',
    url: 'https://certs.ibsec.com.br/?cert_hash=37b0811ed7af0eb2',
    badgeImage: '/badges/PT-IC-SOC-353.svg'
  },
  {
    name: 'Hacker Ético',
    level: 'Associado',
    issuer: 'IBSEC',
    code: 'IC-EH-1460',
    expires: '2027',
    url: 'https://certs.ibsec.com.br/?cert_hash=c327f63697c18915',
    badgeImage: '/badges/PT-IC-EH-1460.svg'
  },
  {
    name: 'Analista de Cibersegurança (Governança)',
    level: 'Associado',
    issuer: 'IBSEC',
    code: 'IC-GRC-960',
    expires: '2027',
    url: 'https://certs.ibsec.com.br/?cert_hash=3dbf98ce3ee0784f',
    badgeImage: '/badges/PT-IC-GRC-960.svg'
  },
  {
    name: 'Boas Práticas de Cibersegurança',
    short: 'Cybersecurity Awareness',
    level: 'Essencial',
    issuer: 'IBSEC',
    code: 'IC-SEC-1780',
    expires: '2027',
    url: 'https://certs.ibsec.com.br/?cert_hash=77ca6e263f61d5e5',
    badgeImage: '/badges/PT-IC-SEC-1780.svg'
  },
  {
    name: 'Fortinet NSE 3',
    level: 'Certificado',
    issuer: 'Fortinet',
    code: '3340847225TO',
    expires: '28/08/2026',
    url: 'https://training.fortinet.com/local/cert/my/certificate.php?badge=162&user=1807058',
    badgeId: '2cea0c2a-56ea-4897-9cba-149272d029a5',
    badgeImage: 'https://images.credly.com/images/7ca06297-1543-4ed2-b9fc-7f0af8635700/blob'
  },
  {
    name: 'Foundations of Operationalizing MITRE ATT&CK v13',
    level: 'Fundamentos',
    issuer: 'AttackIQ',
    expires: '—',
    url: 'https://academy.attackiq.com/certificates/certificate-template?token=eyJ1c2VyX2lkIjoyMjkzOTUsInJlc291cmNlX2lkIjoxMDg0NywiY2VydF9pZCI6NjcxMSwidHlwZSI6ImNvdXJzZSIsInRpbWVzdGFtcCI6MTc5MTEzNjk0Nn0.bc7f24369606e563',
    badgeId: '55c790e3-ec39-4d9c-9627-c5886a8bb75f',
    badgeImage: 'https://images.credly.com/images/bbed017a-ab77-4681-9079-b335d51b083e/image.png'
  },
  {
    name: 'Foundations of Purple Teaming',
    level: 'Fundamentos',
    issuer: 'AttackIQ',
    expires: '—',
    url: 'https://academy.attackiq.com/certificates/certificate-template?token=eyJ1c2VyX2lkIjoyMjkzOTUsInJlc291cmNlX2lkIjozNDcyLCJjZXJ0X2lkIjo2NzExLCJ0eXBlIjoiY291cnNlIiwidGltZXN0YW1wIjoxNzkxMTM3MDA2fQ.4a87b5787d4578b8',
    badgeId: '0fbfb05c-531e-4602-8198-86f3895cb08e',
    badgeImage: 'https://images.credly.com/images/ae9d6f85-418e-45d1-b0fc-4f44fc6708f3/Foundations_of_Purple_Teaming_Badge.png',
    badgeLarge: true
  }
];

export const services: Service[] = [
  {
    icon: 'server',
    title: 'Suporte e Infraestrutura',
    description:
      'Administração de servidores Windows/Linux, Active Directory, Microsoft 365, Azure AD e Service Desk N1/N2 com foco em ambientes estáveis e seguros.',
    tags: ['Windows Server', 'Active Directory', 'Microsoft 365', 'Azure AD']
  },
  {
    icon: 'shield',
    title: 'Cibersegurança e SOC',
    description:
      'Monitoramento e resposta a incidentes, análise e mitigação de vulnerabilidades, gestão de endpoint protection e políticas de segurança.',
    tags: ['SOC', 'Resposta a Incidentes', 'Vulnerabilidades', 'Hardening']
  },
  {
    icon: 'network',
    title: 'Redes e Firewall',
    description:
      'Configuração e troubleshooting de redes LAN/WAN/Wi-Fi, switches, roteadores e firewalls (Fortinet, Cisco, Ubiquiti).',
    tags: ['Fortinet', 'Cisco', 'Ubiquiti', 'LAN/WAN/Wi-Fi']
  },
  {
    icon: 'terminal',
    title: 'Automação e Monitoramento',
    description:
      'Criação de scripts para automação de tarefas (PowerShell, Bash, Python), relatórios e dashboards de KPIs com Zabbix e Power BI.',
    tags: ['PowerShell', 'Bash', 'Python', 'Zabbix']
  },
  {
    icon: 'key',
    title: 'Gestão de Identidade e Acesso (IAM)',
    description:
      'Design e alinhamento de processos de IAM, controle de acessos e governança de identidade para o ambiente corporativo.',
    tags: ['IAM Design', 'Controle de Acessos', 'Governança']
  },
  {
    icon: 'building',
    title: 'Consultoria Corporativa',
    description:
      'Alinhamento de processos de negócio à tecnologia, análise de processos e soluções estratégicas de TI para empresas.',
    tags: ['Business Process', 'Consultoria', 'Estratégia de TI']
  }
];

export const experience: Experience[] = [
  {
    company: 'V.tal',
    role: 'Coordenador de TI (Helpdesk & Service Desk)',
    period: 'mai 2025 — presente',
    location: 'Rio de Janeiro, RJ',
    summary:
      'Liderança e gestão da equipe de suporte técnico (N1, N2 e N3) com foco em excelência no atendimento.',
    highlights: [
      'Liderança e desenvolvimento da equipe de suporte técnico (N1, N2 e N3), garantindo a excelência no atendimento',
      'Gestão e análise de SLAs, FCR (First Contact Resolution), TMT (Tempo Médio de Atendimento) e NPS/CSAT de satisfação',
      'Padronização de processos ITIL/ITSM, atuando como ponto focal para escalonamento e resolução de incidentes críticos de infraestrutura',
      'Criação de base de conhecimento, automação de chamados recorrentes e controle de inventário de ativos e licenciamento de software'
    ]
  },
  {
    company: 'Grupo Trigo',
    role: 'Assistente de TI III',
    period: 'dez 2023 — jan 2025',
    location: 'Rio de Janeiro, Brasil',
    summary:
      'Suporte Técnico N2 e atuação em segurança da informação, infraestrutura e redes.',
    highlights: [
      'Monitoramento e resposta a incidentes de segurança',
      'Gestão de endpoint protection (Sentinel One, Kaspersky)',
      'Administração de servidores Windows/Linux, AD, GPOs, DNS e DHCP',
      'Configuração de redes LAN/WAN/Wi-Fi, switches, roteadores e firewalls',
      'Automação de tarefas com PowerShell, Bash e Python'
    ]
  },
  {
    company: 'Grupo Trigo',
    role: 'Assistente de TI I',
    period: 'ago 2022 — dez 2023',
    location: 'Rio de Janeiro, Brasil',
    summary: 'Suporte Técnico N1 com foco em atendimento, infraestrutura e segurança.',
    highlights: [
      'Atendimento a chamados e suporte a usuários em sistemas ITSM',
      'Monitoramento inicial de alertas de segurança e eventos',
      'Identificação de vulnerabilidades e escalonamento de incidentes',
      'Administração básica de redes, servidores e dispositivos de armazenamento'
    ]
  },
  {
    company: 'ZTECH Endeavor',
    role: 'Assistente de TI II',
    period: 'dez 2021 — ago 2022',
    location: 'Niterói, Rio de Janeiro, Brasil',
    summary: 'Suporte Técnico N2 e serviços de infraestrutura e redes.',
    highlights: [
      'Configuração e administração de usuários em Active Directory',
      'Manutenção de sistemas Windows, macOS e Linux',
      'Projetos de montagem de rede de computadores',
      'Gerenciamento de Windows Server e suporte a CFTV'
    ]
  },
  {
    company: 'Prepara Cursos Profissionalizantes',
    role: 'Instrutor de TI',
    period: 'mar 2011 — jun 2011',
    location: 'Niterói, Rio de Janeiro, Brasil',
    summary: 'Instrução em montagem e manutenção de computadores, redes e sistemas.',
    highlights: [
      'Elaboração de material didático para cursos de TI',
      'Treinamentos em redes, servidores e infraestrutura',
      'Instrutoria em produtividade, design gráfico e AutoCAD'
    ]
  },
  {
    company: 'Gtech',
    role: 'Técnico de Suporte',
    period: 'abr 2011 — out 2012',
    location: 'São Gonçalo, Rio de Janeiro, Brasil',
    summary: 'Montagem e manutenção de computadores e reparo de consoles.',
    highlights: [
      'Montagem de PCs personalizados e manutenção preventiva',
      'Diagnóstico e reparo de hardware e rede',
      'Reparo de consoles (PlayStation, Xbox, Nintendo)'
    ]
  },
  {
    company: 'CDP Digitalmax',
    role: 'Técnico de TI',
    period: 'out 2010 — abr 2011',
    location: 'Niterói, Rio de Janeiro, Brasil',
    summary: 'Suporte técnico, infraestrutura e administração de TI.',
    highlights: [
      'Suporte a usuários e diagnóstico de conectividade',
      'Instalação de hardware e softwares',
      'Monitoramento de servidores, switches e backups'
    ]
  }
];

export const education: Education[] = [
  {
    institution: 'Universidade Candido Mendes',
    degree: 'Bacharelado em Engenharia da Computação',
    period: '2022 — 2026'
  },
  {
    institution: 'Estácio',
    degree: 'CST em Cibersegurança',
    period: '2022 — 2024'
  }
];