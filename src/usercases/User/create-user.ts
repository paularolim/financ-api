// import { User } from '../../models/user';
import { ValidationError } from '../../errors/ValidationError';
import { validationEmail } from '../../utils/validationEmail';

interface ICreateUser {
  name: string;
  email: string;
  password: string;
}

export class CreateUser {
  create(user: ICreateUser) {
    const verifyEmail = validationEmail(user.email);
    if (!verifyEmail) {
      return new ValidationError('the email is wrong');
    }
    return new Promise((resolve) => {
      resolve({
        name: user.name,
        email: user.email,
        password: user.password,
      });
    });
  }
}
