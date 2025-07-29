import { useState, useEffect } from 'react';
import { ServiceStatus, MonitoringStats, HistoricalData } from '../types/monitoring';
import { brazilianServices } from '../data/services';

export const useMonitoring = () => {
  const [services, setServices] = useState<ServiceStatus[]>(brazilianServices);
  const [stats, setStats] = useState<MonitoringStats>({
    totalServices: 0,
    onlineServices: 0,
    avgLatency: 0,
    uptime: 0
  });
  const [historicalData, setHistoricalData] = useState<HistoricalData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const generateRandomLatency = (baseLatency: number): number => {
    const variation = baseLatency * 0.3;
    return Math.max(1, Math.floor(baseLatency + (Math.random() - 0.5) * variation));
  };

  const getRandomStatus = (currentStatus: string): 'online' | 'slow' | 'offline' => {
    const rand = Math.random();
    if (currentStatus === 'offline') {
      return rand < 0.7 ? 'offline' : 'slow';
    } else if (currentStatus === 'slow') {
      if (rand < 0.3) return 'online';
      if (rand < 0.8) return 'slow';
      return 'offline';
    } else {
      if (rand < 0.85) return 'online';
      if (rand < 0.98) return 'slow';
      return 'offline';
    }
  };

  const updateServices = () => {
    setServices(prevServices => 
      prevServices.map(service => ({
        ...service,
        latency: generateRandomLatency(service.latency),
        status: getRandomStatus(service.status),
        lastChecked: new Date(),
        uptime: Math.max(95, Math.min(100, service.uptime + (Math.random() - 0.5) * 0.2))
      }))
    );
  };

  const calculateStats = (serviceList: ServiceStatus[]): MonitoringStats => {
    const totalServices = serviceList.length;
    const onlineServices = serviceList.filter(s => s.status === 'online').length;
    const avgLatency = serviceList.reduce((sum, s) => sum + s.latency, 0) / totalServices;
    const uptime = serviceList.reduce((sum, s) => sum + s.uptime, 0) / totalServices;

    return {
      totalServices,
      onlineServices,
      avgLatency: Math.round(avgLatency),
      uptime: Math.round(uptime * 100) / 100
    };
  };

  const generateHistoricalData = () => {
    const now = new Date();
    const data: HistoricalData[] = [];
    
    for (let i = 23; i >= 0; i--) {
      const timestamp = new Date(now.getTime() - i * 60 * 60 * 1000);
      const avgLatency = services.reduce((sum, s) => sum + s.latency, 0) / services.length;
      const variation = avgLatency * 0.4;
      const latency = Math.max(10, avgLatency + (Math.random() - 0.5) * variation);
      
      data.push({
        timestamp,
        latency: Math.round(latency),
        status: Math.random() > 0.95 ? 'slow' : 'online'
      });
    }
    
    setHistoricalData(data);
  };

  useEffect(() => {
    // Initial load
    setTimeout(() => setIsLoading(false), 1500);
    
    // Generate initial historical data
    generateHistoricalData();
    
    // Update services every 30 seconds
    const interval = setInterval(updateServices, 30000);
    
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setStats(calculateStats(services));
  }, [services]);

  return {
    services,
    stats,
    historicalData,
    isLoading,
    updateServices
  };
};