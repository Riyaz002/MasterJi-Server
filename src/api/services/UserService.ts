import { Service } from 'typedi';
import UserModel, { User } from '../models/User';

@Service()
export default class UserService {
  private userModel: Model<User>;

  constructor() {
    this.userModel = UserModel;
  }

  async getUserByEmail(email: string): Promise<User | null> {
    return this.userModel.findOne({ email: email }).exec();
  }

  async createUser(data: Partial<User>): Promise<User> {
    const user = new this.userModel(data);
    return user.save();
  }

  async deleteUser(userId: string): Promise<User | null> {
    return this.userModel.findByIdAndDelete(userId).exec();
  }
}