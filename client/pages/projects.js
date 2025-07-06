import { useState } from 'react';
import { 
  Plus, 
  Search, 
  Filter, 
  MoreVertical, 
  FileText, 
  Calendar, 
  Users, 
  DollarSign,
  Eye, 
  Edit, 
  Trash2,
  CheckCircle,
  Clock,
  AlertCircle,
  TrendingUp
} from 'lucide-react';
import DashboardLayout from '../components/layout/DashboardLayout';

// Mock data for projects
const projects = [
  {
    id: 1,
    name: 'E-commerce Website',
    client: 'TechStart',
    type: 'Web Development',
    status: 'completed',
    progress: 100,
    budget: '8,500,000 so\'m',
    spent: '8,200,000 so\'m',
    startDate: '2024-09-01',
    endDate: '2024-11-15',
    team: ['Aziza Karimova', 'Dilshod Toshmatov', 'Malika Yusupova'],
    description: 'Zamonaviy e-commerce platforma yaratish',
    priority: 'high',
  },
  {
    id: 2,
    name: 'Instagram Marketing Campaign',
    client: 'FashionBrand',
    type: 'Social Media',
    status: 'active',
    progress: 75,
    budget: '3,200,000 so\'m',
    spent: '2,400,000 so\'m',
    startDate: '2024-11-01',
    endDate: '2024-12-31',
    team: ['Aziza Karimova', 'Jamshid Alimov'],
    description: 'Instagram orqali moda brendini targ\'ib qilish',
    priority: 'medium',
  },
  {
    id: 3,
    name: 'Brand Identity Design',
    client: 'BeautyShop',
    type: 'Design',
    status: 'active',
    progress: 45,
    budget: '2,800,000 so\'m',
    spent: '1,260,000 so\'m',
    startDate: '2024-10-15',
    endDate: '2024-12-15',
    team: ['Malika Yusupova', 'Dilshod Toshmatov'],
    description: 'Yangi brend identifikatsiyasi va logotip yaratish',
    priority: 'high',
  },
  {
    id: 4,
    name: 'Google Ads Campaign',
    client: 'EduCenter',
    type: 'PPC',
    status: 'planned',
    progress: 0,
    budget: '1,500,000 so\'m',
    spent: '0 so\'m',
    startDate: '2024-12-01',
    endDate: '2025-01-31',
    team: ['Jamshid Alimov'],
    description: 'Google Ads orqali ta\'lim markazini targ\'ib qilish',
    priority: 'low',
  },
];

const statusColors = {
  active: 'bg-blue-100 text-blue-800',
  completed: 'bg-green-100 text-green-800',
  planned: 'bg-gray-100 text-gray-800',
  paused: 'bg-yellow-100 text-yellow-800',
};

const priorityColors = {
  high: 'bg-red-100 text-red-800',
  medium: 'bg-yellow-100 text-yellow-800',
  low: 'bg-green-100 text-green-800',
};

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.client.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || project.status === statusFilter;
    const matchesType = typeFilter === 'all' || project.type === typeFilter;
    return matchesSearch && matchesStatus && matchesType;
  });

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Loyihalar</h1>
            <p className="text-gray-600 mt-1">Marketing loyihalaringizni boshqaring</p>
          </div>
          <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 flex items-center">
            <Plus className="w-4 h-4 mr-2" />
            Yangi loyiha
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Jami loyihalar</p>
                <p className="text-2xl font-bold text-gray-900">{projects.length}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Tugatilgan</p>
                <p className="text-2xl font-bold text-gray-900">
                  {projects.filter(p => p.status === 'completed').length}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <Clock className="w-6 h-6 text-yellow-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Faol loyihalar</p>
                <p className="text-2xl font-bold text-gray-900">
                  {projects.filter(p => p.status === 'active').length}
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
                <p className="text-sm font-medium text-gray-600">Jami byudjet</p>
                <p className="text-2xl font-bold text-gray-900">16M so'm</p>
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
                  placeholder="Loyiha nomi yoki mijoz bo'yicha qidirish..."
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
                <option value="completed">Tugatilgan</option>
                <option value="planned">Rejalashtirilgan</option>
                <option value="paused">To'xtatilgan</option>
              </select>
              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="all">Barcha turlar</option>
                <option value="Web Development">Web Development</option>
                <option value="Social Media">Social Media</option>
                <option value="Design">Design</option>
                <option value="PPC">PPC</option>
              </select>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{project.name}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${priorityColors[project.priority]}`}>
                      {project.priority === 'high' && 'Yuqori'}
                      {project.priority === 'medium' && 'O\'rta'}
                      {project.priority === 'low' && 'Past'}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{project.client}</p>
                  <p className="text-sm text-gray-500 mb-3">{project.description}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>{project.type}</span>
                    <span>•</span>
                    <span>{project.startDate} - {project.endDate}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[project.status]}`}>
                    {project.status === 'active' && 'Faol'}
                    {project.status === 'completed' && 'Tugatilgan'}
                    {project.status === 'planned' && 'Rejalashtirilgan'}
                    {project.status === 'paused' && 'To\'xtatilgan'}
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
                  <span>{project.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Team */}
              <div className="mb-4">
                <p className="text-sm text-gray-600 mb-2">Jamoa:</p>
                <div className="flex flex-wrap gap-2">
                  {project.team.map((member, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                      {member}
                    </span>
                  ))}
                </div>
              </div>

              {/* Budget Info */}
              <div className="flex justify-between items-center text-sm mb-4">
                <div>
                  <span className="text-gray-500">Byudjet: </span>
                  <span className="font-medium">{project.budget}</span>
                </div>
                <div>
                  <span className="text-gray-500">Sarflangan: </span>
                  <span className="font-medium">{project.spent}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
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
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Loyihalar topilmadi</h3>
            <p className="text-gray-500 mb-4">Qidiruv natijalariga mos loyihalar yo'q</p>
            <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700">
              Yangi loyiha yaratish
            </button>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
} 