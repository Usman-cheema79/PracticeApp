import React from "react";
import { Navigate } from "react-router-dom";
import { auth } from "./auth";

const ProtectedRoute = ({ children }) => {
  const user = auth();

  if (!user) {
    return <Navigate to="/" replace />;
  } else {
    return <>{children}</>;
  }
};

export default ProtectedRoute;
