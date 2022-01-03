// import { User } from '../../models/user';
import { ValidationError } from '../../../errors/ValidationError';
import { validationEmail } from '../../../utils/user/validationEmail';
import { validationPassword } from '../../../utils/user/validationPassword';

interface ICreateUser {
  name: string;
  email: string;
  password: string;
}

export class CreateUser {
  create(user: ICreateUser) {
    const requiredFields = ['name', 'email', 'password'];

    for (const field of requiredFields) {
      if (!user[field as keyof ICreateUser]) {
        return new ValidationError(`the ${field} is required`);
      }
    }

    if (!validationEmail(user.email)) {
      return new ValidationError('the email is invalid');
    }

    if (!validationPassword(user.password)) {
      return new ValidationError('the password is invalid');
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
