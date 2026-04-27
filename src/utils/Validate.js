export const checkValidateData = (email, password) => {
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPasswordValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(
    password,
  );
  if (!isEmailValid) return "EmailId is not valid";
  if (!isPasswordValid) return "Password is not valid";
  return null;
};
