import express from 'express';
import cors from 'cors';

export default async ({ app }) => {
  // Basic middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  
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
  app.use((req, res) => {
    res.status(404).json({
      success: false,
      message: 'Route not found',
    });
  });

  return app;
}; 