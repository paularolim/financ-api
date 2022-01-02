import { User } from '../../models/user';

interface ICreateUser {
  name: string;
  email: string;
  password: string;
}

// eslint-disable-next-line import/prefer-default-export
export class CreateUser {
  // eslint-disable-next-line class-methods-use-this
  create(user: ICreateUser): Promise<User> {
    return new Promise((resolve) => {
      resolve({ name: user.name, email: user.email, password: user.password });
    });
  }
}
