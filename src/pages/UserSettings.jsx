import { Navigate } from "react-router-dom";

const UserSettings = ({ isAuthenticated }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div>
      <h2>User Settings</h2>
      <p>Here you can update your preferences.</p>
    </div>
  );
};

export default UserSettings;