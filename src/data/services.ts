import { ServiceStatus, CategoryGroup } from '../types/monitoring';

export const brazilianServices: ServiceStatus[] = [
  // PTTs do Brasil (IX.br)
  {
    id: 'ptt-sp',
    name: 'PTT Metro São Paulo',
    url: 'https://ix.br',
    category: 'PTTs',
    status: 'online',
    latency: 12,
    uptime: 99.9,
    lastChecked: new Date(),
    location: 'São Paulo, SP',
    description: 'Principal ponto de troca de tráfego do Brasil'
  },
  {
    id: 'ptt-rj',
    name: 'PTT Metro Rio de Janeiro',
    url: 'https://ix.br',
    category: 'PTTs',
    status: 'online',
    latency: 18,
    uptime: 99.8,
    lastChecked: new Date(),
    location: 'Rio de Janeiro, RJ'
  },
  {
    id: 'ptt-brasilia',
    name: 'PTT Metro Brasília',
    url: 'https://ix.br',
    category: 'PTTs',
    status: 'slow',
    latency: 45,
    uptime: 98.5,
    lastChecked: new Date(),
    location: 'Brasília, DF'
  },

  // Serviços Microsoft
  {
    id: 'azure-br',
    name: 'Microsoft Azure Brasil',
    url: 'https://status.azure.com',
    category: 'Cloud Microsoft',
    status: 'online',
    latency: 28,
    uptime: 99.95,
    lastChecked: new Date(),
    location: 'São Paulo, SP'
  },
  {
    id: 'office365-br',
    name: 'Microsoft 365 Brasil',
    url: 'https://portal.office.com',
    category: 'Cloud Microsoft',
    status: 'online',
    latency: 32,
    uptime: 99.92,
    lastChecked: new Date(),
    location: 'São Paulo, SP'
  },

  // Cloudflare
  {
    id: 'cloudflare-sp',
    name: 'Cloudflare São Paulo',
    url: 'https://www.cloudflarestatus.com',
    category: 'CDN',
    status: 'online',
    latency: 8,
    uptime: 99.99,
    lastChecked: new Date(),
    location: 'São Paulo, SP'
  },
  {
    id: 'cloudflare-rj',
    name: 'Cloudflare Rio de Janeiro',
    url: 'https://www.cloudflarestatus.com',
    category: 'CDN',
    status: 'online',
    latency: 11,
    uptime: 99.98,
    lastChecked: new Date(),
    location: 'Rio de Janeiro, RJ'
  },

  // SERPRO
  {
    id: 'serpro-main',
    name: 'SERPRO - Serviços Principais',
    url: 'https://www.serpro.gov.br',
    category: 'Governo',
    status: 'online',
    latency: 156,
    uptime: 98.2,
    lastChecked: new Date(),
    location: 'Brasília, DF'
  },
  {
    id: 'serpro-cpf',
    name: 'SERPRO - Consulta CPF',
    url: 'https://servicos.receita.fazenda.gov.br',
    category: 'Governo',
    status: 'slow',
    latency: 298,
    uptime: 97.8,
    lastChecked: new Date(),
    location: 'Brasília, DF'
  },

  // Governo Federal
  {
    id: 'gov-br',
    name: 'GOV.BR',
    url: 'https://www.gov.br',
    category: 'Governo',
    status: 'online',
    latency: 89,
    uptime: 99.1,
    lastChecked: new Date(),
    location: 'Brasília, DF'
  },
  {
    id: 'cade-gov',
    name: 'CADE.GOV.BR',
    url: 'https://www.cade.gov.br',
    category: 'Governo',
    status: 'online',
    latency: 134,
    uptime: 98.7,
    lastChecked: new Date(),
    location: 'Brasília, DF'
  },

  // Google Services
  {
    id: 'gmail-br',
    name: 'Gmail Brasil',
    url: 'https://gmail.com',
    category: 'Google',
    status: 'online',
    latency: 24,
    uptime: 99.95,
    lastChecked: new Date(),
    location: 'São Paulo, SP'
  },
  {
    id: 'gcp-br',
    name: 'Google Cloud Brasil',
    url: 'https://status.cloud.google.com',
    category: 'Google',
    status: 'online',
    latency: 19,
    uptime: 99.97,
    lastChecked: new Date(),
    location: 'São Paulo, SP'
  },
  {
    id: 'youtube-br',
    name: 'YouTube Brasil',
    url: 'https://youtube.com',
    category: 'Google',
    status: 'online',
    latency: 16,
    uptime: 99.94,
    lastChecked: new Date(),
    location: 'São Paulo, SP'
  },

  // Principais serviços brasileiros
  {
    id: 'bb-online',
    name: 'Banco do Brasil',
    url: 'https://www.bb.com.br',
    category: 'Bancos',
    status: 'online',
    latency: 67,
    uptime: 99.3,
    lastChecked: new Date(),
    location: 'Brasília, DF'
  },
  {
    id: 'itau-online',
    name: 'Itaú Unibanco',
    url: 'https://www.itau.com.br',
    category: 'Bancos',
    status: 'online',
    latency: 52,
    uptime: 99.5,
    lastChecked: new Date(),
    location: 'São Paulo, SP'
  },
  {
    id: 'bradesco-online',
    name: 'Bradesco',
    url: 'https://www.bradesco.com.br',
    category: 'Bancos',
    status: 'slow',
    latency: 189,
    uptime: 98.9,
    lastChecked: new Date(),
    location: 'São Paulo, SP'
  }
];

export const categoryGroups: CategoryGroup[] = [
  {
    name: 'PTTs do Brasil',
    icon: 'Network',
    services: brazilianServices.filter(s => s.category === 'PTTs'),
    color: '#3B82F6'
  },
  {
    name: 'Cloud Microsoft',
    icon: 'Cloud',
    services: brazilianServices.filter(s => s.category === 'Cloud Microsoft'),
    color: '#0078D4'
  },
  {
    name: 'CDN & Edge',
    icon: 'Zap',
    services: brazilianServices.filter(s => s.category === 'CDN'),
    color: '#F97316'
  },
  {
    name: 'Governo Federal',
    icon: 'Building',
    services: brazilianServices.filter(s => s.category === 'Governo'),
    color: '#059669'
  },
  {
    name: 'Google Services',
    icon: 'Search',
    services: brazilianServices.filter(s => s.category === 'Google'),
    color: '#DC2626'
  },
  {
    name: 'Bancos',
    icon: 'CreditCard',
    services: brazilianServices.filter(s => s.category === 'Bancos'),
    color: '#7C3AED'
  }
];