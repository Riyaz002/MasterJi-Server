import { Request, Response } from 'express';
import { ApiResponse } from '../../types/response';
import { User } from '../models/User';

const createGuestUser = async (
  req: Request,
  res: Response<ApiResponse<null>>
): Promise<void> => {
  try {
    //Logic to create a guest user
    res.header( {'X-Guest-User': 'true'}).status(201).json({ success: true, message: 'Guest user created' });
  } catch (err) {
    res.status(500).json({ success: false, message: err instanceof Error ? err.message : String(err) });
  }
};

export default createGuestUser;
