import React from 'react';
import { Clock, MapPin, TrendingUp } from 'lucide-react';
import { ServiceStatus } from '../types/monitoring';
import { StatusIndicator } from './StatusIndicator';

interface ServiceCardProps {
  service: ServiceStatus;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const getCardBorderColor = () => {
    switch (service.status) {
      case 'online': return 'border-l-green-500';
      case 'slow': return 'border-l-yellow-500';
      case 'offline': return 'border-l-red-500';
      default: return 'border-l-gray-300';
    }
  };

  const formatLatency = (latency: number) => {
    return `${latency}ms`;
  };

  const formatUptime = (uptime: number) => {
    return `${uptime.toFixed(2)}%`;
  };

  return (
    <div className={`bg-white rounded-lg shadow-sm border-l-4 ${getCardBorderColor()} p-6 hover:shadow-md transition-shadow duration-200`}>
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-1">
            {service.name}
          </h3>
          {service.description && (
            <p className="text-sm text-gray-600 mb-2">
              {service.description}
            </p>
          )}
        </div>
        <StatusIndicator status={service.status} />
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-gray-500" />
          <div>
            <div className="text-sm text-gray-600">Latência</div>
            <div className="font-semibold text-gray-900">
              {formatLatency(service.latency)}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-gray-500" />
          <div>
            <div className="text-sm text-gray-600">Uptime</div>
            <div className="font-semibold text-gray-900">
              {formatUptime(service.uptime)}
            </div>
          </div>
        </div>
      </div>

      {service.location && (
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <MapPin className="w-4 h-4" />
          <span>{service.location}</span>
        </div>
      )}

      <div className="mt-4 pt-4 border-t border-gray-100">
        <div className="text-xs text-gray-500">
          Última verificação: {service.lastChecked.toLocaleTimeString('pt-BR')}
        </div>
      </div>
    </div>
  );
};