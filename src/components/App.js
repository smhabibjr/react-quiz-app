import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";
import "../styles/App.css";
import Layout from "./Layout";
import PrivateRoute from "./PrivateRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Signup from "./pages/Signup";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" Component={Login} />

            <Route exact path="/signup" Component={Signup} />
            <Route
              exact
              path="/quiz"
              element={<PrivateRoute Component={Quiz} />}
            />
            <Route
              exact
              path="/result"
              element={<PrivateRoute Component={Result} />}
            />
          </Routes>
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;
