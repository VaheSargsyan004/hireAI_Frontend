import { useState } from 'react';
import { BrandHeader, StatsRow } from '../../components/CommonBlocks';

export default function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState('Overview');

  const stats = [
    { title: 'Total Users', value: '2,847', note: '+12%' },
    { title: 'Active Companies', value: '156', note: '+8%' },
    { title: 'Monthly Hires', value: '492', note: '+23%' },
    { title: 'System Health', value: '99.8%', note: 'stable' }
  ];

  const recentUsers = [
    { id: 1, name: 'Armen Sarkissian', email: 'armen@techarmenia.am', role: 'Employer', status: 'active' },
    { id: 2, name: 'Gayane Mkrtchyan', email: 'gayane@innovationhub.am', role: 'Employer', status: 'active' },
    { id: 3, name: 'Davit Harutyunyan', email: 'davit@example.am', role: 'Employee', status: 'active' },
    { id: 4, name: 'Anna Grigoryan', email: 'anna@example.am', role: 'Employee', status: 'pending' },
  ];

  const systemMetrics = [
    { label: 'API Response Time', value: '45ms', status: 'good' },
    { label: 'Database Load', value: '32%', status: 'good' },
    { label: 'Memory Usage', value: '58%', status: 'good' },
    { label: 'Error Rate', value: '0.02%', status: 'excellent' },
  ];

  return (
    <main className="page dashboard">
      <BrandHeader links={['Dashboard', 'Schedule']} user="AU" />

      <div className="title-row">
        <div>
          <h1>Admin Dashboard</h1>
          <p className="muted">Platform management and oversight</p>
        </div>
        <button className="btn-dark" onClick={() => window.location.href = '/admin-schedule'}>View Schedule</button>
      </div>

      <div className="tabs">
        {['Overview', 'Users', 'System', 'Analytics', 'Settings'].map(tab => (
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
            <h3>Recent Users</h3>
            <div className="table-wrapper">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {recentUsers.map(user => (
                    <tr key={user.id}>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.role}</td>
                      <td><span className={`status-badge ${user.status}`}>{user.status}</span></td>
                      <td><button className="btn-light small">View</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="dashboard-section">
            <h3>Quick Actions</h3>
            <div className="actions-grid">
              <button className="action-card">
                <span className="icon">👥</span>
                <h4>Manage Users</h4>
                <p className="muted">View and manage platform users</p>
              </button>
              <button className="action-card">
                <span className="icon">🔧</span>
                <h4>System Settings</h4>
                <p className="muted">Configure platform settings</p>
              </button>
              <button className="action-card">
                <span className="icon">📊</span>
                <h4>View Reports</h4>
                <p className="muted">Generate and view reports</p>
              </button>
              <button className="action-card">
                <span className="icon">⚠️</span>
                <h4>Support Tickets</h4>
                <p className="muted">Review support requests</p>
              </button>
            </div>
          </section>
        </>
      )}

      {activeTab === 'System' && (
        <section className="dashboard-section">
          <h3>System Health Metrics</h3>
          <div className="metrics-grid">
            {systemMetrics.map((metric, idx) => (
              <div key={idx} className="metric-card">
                <p className="muted">{metric.label}</p>
                <h3>{metric.value}</h3>
                <span className={`status-indicator ${metric.status}`}></span>
              </div>
            ))}
          </div>
        </section>
      )}

      {activeTab === 'Analytics' && (
        <section className="dashboard-section">
          <h3>Analytics Overview</h3>
          <div className="analytics-grid">
            <div className="chart-placeholder">
              <p>Hiring Trends Chart</p>
            </div>
            <div className="chart-placeholder">
              <p>User Growth Chart</p>
            </div>
          </div>
        </section>
      )}

      {activeTab === 'Settings' && (
        <section className="dashboard-section">
          <h3>Admin Settings</h3>
          <div className="settings-form">
            <div className="form-group">
              <label>Platform Name</label>
              <input type="text" placeholder="HireAI Armenia" />
            </div>
            <div className="form-group">
              <label>Support Email</label>
              <input type="email" placeholder="support@hireai.am" />
            </div>
            <div className="form-group">
              <label>Maintenance Mode</label>
              <label className="checkbox-label">
                <input type="checkbox" />
                Enable Maintenance Mode
              </label>
            </div>
            <button className="btn-dark">Save Settings</button>
          </div>
        </section>
      )}
    </main>
  );
}
