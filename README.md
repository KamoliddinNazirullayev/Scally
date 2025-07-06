# Scally ERP - Enterprise Resource Planning System

A comprehensive, modern ERP solution built with React/Next.js frontend and Node.js/Express backend, designed for marketing agencies and businesses to manage their core operations efficiently.

## 🚀 Features

### Core Modules
- **Dashboard** - Real-time KPIs, charts, and activity feed
- **Inventory Management** - Product catalog, stock tracking, purchase orders
- **Financial Management** - Accounting, invoicing, expense tracking
- **Customer Relationship Management** - Customer database, sales pipeline
- **Human Resources** - Employee records, payroll, attendance
- **Reporting & Analytics** - Custom reports, KPI dashboards

### Technical Features
- 🔐 **Role-based Authentication** (Admin, Manager, Employee, Viewer)
- 📱 **Responsive Design** - Works on desktop, tablet, and mobile
- 🔄 **Real-time Updates** - Live data synchronization
- 🛡️ **Security** - JWT authentication, rate limiting, input validation
- 📊 **Data Visualization** - Charts and analytics
- 🎨 **Modern UI** - Clean, professional design with Tailwind CSS

## 🛠️ Tech Stack

### Backend
- **Node.js** with Express.js
- **PostgreSQL** database with Sequelize ORM
- **JWT** authentication
- **bcryptjs** for password hashing
- **express-validator** for input validation
- **helmet** for security headers
- **rate-limiting** for API protection

### Frontend
- **Next.js** with React 18
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **Recharts** for data visualization
- **React Hook Form** for form handling
- **Axios** for API communication
- **Zustand** for state management

## 📁 Project Structure

```
scally-erp/
├── server/                 # Backend API
│   ├── config/            # Database and app configuration
│   ├── middleware/        # Authentication and validation
│   ├── models/           # Database models
│   ├── routes/           # API routes
│   └── index.js          # Server entry point
├── client/               # Frontend application
│   ├── components/       # Reusable React components
│   ├── hooks/           # Custom React hooks
│   ├── pages/           # Next.js pages
│   ├── styles/          # Global styles
│   └── package.json     # Frontend dependencies
├── package.json          # Root package.json
└── README.md            # This file
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- PostgreSQL 12+
- npm or yarn

### 1. Clone the Repository
```bash
git clone <repository-url>
cd scally-erp
```

### 2. Install Dependencies
```bash
# Install backend dependencies
npm install

# Install frontend dependencies
cd client
npm install
cd ..
```

### 3. Environment Setup
```bash
# Copy environment example
cp env.example .env

# Edit .env with your configuration
nano .env
```

### 4. Database Setup
```bash
# Create PostgreSQL database
createdb scally_erp

# The database will be automatically migrated when you start the server
```

### 5. Start Development Servers
```bash
# Start both frontend and backend (from root directory)
npm run dev

# Or start them separately:
# Backend only
npm run server:dev

# Frontend only (from client directory)
cd client && npm run dev
```

### 6. Access the Application
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000

## 🔐 Authentication

The system includes a role-based authentication system with the following roles:

- **Admin** - Full system access
- **Manager** - Department-level access
- **Employee** - Limited access to assigned modules
- **Viewer** - Read-only access

### Demo Credentials
```
Admin: admin@scallyerp.com / admin123
Manager: manager@scallyerp.com / manager123
Employee: employee@scallyerp.com / employee123
```

## 📊 API Endpoints

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration
- `GET /api/auth/me` - Get current user
- `PUT /api/auth/me` - Update profile
- `PUT /api/auth/change-password` - Change password

### Users
- `GET /api/users` - List users (Admin only)
- `POST /api/users` - Create user (Admin only)
- `PUT /api/users/:id` - Update user (Admin only)
- `DELETE /api/users/:id` - Delete user (Admin only)

### Inventory
- `GET /api/inventory/products` - List products
- `POST /api/inventory/products` - Create product
- `PUT /api/inventory/products/:id` - Update product
- `DELETE /api/inventory/products/:id` - Delete product

### Finance
- `GET /api/finance/invoices` - List invoices
- `POST /api/finance/invoices` - Create invoice
- `GET /api/finance/expenses` - List expenses
- `POST /api/finance/expenses` - Create expense

### CRM
- `GET /api/crm/customers` - List customers
- `POST /api/crm/customers` - Create customer
- `GET /api/crm/leads` - List leads
- `POST /api/crm/leads` - Create lead

### HR
- `GET /api/hr/employees` - List employees
- `POST /api/hr/employees` - Create employee
- `GET /api/hr/attendance` - Attendance records
- `POST /api/hr/attendance` - Mark attendance

### Reports
- `GET /api/reports/sales` - Sales reports
- `GET /api/reports/inventory` - Inventory reports
- `GET /api/reports/financial` - Financial reports
- `GET /api/reports/hr` - HR reports

## 🎨 Customization

### Styling
The application uses Tailwind CSS with custom design tokens. You can customize:

- Colors in `client/tailwind.config.js`
- Global styles in `client/styles/globals.css`
- Component-specific styles in individual components

### Adding New Modules
1. Create new route files in `server/routes/`
2. Add database models in `server/models/`
3. Create frontend pages in `client/pages/`
4. Add navigation items in `client/components/layout/DashboardLayout.jsx`

## 🧪 Testing

```bash
# Run backend tests
npm test

# Run frontend tests
cd client && npm test

# Run all tests
npm run test:all
```

## 📦 Deployment

### Backend Deployment
```bash
# Set NODE_ENV=production
# Set up PostgreSQL database
# Configure environment variables
npm start
```

### Frontend Deployment
```bash
cd client
npm run build
npm start
```

### Docker Deployment
```bash
# Build and run with Docker Compose
docker-compose up -d
```

## 🔧 Development

### Code Style
- Use ESLint for code linting
- Follow Prettier formatting
- Write meaningful commit messages
- Add JSDoc comments for functions

### Git Workflow
1. Create feature branch from `main`
2. Make changes and test thoroughly
3. Submit pull request
4. Code review and merge

### Database Migrations
```bash
# Create new migration
npx sequelize-cli migration:generate --name migration-name

# Run migrations
npx sequelize-cli db:migrate

# Undo last migration
npx sequelize-cli db:migrate:undo
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation

## 🔄 Updates

Stay updated with the latest features and security patches by:
- Regularly pulling from the main branch
- Following the changelog
- Subscribing to release notifications

---

**Built with ❤️ for modern businesses** 