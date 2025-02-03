// import React, { useState, useContext, useEffect } from "react";
// import { useForm, SubmitHandler } from "react-hook-form";
// import styles from "./loginSignup.module.css";
// import axios from "axios";
// import { UserContext } from "../../context/userContext";
// import { useLocation, useNavigate } from "react-router-dom";
// import { notifySuccess } from "../../utility/Tostify/Tosts";

// interface LoginFormInputs {
//   email: string;
//   password: string;
// }

// interface SignupFormInputs {
//   email: string;
//   name: string;
//   mobileNo: string;
//   password: string;
// }

// const LoginSignup: React.FC = () => {
//   const [activeForm, setActiveForm] = useState<"login" | "signup">("login");
//   const { setIsLoggedIn } = useContext(UserContext);
//   const [errorMessageLogin, setErrorMessageLogin] = useState<string>("");
//   const [errorMessageSignup, setErrorMessageSignup] = useState<string>("");
//   const [passwordVisibleLogin, setPasswordVisibleLogin] = useState<boolean>(false);
//   const [passwordVisibleSignup, setPasswordVisibleSignup] = useState<boolean>(false);
//   const navigate = useNavigate();
//   const location = useLocation();

//   const type =
//     (location.state?.type as "login" | "signup") ||
//     (location.pathname.includes("signup") ? "signup" : "login");

//   useEffect(() => {
//     setActiveForm(type);
//     window.scrollTo(0, 0);
//   }, [type]);

//   useEffect(() => {
//     const queryParams = new URLSearchParams(location.search);
//     if (queryParams.get("error") === "userAlreadyExists") {
//       setErrorMessageSignup("Error: User already logged in with this email.");
//     }
//   }, [location.search]);

//   const {
//     register: registerLogin,
//     handleSubmit: handleLoginSubmit,
//     formState: { errors: loginErrors },
//   } = useForm<LoginFormInputs>();

//   const {
//     register: registerSignup,
//     handleSubmit: handleSignupSubmit,
//     formState: { errors: signupErrors },
//     reset: signupReset,
//   } = useForm<SignupFormInputs>();

//   const onSubmitLogin: SubmitHandler<LoginFormInputs> = async (data) => {
//     setErrorMessageLogin("");
//     try {
//       const response = await axios.post("/api/user/login", data);
//       if (response.status === 200) {
//         setIsLoggedIn(true);
//         notifySuccess("Login Successful");
//         navigate("/home");
//       }
//     } catch (error: any) {
//       setErrorMessageLogin(error?.response?.data?.message || "Error occurred");
//     }
//   };

//   const onSubmitSignup: SubmitHandler<SignupFormInputs> = async (data) => {
//     setErrorMessageSignup("");
//     try {
//       const response = await axios.post("/api/user/register", data);
//       if (response.status === 201) {
//         notifySuccess("Signup Successful");
//         signupReset();
//         setActiveForm("login");
//         navigate("/login");
//       }
//     } catch (error: any) {
//       setErrorMessageSignup(error?.response?.data?.message || "Error occurred");
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.img}>
//         <img src={activeForm === "login" ? "/loginImg.png" : "/signupImg.png"} alt="Authentication" />
//       </div>
//       <div className={styles.formContainer}>
//         <p className={styles.welcomeText}>Welcome to IQpaths!</p>
//         <div className={styles.toggleButtonContainer}>
//           <button
//             className={`${styles.toggleButton} ${activeForm === "login" ? styles.activeButton : ""}`}
//             onClick={() => setActiveForm("login")}
//           >
//             Login
//           </button>
//           <button
//             className={`${styles.toggleButton} ${activeForm === "signup" ? styles.activeButton : ""}`}
//             onClick={() => setActiveForm("signup")}
//           >
//             Register
//           </button>
//         </div>
//         {activeForm === "login" ? (
//           <form onSubmit={handleLoginSubmit(onSubmitLogin)} className={styles.form}>
//             <input type="email" placeholder="Email" {...registerLogin("email", { required: "Email is required" })} />
//             {loginErrors.email && <p className={styles.errorMessage}>{loginErrors.email.message}</p>}
//             <div className={styles.passwordInputContainer}>
//               <input type={passwordVisibleLogin ? "text" : "password"} placeholder="Password" {...registerLogin("password", { required: "Password is required" })} />
//               <button type="button" onClick={() => setPasswordVisibleLogin(!passwordVisibleLogin)}>
//                 <img src={passwordVisibleLogin ? "/hide.svg" : "/show.svg"} alt="Toggle" />
//               </button>
//             </div>
//             {errorMessageLogin && <p className={styles.errorMessage}>{errorMessageLogin}</p>}
//             <button type="submit">Login</button>
//           </form>
//         ) : (
//           <form onSubmit={handleSignupSubmit(onSubmitSignup)} className={styles.form}>
//             <input type="email" placeholder="Email" {...registerSignup("email", { required: "Email is required" })} />
//             {signupErrors.email && <p className={styles.errorMessage}>{signupErrors.email.message}</p>}
//             <input type="text" placeholder="Name" {...registerSignup("name", { required: "Name is required" })} />
//             {signupErrors.name && <p className={styles.errorMessage}>{signupErrors.name.message}</p>}
//             <input type="number" placeholder="Phone Number" {...registerSignup("mobileNo", { required: "Phone Number is required" })} />
//             {signupErrors.mobileNo && <p className={styles.errorMessage}>{signupErrors.mobileNo.message}</p>}
//             <div className={styles.passwordInputContainer}>
//               <input type={passwordVisibleSignup ? "text" : "password"} placeholder="Password" {...registerSignup("password", { required: "Password is required" })} />
//               <button type="button" onClick={() => setPasswordVisibleSignup(!passwordVisibleSignup)}>
//                 <img src={passwordVisibleSignup ? "/hide.svg" : "/show.svg"} alt="Toggle" />
//               </button>
//             </div>
//             {errorMessageSignup && <p className={styles.errorMessage}>{errorMessageSignup}</p>}
//             <button type="submit">Register</button>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// };

// export default LoginSignup;
