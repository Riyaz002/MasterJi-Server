import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import pageRouter from '../api/routes/page';
import authenticationRouter from '../api/routes/authentication';
import { authenticator } from '../api/middlewares/authenticator';

interface ExpressLoaderOptions {
  app: Application;
}

export default async ({ app }: ExpressLoaderOptions): Promise<Application> => {
  // Basic middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Mount authentication routes under /api
  app.use(authenticator);

  // Mount authentication routes under /api
  app.use(authenticationRouter);

  // Mount page routes under /api
  app.use(pageRouter);

  // Health check endpoint
  app.get('/status', (req: Request, res: Response) => {
    res.status(200).end();
  });

  // Simple API endpoint
  app.get('/api', (req: Request, res: Response) => {
    res.json({
      success: true,
      message: 'MasterJi API Server',
      version: '1.0.0',
      status: 'running'
    });
  });

  // 404 handler
  app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).json({
      success: false,
      message: 'Route not found',
    });
  });

  // Error-handling middleware (must be last)
  app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    const status = err.message === 'Page not found' ? 404 : 500;
    res.status(status).json({
      success: false,
      message: err.message,
    });
  });

  return app;
}