import { useState } from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  Target, 
  DollarSign, 
  Users, 
  AlertTriangle,
  Eye,
  EyeOff,
  Calendar,
  MessageSquare,
  BarChart3,
  Zap
} from 'lucide-react';
import DashboardLayout from '../components/layout/DashboardLayout';
import { useAuth } from '../hooks/useAuth';

// Mock data for marketing agency
const kpiData = [
  {
    title: 'Jami daromad',
    value: '124,563,000 so\'m',
    change: '+15.2%',
    trend: 'up',
    icon: DollarSign,
    color: 'bg-green-500',
  },
  {
    title: 'Faol kampaniyalar',
    value: '18',
    change: '+4',
    trend: 'up',
    icon: Target,
    color: 'bg-blue-500',
  },
  {
    title: 'Mijozlar soni',
    value: '45',
    change: '+7',
    trend: 'up',
    icon: Users,
    color: 'bg-purple-500',
  },
  {
    title: 'Kutilayotgan loyihalar',
    value: '12',
    change: '-3',
    trend: 'down',
    icon: AlertTriangle,
    color: 'bg-yellow-500',
  },
];

const recentActivity = [
  {
    id: 1,
    type: 'campaign',
    message: 'Yangi Instagram kampaniyasi "Summer Sale" yaratildi',
    user: 'Aziza Karimova',
    time: '2 soat oldin',
  },
  {
    id: 2,
    type: 'client',
    message: 'Yangi mijoz "TechStart" qo\'shildi',
    user: 'Dilshod Toshmatov',
    time: '4 soat oldin',
  },
  {
    id: 3,
    type: 'project',
    message: 'Loyiha "E-commerce Website" tugatildi',
    user: 'Malika Yusupova',
    time: '6 soat oldin',
  },
  {
    id: 4,
    type: 'content',
    message: 'Yangi kontent taqvimi yaratildi',
    user: 'Jamoa',
    time: '1 kun oldin',
  },
];

export default function Dashboard() {
  const { user } = useAuth();
  const [showRevenue, setShowRevenue] = useState(true);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Welcome Header */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h1 className="text-2xl font-bold text-gray-900">
            Xush kelibsiz, {user?.firstName || 'Foydalanuvchi'}!
          </h1>
          <p className="text-gray-600 mt-1">
            Bugungi marketing agentligingiz faoliyati haqida ma'lumot.
          </p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {kpiData.map((kpi, index) => {
            const Icon = kpi.icon;
            return (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{kpi.title}</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">{kpi.value}</p>
                  </div>
                  <div className={`p-3 rounded-full ${kpi.color}`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="flex items-center mt-4">
                  {kpi.trend === 'up' ? (
                    <TrendingUp className="w-4 h-4 text-green-500" />
                  ) : (
                    <TrendingDown className="w-4 h-4 text-red-500" />
                  )}
                  <span className={`ml-1 text-sm font-medium ${
                    kpi.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {kpi.change}
                  </span>
                  <span className="ml-2 text-sm text-gray-500">o'tgan oydan</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Marketing Performance Overview */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Marketing natijalari</h3>
            <button
              onClick={() => setShowRevenue(!showRevenue)}
              className="flex items-center text-sm text-gray-600 hover:text-gray-900"
            >
              {showRevenue ? <EyeOff className="w-4 h-4 mr-1" /> : <Eye className="w-4 h-4 mr-1" />}
              {showRevenue ? 'Yashirish' : 'Ko\'rsatish'}
            </button>
          </div>
          {showRevenue && (
            <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Marketing natijalari grafigi bu yerda ko'rsatiladi</p>
            </div>
          )}
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">So'nggi faoliyat</h3>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                  <span className="text-primary-600 font-semibold text-sm">
                    {activity.type.charAt(0).toUpperCase()}
                  </span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{activity.message}</p>
                  <p className="text-xs text-gray-500">
                    {activity.user} tomonidan • {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions for Marketing Agency */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Tezkor amallar</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <Target className="w-6 h-6 text-blue-600 mx-auto mb-2" />
              <span className="text-sm font-medium text-gray-900">Yangi kampaniya</span>
            </button>
            <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <Users className="w-6 h-6 text-green-600 mx-auto mb-2" />
              <span className="text-sm font-medium text-gray-900">Mijoz qo'shish</span>
            </button>
            <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <Calendar className="w-6 h-6 text-purple-600 mx-auto mb-2" />
              <span className="text-sm font-medium text-gray-900">Kontent taqvimi</span>
            </button>
            <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <BarChart3 className="w-6 h-6 text-yellow-600 mx-auto mb-2" />
              <span className="text-sm font-medium text-gray-900">Hisobotlar</span>
            </button>
          </div>
        </div>

        {/* Upcoming Campaigns */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Kutilayotgan kampaniyalar</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <Zap className="w-5 h-5 text-blue-600" />
                <div>
                  <h4 className="font-medium text-gray-900">Black Friday kampaniyasi</h4>
                  <p className="text-sm text-gray-600">Boshlanish: 2024-11-20</p>
                </div>
              </div>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                Faol
              </span>
            </div>
            <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <MessageSquare className="w-5 h-5 text-green-600" />
                <div>
                  <h4 className="font-medium text-gray-900">Instagram Stories kampaniyasi</h4>
                  <p className="text-sm text-gray-600">Boshlanish: 2024-11-25</p>
                </div>
              </div>
              <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                Tayyorlanmoqda
              </span>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
} 