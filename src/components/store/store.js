


//  registration Page Api

// const handleRegistration = (event) => {
//     event.preventDefault();
//     if (errMsg.length === 0) {
//       Axios.post("https://ik-react-task.herokuapp.com/accounts/register/", {
//         email: emailAddress.toLowerCase(),
//         password: password,
//       })
//         .then((response) => {
//           setNewUser(false);
//           console.log(response);
//         })
//         .catch((err) => {
//           alert("failed to register the user!!");
//         });
//     }
//   };



//   Login page Api

// const handleLogin = (event) => {
//     event.preventDefault();
//     sendUserNameToNav();

//     Axios.post("https://ik-react-task.herokuapp.com/accounts/login/", {
//       email: emailAddress.toLowerCase(),
//       password: password,
//     })
//       .then((response) => {
//         localStorage.setItem("token", response.data.token);
//         setLoginStatus(response.status);
//       })
//       .catch((err) => {
//         alert("Login failed!!");
//       });
//   };