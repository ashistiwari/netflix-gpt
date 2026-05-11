// const handleSubmitButton = async (e) => {
//   e.preventDefault();

//   const message = checkValidateData(
//     email.current.value,
//     password.current.value
//   );

//   setErrorMessage(message);

//   if (message) return;

//   try {
//     const url = isSignIn ? "/auth/login" : "/auth/signup";

//     const payload = isSignIn
//       ? {
//           email: email.current.value,
//           password: password.current.value,
//         }
//       : {
//           firstName: firstName.current.value,
//           lastName: lastName.current.value,
//           email: email.current.value,
//           password: password.current.value,
//         };

//     const res = await api.post(url, payload);

//     if (isSignIn) {
//       localStorage.setItem("accessToken", res.data.token);
//       console.log(res.data.token);

//       navigate("/browse");
//     } else {
//       navigate("/");
//     }
//   } catch(err){

//   const errorMsg =
//       err.response?.data || "Something went wrong";

//   setErrorMessage(errorMsg);

//   console.error(errorMsg);
// }
// };