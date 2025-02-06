import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import { routes, RouteConfig } from "./Routes/Routes";

export default function App() {
  const renderRoutes = (routes: RouteConfig[]) =>
    routes.map(({ path, component: Component, children }) => (
      <Route key={path} path={path} element={<Component />}>
        {children && renderRoutes(children)} {/* Render child routes recursively */}
      </Route>
    ));

  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>{renderRoutes(routes)}</Routes>
      </Suspense>
    </Router>
  );
}
