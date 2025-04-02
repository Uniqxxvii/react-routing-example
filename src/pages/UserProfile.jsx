import { useParams, Link, Outlet, useNavigate, Navigate, useSearchParams } from "react-router-dom";

const UserProfile = ({ isAuthenticated, username, setIsAuthenticated, setUsername }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  
  const theme = searchParams.get("theme") || "light"; // Default to 'light' if not set

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername("");
    navigate("/login");
  };

  return (
    <div style={{ background: theme === "dark" ? "#333" : "#fff", color: theme === "dark" ? "#fff" : "#000", padding: "20px" }}>
      <h1>User Profile</h1>
      <p>Welcome, {isAuthenticated && username ? username : `User ID: ${id}`}</p>

      <nav>
        <Link to={`/user/${id}/settings`}>Settings</Link>
      </nav>

      {/* Buttons to toggle theme via query params */}
      <button style={{ marginRight: "5px", marginTop: "5px"  }} 
        onClick={() => setSearchParams({ theme: "light" })}>Light Theme
      </button>
      <button style={{ marginRight: "5px", marginTop: "5px"  }} 
        onClick={() => setSearchParams({ theme: "dark" })}>Dark Theme
      </button>

      <button onClick={handleLogout}>Logout</button>

      <Outlet />
    </div>
  );
};

export default UserProfile;