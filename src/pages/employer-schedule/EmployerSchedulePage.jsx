import { useState } from 'react';
import { BrandHeader, EventCards } from '../../components/CommonBlocks';

export default function EmployerSchedulePage() {
  const [events, setEvents] = useState([
    { title: 'Interview - Senior Developer', time: '2024-01-15 · 11:00 AM (45 mins)', metaA: 'Candidate: Davit Harutyunyan', metaB: 'Virtual Meeting', status: 'confirmed', primary: 'Join Meeting' },
    { title: 'AI Agent Training Session', time: '2024-01-16 · 3:00 PM (30 mins)', metaA: 'Participants: HireAI Support Team', metaB: 'Virtual Meeting', status: 'confirmed', primary: 'Join Meeting' },
    { title: 'Interview - Product Manager', time: '2024-01-17 · 1:00 PM (60 mins)', metaA: 'Candidate: Anna Grigoryan', metaB: 'Office - Room 204', status: 'pending', primary: 'Get Directions' },
  ]);

  const [showAddEvent, setShowAddEvent] = useState(false);
  const [eventForm, setEventForm] = useState({
    title: '',
    candidateName: '',
    date: '',
    time: '',
    duration: '45',
    meetingType: 'Virtual',
    meetingLocation: ''
  });

  const handleAddEvent = (e) => {
    e.preventDefault();
    const newEvent = {
      title: eventForm.title,
      time: `${eventForm.date} · ${eventForm.time} (${eventForm.duration} mins)`,
      metaA: `Candidate: ${eventForm.candidateName}`,
      metaB: eventForm.meetingLocation || eventForm.meetingType,
      status: 'pending',
      primary: eventForm.meetingType === 'Virtual' ? 'Join Meeting' : 'Get Directions'
    };
    setEvents([...events, newEvent]);
    setEventForm({ title: '', candidateName: '', date: '', time: '', duration: '45', meetingType: 'Virtual', meetingLocation: '' });
    setShowAddEvent(false);
    alert('Interview scheduled successfully!');
  };

  const interviewStats = [
    { label: 'Scheduled Interviews', count: 3 },
    { label: 'This Week', count: 2 },
    { label: 'Pending Confirmations', count: 1 },
    { label: 'Average Duration', count: '45 min' }
  ];

  return (
    <main className="page dashboard">
      <BrandHeader links={['Dashboard', 'Schedule']} user="EU" />

      <div className="title-row">
        <div>
          <h1>Interview & Meeting Schedule</h1>
          <p className="muted">Manage your interview schedule and meetings with candidates</p>
        </div>
        <button className="btn-dark" onClick={() => setShowAddEvent(!showAddEvent)}>
          {showAddEvent ? 'Cancel' : '+ Schedule Interview'}
        </button>
      </div>

      <div className="quick-stats-row">
        {interviewStats.map((stat, idx) => (
          <div key={idx} className="stat-card">
            <p className="muted">{stat.label}</p>
            <h3>{stat.count}</h3>
          </div>
        ))}
      </div>

      {showAddEvent && (
        <div className="add-event-form">
          <h3>Schedule Interview</h3>
          <form onSubmit={handleAddEvent}>
            <div className="form-row">
              <div className="form-group">
                <label>Interview Title</label>
                <input
                  type="text"
                  placeholder="e.g., Interview - Frontend Developer"
                  value={eventForm.title}
                  onChange={(e) => setEventForm({ ...eventForm, title: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>Candidate Name</label>
                <input
                  type="text"
                  placeholder="Full name"
                  value={eventForm.candidateName}
                  onChange={(e) => setEventForm({ ...eventForm, candidateName: e.target.value })}
                  required
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

            <div className="form-row">
              <div className="form-group">
                <label>Meeting Type</label>
                <select
                  value={eventForm.meetingType}
                  onChange={(e) => setEventForm({ ...eventForm, meetingType: e.target.value })}
                >
                  <option>Virtual</option>
                  <option>In-Person</option>
                  <option>Hybrid</option>
                </select>
              </div>
              <div className="form-group">
                <label>Location / Meeting Link</label>
                <input
                  type="text"
                  placeholder={eventForm.meetingType === 'Virtual' ? "Zoom/Teams link" : "Office address or room"}
                  value={eventForm.meetingLocation}
                  onChange={(e) => setEventForm({ ...eventForm, meetingLocation: e.target.value })}
                />
              </div>
            </div>

            <div className="form-actions">
              <button type="submit" className="btn-dark">Schedule Interview</button>
              <button type="button" className="btn-light" onClick={() => setShowAddEvent(false)}>Cancel</button>
            </div>
          </form>
        </div>
      )}

      <EventCards events={events} />

      <section className="dashboard-section">
        <h3>Interview Scoring & Feedback</h3>
        <div className="interviews-grid">
          {events.map((event, idx) => (
            <div key={idx} className="interview-feedback-card">
              <h4>{event.metaA}</h4>
              <p className="muted">{event.title}</p>
              <div className="feedback-section">
                <label>Score (1-10)</label>
                <input type="number" min="1" max="10" placeholder="8" />
              </div>
              <div className="feedback-section">
                <label>Notes</label>
                <textarea placeholder="Add your feedback..." rows="2"></textarea>
              </div>
              <button className="btn-dark">Save Feedback</button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
