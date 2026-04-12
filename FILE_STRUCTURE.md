# HireAI Armenia - Complete File Structure Reference

## Project Architecture

```
frontend_react/
├── 📄 package.json                    # Project dependencies and scripts
├── 📄 vite.config.js                  # Vite build configuration
├── 📄 index.html                      # HTML entry point
│
├── 📚 Documentation Files
│   ├── 📄 FRONTEND_GUIDE.md           # Comprehensive frontend guide (detailed)
│   ├── 📄 BACKEND_INTEGRATION.md      # Backend integration checklist
│   ├── 📄 QUICKSTART.md               # Quick start guide
│   ├── 📄 PROJECT_SUMMARY.md          # Project overview and status
│   ├── 📄 FILE_STRUCTURE.md           # This file - file reference
│   └── 📄 README.md                   # Original readme
│
└── 📁 src/
    ├── 📄 main.jsx                    # React application entry point
    ├── 📄 App.jsx                     # Main app component with routing (updated)
    │
    ├── 📁 pages/                      # Page components (10 pages)
    │   ├── 📁 home/
    │   │   └── 📄 HomePage.jsx        # Landing page - hero, features, testimonials
    │   │
    │   ├── 📁 login/
    │   │   └── 📄 LoginPage.jsx       # Login form with role selection (new)
    │   │
    │   ├── 📁 signup/
    │   │   └── 📄 SignupPage.jsx      # Registration form with validation (enhanced)
    │   │
    │   ├── 📁 admin-dashboard/
    │   │   └── 📄 AdminDashboardPage.jsx      # Admin dashboard with tabs (enhanced)
    │   │
    │   ├── 📁 admin-schedule/
    │   │   └── 📄 AdminSchedulePage.jsx       # Admin schedule management (enhanced)
    │   │
    │   ├── 📁 employer-dashboard/
    │   │   └── 📄 EmployerDashboardPage.jsx   # Employer dashboard with multiple views (enhanced)
    │   │
    │   ├── 📁 employer-schedule/
    │   │   └── 📄 EmployerSchedulePage.jsx    # Employer interview scheduling (enhanced)
    │   │
    │   ├── 📁 employee-dashboard/
    │   │   └── 📄 EmployeeDashboardPage.jsx   # Employee dashboard with job tracking (enhanced)
    │   │
    │   ├── 📁 employee-schedule/
    │   │   └── 📄 EmployeeSchedulePage.jsx    # Employee interview schedule (enhanced)
    │   │
    │   └── 📁 find-jobs/
    │       └── 📄 FindJobsPage.jsx    # Job search with filtering (new)
    │
    ├── 📁 components/                 # Reusable components
    │   ├── 📄 TopNav.jsx              # Navigation bar with user menu (enhanced)
    │   └── 📄 CommonBlocks.jsx        # Reusable components:
    │                                  # - BrandHeader
    │                                  # - StatsRow
    │                                  # - EventCards
    │
    └── 📁 styles/
        └── 📄 global.css              # Global styles (600+ lines, completely rewritten)
```

## File Descriptions

### Root Files

| File | Purpose |
|------|---------|
| `package.json` | npm dependencies, scripts for dev/build |
| `vite.config.js` | Vite bundler configuration |
| `index.html` | HTML shell for React app |

### Documentation Files

| File | Purpose | Audience |
|------|---------|----------|
| `FRONTEND_GUIDE.md` | Detailed frontend architecture & API specs | Backend Dev |
| `BACKEND_INTEGRATION.md` | Step-by-step integration checklist | Backend Dev |
| `QUICKSTART.md` | Setup and testing instructions | All Developers |
| `PROJECT_SUMMARY.md` | High-level project overview | Team Lead/PM |
| `FILE_STRUCTURE.md` | This file - file reference | Developers |
| `README.md` | Original project README | All |

### Source Files

#### Main App Files

```
src/main.jsx
├── Initializes React application
├── Sets up BrowserRouter for routing
├── Loads global.css
└── Mounts app to DOM

src/App.jsx
├── Manages global authentication state
├── Sets up all routes (11 total)
├── Role-based navigation
└── Login/Logout handlers
```

#### Page Components (10 Total)

**Home Page** (`src/pages/home/HomePage.jsx`)
- Landing page with marketing content
- Features showcasing platform benefits
- How it works section
- Testimonials
- Call-to-action buttons
- Footer with links

**Login Page** (`src/pages/login/LoginPage.jsx`) - NEW
- Email/password login form
- Role selector dropdown
- Form validation
- "Remember me" checkbox
- Sign up redirect
- Mock authentication

**Signup Page** (`src/pages/signup/SignupPage.jsx`)
- Multi-field registration form
- First/last name inputs
- Email input with validation
- Role selection
- Password confirmation
- Terms agreement checkbox
- Form validation with error display

**Admin Dashboard** (`src/pages/admin-dashboard/AdminDashboardPage.jsx`)
- Platform statistics
- User management table
- Tab interface (5 tabs)
- System health metrics
- Admin settings form
- Quick action cards

**Admin Schedule** (`src/pages/admin-schedule/AdminSchedulePage.jsx`)
- Add event form
- Event listing
- Timeline view
- Event status tracking

**Employer Dashboard** (`src/pages/employer-dashboard/EmployerDashboardPage.jsx`)
- Job postings management
- Application tracking
- Candidate management
- Team member management
- Job posting form
- Analytics overview
- 6 tab interface

**Employer Schedule** (`src/pages/employer-schedule/EmployerSchedulePage.jsx`)
- Interview scheduling form
- Interview listing
- Interview feedback forms
- Scoring system

**Employee Dashboard** (`src/pages/employee-dashboard/EmployeeDashboardPage.jsx`)
- Application tracking
- Profile completion indicator
- Recommended jobs
- Resume management
- Skills management
- Messages from recruiters
- 5 tab interface

**Employee Schedule** (`src/pages/employee-schedule/EmployeeSchedulePage.jsx`)
- Interview scheduling form
- Interview tracking
- Preparation checklist
- Interview tips and resources

**Find Jobs** (`src/pages/find-jobs/FindJobsPage.jsx`) - NEW
- Advanced job search
- Location filtering
- Experience level filtering
- Job listings with match scores
- Apply/save functionality

#### Components

**TopNav Component** (`src/components/TopNav.jsx`)
- Dynamic navigation based on user role
- User menu with profile/logout
- Responsive layout
- Active route highlighting

**CommonBlocks Component** (`src/components/CommonBlocks.jsx`)
Three reusable components:
1. `BrandHeader` - Logo and header bar
2. `StatsRow` - Statistics card grid
3. `EventCards` - Event listing cards

#### Styles

**Global CSS** (`src/styles/global.css`)
Total: 600+ lines covering:
- Color scheme and typography
- Layout utilities (grid, flexbox)
- Component styles (buttons, cards, tables)
- Form styling with validation states
- Status badges and pills
- Responsive design (mobile, tablet, desktop)
- Animations and transitions

## Code Organization Principles

### 1. Component Structure
Each page follows this pattern:
```
function PageName() {
  const [state, setState] = useState(initialValue);

  const handleAction = () => { /* ... */ };

  return (
    <main className="page ...">
      {/* JSX content */}
    </main>
  );
}
```

### 2. Styling Hierarchy
- Global styles in `global.css`
- Component-specific styles use CSS classes
- Responsive breakpoints at 1024px and 768px
- BEM-like naming convention for clarity

### 3. State Management
- Local component state with `useState`
- Form data in state objects
- Tab selection state
- Modal/visibility state

### 4. Data Handling
- Mock data arrays in components
- Filter/search functions implemented
- Error states defined
- Loading states prepared for API integration

## Routes Map

```
/ ......................... HomePage (public)
/login ..................... LoginPage (public)
/signup .................... SignupPage (public)
/admin-dashboard ........... AdminDashboardPage (protected)
/admin-schedule ............ AdminSchedulePage (protected)
/employer-dashboard ........ EmployerDashboardPage (protected)
/employer-schedule ......... EmployerSchedulePage (protected)
/employee-dashboard ........ EmployeeDashboardPage (protected)
/employee-schedule ......... EmployeeSchedulePage (protected)
/find-jobs ................. FindJobsPage (protected)
/* ......................... Redirect to / (404 handling)
```

## Component Hierarchy

```
App (manages auth state & routing)
├── HomePage
├── LoginPage
├── SignupPage
├── AdminDashboardPage
│   └── BrandHeader
│   └── StatsRow
├── AdminSchedulePage
│   └── BrandHeader
│   └── EventCards
├── EmployerDashboardPage
│   └── BrandHeader
│   └── StatsRow
├── EmployerSchedulePage
│   └── BrandHeader
│   └── EventCards
├── EmployeeDashboardPage
│   └── BrandHeader
│   └── StatsRow
├── EmployeeSchedulePage
│   └── BrandHeader
│   └── EventCards
├── FindJobsPage
│   └── BrandHeader
└── TopNav (conditional - hidden on login/signup)
```

## Dependencies Breakdown

### Runtime Dependencies
```json
{
  "react": "^18.3.1" - UI framework
  "react-dom": "^18.3.1" - DOM rendering
  "react-router-dom": "^6.30.1" - Client-side routing
}
```

### Dev Dependencies
```json
{
  "@vitejs/plugin-react": "^4.4.1" - React plugin for Vite
  "vite": "^5.4.19" - Build tool
}
```

## CSS Classes Used

### Layout Classes
- `.page` - Main page container
- `.grid-2`, `.grid-3`, `.grid-4` - Grid layouts
- `.inline-actions` - Flex container for buttons
- `.dashboard-section` - Content section wrapper

### Component Classes
- `.btn-dark`, `.btn-light`, `.btn-link` - Button styles
- `.card` - Card container
- `.stat-card` - Statistics card
- `.table-wrapper`, `.data-table` - Tables
- `.form-group` - Form input wrapper

### Status Classes
- `.pill` - Status badge
- `.pill.confirmed`, `.pill.pending`, `.pill.scheduled` - Status variants
- `.status-badge` - Status indicator
- `.status-indicator` - Small status dot

### Utility Classes
- `.muted` - Grayed-out text
- `.accent` - Green success text
- `.bold` - Bold font weight
- `.full` - Full width
- ".active" - Active state

## Development Workflow

### 1. Setup Phase
```bash
cd frontend_react
npm install
npm run dev
```

### 2. Development Phase
- Edit files in `src/`
- Hot reload updates automatically
- Use browser DevTools for debugging
- Check console for errors

### 3. Testing Phase
```bash
# Manual testing via browser
http://localhost:5173/
# Test all routes and forms
```

### 4. Build Phase
```bash
npm run build
npm run preview
```

### 5. Integration Phase
- Replace mock data with API calls
- Update endpoints in API_URL config
- Test with actual backend

## Key Features by File

### Authentication Files
- `LoginPage.jsx` - Login form & validation
- `SignupPage.jsx` - Registration & validation
- `App.jsx` - Auth state & role management

### Dashboard Files
- `AdminDashboardPage.jsx` - Admin overview
- `EmployerDashboardPage.jsx` - Employer overview
- `EmployeeDashboardPage.jsx` - Employee overview

### Schedule Files
- `AdminSchedulePage.jsx` - Admin events
- `EmployerSchedulePage.jsx` - Interview scheduling
- `EmployeeSchedulePage.jsx` - Interview tracking

### Utility Files
- `TopNav.jsx` - Navigation & user menu
- `CommonBlocks.jsx` - Reusable components
- `global.css` - All styling

## File Sizes (Approximate)

| File | Lines | Size |
|------|-------|------|
| `global.css` | 620 | ~18KB |
| `App.jsx` | 40 | ~1KB |
| Dashboard pages (each) | 100-200 | ~3-6KB |
| Schedule pages (each) | 80-150 | ~2-4KB |
| `TopNav.jsx` | 40 | ~1KB |
| `CommonBlocks.jsx` | 50 | ~1KB |
| **Total** | **~2000** | **~60KB** |

## Import Structure

Common imports in files:
```javascript
// React imports
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Component imports
import { BrandHeader, StatsRow, EventCards } from '../../components/CommonBlocks';
```

## Configuration Files

### package.json
```json
{
  "name": "hireai-armenia-ui",
  "version": "0.0.1",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.30.1"
  }
}
```

### vite.config.js
```javascript
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
})
```

## Current Status

### ✅ Complete
- All page layouts
- All components
- All styles
- All routing
- Form validation
- Navigation system
- Responsive design

### ⏳ Pending (Backend Integration)
- API endpoints
- Authentication tokens
- Database models
- Real data fetching
- File uploads
- Actual data persistence

---

This file structure is **production-ready** and designed for seamless backend integration!

For detailed implementation information, see:
- `FRONTEND_GUIDE.md` - API and component details
- `BACKEND_INTEGRATION.md` - Integration steps
- `QUICKSTART.md` - Development setup
