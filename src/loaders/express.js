import express from 'express';
import cors from 'cors';
import pageRouter from '../api/routes/page.js';

export default async ({ app }) => {
  // Basic middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  
  //Page
  app.use(pageRouter);

  // Health check endpoint
  app.get('/status', (req, res) => {
    res.status(200).end();
  });
  
  // Simple API endpoint
  app.get('/api', (req, res) => {
    res.json({
      success: true,
      message: 'MasterJi API Server',
      version: '1.0.0',
      status: 'running'
    });
  });
  
  // Simple catch-all for 404 (avoiding wildcard route issues)
  app.use((req, res, next) => {
    res.status(404).json({
      success: false,
      message: 'Route not found',
    });
  });

  // Error-handling middleware (must be last)
  app.use((err, req, res, next) => {
    const status = err.message === 'Page not found' ? 404 : 500;
    res.status(status).json({
      success: false,
      message: err.message,
  });
});

  return app;
} 