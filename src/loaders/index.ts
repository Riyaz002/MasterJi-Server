import expressLoader from './express';
import mongooseLoader from './mongoose';
import express, { Application } from 'express';
import mongoose from 'mongoose';

interface LoaderOptions {
  expressApp: Application;
}

interface LoaderResult {
  mongoConnection: typeof mongoose;
}

export default async ({ expressApp }: LoaderOptions): Promise<LoaderResult> => {
  // Initialize MongoDB connection
  const mongoConnection = await mongooseLoader();
  console.log('✅ MongoDB Initialized');

  // Initialize Express app with all middleware and routes
  await expressLoader({ app: expressApp });
  console.log('✅ Express Initialized');

  return {
    mongoConnection,
  };
};