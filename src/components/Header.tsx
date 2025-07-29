import React from 'react';
import { Monitor, RefreshCw } from 'lucide-react';

interface HeaderProps {
  onRefresh: () => void;
  lastUpdate: Date;
}

export const Header: React.FC<HeaderProps> = ({ onRefresh, lastUpdate }) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-blue-600 rounded-lg">
              <Monitor className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Monitor Brasil
              </h1>
              <p className="text-sm text-gray-600">
                Monitoramento em tempo real da infraestrutura digital brasileira
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right">
              <div className="text-sm text-gray-600">Última atualização</div>
              <div className="text-sm font-medium text-gray-900">
                {lastUpdate.toLocaleTimeString('pt-BR')}
              </div>
            </div>
            <button
              onClick={onRefresh}
              className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
              title="Atualizar dados"
            >
              <RefreshCw className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};