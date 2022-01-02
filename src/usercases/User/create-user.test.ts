import { CreateUser } from './create-user';

describe('Create User', () => {
  it('should create an user and return', async () => {
    const user = await new CreateUser().create({
      name: 'any_name',
      email: 'any_email',
      password: 'any_password',
    });

    expect(user).toEqual(
      expect.objectContaining({
        name: 'any_name',
        email: 'any_email',
        password: 'any_password',
      }),
    );
  });
});
