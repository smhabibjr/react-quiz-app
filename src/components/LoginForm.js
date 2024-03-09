import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import Button from "./Button";
import Form from "./Form";
import TextInput from "./TextInput";
import {useAuth} from "../contexts/AuthContext"

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState();
  const { login } = useAuth();

  const [error, setError] = useState();

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
        setError("");
        setLoading(true);
        await login(email, password);
        navigate("/");
      } catch (err) {
        console.log(err);
        setLoading(true);
        setError("Failed to login!");
      }
    
  }

  return (
    <Form style={{ height: "330px" }} onSubmit={handleSubmit}>
      <TextInput
      required
        type="text"
        placeholder="Enter email"
        icon="alternate_email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <TextInput required type="password" placeholder="Enter password" icon="lock" value={password}
        onChange={(e) => setPassword(e.target.value)} />

      <Button disabled={loading} type="submit">
        <span>Submit Now</span>
      </Button>

      {error && <p className="error">{error} </p>}

      <div className="info">
        Don't have an account? <Link to="/signup">Signup</Link> instead.
      </div>
    </Form>
  );
}
