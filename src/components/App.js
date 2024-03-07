import "../styles/App.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import { default as Login, default as Signup } from "./pages/Login";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/signup" Component={Signup} />
          <Route exact path="/login" Component={Login} />
          <Route exact path="/quiz" Component={Quiz} />
          <Route exact path="/result" Component={Result} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
