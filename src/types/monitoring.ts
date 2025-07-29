export interface ServiceStatus {
  id: string;
  name: string;
  url: string;
  category: string;
  status: 'online' | 'slow' | 'offline';
  latency: number;
  uptime: number;
  lastChecked: Date;
  location?: string;
  description?: string;
}

export interface HistoricalData {
  timestamp: Date;
  latency: number;
  status: 'online' | 'slow' | 'offline';
}

export interface CategoryGroup {
  name: string;
  icon: string;
  services: ServiceStatus[];
  color: string;
}

export interface MonitoringStats {
  totalServices: number;
  onlineServices: number;
  avgLatency: number;
  uptime: number;
}