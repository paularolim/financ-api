import { CreateTransaction } from './create-transaction';

describe('Create Transaction', () => {
  it('should create an transaction and return', async () => {
    const transaction = await new CreateTransaction().create({
      value: 1.0,
    });

    expect(transaction).toEqual(
      expect.objectContaining({
        value: 1.0,
      }),
    );
  });

  it('should return an error if an invalid value is provided', async () => {
    const transaction = await new CreateTransaction().create({
      value: 0,
    });

    expect(transaction).toHaveProperty('message', 'the value is invalid');
  });
});
