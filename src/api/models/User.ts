import mongoose, { Document, Schema } from 'mongoose';

export interface User extends Document {
  email: { type: String, required: true, unique: true },
  password: { type: String },
  username: { type: String, required: false },
  avatar: { type: String, required: false }
}

const UserSchema = new Schema<User>({
  email: { type: String, required: true, unique: true },
  password: { type: String },
  username: { type: String, required: false },
  avatar: { type: String, required: false }
});

export default mongoose.model<User>('User', UserSchema);