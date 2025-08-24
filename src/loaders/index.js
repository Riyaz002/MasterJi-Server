import expressLoader from './express.js';
import mongooseLoader from './mongoose.js';

export default async ({ expressApp }) => {
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