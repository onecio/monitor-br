import React from 'react';
import * as Icons from 'lucide-react';
import { CategoryGroup } from '../types/monitoring';
import { ServiceCard } from './ServiceCard';

interface CategorySectionProps {
  category: CategoryGroup;
}

export const CategorySection: React.FC<CategorySectionProps> = ({ category }) => {
  const IconComponent = Icons[category.icon as keyof typeof Icons] as React.ComponentType<any>;

  const getCategoryStats = () => {
    const total = category.services.length;
    const online = category.services.filter(s => s.status === 'online').length;
    const slow = category.services.filter(s => s.status === 'slow').length;
    const offline = category.services.filter(s => s.status === 'offline').length;

    return { total, online, slow, offline };
  };

  const stats = getCategoryStats();

  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-6">
        <div 
          className="p-2 rounded-lg"
          style={{ backgroundColor: `${category.color}15`, color: category.color }}
        >
          <IconComponent className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-900">
            {category.name}
          </h2>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <span className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              {stats.online} Online
            </span>
            {stats.slow > 0 && (
              <span className="flex items-center gap-1">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                {stats.slow} Lento
              </span>
            )}
            {stats.offline > 0 && (
              <span className="flex items-center gap-1">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                {stats.offline} Offline
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {category.services.map(service => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};