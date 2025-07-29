import React from 'react';
import { Circle } from 'lucide-react';

interface StatusIndicatorProps {
  status: 'online' | 'slow' | 'offline';
  size?: 'sm' | 'md' | 'lg';
}

export const StatusIndicator: React.FC<StatusIndicatorProps> = ({ 
  status, 
  size = 'md' 
}) => {
  const getStatusColor = () => {
    switch (status) {
      case 'online': return 'text-green-500';
      case 'slow': return 'text-yellow-500';
      case 'offline': return 'text-red-500';
      default: return 'text-gray-400';
    }
  };

  const getStatusText = () => {
    switch (status) {
      case 'online': return 'Online';
      case 'slow': return 'Lento';
      case 'offline': return 'Offline';
      default: return 'Desconhecido';
    }
  };

  const getSizeClass = () => {
    switch (size) {
      case 'sm': return 'w-3 h-3';
      case 'md': return 'w-4 h-4';
      case 'lg': return 'w-5 h-5';
      default: return 'w-4 h-4';
    }
  };

  return (
    <div className="flex items-center gap-2">
      <Circle 
        className={`${getSizeClass()} ${getStatusColor()} fill-current`}
      />
      <span className={`text-sm font-medium ${getStatusColor()}`}>
        {getStatusText()}
      </span>
    </div>
  );
};