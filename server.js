import express from 'express';
import loaders from './src/loaders/index.js';
import config from './src/config/index.js';

async function startServer() {
  try {
    const app = express();
    
    console.log('🚀 Starting MasterJi Server...');
    console.log('📁 Environment:', config.nodeEnv);
    console.log('🔧 Port:', config.port);

    // Initialize all loaders
    await loaders({ expressApp: app });

    // Start the server
    app.listen(config.port, () => {
      console.log('🎉 Server is running!');
      console.log(`📍 Server URL: http://localhost:${config.port}`);
      console.log(`🔍 Health Check: http://localhost:${config.port}/status`);
      console.log(`📊 API Docs: http://localhost:${config.port}/api`);
      console.log('⏰', new Date().toLocaleString());
    });

    // Graceful shutdown
    process.on('SIGTERM', () => {
      console.log('SIGTERM received, shutting down gracefully');
      process.exit(0);
    });

    process.on('SIGINT', () => {
      console.log('SIGINT received, shutting down gracefully');
      process.exit(0);
    });

  } catch (error) {
    console.error('❌ Failed to start server:', error);
    process.exit(1);
  }
}

// Handle uncaught exceptions
process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
  process.exit(1);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  process.exit(1);
});

startServer(); 