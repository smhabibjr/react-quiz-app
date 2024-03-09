import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function PublicRoute({ children }) {
  const { currentUser } = useAuth()

  if (currentUser) {
    console.log("already auth . go to home");
    return <Navigate to='/' />
  }

  return children;
}