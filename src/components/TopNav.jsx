import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const adminLinks = [
  ['/', 'Home'],
  ['/admin-dashboard', 'Dashboard'],
  ['/admin-schedule', 'Schedule'],
];

const employerLinks = [
  ['/', 'Home'],
  ['/employer-dashboard', 'Dashboard'],
  ['/employer-schedule', 'Schedule'],
];

const employeeLinks = [
  ['/', 'Home'],
  ['/employee-dashboard', 'Dashboard'],
  ['/employee-schedule', 'Schedule'],
  ['/find-jobs', 'Find Jobs'],
];

export default function TopNav({ onLogout, userRole = 'employer' }) {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const links = userRole === 'admin' ? adminLinks : userRole === 'employee' ? employeeLinks : employerLinks;

  const isSignupOrLogin = pathname === '/signup' || pathname === '/login';
  if (isSignupOrLogin) return null;

  const handleLogout = () => {
    onLogout();
    navigate('/');
    setShowUserMenu(false);
  };

  const handleLogoClick = () => {
    navigate('/');
    setShowUserMenu(false);
  };

  return (
    <nav className="top-nav">
      <div className="brand" onClick={handleLogoClick} style={{ margin: '0 8px', marginRight: 'auto' }}>
        AI <span>HireAI Armenia</span>
      </div>
      <div className="nav-links">
        {links.map(([to, label]) => (
          <NavLink key={to} to={to} className={({ isActive }) => `tab-link ${isActive ? 'active' : ''}`}>
            {label}
          </NavLink>
        ))}
      </div>
      <div className="nav-end">
        <div className="user-menu">
          <button className="user-button" onClick={() => setShowUserMenu(!showUserMenu)}>
            👤 {userRole.charAt(0).toUpperCase() + userRole.slice(1)}
          </button>
          {showUserMenu && (
            <div className="user-dropdown">
              <a href="#profile" className="dropdown-item">Profile Settings</a>
              <a href="#notifications" className="dropdown-item">Notifications</a>
              <hr />
              <button onClick={handleLogout} className="dropdown-item logout-btn">Sign Out</button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
