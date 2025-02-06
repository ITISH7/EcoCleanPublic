import React, { ReactNode } from "react";

export interface RouteConfig {
    path: string;
    name: string;
    component: React.LazyExoticComponent<React.FC>;
    children?:RouteConfig[]
  }
  
  const Home = React.lazy(() => import("../Pages/Home/Home"));
  const LoginAndSignup = React.lazy(() => import("../Pages/LoginAndSignUp/LoginAndSignUp"));
  const Login = React.lazy(() => import("../Pages/LoginAndSignUp/Login"));
  const Register = React.lazy(() => import("../Pages/LoginAndSignUp/Register"));
  const NotFound = React.lazy(()=> { return import("../Pages/NotFound/NotFound")})


  
  export const routes: RouteConfig[] = [
    { path: "/", name: "Home", component: Home },
    { path: "/LoginAndSignup", name: "LoginAndSignup", component: LoginAndSignup,
      children:[
      { path: "/LoginAndSignup/Login", name: "Login", component: Login },
      { path: "/LoginAndSignup/Register", name: "Register", component: Register }
      ],
    }, 
    { path: "*", name: "NotFound", component: NotFound },
  ];
  