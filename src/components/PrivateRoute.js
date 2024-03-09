import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function PrivateRoute({ children }) {
  const { currentUser } = useAuth()

  if (!currentUser) {
    console.log("not auth . go to login");
    return <Navigate to='/login' />
  }

  

  return children;
}
