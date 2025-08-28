import React, { useState } from 'react';
import ServicesHeader from './ServicesHeader';
import ServicesStats from './ServicesStats';
import ServicesList from './ServicesList';
import ServiceDetails from './ServiceDetails';
import ServicesAnalytics from './ServicesAnalytics';
import ServiceCategories from './ServiceCategories';

const ServicesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedService, setSelectedService] = useState<any>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ServicesHeader 
          activeTab={activeTab} 
          onTabChange={setActiveTab}
        />
        
        {activeTab === 'overview' && (
          <>
            <ServicesStats />
            <ServiceCategories 
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
            <ServicesList 
              selectedCategory={selectedCategory}
              onSelectService={setSelectedService}
            />
          </>
        )}
        
        {activeTab === 'analytics' && (
          <ServicesAnalytics />
        )}
        
        {selectedService && (
          <ServiceDetails 
            service={selectedService}
            onClose={() => setSelectedService(null)}
          />
        )}
      </div>
    </div>
  );
};

export default ServicesPage;