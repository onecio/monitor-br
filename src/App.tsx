import React from 'react';
import { Header } from './components/Header';
import { StatsOverview } from './components/StatsOverview';
import { CategorySection } from './components/CategorySection';
import { LatencyChart } from './components/LatencyChart';
import { useMonitoring } from './hooks/useMonitoring';
import { categoryGroups } from './data/services';

function App() {
  const { services, stats, historicalData, isLoading, updateServices } = useMonitoring();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        onRefresh={updateServices}
        lastUpdate={new Date()}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <StatsOverview stats={stats} isLoading={isLoading} />
        
        <div className="mb-8">
          <LatencyChart data={historicalData} />
        </div>

        {!isLoading && (
          <div className="space-y-8">
            {categoryGroups.map(category => (
              <CategorySection 
                key={category.name}
                category={category}
              />
            ))}
          </div>
        )}

        {isLoading && (
          <div className="space-y-8">
            {[1, 2, 3].map(i => (
              <div key={i} className="animate-pulse">
                <div className="h-8 bg-gray-200 rounded w-64 mb-6"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[1, 2, 3].map(j => (
                    <div key={j} className="bg-white rounded-lg shadow-sm p-6">
                      <div className="h-6 bg-gray-200 rounded mb-4"></div>
                      <div className="h-4 bg-gray-200 rounded mb-2"></div>
                      <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center text-sm text-gray-600">
            <p className="mb-2">
              Plataforma de Monitoramento da Infraestrutura Digital Brasileira
            </p>
            <p className="text-xs">
              Dados atualizados a cada 30 segundos • 
              Fontes: IX.br, Status Pages oficiais, APIs públicas
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;