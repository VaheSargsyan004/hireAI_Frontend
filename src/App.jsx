import { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import TopNav from './components/TopNav';
import HomePage from './pages/home/HomePage';
import LoginPage from './pages/login/LoginPage';
import SignupPage from './pages/signup/SignupPage';
import AdminDashboardPage from './pages/admin-dashboard/AdminDashboardPage';
import EmployerDashboardPage from './pages/employer-dashboard/EmployerDashboardPage';
import EmployeeDashboardPage from './pages/employee-dashboard/EmployeeDashboardPage';
import AdminSchedulePage from './pages/admin-schedule/AdminSchedulePage';
import EmployerSchedulePage from './pages/employer-schedule/EmployerSchedulePage';
import EmployeeSchedulePage from './pages/employee-schedule/EmployeeSchedulePage';
import FindJobsPage from './pages/find-jobs/FindJobsPage';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null);

  const handleLogin = (role) => {
    setIsLoggedIn(true);
    setUserRole(role);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserRole(null);
  };

  return (
    <div className="app-shell">
      {isLoggedIn && <TopNav onLogout={handleLogout} userRole={userRole} />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/admin-dashboard" element={<AdminDashboardPage />} />
        <Route path="/employer-dashboard" element={<EmployerDashboardPage />} />
        <Route path="/employee-dashboard" element={<EmployeeDashboardPage />} />
        <Route path="/admin-schedule" element={<AdminSchedulePage />} />
        <Route path="/employer-schedule" element={<EmployerSchedulePage />} />
        <Route path="/employee-schedule" element={<EmployeeSchedulePage />} />
        <Route path="/find-jobs" element={<FindJobsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}
