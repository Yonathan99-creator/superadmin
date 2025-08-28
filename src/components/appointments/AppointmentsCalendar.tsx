import React, { useState } from 'react';
import { 
  ChevronLeft, ChevronRight, Calendar, Clock, 
  User, MapPin, DollarSign, Star, Plus,
  CheckCircle, AlertTriangle, Activity, X
} from 'lucide-react';

interface AppointmentsCalendarProps {
  onSelectAppointment: (appointment: any) => void;
}

const AppointmentsCalendar: React.FC<AppointmentsCalendarProps> = ({ onSelectAppointment }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [viewMode, setViewMode] = useState<'month' | 'week' | 'day'>('month');

  // Sample appointments data
  const appointments = [
    {
      id: '1',
      patientName: 'Sarah Johnson',
      professionalName: 'Dr. Michael Chen',
      service: 'General Consultation',
      time: '10:30 AM',
      duration: '30 min',
      status: 'completed',
      price: '$75',
      date: '2024-01-25',
      patientAvatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1',
      professionalAvatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1'
    },
    {
      id: '2',
      patientName: 'Michael Rodriguez',
      professionalName: 'Dr. Emma Wilson',
      service: 'Cardiac Screening',
      time: '2:00 PM',
      duration: '45 min',
      status: 'in_progress',
      price: '$150',
      date: '2024-01-25',
      patientAvatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1',
      professionalAvatar: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1'
    },
    {
      id: '3',
      patientName: 'Lisa Thompson',
      professionalName: 'Dr. James Wilson',
      service: 'Dental Cleaning',
      time: '4:30 PM',
      duration: '45 min',
      status: 'pending',
      price: '$120',
      date: '2024-01-25',
      patientAvatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1',
      professionalAvatar: 'https://images.pexels.com/photos/6129967/pexels-photo-6129967.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1'
    }
  ];

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }
    
    return days;
  };

  const getAppointmentsForDate = (date: Date | null) => {
    if (!date) return [];
    const dateString = date.toISOString().split('T')[0];
    return appointments.filter(apt => apt.date === dateString);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500';
      case 'pending':
        return 'bg-yellow-500';
      case 'cancelled':
        return 'bg-red-500';
      case 'in_progress':
        return 'bg-blue-500';
      case 'no_show':
        return 'bg-orange-500';
      default:
        return 'bg-gray-500';
    }
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentDate);
    if (direction === 'prev') {
      newDate.setMonth(newDate.getMonth() - 1);
    } else {
      newDate.setMonth(newDate.getMonth() + 1);
    }
    setCurrentDate(newDate);
  };

  const days = getDaysInMonth(currentDate);
  const selectedDateAppointments = getAppointmentsForDate(selectedDate);

  return (
    <div className="grid lg:grid-cols-3 gap-8 animate-in slide-in-from-bottom duration-700 delay-400">
      {/* Calendar View */}
      <div className="lg:col-span-2">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
          {/* Calendar Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
              </h3>
              <div className="flex items-center space-x-1">
                <button
                  onClick={() => navigateMonth('prev')}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all duration-200 hover:scale-110"
                >
                  <ChevronLeft className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                </button>
                <button
                  onClick={() => navigateMonth('next')}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all duration-200 hover:scale-110"
                >
                  <ChevronRight className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                </button>
              </div>
            </div>
            
            {/* View Mode Selector */}
            <div className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-700 rounded-xl p-1">
              {['month', 'week', 'day'].map((mode) => (
                <button
                  key={mode}
                  onClick={() => setViewMode(mode as 'month' | 'week' | 'day')}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    viewMode === mode
                      ? 'bg-white dark:bg-gray-600 text-gray-900 dark:text-white shadow-sm'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  {mode.charAt(0).toUpperCase() + mode.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-1 mb-4">
            {dayNames.map((day) => (
              <div key={day} className="p-3 text-center text-sm font-medium text-gray-500 dark:text-gray-400">
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1">
            {days.map((day, index) => {
              const dayAppointments = getAppointmentsForDate(day);
              const isSelected = day && selectedDate.toDateString() === day.toDateString();
              const isToday = day && new Date().toDateString() === day.toDateString();
              
              return (
                <div
                  key={index}
                  className={`relative min-h-[80px] p-2 border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer group ${
                    day ? 'hover:shadow-md hover:scale-105' : ''
                  } ${
                    isSelected ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-300 dark:border-blue-600' : ''
                  } ${
                    isToday ? 'bg-green-50 dark:bg-green-900/20 border-green-300 dark:border-green-600' : ''
                  }`}
                  onClick={() => day && setSelectedDate(day)}
                >
                  {day && (
                    <>
                      <div className={`text-sm font-medium mb-1 ${
                        isToday ? 'text-green-600 dark:text-green-400' :
                        isSelected ? 'text-blue-600 dark:text-blue-400' :
                        'text-gray-900 dark:text-white'
                      }`}>
                        {day.getDate()}
                      </div>
                      
                      {/* Appointment indicators */}
                      <div className="space-y-1">
                        {dayAppointments.slice(0, 3).map((apt, aptIndex) => (
                          <div
                            key={apt.id}
                            className={`w-full h-1.5 rounded-full ${getStatusColor(apt.status)} opacity-80 group-hover:opacity-100 transition-opacity animate-in slide-in-from-left`}
                            style={{ animationDelay: `${aptIndex * 100}ms` }}
                          />
                        ))}
                        {dayAppointments.length > 3 && (
                          <div className="text-xs text-gray-500 dark:text-gray-400 text-center">
                            +{dayAppointments.length - 3} more
                          </div>
                        )}
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Selected Date Details */}
      <div className="space-y-6">
        {/* Date Info */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 animate-in slide-in-from-right delay-300">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {selectedDate.toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </h3>
            <button className="p-2 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-lg hover:bg-green-200 dark:hover:bg-green-900/50 transition-all duration-200 hover:scale-110">
              <Plus className="w-4 h-4" />
            </button>
          </div>
          
          <div className="text-center p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
              {selectedDateAppointments.length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Appointments scheduled
            </div>
          </div>
        </div>

        {/* Appointments for Selected Date */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 animate-in slide-in-from-right delay-500">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Today's Schedule
          </h3>
          
          {selectedDateAppointments.length > 0 ? (
            <div className="space-y-3">
              {selectedDateAppointments.map((appointment, index) => (
                <div
                  key={appointment.id}
                  onClick={() => onSelectAppointment(appointment)}
                  className="p-4 border border-gray-200 dark:border-gray-600 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 hover:shadow-md hover:scale-105 cursor-pointer group animate-in slide-in-from-right"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <img
                          src={appointment.patientAvatar}
                          alt={appointment.patientName}
                          className="w-10 h-10 rounded-full ring-2 ring-gray-200 dark:ring-gray-600 group-hover:ring-blue-400 transition-all duration-300"
                        />
                        <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white dark:border-gray-800 ${getStatusColor(appointment.status)}`}></div>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          {appointment.patientName}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          with {appointment.professionalName}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        {appointment.time}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {appointment.duration}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-1 rounded-full">
                      {appointment.service}
                    </span>
                    <div className="flex items-center space-x-2">
                      <DollarSign className="w-3 h-3 text-green-500" />
                      <span className="text-sm font-medium text-green-600 dark:text-green-400">
                        {appointment.price}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-3" />
              <p className="text-gray-500 dark:text-gray-400">No appointments scheduled</p>
              <button className="mt-3 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                Add Appointment
              </button>
            </div>
          )}
        </div>

        {/* Quick Actions */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl shadow-lg p-6 text-white animate-in slide-in-from-right delay-700">
          <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full flex items-center space-x-3 p-3 bg-white/20 rounded-xl hover:bg-white/30 transition-all duration-200 hover:scale-105 group">
              <Plus className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span>Schedule New Appointment</span>
            </button>
            <button className="w-full flex items-center space-x-3 p-3 bg-white/20 rounded-xl hover:bg-white/30 transition-all duration-200 hover:scale-105 group">
              <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span>View Weekly Schedule</span>
            </button>
            <button className="w-full flex items-center space-x-3 p-3 bg-white/20 rounded-xl hover:bg-white/30 transition-all duration-200 hover:scale-105 group">
              <Activity className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span>Live Monitoring</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentsCalendar;