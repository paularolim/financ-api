import { ValidationError } from '../../../errors/ValidationError';
import { CreateUser } from './create-user';

describe('Create User', () => {
  it('should create an user and return', async () => {
    const user = await new CreateUser().create({
      name: 'any_name',
      email: 'any_email@email.com',
      password: 'any_password2',
    });

    expect(user).toEqual(
      expect.objectContaining({
        name: 'any_name',
        email: 'any_email@email.com',
        password: 'any_password2',
      }),
    );
  });

  it('should return an error if an invalid email is provided', async () => {
    const user = await new CreateUser().create({
      name: 'any_name',
      email: 'any_email',
      password: 'any_password2',
    });

    expect(user instanceof ValidationError).toBeTruthy();
  });

  it('should return an error if an invalid password is provided', async () => {
    const user = await new CreateUser().create({
      name: 'any_name',
      email: 'any_email@email.com',
      password: 'any_password',
    });

    expect(user instanceof ValidationError).toBeTruthy();
  });

  it('should return an error if the name is undefined', async () => {
    const user = await new CreateUser().create({
      name: '',
      email: 'any_email@email.com',
      password: 'any_password2',
    });

    expect(user instanceof ValidationError).toBeTruthy();
  });
});
