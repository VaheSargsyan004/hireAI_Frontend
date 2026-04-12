import { useState } from 'react';
import { BrandHeader, EventCards } from '../../components/CommonBlocks';

export default function EmployeeSchedulePage() {
  const [events, setEvents] = useState([
    { title: 'Interview - Tech Startup Hub', time: '2024-01-15 · 2:00 PM (45 mins)', metaA: 'Position: Frontend Developer', metaB: 'Virtual Meeting', status: 'confirmed', primary: 'Join Meeting' },
    { title: 'Technical Assessment', time: '2024-01-16 · 10:00 AM (120 mins)', metaA: 'Position: Full Stack Developer', metaB: 'Online Platform', status: 'confirmed', primary: 'Get Directions' },
    { title: 'Final Interview - CEO Meeting', time: '2024-01-18 · 4:00 PM (30 mins)', metaA: 'Position: Senior Developer', metaB: 'Krisp Office', status: 'scheduled', primary: 'Get Directions' },
  ]);

  const [showAddEvent, setShowAddEvent] = useState(false);
  const [eventForm, setEventForm] = useState({
    title: '',
    company: '',
    position: '',
    date: '',
    time: '',
    duration: '45',
    location: ''
  });

  const handleAddEvent = (e) => {
    e.preventDefault();
    const newEvent = {
      title: eventForm.title,
      time: `${eventForm.date} · ${eventForm.time} (${eventForm.duration} mins)`,
      metaA: `${eventForm.company || 'Company'} - ${eventForm.position || 'Position'}`,
      metaB: eventForm.location || 'Virtual Meeting',
      status: 'scheduled',
      primary: 'Join Meeting'
    };
    setEvents([...events, newEvent]);
    setEventForm({ title: '', company: '', position: '', date: '', time: '', duration: '45', location: '' });
    setShowAddEvent(false);
    alert('Interview added to your schedule!');
  };

  const upcomingEvents = events.filter(e => e.status !== 'rejected');

  return (
    <main className="page dashboard">
      <BrandHeader links={['Dashboard', 'Schedule', 'Find Jobs']} user="EU" />

      <div className="title-row">
        <div>
          <h1>My Interview Schedule</h1>
          <p className="muted">View your upcoming interviews and assessments</p>
        </div>
        <button className="btn-dark" onClick={() => setShowAddEvent(!showAddEvent)}>
          {showAddEvent ? 'Cancel' : '+ Add Event'}
        </button>
      </div>

      <div className="interview-stats">
        <div className="stat-mini">
          <h4>{upcomingEvents.length}</h4>
          <p className="muted">Upcoming interviews</p>
        </div>
        <div className="stat-mini">
          <h4>{events.filter(e => e.status === 'confirmed').length}</h4>
          <p className="muted">Confirmed</p>
        </div>
        <div className="stat-mini">
          <h4>{events.filter(e => e.status === 'pending' || e.status === 'scheduled').length}</h4>
          <p className="muted">Pending confirmation</p>
        </div>
      </div>

      {showAddEvent && (
        <div className="add-event-form">
          <h3>Add Interview to Schedule</h3>
          <form onSubmit={handleAddEvent}>
            <div className="form-row">
              <div className="form-group">
                <label>Interview Title</label>
                <input
                  type="text"
                  placeholder="e.g., Interview - Senior Developer"
                  value={eventForm.title}
                  onChange={(e) => setEventForm({ ...eventForm, title: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Company Name</label>
                <input
                  type="text"
                  placeholder="e.g., Tech Armenia"
                  value={eventForm.company}
                  onChange={(e) => setEventForm({ ...eventForm, company: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label>Position</label>
                <input
                  type="text"
                  placeholder="e.g., Frontend Developer"
                  value={eventForm.position}
                  onChange={(e) => setEventForm({ ...eventForm, position: e.target.value })}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Date</label>
                <input
                  type="date"
                  value={eventForm.date}
                  onChange={(e) => setEventForm({ ...eventForm, date: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>Time</label>
                <input
                  type="time"
                  value={eventForm.time}
                  onChange={(e) => setEventForm({ ...eventForm, time: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>Duration (minutes)</label>
                <input
                  type="number"
                  placeholder="45"
                  value={eventForm.duration}
                  onChange={(e) => setEventForm({ ...eventForm, duration: e.target.value })}
                />
              </div>
            </div>

            <div className="form-group">
              <label>Location / Meeting Details</label>
              <input
                type="text"
                placeholder="Virtual Meeting, Office address, or meeting link"
                value={eventForm.location}
                onChange={(e) => setEventForm({ ...eventForm, location: e.target.value })}
              />
            </div>

            <div className="form-actions">
              <button type="submit" className="btn-dark">Add to Schedule</button>
              <button type="button" className="btn-light" onClick={() => setShowAddEvent(false)}>Cancel</button>
            </div>
          </form>
        </div>
      )}

      <EventCards events={events} />

      <section className="dashboard-section">
        <h3>Interview Preparation Checklist</h3>
        <div className="checklist">
          <label className="checklist-item">
            <input type="checkbox" defaultChecked />
            <span>Research company background and culture</span>
          </label>
          <label className="checklist-item">
            <input type="checkbox" defaultChecked />
            <span>Review job description and requirements</span>
          </label>
          <label className="checklist-item">
            <input type="checkbox" />
            <span>Prepare examples of past projects and achievements</span>
          </label>
          <label className="checklist-item">
            <input type="checkbox" />
            <span>Prepare questions to ask the interviewer</span>
          </label>
          <label className="checklist-item">
            <input type="checkbox" />
            <span>Test your internet connection and equipment</span>
          </label>
          <label className="checklist-item">
            <input type="checkbox" />
            <span>Prepare professional attire</span>
          </label>
        </div>
      </section>

      <section className="dashboard-section">
        <h3>Interview Tips & Resources</h3>
        <div className="tips-grid">
          <div className="tip-card">
            <h4>💭 Before the Interview</h4>
            <ul className="tips-list">
              <li>Research the company thoroughly</li>
              <li>Practice your elevator pitch</li>
              <li>Prepare specific examples</li>
              <li>Test your tech setup (for virtual)</li>
            </ul>
          </div>
          <div className="tip-card">
            <h4>✨ During the Interview</h4>
            <ul className="tips-list">
              <li>Make eye contact and smile</li>
              <li>Listen carefully to questions</li>
              <li>Provide detailed examples (STAR method)</li>
              <li>Ask thoughtful questions</li>
            </ul>
          </div>
          <div className="tip-card">
            <h4>📧 After the Interview</h4>
            <ul className="tips-list">
              <li>Send a thank you email within 24h</li>
              <li>Reference specific points discussed</li>
              <li>Reiterate your interest</li>
              <li>Stay professional and patient</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
