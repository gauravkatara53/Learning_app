// src/components/ProtectedRoute.jsx
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ element }) => {
  const location = useLocation();

  return location.state && location.state.accessGranted ? (
    element
  ) : (
    <Navigate to="/unauthorized" />
  );
};

export default ProtectedRoute;
