import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignupPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    userType: '',
    password: '',
    confirmPassword: '',
    termsAccepted: false,
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.includes('@')) newErrors.email = 'Valid email is required';
    if (!formData.userType) newErrors.userType = 'Please select your role';
    if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    if (!formData.termsAccepted) newErrors.termsAccepted = 'You must agree to the terms';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Simulate API call - backend will handle actual registration
      setTimeout(() => {
        setIsSubmitting(false);
        navigate('/login');
      }, 1000);
    } catch (error) {
      setErrors({ general: 'An error occurred. Please try again.' });
      setIsSubmitting(false);
    }
  };

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <main className="page signup-page">
      <div className="signup-card">
        <button className="back-btn" onClick={handleBackClick}>← Back to Home</button>
        <div className="logo-center">AI</div>
        <h2>Join HireAI Armenia</h2>
        <p className="muted">Create your account to start transforming your hiring process</p>

        {errors.general && <div className="error-message">{errors.general}</div>}

        <form onSubmit={handleSubmit}>
          <div className="grid-2">
            <div className="form-group">
              <input
                placeholder="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={errors.firstName ? 'input-error' : ''}
              />
              {errors.firstName && <span className="error-text">{errors.firstName}</span>}
            </div>
            <div className="form-group">
              <input
                placeholder="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={errors.lastName ? 'input-error' : ''}
              />
              {errors.lastName && <span className="error-text">{errors.lastName}</span>}
            </div>
          </div>

          <div className="form-group">
            <input
              placeholder="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? 'input-error' : ''}
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>

          <div className="form-group">
            <select
              name="userType"
              value={formData.userType}
              onChange={handleChange}
              className={errors.userType ? 'input-error' : ''}
            >
              <option value="">Select your role...</option>
              <option value="employer">I am an Employer</option>
              <option value="employee">I am a Job Seeker</option>
              <option value="admin">I am an Administrator</option>
            </select>
            {errors.userType && <span className="error-text">{errors.userType}</span>}
          </div>

          <div className="form-group">
            <input
              placeholder="Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={errors.password ? 'input-error' : ''}
            />
            {errors.password && <span className="error-text">{errors.password}</span>}
          </div>

          <div className="form-group">
            <input
              placeholder="Confirm Password"
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={errors.confirmPassword ? 'input-error' : ''}
            />
            {errors.confirmPassword && <span className="error-text">{errors.confirmPassword}</span>}
          </div>

          <label className="terms">
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
            />
            I agree to the Terms of Service and Privacy Policy
          </label>
          {errors.termsAccepted && <span className="error-text">{errors.termsAccepted}</span>}

          <button type="submit" className="btn-dark full" disabled={isSubmitting}>
            {isSubmitting ? 'Creating Account...' : 'Create Account'}
          </button>
        </form>

        <div className="signin-redirect">
          <p>Already have an account? <a href="/login" className="link">Sign in here</a></p>
        </div>
      </div>
    </main>
  );
}
