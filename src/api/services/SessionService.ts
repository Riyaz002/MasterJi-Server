import jwt from 'jsonwebtoken';
import { User } from '../models/User';

class SessionService {

    static createGuestToken(): String {
        const payload = { guest: true };
        const token = jwt.sign(payload, process.env.JWT_SECRET as jwt.Secret, { expiresIn: '30d' });
        return token;
    }

    static createSession(user: User): string {
        const payload = { id: user._id, email: user.email };
        const token = jwt.sign(payload, process.env.JWT_SECRET as jwt.Secret);
        return token;
    }

    static validateToken(token: string): User | null {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET as jwt.Secret);
            return decoded as User;
        } catch (error) {
            return null;
        }
    }
}

export default SessionService;