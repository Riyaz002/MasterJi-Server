import { Request, Response, NextFunction } from 'express';
import SessionService from '../services/SessionService';

export function authenticator(
    req: Request, 
    res: Response, 
    next: NextFunction
) {
  const authHeader = req.headers['authorization'];
  const token = authHeader?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ success: false, message: 'Unauthorized: No token provided' });
  }

  const session = SessionService.validateToken(token);

  if (!session) {
    return res.status(401).json({ success: false, message: 'Invalid or expired token' });
  }

  // Attach session info to request
  (req as any).session = session;
  next();
}