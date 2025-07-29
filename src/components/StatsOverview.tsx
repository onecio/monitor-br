import React from 'react';
import { Activity, CheckCircle, Clock, TrendingUp } from 'lucide-react';
import { MonitoringStats } from '../types/monitoring';

interface StatsOverviewProps {
  stats: MonitoringStats;
  isLoading: boolean;
}

export const StatsOverview: React.FC<StatsOverviewProps> = ({ stats, isLoading }) => {
  const getUptimeColor = (uptime: number) => {
    if (uptime >= 99.5) return 'text-green-600';
    if (uptime >= 98) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getLatencyColor = (latency: number) => {
    if (latency <= 50) return 'text-green-600';
    if (latency <= 200) return 'text-yellow-600';
    return 'text-red-600';
  };

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[1, 2, 3, 4].map(i => (
          <div key={i} className="bg-white rounded-lg shadow-sm p-6">
            <div className="animate-pulse">
              <div className="w-8 h-8 bg-gray-200 rounded-lg mb-4"></div>
              <div className="h-4 bg-gray-200 rounded mb-2"></div>
              <div className="h-6 bg-gray-200 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-blue-100 rounded-lg">
            <Activity className="w-5 h-5 text-blue-600" />
          </div>
          <div className="text-sm font-medium text-gray-600">
            Total de Serviços
          </div>
        </div>
        <div className="text-2xl font-bold text-gray-900">
          {stats.totalServices}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-green-100 rounded-lg">
            <CheckCircle className="w-5 h-5 text-green-600" />
          </div>
          <div className="text-sm font-medium text-gray-600">
            Serviços Online
          </div>
        </div>
        <div className="text-2xl font-bold text-green-600">
          {stats.onlineServices}
        </div>
        <div className="text-sm text-gray-500">
          {((stats.onlineServices / stats.totalServices) * 100).toFixed(1)}% do total
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-orange-100 rounded-lg">
            <Clock className="w-5 h-5 text-orange-600" />
          </div>
          <div className="text-sm font-medium text-gray-600">
            Latência Média
          </div>
        </div>
        <div className={`text-2xl font-bold ${getLatencyColor(stats.avgLatency)}`}>
          {stats.avgLatency}ms
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-purple-100 rounded-lg">
            <TrendingUp className="w-5 h-5 text-purple-600" />
          </div>
          <div className="text-sm font-medium text-gray-600">
            Uptime Médio
          </div>
        </div>
        <div className={`text-2xl font-bold ${getUptimeColor(stats.uptime)}`}>
          {stats.uptime}%
        </div>
      </div>
    </div>
  );
};