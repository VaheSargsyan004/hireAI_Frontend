import { useState } from 'react';
import { BrandHeader, StatsRow } from '../../components/CommonBlocks';

export default function EmployeeDashboardPage() {
  const [activeTab, setActiveTab] = useState('Overview');

  const stats = [
    { title: 'Applications Sent', value: '12', note: '+3 this week' },
    { title: 'Profile Views', value: '47', note: '+8 today' },
    { title: 'Interview Invites', value: '5', note: 'This month' },
    { title: 'Match Score', value: '91%', note: 'Average' }
  ];

  const applications = [
    { id: 1, company: 'Tech Armenia', position: 'Frontend Developer', status: 'interviewed', matchScore: '94%', appliedDate: '3 days ago' },
    { id: 2, company: 'Innovation Hub', position: 'Full Stack Developer', status: 'review', matchScore: '87%', appliedDate: '5 days ago' },
    { id: 3, company: 'Krisp', position: 'Senior Developer', status: 'offer', matchScore: '96%', appliedDate: '1 week ago' },
    { id: 4, company: 'ArmSoft', position: 'UI Developer', status: 'rejected', matchScore: '72%', appliedDate: '2 weeks ago' },
  ];

  const recommendedJobs = [
    { id: 1, company: 'Tech Armenia', position: 'Senior Frontend Developer', matchScore: '95%', salary: '$50k-$80k' },
    { id: 2, company: 'Innovation Hub', position: 'React Developer', matchScore: '92%', salary: '$45k-$70k' },
    { id: 3, company: 'Krisp', position: 'Full Stack Developer', matchScore: '89%', salary: '$55k-$85k' },
  ];

  const profileCompletion = 85;

  return (
    <main className="page dashboard">
      <BrandHeader links={['Dashboard', 'Schedule', 'Find Jobs']} user="EU" />

      <div className="title-row">
        <div>
          <h1>Welcome back, Davit!</h1>
          <p className="muted">Track your applications and manage your career journey</p>
        </div>
        <div className="inline-actions">
          <button className="btn-light" onClick={() => window.location.href = '/employee-schedule'}>My Schedule</button>
          <button className="btn-dark">Find Jobs</button>
        </div>
      </div>

      <div className="tabs">
        {['Overview', 'Resume', 'Applications', 'Job Search', 'Messages'].map(tab => (
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
            <div className="overview-grid">
              <div className="profile-completion">
                <h3>Profile Completion</h3>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${profileCompletion}%` }}></div>
                </div>
                <p className="muted">{profileCompletion}% complete</p>
                <button className="btn-light">Complete Profile</button>
              </div>

              <div className="quick-stats">
                <h3>Your Opportunities</h3>
                <ul className="quick-list">
                  <li>👷 <strong>3 active applications</strong> in final rounds</li>
                  <li>🎯 <strong>2 new job matches</strong> today</li>
                  <li>💬 <strong>1 unread message</strong> from recruiter</li>
                  <li>⭐ <strong>Your profile viewed</strong> 5 times today</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="dashboard-section">
            <h3>Recent Applications</h3>
            <div className="applications-list">
              {applications.slice(0, 3).map(app => (
                <div key={app.id} className="application-card">
                  <div className="app-header">
                    <div>
                      <h4>{app.company}</h4>
                      <p className="muted">{app.position}</p>
                    </div>
                    <span className={`status-badge ${app.status}`}>{app.status}</span>
                  </div>
                  <div className="app-footer">
                    <span className="accent">Match: {app.matchScore}</span>
                    <span className="muted">{app.appliedDate}</span>
                  </div>
                </div>
              ))}
            </div>
            {applications.length > 3 && (
              <a href="#all-applications" className="view-all">View all {applications.length} applications →</a>
            )}
          </section>

          <section className="dashboard-section">
            <h3>Recommended Positions for You</h3>
            <div className="recommended-jobs">
              {recommendedJobs.map(job => (
                <div key={job.id} className="job-card">
                  <div className="job-info">
                    <h4>{job.position}</h4>
                    <p className="company">{job.company}</p>
                    <p className="salary">{job.salary}/year</p>
                  </div>
                  <div className="job-actions">
                    <span className="match-score">{job.matchScore} match</span>
                    <button className="btn-dark">Apply Now</button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </>
      )}

      {activeTab === 'Resume' && (
        <section className="dashboard-section">
          <h3>My Resume & Profile</h3>
          <div className="resume-section">
            <div className="resume-card">
              <h4>📄 Resume</h4>
              <p className="muted">Frontend_Developer_Resume.pdf</p>
              <div className="resume-actions">
                <button className="btn-light">View</button>
                <button className="btn-light">Update</button>
                <button className="btn-light">Download</button>
              </div>
            </div>

            <div className="profile-sections">
              <div className="section-card">
                <h4>Professional Summary</h4>
                <p className="muted">No summary added. This helps employers understand your background better.</p>
                <button className="btn-light">Add Summary</button>
              </div>

              <div className="section-card">
                <h4>Skills</h4>
                <div className="skills-list">
                  <span className="skill-tag">React</span>
                  <span className="skill-tag">JavaScript</span>
                  <span className="skill-tag">CSS</span>
                  <span className="skill-tag">HTML</span>
                  <button className="btn-light small">+ Add Skill</button>
                </div>
              </div>

              <div className="section-card">
                <h4>Experience</h4>
                <ul className="experience-list">
                  <li>
                    <strong>Senior Frontend Developer</strong> at Tech Armenia (2021-Present)
                    <p className="muted">Led frontend team, designed UI components, improved performance</p>
                  </li>
                  <li>
                    <strong>Junior Developer</strong> at StartUp Hub (2019-2021)
                    <p className="muted">Developed web applications using React and Node.js</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {activeTab === 'Applications' && (
        <section className="dashboard-section">
          <h3>All Applications</h3>
          <div className="table-wrapper">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Company</th>
                  <th>Position</th>
                  <th>Match</th>
                  <th>Status</th>
                  <th>Applied</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {applications.map(app => (
                  <tr key={app.id}>
                    <td className="bold">{app.company}</td>
                    <td>{app.position}</td>
                    <td className="accent">{app.matchScore}</td>
                    <td><span className={`status-badge ${app.status}`}>{app.status}</span></td>
                    <td className="muted">{app.appliedDate}</td>
                    <td>
                      <button className="btn-light small">Details</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {activeTab === 'Job Search' && (
        <section className="dashboard-section">
          <h3>Find Your Next Opportunity</h3>
          <div className="job-search-form">
            <div className="search-inputs">
              <input type="text" placeholder="Job title or keyword..." />
              <input type="text" placeholder="Location..." />
              <select>
                <option>Experience Level</option>
                <option>Junior</option>
                <option>Mid</option>
                <option>Senior</option>
              </select>
              <button className="btn-dark">Search Jobs</button>
            </div>

            <div className="search-results">
              <h4>Latest Matches for Frontend Developer</h4>
              {recommendedJobs.map(job => (
                <div key={job.id} className="search-result-item">
                  <div>
                    <h5>{job.position}</h5>
                    <p className="company">{job.company}</p>
                    <p className="muted">Salary: {job.salary}/year</p>
                  </div>
                  <button className="btn-dark">Apply</button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeTab === 'Messages' && (
        <section className="dashboard-section">
          <h3>Messages</h3>
          <div className="messages-container">
            <div className="message-item">
              <div className="message-header">
                <h4>Tech Armenia Recruiter</h4>
                <span className="time">2 hours ago</span>
              </div>
              <p className="message-content">Great news! We'd like to invite you to our final interview round...</p>
              <button className="btn-light">Reply</button>
            </div>
            <div className="message-item">
              <div className="message-header">
                <h4>Innovation Hub HR</h4>
                <span className="time">1 day ago</span>
              </div>
              <p className="message-content">Thank you for your interest. We're reviewing your application...</p>
              <button className="btn-light">Reply</button>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
