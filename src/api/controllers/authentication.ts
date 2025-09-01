import {Request, Response } from 'express';
import { ApiResponse } from '../../types/response';
import SessionService from '../services/SessionService';

const init = async (
  req: Request,
  res: Response<ApiResponse<String>>,
): Promise<void> => {
  try {
    //Logic to create a guest user
    const session = SessionService.createGuestToken();
    res.header( {'X-Guest-User': 'true'}).status(201).json({ success: true, message: 'Guest user created' , data: session});
  } catch (err) {
    res.status(500).json({ success: false, message: err instanceof Error ? err.message : String(err) });
  }
};

export default init;
