import { useState } from 'react';
import { 
  Plus, 
  Search, 
  Filter, 
  MoreVertical, 
  Users, 
  Mail, 
  Phone, 
  Globe,
  Eye, 
  Edit, 
  Trash2,
  Calendar,
  DollarSign,
  TrendingUp,
  MessageSquare
} from 'lucide-react';
import DashboardLayout from '../components/layout/DashboardLayout';

// Mock data for clients
const clients = [
  {
    id: 1,
    name: 'TechStart',
    contactPerson: 'Aziza Karimova',
    email: 'aziza@techstart.uz',
    phone: '+998 90 123 45 67',
    website: 'www.techstart.uz',
    industry: 'Texnologiya',
    status: 'active',
    totalSpent: '15,500,000 so\'m',
    activeCampaigns: 3,
    lastContact: '2024-11-15',
    nextMeeting: '2024-11-25',
    avatar: 'TK',
  },
  {
    id: 2,
    name: 'FashionBrand',
    contactPerson: 'Dilshod Toshmatov',
    email: 'dilshod@fashionbrand.uz',
    phone: '+998 91 234 56 78',
    website: 'www.fashionbrand.uz',
    industry: 'Moda',
    status: 'active',
    totalSpent: '8,200,000 so\'m',
    activeCampaigns: 2,
    lastContact: '2024-11-10',
    nextMeeting: '2024-11-30',
    avatar: 'FB',
  },
  {
    id: 3,
    name: 'BeautyShop',
    contactPerson: 'Malika Yusupova',
    email: 'malika@beautyshop.uz',
    phone: '+998 92 345 67 89',
    website: 'www.beautyshop.uz',
    industry: 'Go'zallik',
    status: 'inactive',
    totalSpent: '12,800,000 so\'m',
    activeCampaigns: 0,
    lastContact: '2024-10-20',
    nextMeeting: null,
    avatar: 'BS',
  },
  {
    id: 4,
    name: 'EduCenter',
    contactPerson: 'Jamshid Alimov',
    email: 'jamshid@educenter.uz',
    phone: '+998 93 456 78 90',
    website: 'www.educenter.uz',
    industry: 'Ta'lim',
    status: 'prospect',
    totalSpent: '0 so\'m',
    activeCampaigns: 1,
    lastContact: '2024-11-18',
    nextMeeting: '2024-11-28',
    avatar: 'EC',
  },
];

const statusColors = {
  active: 'bg-green-100 text-green-800',
  inactive: 'bg-gray-100 text-gray-800',
  prospect: 'bg-blue-100 text-blue-800',
};

export default function Clients() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const filteredClients = clients.filter(client => {
    const matchesSearch = client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         client.contactPerson.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         client.industry.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || client.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Mijozlar</h1>
            <p className="text-gray-600 mt-1">Mijozlaringizni boshqaring va kuzatib boring</p>
          </div>
          <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 flex items-center">
            <Plus className="w-4 h-4 mr-2" />
            Yangi mijoz
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Jami mijozlar</p>
                <p className="text-2xl font-bold text-gray-900">{clients.length}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Faol mijozlar</p>
                <p className="text-2xl font-bold text-gray-900">
                  {clients.filter(c => c.status === 'active').length}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="p-2 bg-purple-100 rounded-lg">
                <DollarSign className="w-6 h-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Jami daromad</p>
                <p className="text-2xl font-bold text-gray-900">36.5M so'm</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <Calendar className="w-6 h-6 text-yellow-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Bugungi uchrashuvlar</p>
                <p className="text-2xl font-bold text-gray-900">3</p>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Mijoz nomi, aloqa shaxsi yoki soha bo'yicha qidirish..."
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
                <option value="inactive">Faol emas</option>
                <option value="prospect">Potensial</option>
              </select>
            </div>
          </div>
        </div>

        {/* Clients List */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Mijozlar ro'yxati</h3>
          </div>
          <div className="divide-y divide-gray-200">
            {filteredClients.map((client) => (
              <div key={client.id} className="p-6 hover:bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                      <span className="text-primary-600 font-semibold text-sm">{client.avatar}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <h4 className="text-lg font-semibold text-gray-900">{client.name}</h4>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[client.status]}`}>
                          {client.status === 'active' && 'Faol'}
                          {client.status === 'inactive' && 'Faol emas'}
                          {client.status === 'prospect' && 'Potensial'}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-1">{client.contactPerson}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span className="flex items-center">
                          <Mail className="w-3 h-3 mr-1" />
                          {client.email}
                        </span>
                        <span className="flex items-center">
                          <Phone className="w-3 h-3 mr-1" />
                          {client.phone}
                        </span>
                        <span className="flex items-center">
                          <Globe className="w-3 h-3 mr-1" />
                          {client.website}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <p className="text-sm text-gray-500">Sohasi</p>
                      <p className="font-medium text-gray-900">{client.industry}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">Faol kampaniyalar</p>
                      <p className="font-medium text-gray-900">{client.activeCampaigns}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">Jami sarflangan</p>
                      <p className="font-medium text-gray-900">{client.totalSpent}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="p-2 hover:bg-gray-100 rounded-lg">
                        <MessageSquare className="w-4 h-4 text-gray-400" />
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded-lg">
                        <Eye className="w-4 h-4 text-gray-400" />
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded-lg">
                        <Edit className="w-4 h-4 text-gray-400" />
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded-lg">
                        <MoreVertical className="w-4 h-4 text-gray-400" />
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Additional Info */}
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between text-sm">
                    <div>
                      <span className="text-gray-500">Oxirgi aloqa: </span>
                      <span className="font-medium">{client.lastContact}</span>
                    </div>
                    {client.nextMeeting && (
                      <div>
                        <span className="text-gray-500">Keyingi uchrashuv: </span>
                        <span className="font-medium text-blue-600">{client.nextMeeting}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Empty State */}
        {filteredClients.length === 0 && (
          <div className="text-center py-12">
            <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Mijozlar topilmadi</h3>
            <p className="text-gray-500 mb-4">Qidiruv natijalariga mos mijozlar yo'q</p>
            <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700">
              Yangi mijoz qo'shish
            </button>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
} 