import mongoose, { Document, Schema } from 'mongoose';

export interface Component {
  type: string;
  props: Record<string, any>;
}

export interface Page extends Document {
  slug: string;
  title?: string;
  components: Component[];
}

const ComponentSchema = new Schema<Component>({
  type: { type: String, required: true },
  props: { type: Schema.Types.Mixed }
});

const PageSchema = new Schema<Page>({
  slug: { type: String, required: true, unique: true },
  title: { type: String },
  components: [ComponentSchema]
});

export default mongoose.model<Page>('Page', PageSchema);