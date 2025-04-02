import { useState } from "react";
import { useNavigate, Navigate, useSearchParams } from "react-router-dom";

const Login = ({ setIsAuthenticated, setUsername, isAuthenticated, username }) => {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  
  const message = searchParams.get("message"); // Check for a message in query params

  // If already logged in, redirect to the user profile with a message
  if (isAuthenticated) {
    return <Navigate to={`/user/123?message=already-logged-in`} replace />;
  }

  const handleLogin = (e) => {
    e.preventDefault();
    if (name.trim()) {
      setIsAuthenticated(true);
      setUsername(name);
      navigate(`/user/123`); // Redirect to user profile
    }
  };

  return (
    <div>
      <h1>Login</h1>
      {message && <p style={{ color: "red" }}>{message.replace("-", " ")}</p>} {/* Show message */}
      <form onSubmit={handleLogin}>
        <input 
          type="text" 
          placeholder="Enter your name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;