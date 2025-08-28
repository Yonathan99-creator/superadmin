import React, { useState } from 'react';
import { 
  FileText, Calendar, Users, BarChart3, 
  Settings, Download, Play, Clock,
  CheckCircle, AlertTriangle, Zap, Shield,
  Filter, Database, TrendingUp, Eye,
  Plus, X, Star, Award
} from 'lucide-react';

const ReportGenerator: React.FC = () => {
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [selectedDataSources, setSelectedDataSources] = useState<string[]>([]);
  const [dateRange, setDateRange] = useState({ start: '', end: '' });
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationProgress, setGenerationProgress] = useState(0);

  const reportTemplates = [
    {
      id: 'financial',
      name: 'Financial Report',
      description: 'Comprehensive financial analysis with revenue, expenses, and profit metrics',
      icon: BarChart3,
      color: 'emerald',
      estimatedTime: '2-3 minutes',
      complexity: 'Medium',
      image: 'https://images.pexels.com/photos/3483098/pexels-photo-3483098.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
      features: ['Revenue Analysis', 'Expense Tracking', 'Profit Margins', 'Trend Analysis']
    },
    {
      id: 'user_analytics',
      name: 'User Analytics Report',
      description: 'User behavior analysis, engagement metrics, and usage patterns',
      icon: Users,
      color: 'blue',
      estimatedTime: '1-2 minutes',
      complexity: 'Low',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
      features: ['User Engagement', 'Session Analytics', 'Conversion Rates', 'Demographics']
    },
    {
      id: 'performance',
      name: 'System Performance Report',
      description: 'Server performance, response times, and system health metrics',
      icon: Zap,
      color: 'yellow',
      estimatedTime: '30 seconds',
      complexity: 'Low',
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
      features: ['Response Times', 'Server Load', 'Uptime Stats', 'Error Rates']
    },
    {
      id: 'compliance',
      name: 'Compliance Audit Report',
      description: 'Security compliance, data protection, and regulatory adherence',
      icon: Shield,
      color: 'red',
      estimatedTime: '5-7 minutes',
      complexity: 'High',
      image: 'https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
      features: ['Security Audit', 'Data Protection', 'Compliance Score', 'Risk Assessment']
    },
    {
      id: 'professional',
      name: 'Professional Activity Report',
      description: 'Healthcare professional performance and activity analysis',
      icon: Award,
      color: 'purple',
      estimatedTime: '3-4 minutes',
      complexity: 'Medium',
      image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
      features: ['Activity Metrics', 'Performance KPIs', 'Patient Feedback', 'Revenue Contribution']
    },
    {
      id: 'custom',
      name: 'Custom Report Builder',
      description: 'Build custom reports with advanced filtering and data selection',
      icon: Settings,
      color: 'indigo',
      estimatedTime: 'Variable',
      complexity: 'High',
      image: 'https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
      features: ['Custom Fields', 'Advanced Filters', 'Multiple Formats', 'Scheduled Generation']
    }
  ];

  const dataSources = [
    { id: 'appointments', name: 'Appointments Database', status: 'connected', records: '15,492' },
    { id: 'users', name: 'User Management System', status: 'connected', records: '28,405' },
    { id: 'professionals', name: 'Professionals Database', status: 'connected', records: '2,847' },
    { id: 'payments', name: 'Payment Gateway', status: 'connected', records: '45,678' },
    { id: 'reviews', name: 'Reviews & Ratings', status: 'connected', records: '12,340' },
    { id: 'analytics', name: 'Analytics Engine', status: 'connected', records: 'Real-time' },
    { id: 'logs', name: 'System Logs', status: 'connected', records: '1.2M' },
    { id: 'external', name: 'External APIs', status: 'limited', records: 'Variable' }
  ];

  const outputFormats = [
    { id: 'pdf', name: 'PDF Document', icon: FileText, description: 'Professional formatted document' },
    { id: 'excel', name: 'Excel Spreadsheet', icon: BarChart3, description: 'Data analysis and charts' },
    { id: 'csv', name: 'CSV Data', icon: Database, description: 'Raw data export' },
    { id: 'json', name: 'JSON Format', icon: Settings, description: 'API-friendly format' }
  ];

  const handleGenerate = () => {
    if (!selectedTemplate) return;
    
    setIsGenerating(true);
    setGenerationProgress(0);
    
    // Simulate report generation progress
    const interval = setInterval(() => {
      setGenerationProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsGenerating(false);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);
  };

  const getColorClasses = (color: string) => {
    const colors = {
      emerald: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-700',
      blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-700',
      yellow: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 border-yellow-200 dark:border-yellow-700',
      red: 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 border-red-200 dark:border-red-700',
      purple: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-700',
      indigo: 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 border-indigo-200 dark:border-indigo-700'
    };
    return colors[color as keyof typeof colors] || colors.indigo;
  };

  return (
    <div className="space-y-8 animate-in slide-in-from-bottom duration-700">
      {/* Generator Header */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Report Generator
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Create custom reports with advanced data analysis and visualization
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-green-600 dark:text-green-400 font-medium">All Systems Ready</span>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left Column - Template Selection */}
        <div className="lg:col-span-2 space-y-6">
          {/* Report Templates */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Select Report Template</h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              {reportTemplates.map((template, index) => {
                const Icon = template.icon;
                const isSelected = selectedTemplate === template.id;
                
                return (
                  <div
                    key={template.id}
                    onClick={() => setSelectedTemplate(template.id)}
                    className={`relative p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 hover:scale-105 group animate-in slide-in-from-left ${
                      isSelected 
                        ? getColorClasses(template.color)
                        : 'border-gray-200 dark:border-gray-600 hover:border-indigo-300 dark:hover:border-indigo-600 bg-gray-50 dark:bg-gray-700/50'
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Template Image */}
                    <div className="relative h-24 mb-4 overflow-hidden rounded-lg">
                      <img
                        src={template.image}
                        alt={template.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute top-2 right-2">
                        <div className={`p-1 rounded-lg ${
                          isSelected ? 'bg-white/90' : 'bg-black/50'
                        }`}>
                          <Icon className={`w-4 h-4 ${
                            isSelected ? 'text-gray-800' : 'text-white'
                          }`} />
                        </div>
                      </div>
                    </div>

                    <div className="mb-3">
                      <h4 className={`font-semibold mb-1 ${
                        isSelected ? '' : 'text-gray-900 dark:text-white'
                      }`}>
                        {template.name}
                      </h4>
                      <p className={`text-sm ${
                        isSelected ? 'opacity-90' : 'text-gray-600 dark:text-gray-400'
                      }`}>
                        {template.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between text-xs mb-3">
                      <span className={`px-2 py-1 rounded-full font-medium ${
                        template.complexity === 'High' ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300' :
                        template.complexity === 'Medium' ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300' :
                        'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                      }`}>
                        {template.complexity}
                      </span>
                      <span className={`${isSelected ? 'opacity-90' : 'text-gray-500 dark:text-gray-400'}`}>
                        {template.estimatedTime}
                      </span>
                    </div>

                    {/* Features */}
                    <div className="space-y-1">
                      {template.features.slice(0, 2).map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className={`w-3 h-3 ${
                            isSelected ? 'opacity-90' : 'text-green-500'
                          }`} />
                          <span className={`text-xs ${
                            isSelected ? 'opacity-90' : 'text-gray-600 dark:text-gray-400'
                          }`}>
                            {feature}
                          </span>
                        </div>
                      ))}
                      {template.features.length > 2 && (
                        <div className={`text-xs ${
                          isSelected ? 'opacity-75' : 'text-gray-500 dark:text-gray-400'
                        }`}>
                          +{template.features.length - 2} more features
                        </div>
                      )}
                    </div>

                    {isSelected && (
                      <div className="absolute inset-0 border-2 border-current rounded-xl animate-pulse"></div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Data Sources Selection */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Select Data Sources</h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              {dataSources.map((source, index) => {
                const isSelected = selectedDataSources.includes(source.id);
                
                return (
                  <div
                    key={source.id}
                    onClick={() => {
                      setSelectedDataSources(prev => 
                        prev.includes(source.id) 
                          ? prev.filter(id => id !== source.id)
                          : [...prev, source.id]
                      );
                    }}
                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 hover:scale-105 animate-in slide-in-from-right ${
                      isSelected 
                        ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20' 
                        : 'border-gray-200 dark:border-gray-600 hover:border-indigo-300 dark:hover:border-indigo-600 bg-gray-50 dark:bg-gray-700/50'
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <Database className={`w-5 h-5 ${
                          isSelected ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-500'
                        }`} />
                        <span className={`font-medium ${
                          isSelected ? 'text-indigo-900 dark:text-indigo-100' : 'text-gray-900 dark:text-white'
                        }`}>
                          {source.name}
                        </span>
                      </div>
                      <div className={`w-3 h-3 rounded-full ${
                        source.status === 'connected' ? 'bg-green-500 animate-pulse' : 'bg-yellow-500'
                      }`}></div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className={`${
                        isSelected ? 'text-indigo-700 dark:text-indigo-300' : 'text-gray-600 dark:text-gray-400'
                      }`}>
                        {source.records} records
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        source.status === 'connected' 
                          ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                          : 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300'
                      }`}>
                        {source.status}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Configuration Options */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Report Configuration</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Date Range */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Date Range
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1">Start Date</label>
                    <input
                      type="date"
                      value={dateRange.start}
                      onChange={(e) => setDateRange(prev => ({ ...prev, start: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1">End Date</label>
                    <input
                      type="date"
                      value={dateRange.end}
                      onChange={(e) => setDateRange(prev => ({ ...prev, end: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700"
                    />
                  </div>
                </div>
              </div>

              {/* Output Format */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Output Format
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {outputFormats.map((format) => {
                    const Icon = format.icon;
                    return (
                      <button
                        key={format.id}
                        className="flex items-center space-x-2 p-3 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 hover:scale-105"
                      >
                        <Icon className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">{format.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Generation Panel */}
        <div className="space-y-6">
          {/* Generation Status */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Generation Status</h3>
            
            {isGenerating ? (
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center">
                    <Clock className="w-4 h-4 text-indigo-600 dark:text-indigo-400 animate-spin" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Generating Report...</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Processing data sources</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Progress</span>
                    <span className="font-medium text-gray-900 dark:text-white">{Math.round(generationProgress)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${generationProgress}%` }}
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-8">
                <FileText className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                <p className="text-gray-500 dark:text-gray-400 mb-4">Ready to generate report</p>
                <button
                  onClick={handleGenerate}
                  disabled={!selectedTemplate || selectedDataSources.length === 0}
                  className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed mx-auto"
                >
                  <Play className="w-4 h-4" />
                  <span>Generate Report</span>
                </button>
              </div>
            )}
          </div>

          {/* Selected Configuration */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Configuration Summary</h3>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                <span className="text-sm text-gray-600 dark:text-gray-400">Template</span>
                <span className="font-medium text-gray-900 dark:text-white">
                  {selectedTemplate ? reportTemplates.find(t => t.id === selectedTemplate)?.name : 'None selected'}
                </span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                <span className="text-sm text-gray-600 dark:text-gray-400">Data Sources</span>
                <span className="font-medium text-gray-900 dark:text-white">
                  {selectedDataSources.length} selected
                </span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                <span className="text-sm text-gray-600 dark:text-gray-400">Date Range</span>
                <span className="font-medium text-gray-900 dark:text-white">
                  {dateRange.start && dateRange.end ? `${dateRange.start} to ${dateRange.end}` : 'Not set'}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl shadow-lg p-6 text-white">
            <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full flex items-center space-x-3 p-3 bg-white/20 rounded-xl hover:bg-white/30 transition-all duration-200 hover:scale-105 group">
                <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span>Schedule Report</span>
              </button>
              <button className="w-full flex items-center space-x-3 p-3 bg-white/20 rounded-xl hover:bg-white/30 transition-all duration-200 hover:scale-105 group">
                <Eye className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span>Preview Template</span>
              </button>
              <button className="w-full flex items-center space-x-3 p-3 bg-white/20 rounded-xl hover:bg-white/30 transition-all duration-200 hover:scale-105 group">
                <Settings className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span>Advanced Options</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportGenerator;