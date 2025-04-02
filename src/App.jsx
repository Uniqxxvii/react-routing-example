import { Link, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import UserProfile from "./pages/UserProfile";
import UserSettings from "./pages/UserSettings";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import "./App.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");

  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/about">About</Link> | 
        <Link to="/user/123?theme=light">Profile</Link> |
        <Link to={isAuthenticated ? "/user/123?message=already-logged-in" : "/login"}>
          {isAuthenticated ? "Login" : "Login"}
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route 
          path="/login" 
          element={<Login setIsAuthenticated={setIsAuthenticated} setUsername={setUsername} />} 
        />
        <Route 
          path="/user/:id/*" 
          element={
            <UserProfile 
              isAuthenticated={isAuthenticated} 
              username={username} 
              setIsAuthenticated={setIsAuthenticated} 
              setUsername={setUsername} 
            />
          }
        >
          <Route index element={<p>Select an option above.</p>} />
          <Route path="settings" element={<UserSettings isAuthenticated={isAuthenticated} />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
