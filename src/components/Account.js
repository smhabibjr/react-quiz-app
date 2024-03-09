import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import classes from "../styles/Account.module.css";
export default function Account() {

  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = ()=> {
    logout()
    navigate("/signup")

  }
  return (
    <div className={classes.account}>
      {currentUser ? (
        <>
          <span className="material-icons-outlined" title="Account">
            account_circle
          </span>
          {currentUser.displayName}
          <span className="material-icons-outlined" title="Logout" onClick={handleLogout}>
            {" "}
            logout{" "}
          </span>
        </>
      ) : (
        <>
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
        </>
      )}
    </div>
  );
}
