export const checkvalidData = (email, password) => {
  //const isfullname = /^[a-zA-Z\_]+$/.test(UserName);
  const isemailValidate = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPasswordValidate =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  //if (!isfullname) return "User Name is Not Valid";
  if (!isemailValidate) return "E-mail Id is not Valid";
  if (!isPasswordValidate) return "Password is Not Valid";

  return null;
};
