import React from 'react';
import { HistoricalData } from '../types/monitoring';

interface LatencyChartProps {
  data: HistoricalData[];
}

export const LatencyChart: React.FC<LatencyChartProps> = ({ data }) => {
  if (data.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Latência nas Últimas 24 Horas
        </h3>
        <div className="flex items-center justify-center h-64 text-gray-500">
          Carregando dados históricos...
        </div>
      </div>
    );
  }

  const maxLatency = Math.max(...data.map(d => d.latency));
  const minLatency = Math.min(...data.map(d => d.latency));
  const range = maxLatency - minLatency;

  const getPointY = (latency: number) => {
    return 240 - ((latency - minLatency) / range) * 200;
  };

  const pathData = data
    .map((point, index) => {
      const x = (index / (data.length - 1)) * 760;
      const y = getPointY(point.latency);
      return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
    })
    .join(' ');

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">
          Latência nas Últimas 24 Horas
        </h3>
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span>Latência Média</span>
          </div>
        </div>
      </div>

      <div className="relative">
        <svg width="100%" height="260" className="overflow-visible">
          {/* Grid lines */}
          {[0, 1, 2, 3, 4].map(i => (
            <line
              key={i}
              x1="0"
              y1={40 + i * 50}
              x2="760"
              y2={40 + i * 50}
              stroke="#f3f4f6"
              strokeWidth="1"
            />
          ))}

          {/* Y-axis labels */}
          {[0, 1, 2, 3, 4].map(i => {
            const value = Math.round(maxLatency - (i * range / 4));
            return (
              <text
                key={i}
                x="-10"
                y={45 + i * 50}
                textAnchor="end"
                className="text-xs fill-gray-500"
              >
                {value}ms
              </text>
            );
          })}

          {/* Line chart */}
          <path
            d={pathData}
            fill="none"
            stroke="#3b82f6"
            strokeWidth="2"
            className="drop-shadow-sm"
          />

          {/* Data points */}
          {data.map((point, index) => {
            const x = (index / (data.length - 1)) * 760;
            const y = getPointY(point.latency);
            return (
              <circle
                key={index}
                cx={x}
                cy={y}
                r="3"
                fill="#3b82f6"
                className="hover:r-4 cursor-pointer"
              >
                <title>
                  {point.timestamp.toLocaleTimeString('pt-BR')}: {point.latency}ms
                </title>
              </circle>
            );
          })}
        </svg>

        {/* X-axis labels */}
        <div className="flex justify-between mt-2 text-xs text-gray-500">
          <span>24h atrás</span>
          <span>12h atrás</span>
          <span>Agora</span>
        </div>
      </div>
    </div>
  );
};