export const validationPassword = (password: string) => {
  const pattern = /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d).*$/;
  return pattern.test(password);
};
