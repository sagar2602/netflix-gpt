export const validateUser = (email, password, name) => {
  // validate email
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
  const isPassValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (name !== 'loginForm' && !name) return [ "User Name cannot be empty!", 'name' ];
  if (!isEmailValid) return ["Email is not valid!", 'email'];
  if (!isPassValid) return [ "Password is not valid!", 'pass' ];

  return null;
}