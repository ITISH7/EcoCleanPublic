import React from "react";

export interface RouteConfig {
    path: string;
    name: string;
    component: React.LazyExoticComponent<React.FC>;
  }
  
  const Home = React.lazy(() => import("../Pages/Home/Home"));
  
  
  export const routes: RouteConfig[] = [
    { path: "/", name: "Home", component: Home },
    // { path: "/about", name: "About", component: About },
    // { path: "/contact", name: "Contact", component: Contact },
    // { path: "/dashboard", name: "Dashboard", component: Dashboard },
    // { path: "*", name: "NotFound", component: NotFound },
  ];
  