# HireAI Armenia Frontend - Backend Integration Guide

## Project Overview

This is a complete React frontend for the HireAI Armenia platform, a comprehensive hiring and recruitment system with AI-powered candidate matching. The platform supports three user roles: Admin, Employer (Recruiter), and Employee (Job Seeker).

## Project Structure

```
frontend_react/
├── src/
│   ├── pages/
│   │   ├── home/                 # Landing page
│   │   ├── login/                # Login page
│   │   ├── signup/               # Registration/signup page
│   │   ├── admin-dashboard/      # Admin dashboard
│   │   ├── admin-schedule/       # Admin schedule management
│   │   ├── employer-dashboard/   # Employer/recruiter dashboard
│   │   ├── employer-schedule/    # Employer interview schedule
│   │   ├── employee-dashboard/   # Employee/job seeker dashboard
│   │   ├── employee-schedule/    # Employee interview schedule
│   │   └── find-jobs/            # Job search page
│   ├── components/
│   │   ├── TopNav.jsx            # Navigation bar
│   │   └── CommonBlocks.jsx      # Reusable components
│   ├── styles/
│   │   └── global.css            # Global styles
│   ├── App.jsx                   # Main app component with routing
│   └── main.jsx                  # React entry point
├── index.html                    # HTML template
├── package.json                  # Dependencies
└── vite.config.js               # Vite configuration
```

## Key Features Implemented

### 1. Authentication
- Login page with role selection (Admin, Employer, Employee)
- Signup/Registration with form validation
- User context management (isLoggedIn, userRole)
- Logout functionality with navigation to home

### 2. Dashboard Pages

#### Admin Dashboard
- Platform statistics (Total Users, Active Companies, Monthly Hires, System Health)
- User management table
- System health metrics
- Analytics overview
- Admin settings

#### Employer Dashboard
- Active job postings
- Application management
- AI match insights
- Candidate pipeline
- Team member management
- Job post creation form

#### Employee Dashboard
- Applications tracking
- Profile completion indicator
- Recommended job suggestions
- Resume management
- Skills management
- Interview history

### 3. Schedule Management
- Event/interview scheduling
- Event listing with status tracking
- Meeting details management
- Interview feedback forms
- Timeline views

### 4. Job Search
- Job listings with filters
- Location and experience filtering
- Salary information
- AI match scoring
- Apply and save job functionality

### 5. Navigation
- Role-based navigation menus
- Dynamic user menu with logout
- Responsive navigation bar

## API Endpoints to Implement

### Authentication Endpoints

```javascript
POST /api/auth/login
Body: { email, password, userRole }
Response: { token, user: { id, name, email, role } }

POST /api/auth/signup
Body: { firstName, lastName, email, userRole, password }
Response: { token, user: { id, name, email, role } }

POST /api/auth/logout
Headers: { Authorization: "Bearer token" }
```

### Admin Endpoints

```javascript
GET /api/admin/dashboard
Response: { users, companies, hires, systemHealth }

GET /api/admin/users
Response: [ { id, name, email, role, status } ]

GET /api/admin/system-metrics
Response: { apiTime, dbLoad, memoryUsage, errorRate }

POST /api/admin/events
Body: { title, date, time, duration, participants, location }

GET /api/admin/events
Response: [ { id, title, time, status, participants, location } ]
```

### Employer Endpoints

```javascript
GET /api/employer/dashboard
Response: { activeJobs, applications, aiMatches, scheduledInterviews }

POST /api/employer/jobs
Body: { title, description, location, salary, requirements }
Response: { id, title, ... }

GET /api/employer/jobs
Response: [ { id, title, applications, matches, posted } ]

GET /api/employer/applications
Response: [ { id, candidateName, position, matchScore, status, appliedDate } ]

POST /api/employer/schedule
Body: { candidateName, title, date, time, duration, location, type }

GET /api/employer/schedule
Response: [ { id, title, candidateName, time, status, location } ]

PUT /api/employer/schedule/:id
Body: { status, feedback, score }
```

### Employee Endpoints

```javascript
GET /api/employee/dashboard
Response: { applications, profileViews, invites, matchScore }

GET /api/employee/applications
Response: [ { id, company, position, status, matchScore, appliedDate } ]

POST /api/employee/applications
Body: { jobId }
Response: { id, jobId, status, appliedDate }

GET /api/employee/jobs
Response: [ { id, title, company, location, experience, salary, matchScore } ]

GET /api/employee/jobs?search=&location=&experience=
Response: [ { id, title, company, matchScore } ]

GET /api/employee/profile
Response: { firstName, lastName, email, resume, skills, experience, profileCompletion }

PUT /api/employee/profile
Body: { firstName, lastName, resumeFile, skills, experience }

GET /api/employee/schedule
Response: [ { id, title, company, position, date, status } ]

POST /api/employee/schedule
Body: { title, company, position, date, time, duration, location }
```

## Frontend State Management

### App.jsx Global State
```javascript
const [isLoggedIn, setIsLoggedIn] = useState(false);
const [userRole, setUserRole] = useState(null); // 'admin', 'employer', 'employee'

// Handler functions
const handleLogin = (role) => { /* ... */ }
const handleLogout = () => { /* ... */ }
```

### Page State Examples

**LoginPage:**
- email, password, userRole, error, isSubmitting

**SignupPage:**
- formData: { firstName, lastName, email, userRole, password, confirmPassword, termsAccepted }
- errors: validation errors
- isSubmitting

**Dashboard Pages:**
- activeTab: current tab selection
- Data from API (jobs, applications, events, etc.)

**Schedule Pages:**
- events: list of scheduled events
- showAddEvent: form visibility
- eventForm: form data for new event

## Component Props

### TopNav
```javascript
<TopNav onLogout={handleLogout} userRole="employer" />
// Props: onLogout (function), userRole (string)
```

### BrandHeader
```javascript
<BrandHeader links={['Dashboard', 'Schedule']} user="EU" />
// Props: links (array), user (string - initials)
```

### StatsRow
```javascript
<StatsRow items={[
  { title: 'Active Jobs', value: '8', note: '+2 this week' }
]} />
// Props: items (array of stat objects)
```

### EventCards
```javascript
<EventCards events={[
  {
    title: 'Interview',
    time: '2024-01-15 · 11:00 AM (45 mins)',
    metaA: 'Candidate: Name',
    metaB: 'Location',
    status: 'confirmed',
    primary: 'Join Meeting'
  }
]} />
// Props: events (array)
```

## Form Validation Examples

The frontend includes built-in form validation for:
- Login: email validation, password required
- Signup: all fields required, password match, email format, minimum password length
- Event/Schedule forms: date, time, participants required

## Styling System

The project uses a custom CSS system with:
- **Colors**: Primary (#040722), Accent (#15a34a), Muted (#6c7088)
- **Spacing**: Consistent 8px-based grid
- **Typography**: Inter font family
- **Components**: Buttons, cards, forms, tables, grids

Key CSS classes:
- `.btn-dark`, `.btn-light` - Button styles
- `.card` - Card container
- `.stat-card` - Statistics card
- `.table-wrapper`, `.data-table` - Table styles
- `.form-group` - Form input wrapper
- `.pill` - Status badge

## Responsive Design

The frontend is responsive and tested for:
- Desktop (1024px+)
- Tablet (768px - 1024px)
- Mobile (< 768px)

Grid breakpoints in CSS media queries handle responsive layouts.

## How to Connect the Backend

1. **Replace placeholder data** with actual API calls
2. **Update login/signup** to call authentication endpoints
3. **Fetch dashboard data** on component mount (useEffect)
4. **Implement form submissions** with API POST/PUT requests
5. **Add error handling** for failed API calls
6. **Implement loading states** with loaders/spinners
7. **Handle authentication tokens** (localStorage/sessionStorage)
8. **Add authorization headers** to all API requests

### Example Implementation (Login)

```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, userRole })
    });

    if (response.ok) {
      const { token, user } = await response.json();
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      onLogin(userRole);
      navigate(`/${userRole}-dashboard`);
    } else {
      setError('Invalid credentials');
    }
  } catch (error) {
    setError('Login failed. Please try again.');
  }
};
```

### Example Implementation (Dashboard Data)

```javascript
useEffect(() => {
  const fetchData = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('/api/employer/dashboard', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await response.json();
      setStats(data);
    } catch (error) {
      console.error('Failed to fetch dashboard:', error);
    }
  };

  fetchData();
}, []);
```

## Security Considerations

- Store authentication tokens securely
- Validate all user input
- Sanitize data before rendering
- Use HTTPS in production
- Implement CSRF protection
- Set appropriate CORS headers
- Validate file uploads for resume

## Dependencies

Current dependencies:
- `react`: ^18.3.1
- `react-dom`: ^18.3.1
- `react-router-dom`: ^6.30.1

Consider adding for production:
- `axios` - HTTP client
- `react-query` - Data fetching and caching
- `zustand` or `redux` - State management
- `toast` library - Notifications
- `date-fns` - Date formatting

## Development Notes

1. All pages are currently using placeholder/mock data
2. Form submissions log to console and show alerts
3. Navigation uses React Router
4. Responsive design uses CSS Grid and Flexbox
5. Theme color scheme uses CSS custom properties (can be added)

## Next Steps for Backend Developer

1. Set up your backend API server
2. Create authentication endpoints
3. Implement user management
4. Set up database models
5. Create data endpoints for dashboards
6. Implement AI matching algorithm
7. Test API integration with this frontend
8. Deploy to production

## Support Files

- `.env` file should contain: `REACT_APP_API_URL=http://localhost:5000`
- CORS headers should allow localhost in development
- Database models should align with response structures

For any questions about the frontend structure, refer to individual page files which contain comments and clear component organization.
