import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BrandHeader, StatsRow } from '../../components/CommonBlocks';

export default function EmployerDashboardPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Overview');
  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');

  const stats = [
    { title: 'Active Jobs', value: '8', note: '+2 this week' },
    { title: 'Total Applications', value: '342', note: '+23 today' },
    { title: 'AI Matches', value: '89', note: '94% accuracy' },
    { title: 'Interviews Scheduled', value: '15', note: 'This week' }
  ];

  const activeJobs = [
    { id: 1, title: 'Senior Frontend Developer', applications: 45, matches: 12, posted: '5 days ago' },
    { id: 2, title: 'Product Manager', applications: 28, matches: 8, posted: '2 weeks ago' },
    { id: 3, title: 'UX Designer', applications: 19, matches: 5, posted: '1 week ago' },
    { id: 4, title: 'Backend Developer', applications: 67, matches: 23, posted: '3 days ago' },
  ];

  const recentApplications = [
    { id: 1, name: 'Davit H.', position: 'Senior Frontend Developer', matchScore: '94%', status: 'reviewed' },
    { id: 2, name: 'Anna G.', position: 'Product Manager', matchScore: '87%', status: 'new' },
    { id: 3, name: 'Karen T.', position: 'UX Designer', matchScore: '91%', status: 'interviewing' },
  ];

  const handlePostJob = (e) => {
    e.preventDefault();
    if (!jobTitle || !jobDescription) {
      alert('Please fill in all job details');
      return;
    }
    alert(`Job "${jobTitle}" posted successfully!`);
    setJobTitle('');
    setJobDescription('');
  };

  return (
    <main className="page dashboard">
      <BrandHeader links={['Dashboard', 'Schedule']} user="EU" />

      <div className="title-row">
        <div>
          <h1>Employer Dashboard</h1>
          <p className="muted">Welcome, Tech Armenia Team</p>
        </div>
        <div className="inline-actions">
          <button className="btn-light" onClick={() => navigate('/employer-schedule')}>Schedule</button>
          <button className="btn-dark" onClick={() => setActiveTab('Job Posts')}>Post New Job</button>
        </div>
      </div>

      <div className="tabs">
        {['Overview', 'AI Agent', 'Job Posts', 'Candidates', 'Analytics', 'Team'].map(tab => (
          <span
            key={tab}
            className={activeTab === tab ? 'active' : ''}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </span>
        ))}
      </div>

      <StatsRow items={stats} />

      {activeTab === 'Overview' && (
        <>
          <section className="dashboard-section">
            <h3>Active Job Postings</h3>
            <div className="table-wrapper">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Job Title</th>
                    <th>Applications</th>
                    <th>AI Matches</th>
                    <th>Posted</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {activeJobs.map(job => (
                    <tr key={job.id}>
                      <td className="bold">{job.title}</td>
                      <td>{job.applications}</td>
                      <td className="accent">{job.matches}</td>
                      <td className="muted">{job.posted}</td>
                      <td><button className="btn-light small" onClick={() => alert(`Viewing applications for ${job.title}`)}>View</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="dashboard-section">
            <h3>Recent Applications</h3>
            <div className="applications-list">
              {recentApplications.map(app => (
                <div key={app.id} className="application-card">
                  <div className="app-header">
                    <h4>{app.name}</h4>
                    <span className={`status-badge ${app.status}`}>{app.status}</span>
                  </div>
                  <p className="muted">{app.position}</p>
                  <div className="app-footer">
                    <p className="match-score">Match: <span className="accent">{app.matchScore}</span></p>
                    <div className="inline-actions">
                      <button className="btn-light small" onClick={() => alert(`Viewing profile for ${app.name}`)}>View Profile</button>
                      <button className="btn-dark small" onClick={() => navigate('/employer-schedule')}>Schedule Interview</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </>
      )}

      {activeTab === 'Job Posts' && (
        <section className="dashboard-section">
          <h3>Manage Job Posts</h3>
          <div className="jobs-management">
            <div className="job-form">
              <h4>Post New Job</h4>
              <form onSubmit={handlePostJob}>
                <div className="form-group">
                  <label>Job Title</label>
                  <input type="text" placeholder="e.g., Senior Developer" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} required />
                </div>
                <div className="form-group">
                  <label>Job Description</label>
                  <textarea placeholder="Enter job description, requirements, and benefits..." rows="6" value={jobDescription} onChange={(e) => setJobDescription(e.target.value)} required></textarea>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Location</label>
                    <input type="text" placeholder="Yerevan, Armenia" />
                  </div>
                  <div className="form-group">
                    <label>Salary Range</label>
                    <input type="text" placeholder="$50k - $80k" />
                  </div>
                </div>
                <button type="submit" className="btn-dark">Post Job</button>
              </form>
            </div>

            <div className="jobs-list">
              <h4>Your Posted Jobs</h4>
              {activeJobs.map(job => (
                <div key={job.id} className="job-item">
                  <h5>{job.title}</h5>
                  <p className="muted">Applications: {job.applications} | Matches: {job.matches}</p>
                  <div className="job-actions">
                    <button className="btn-light small" onClick={() => alert(`Opening editor for ${job.title}`)}>Edit</button>
                    <button className="btn-light small" onClick={() => alert(`Viewing applications for ${job.title}`)}>View Applications</button>
                    <button className="btn-light small" onClick={() => alert(`${job.title} job closed`)}>Close</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeTab === 'Candidates' && (
        <section className="dashboard-section">
          <h3>Candidate Management</h3>
          <div className="candidates-grid">
            {recentApplications.map(candidate => (
              <div key={candidate.id} className="candidate-card">
                <div className="candidate-header">
                  <h4>{candidate.name}</h4>
                  <span className="match-score">{candidate.matchScore}</span>
                </div>
                <p className="muted">{candidate.position}</p>
                <button className="btn-dark" onClick={() => alert(`Viewing full profile for ${candidate.name}`)}>View Full Profile</button>
              </div>
            ))}
          </div>
        </section>
      )}

      {activeTab === 'Analytics' && (
        <section className="dashboard-section">
          <h3>Analytics & Insights</h3>
          <div className="analytics-grid">
            <div className="chart-placeholder"><p>📊 Application Trends</p></div>
            <div className="chart-placeholder"><p>📈 Hiring Funnel</p></div>
            <div className="chart-placeholder"><p>🎯 Match Quality Distribution</p></div>
            <div className="chart-placeholder"><p>⏱️ Time-to-Hire Metrics</p></div>
          </div>
        </section>
      )}

      {activeTab === 'AI Agent' && (
        <section className="dashboard-section">
          <h3>AI Agent Configuration</h3>
          <div className="settings-form">
            <div className="form-group">
              <label>AI Agent Name</label>
              <input type="text" defaultValue="HireAI Assistant" />
            </div>
            <div className="form-group">
              <label>Matching Algorithm Strength</label>
              <select>
                <option>Conservative (High Quality Matches)</option>
                <option>Balanced</option>
                <option>Aggressive (More Candidates)</option>
              </select>
            </div>
            <div className="form-group">
              <label className="checkbox-label">
                <input type="checkbox" defaultChecked />
                Enable AI Agent
              </label>
            </div>
            <button className="btn-dark" onClick={() => alert('AI Agent settings saved successfully!')}>Save Settings</button>
          </div>
        </section>
      )}

      {activeTab === 'Team' && (
        <section className="dashboard-section">
          <h3>Team Members</h3>
          <div className="team-grid">
            <div className="team-member">
              <h4>Armen Sarkissian</h4>
              <p className="muted">CEO - Admin</p>
              <button className="btn-light small" onClick={() => alert('Managing Armen Sarkissian')}>Manage</button>
            </div>
            <div className="team-member">
              <h4>Gayane Mkrtchyan</h4>
              <p className="muted">HR Manager</p>
              <button className="btn-light small" onClick={() => alert('Managing Gayane Mkrtchyan')}>Manage</button>
            </div>
            <div className="team-member plus-member">
              <button className="btn-dark" onClick={() => alert('Opening add team member form')}>+ Add Team Member</button>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
