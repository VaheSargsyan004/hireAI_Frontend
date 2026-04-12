# Quick Start Guide - HireAI Armenia Frontend

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager
- Git (optional)

## Setup & Installation

### 1. Install Dependencies
```bash
cd frontend_react
npm install
# or
yarn install
```

### 2. Start Development Server
```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173` (default Vite port)

### 3. Build for Production
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```

## Directory Structure

```
src/
├── pages/              # All page components
│   ├── home/
│   ├── login/
│   ├── signup/
│   ├── admin-dashboard/
│   ├── employer-dashboard/
│   ├── employee-dashboard/
│   ├── admin-schedule/
│   ├── employer-schedule/
│   ├── employee-schedule/
│   └── find-jobs/
├── components/        # Reusable components
│   ├── TopNav.jsx
│   └── CommonBlocks.jsx
├── styles/            # CSS files
│   └── global.css
├── App.jsx            # Main app component
└── main.jsx           # Entry point
```

## Testing the Application

### Available Test Routes

**Home Page**
- URL: `http://localhost:5173/`
- Description: Landing page with features and testimonials

**Login Page**
- URL: `http://localhost:5173/login`
- Test with any email/password (mock auth)
- Select user role: Admin, Employer, or Employee
- After login, redirects to appropriate dashboard

**Signup Page**
- URL: `http://localhost:5173/signup`
- Test form validation
- Create new account (mock)
- Redirects to login

**Dashboards**
- Admin: `http://localhost:5173/admin-dashboard`
- Employer: `http://localhost:5173/employer-dashboard`
- Employee: `http://localhost:5173/employee-dashboard`

**Schedules**
- Admin: `http://localhost:5173/admin-schedule`
- Employer: `http://localhost:5173/employer-schedule`
- Employee: `http://localhost:5173/employee-schedule`

**Job Search**
- URL: `http://localhost:5173/find-jobs`
- Test search and filtering

## Testing Features

### Form Validation (Signup)
- Try submitting with empty fields → errors displayed
- Try mismatched passwords → error message
- Try invalid email → validation message
- Everything validates locally before submission

### Login Flow
1. Go to home page
2. Click "Sign In" button
3. Enter any email and password
4. Select a user role
5. Click "Sign In"
6. Should redirect to appropriate dashboard
7. Navigation bar appears with user menu
8. Click avatar → see logout option

### Dashboard Features
- Tab switching works for all views
- Preview data displayed (mock)
- Forms are interactive
- Buttons are clickable

### Responsive Design
1. Open DevTools (F12)
2. Toggle device toolbar
3. Test on mobile (375px)
4. Test on tablet (768px)
5. Test on desktop (1024px+)

## Development Tips

### Hot Module Replacement (HMR)
- Changes save automatically
- Page refreshes when you modify files
- No need to manually restart dev server

### Console Checking
- Open browser DevTools (F12)
- Check Console tab for any errors
- All form submissions log to console

### State Testing
- Use React DevTools extension (optional)
- Monitor component state updates
- Check props being passed to components

## Environment Configuration

### Using Environment Variables
Create a `.env.local` file in root:
```
VITE_API_URL=http://localhost:5000
VITE_APP_NAME=HireAI Armenia
```

Access in code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000'
```

## Browser DevTools

### Recommended Extensions
```
- React Developer Tools
- Redux DevTools (if using Redux)
- Vue DevTools (for debugging)
```

### Network Debugging
1. Open DevTools → Network tab
2. Try form submissions
3. Monitor XHR/Fetch requests (none yet - mock data)
4. Once backend ready, will show API calls here

## Common Issues & Solutions

### Port Already in Use
```bash
# Kill process on port 5173
lsof -ti:5173 | xargs kill -9

# Or specify different port
npm run dev -- --port 5174
```

### Module Not Found
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Hot Reload Not Working
```bash
# Restart dev server
# Make sure you're editing files in src/
# Check that file paths are correct
```

## Production Deployment

### Build Steps
```bash
# Create optimized build
npm run build

# This creates `dist/` folder with production files
```

### Deploy to Vercel (Recommended for React)
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### Deploy to Netlify
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist
```

### Docker Deployment
Create `Dockerfile`:
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
FROM nginx:alpine
COPY --from=0 /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## Customization Guide

### Change Colors
Edit `src/styles/global.css`:
```css
:root {
  --primary: #040722;
  --accent: #15a34a;
  --muted: #6c7088;
}
```

### Change Typography
Update font in global.css body:
```css
body {
  font-family: 'Your Font', sans-serif;
}
```

### Add New Pages
1. Create file: `src/pages/new-page/NewPage.jsx`
2. Create component
3. Import in `App.jsx`
4. Add route: `<Route path="/new-page" element={<NewPage />} />`

### Add New Components
1. Create file: `src/components/NewComponent.jsx`
2. Export component
3. Import where needed
4. Use in JSX

## Performance Tips

### Code Splitting
```javascript
// Use React.lazy for route-based code splitting
const Page = React.lazy(() => import('./pages/Page.jsx'))

// Wrap with Suspense
<Suspense fallback={<div>Loading...</div>}>
  <Page />
</Suspense>
```

### Image Optimization
- Use modern formats (WebP)
- Compress images
- Use responsive images with srcset

### Bundle Analysis
```bash
# Analyze bundle size
npm install --save-dev rollup-plugin-visualizer
```

## Getting Help

### Documentation
- [React Docs](https://react.dev)
- [React Router Docs](https://reactrouter.com)
- [Vite Docs](https://vitejs.dev)

### Debugging
- Use browser DevTools
- Check console for errors
- Use React DevTools extension
- Log to console for testing

## Next Steps

1. **Setup Backend**: Create API endpoints
2. **Connect API**: Replace mock data with API calls
3. **Add Authentication**: Implement JWT/session management
4. **Deploy**: Push to production
5. **Monitor**: Track performance and errors

## Project Status

✅ **Completed:**
- All page layouts and components
- Form validation
- Navigation and routing
- Responsive design
- Complete UI for all features

⏳ **TODO (Backend Dev):**
- API endpoint integration
- Database models
- Authentication system
- File upload handling
- AI matching algorithm

---

**Version**: 1.0.0
**Last Updated**: 2024
**Status**: Production Ready for Backend Integration
