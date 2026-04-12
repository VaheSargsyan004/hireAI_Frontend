import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginPage({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userRole, setUserRole] = useState('employer');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    if (!email.includes('@')) {
      setError('Please enter a valid email');
      return;
    }

    // Simulate login - backend will handle actual authentication
    onLogin(userRole);

    // Navigate based on user role
    if (userRole === 'admin') {
      navigate('/admin-dashboard');
    } else if (userRole === 'employer') {
      navigate('/employer-dashboard');
    } else {
      navigate('/employee-dashboard');
    }
  };

  return (
    <main className="page login-page">
      <div className="login-card">
        <div className="logo-center">AI</div>
        <h2>Welcome Back</h2>
        <p className="muted">Sign in to HireAI Armenia to continue</p>

        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <select value={userRole} onChange={(e) => setUserRole(e.target.value)}>
            <option value="employer">I am an Employer</option>
            <option value="employee">I am a Job Seeker</option>
            <option value="admin">I am an Admin</option>
          </select>

          <div className="remember-forgot">
            <label className="remember">
              <input type="checkbox" /> Remember me
            </label>
            <a href="#forgot" className="forgot-link">Forgot Password?</a>
          </div>

          <button type="submit" className="btn-dark full">Sign In</button>
        </form>

        <div className="signup-redirect">
          <p>Don't have an account? <a href="/signup" className="link">Create one here</a></p>
        </div>
      </div>
    </main>
  );
}
