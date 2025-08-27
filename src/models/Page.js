import mongoose from 'mongoose';

const PageSchema = new mongoose.Schema({
  slug: { type: String, required: true, unique: true },
  title: String,
  components: [
    {
      type: { type: String }, // e.g., 'header', 'text', 'image', 'form'
      props: mongoose.Schema.Types.Mixed // flexible for component data
    }
  ]
});

export default mongoose.model('Page', PageSchema);