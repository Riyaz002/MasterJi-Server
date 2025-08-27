import PageModel from '../../models/Page.js';

/**
 * @param {import('express').Request} req
 * @param {import('../../types/response.js').ApiResponse<Page>} res
 */
const getPage = async (req, res) => {
  try {
    // Use .lean() to get a plain JS object
    const page = await PageModel.findOne({ slug: req.params.slug }).lean();
    if (!page) return res.status(404).json({ success: false, message: 'Page not found' });
    res.json({ success: true, data: page });
  } catch (err) {
    res.status(500).json({ success: false, message: err?.message || String(err) });
  }
};

export default getPage;