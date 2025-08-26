import Page from '../models/user.model.ts';

export const getPage = async (req, res) => {
  try {
    const page = await Page.findOne({ slug: req.params.slug });
    if (!page) return res.status(404).json({ success: false, message: 'Page not found' });
    res.json({ success: true, page });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};