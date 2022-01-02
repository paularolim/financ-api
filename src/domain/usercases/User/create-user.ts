// import { User } from '../../models/user';
import { ValidationError } from '../../../errors/ValidationError';
import { validationEmail } from '../../../utils/validationEmail';
import { validationPassword } from '../../../utils/validationPassword';

interface ICreateUser {
  name: string;
  email: string;
  password: string;
}

export class CreateUser {
  create(user: ICreateUser) {
    if (!validationEmail(user.email)) {
      return new ValidationError('the email is wrong');
    }

    if (!validationPassword(user.password)) {
      return new ValidationError('the password is wrong');
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
