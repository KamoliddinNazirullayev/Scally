import { useState } from 'react';
import { 
  Plus, 
  Search, 
  Filter, 
  MoreVertical, 
  Target, 
  TrendingUp, 
  Eye, 
  Edit, 
  Trash2,
  Calendar,
  DollarSign,
  Users,
  BarChart3
} from 'lucide-react';
import DashboardLayout from '../components/layout/DashboardLayout';

// Mock data for campaigns
const campaigns = [
  {
    id: 1,
    name: 'Black Friday kampaniyasi',
    client: 'TechStart',
    platform: 'Instagram, Facebook',
    status: 'active',
    budget: '5,000,000 so\'m',
    spent: '3,200,000 so\'m',
    impressions: '125,000',
    clicks: '8,500',
    conversions: '450',
    startDate: '2024-11-20',
    endDate: '2024-12-05',
    progress: 75,
  },
  {
    id: 2,
    name: 'Yangi yil maxsus taklif',
    client: 'FashionBrand',
    platform: 'TikTok, Instagram',
    status: 'planned',
    budget: '3,500,000 so\'m',
    spent: '0 so\'m',
    impressions: '0',
    clicks: '0',
    conversions: '0',
    startDate: '2024-12-15',
    endDate: '2025-01-15',
    progress: 0,
  },
  {
    id: 3,
    name: 'Summer Sale kampaniyasi',
    client: 'BeautyShop',
    platform: 'Facebook, Google Ads',
    status: 'completed',
    budget: '2,800,000 so\'m',
    spent: '2,800,000 so\'m',
    impressions: '89,000',
    clicks: '6,200',
    conversions: '320',
    startDate: '2024-06-01',
    endDate: '2024-08-31',
    progress: 100,
  },
  {
    id: 4,
    name: 'Back to School',
    client: 'EduCenter',
    platform: 'Instagram, YouTube',
    status: 'active',
    budget: '4,200,000 so\'m',
    spent: '2,100,000 so\'m',
    impressions: '95,000',
    clicks: '7,800',
    conversions: '520',
    startDate: '2024-09-01',
    endDate: '2024-10-15',
    progress: 50,
  },
];

const statusColors = {
  active: 'bg-green-100 text-green-800',
  planned: 'bg-blue-100 text-blue-800',
  completed: 'bg-gray-100 text-gray-800',
  paused: 'bg-yellow-100 text-yellow-800',
};

export default function Campaigns() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const filteredCampaigns = campaigns.filter(campaign => {
    const matchesSearch = campaign.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         campaign.client.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || campaign.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Kampaniyalar</h1>
            <p className="text-gray-600 mt-1">Marketing kampaniyalaringizni boshqaring</p>
          </div>
          <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 flex items-center">
            <Plus className="w-4 h-4 mr-2" />
            Yangi kampaniya
          </button>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Kampaniya yoki mijoz nomini qidirish..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-gray-400" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="all">Barcha holatlar</option>
                <option value="active">Faol</option>
                <option value="planned">Rejalashtirilgan</option>
                <option value="completed">Tugatilgan</option>
                <option value="paused">To'xtatilgan</option>
              </select>
            </div>
          </div>
        </div>

        {/* Campaigns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredCampaigns.map((campaign) => (
            <div key={campaign.id} className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{campaign.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{campaign.client}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>{campaign.platform}</span>
                    <span>•</span>
                    <span>{campaign.startDate} - {campaign.endDate}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[campaign.status]}`}>
                    {campaign.status === 'active' && 'Faol'}
                    {campaign.status === 'planned' && 'Rejalashtirilgan'}
                    {campaign.status === 'completed' && 'Tugatilgan'}
                    {campaign.status === 'paused' && 'To\'xtatilgan'}
                  </span>
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <MoreVertical className="w-4 h-4 text-gray-400" />
                  </button>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Progress</span>
                  <span>{campaign.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${campaign.progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-lg font-semibold text-gray-900">{campaign.impressions}</div>
                  <div className="text-xs text-gray-500">Ko'rinishlar</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-lg font-semibold text-gray-900">{campaign.conversions}</div>
                  <div className="text-xs text-gray-500">Konversiyalar</div>
                </div>
              </div>

              {/* Budget Info */}
              <div className="flex justify-between items-center text-sm">
                <div>
                  <span className="text-gray-500">Byudjet: </span>
                  <span className="font-medium">{campaign.budget}</span>
                </div>
                <div>
                  <span className="text-gray-500">Sarflangan: </span>
                  <span className="font-medium">{campaign.spent}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
                <div className="flex items-center space-x-2">
                  <button className="flex items-center text-sm text-blue-600 hover:text-blue-700">
                    <Eye className="w-4 h-4 mr-1" />
                    Ko'rish
                  </button>
                  <button className="flex items-center text-sm text-gray-600 hover:text-gray-700">
                    <Edit className="w-4 h-4 mr-1" />
                    Tahrirlash
                  </button>
                </div>
                <button className="flex items-center text-sm text-red-600 hover:text-red-700">
                  <Trash2 className="w-4 h-4 mr-1" />
                  O'chirish
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredCampaigns.length === 0 && (
          <div className="text-center py-12">
            <Target className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Kampaniyalar topilmadi</h3>
            <p className="text-gray-500 mb-4">Qidiruv natijalariga mos kampaniyalar yo'q</p>
            <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700">
              Yangi kampaniya yaratish
            </button>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
} 