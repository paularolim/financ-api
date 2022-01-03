import { ValidationError } from '../../../errors/ValidationError';

interface ICreateTransaction {
  value: Number;
}

export class CreateTransaction {
  create(transaction: ICreateTransaction) {
    if (transaction.value <= 0) {
      return new ValidationError('the value is invalid');
    }
    return new Promise((resolve) => {
      resolve({ value: transaction.value });
    });
  }
}
