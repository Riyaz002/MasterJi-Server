import { Request, Response } from 'express';
import { ApiResponse } from '../../types/response';
import { Page } from '../../types/page';
import PageModel from '../../models/Page';

const getPage = async (
  req: Request,
  res: Response<ApiResponse<Page>>
): Promise<void> => {
  try {
    // Use .lean() to get a plain JS object
    const page = await PageModel.findOne({ slug: req.params.slug }).lean();
    if (!page) {
      res.status(404).json({ success: false, message: 'Page not found' });
      return;
    }
    res.json({ success: true, data: page });
  } catch (err) {
    res.status(500).json({ success: false, message: err instanceof Error ? err.message : String(err) });
  }
};

export default getPage;