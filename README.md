# MasterJi Server 🚀

A bulletproof Node.js server built with Express.js following industry best practices and a scalable architecture.

## 🏗️ Architecture Overview

This project follows the **3-Layer Architecture** pattern as described in the [Bulletproof Node.js Project Architecture](https://softwareontheroad.com/ideal-nodejs-project-structure/) blog post:

- **API Layer**: Express.js routes and controllers
- **Service Layer**: Business logic and domain services
- **Data Layer**: Database models and data access

## 📁 Project Structure

```
src/
├── api/                    # Express route controllers
│   ├── auth/              # Authentication endpoints
│   ├── user/              # User management endpoints
│   └── health/            # Health check endpoints
├── config/                 # Environment configuration
├── jobs/                   # Agenda.js job definitions
├── loaders/                # Application initialization modules
├── middleware/             # Custom middleware
├── models/                 # Database models (Mongoose)
├── services/               # Business logic services
├── subscribers/            # Event handlers (Pub/Sub)
└── types/                  # TypeScript type definitions
```

## ✨ Features

- 🔐 **JWT Authentication** with refresh tokens
- 📧 **Email Service** using Nodemailer
- 📊 **Analytics Tracking** for user events
- ⏰ **Job Scheduling** with Agenda.js
- 🎯 **Event-Driven Architecture** with Pub/Sub pattern
- 🛡️ **Security Middleware** (Helmet, CORS, Rate Limiting)
- 📝 **Input Validation** with Joi
- 🗄️ **MongoDB Integration** with Mongoose
- 🧪 **Testing Ready** with Jest
- 📈 **Health Monitoring** endpoints

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or cloud)
- Redis (optional, for Agenda jobs)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd masterji-server
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:
   ```env
   # Server Configuration
   PORT=5000
   NODE_ENV=development
   
   # Database Configuration
   DATABASE_URL=mongodb://localhost:27017/masterji
   
   # JWT Configuration
   JWT_SECRET=your-super-secret-jwt-key-change-in-production
   JWT_EXPIRES_IN=7d
   
   # Email Configuration
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   ```

4. **Start the server**
   ```bash
   # Development mode
   npm run dev
   
   # Production mode
   npm start
   ```

## 📚 API Endpoints

### Health Check
- `GET /status` - Basic health check
- `GET /api/health` - Detailed health information

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/refresh` - Refresh access token
- `POST /api/auth/logout` - User logout
- `GET /api/auth/verify` - Verify token

### User Management
- `GET /api/users` - Get all users (admin only)
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile
- `DELETE /api/users/profile` - Delete user account

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Start development server with nodemon
npm start            # Start production server
npm test             # Run tests
npm run test:watch   # Run tests in watch mode
```

### Code Structure Principles

1. **Separation of Concerns**: Business logic stays in services, not controllers
2. **Dependency Injection**: Services receive dependencies through constructor
3. **Event-Driven**: Use Pub/Sub pattern for background tasks
4. **Validation**: Input validation at the API layer
5. **Error Handling**: Centralized error handling with proper HTTP status codes

### Adding New Features

1. **Create Model** in `src/models/`
2. **Create Service** in `src/services/`
3. **Create Controller** in `src/api/`
4. **Add Routes** to the appropriate router
5. **Add Validation** if needed
6. **Add Tests** for the new functionality

## 🧪 Testing

The project is set up with Jest for testing. Run tests with:

```bash
npm test
```

## 🚀 Deployment

### Production Considerations

1. **Environment Variables**: Set all required environment variables
2. **Database**: Use production MongoDB instance
3. **Security**: Change default JWT secret
4. **Monitoring**: Add proper logging and monitoring
5. **SSL**: Use HTTPS in production

### Docker (Optional)

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 5000
CMD ["npm", "start"]
```

## 📖 Learning Resources

- [Bulletproof Node.js Project Architecture](https://softwareontheroad.com/ideal-nodejs-project-structure/)
- [Express.js Documentation](https://expressjs.com/)
- [Mongoose Documentation](https://mongoosejs.com/)
- [JWT Best Practices](https://auth0.com/blog/a-look-at-the-latest-draft-for-jwt-bcp/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

## 🆘 Support

If you have any questions or need help, please open an issue in the repository.

---

Built with ❤️ using the bulletproof Node.js architecture pattern. 