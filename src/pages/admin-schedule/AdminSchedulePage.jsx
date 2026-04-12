import { useState } from 'react';
import { BrandHeader, EventCards } from '../../components/CommonBlocks';

export default function AdminSchedulePage() {
  const [events, setEvents] = useState([
    { title: 'System Review Meeting', time: '2024-01-15 · 10:00 AM (60 mins)', metaA: 'Participants: Tech Team, HR Team', metaB: 'Conference Room A', status: 'confirmed', primary: 'Get Directions' },
    { title: 'Client Onboarding - Tech Armenia', time: '2024-01-16 · 2:00 PM (90 mins)', metaA: 'Participants: Armen Sarkissian, Gayane Mkrtchyan', metaB: 'Virtual Meeting', status: 'pending', primary: 'Join Meeting' },
    { title: 'Platform Maintenance Window', time: '2024-01-17 · 11:00 PM (2 hours)', metaA: 'All systems will be down for updates', metaB: 'Scheduled maintenance', status: 'confirmed', primary: 'View Details' },
  ]);

  const [showAddEvent, setShowAddEvent] = useState(false);
  const [eventForm, setEventForm] = useState({
    title: '',
    date: '',
    time: '',
    duration: '60',
    participants: '',
    location: '',
    description: ''
  });

  const handleAddEvent = (e) => {
    e.preventDefault();
    const newEvent = {
      title: eventForm.title,
      time: `${eventForm.date} · ${eventForm.time} (${eventForm.duration} mins)`,
      metaA: `Participants: ${eventForm.participants}`,
      metaB: eventForm.location,
      status: 'pending',
      primary: 'View Details'
    };
    setEvents([...events, newEvent]);
    setEventForm({ title: '', date: '', time: '', duration: '60', participants: '', location: '', description: '' });
    setShowAddEvent(false);
    alert('Event added successfully!');
  };

  return (
    <main className="page dashboard">
      <BrandHeader links={['Dashboard', 'Schedule']} user="AU" />

      <div className="title-row">
        <div>
          <h1>Administrative Schedule</h1>
          <p className="muted">Overview of all platform activities and meetings</p>
        </div>
        <button className="btn-dark" onClick={() => setShowAddEvent(!showAddEvent)}>
          {showAddEvent ? 'Cancel' : '+ Add Event'}
        </button>
      </div>

      {showAddEvent && (
        <div className="add-event-form">
          <h3>Create New Event</h3>
          <form onSubmit={handleAddEvent}>
            <div className="form-row">
              <div className="form-group">
                <label>Event Title</label>
                <input
                  type="text"
                  placeholder="e.g., Team Meeting"
                  value={eventForm.title}
                  onChange={(e) => setEventForm({ ...eventForm, title: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>Date</label>
                <input
                  type="date"
                  value={eventForm.date}
                  onChange={(e) => setEventForm({ ...eventForm, date: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="form-row">
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
                  placeholder="60"
                  value={eventForm.duration}
                  onChange={(e) => setEventForm({ ...eventForm, duration: e.target.value })}
                />
              </div>
            </div>

            <div className="form-group">
              <label>Participants</label>
              <input
                type="text"
                placeholder="Name1, Name2, Name3..."
                value={eventForm.participants}
                onChange={(e) => setEventForm({ ...eventForm, participants: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label>Location</label>
              <input
                type="text"
                placeholder="e.g., Conference Room A or Virtual Meeting"
                value={eventForm.location}
                onChange={(e) => setEventForm({ ...eventForm, location: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label>Description</label>
              <textarea
                placeholder="Event details..."
                rows="3"
                value={eventForm.description}
                onChange={(e) => setEventForm({ ...eventForm, description: e.target.value })}
              ></textarea>
            </div>

            <div className="form-actions">
              <button type="submit" className="btn-dark">Create Event</button>
              <button type="button" className="btn-light" onClick={() => setShowAddEvent(false)}>Cancel</button>
            </div>
          </form>
        </div>
      )}

      <EventCards events={events} />

      <section className="dashboard-section">
        <h3>Upcoming Activities</h3>
        <div className="activities-timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h4>System Review</h4>
              <p className="muted">Tomorrow at 10:00 AM</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h4>Client Onboarding</h4>
              <p className="muted">Tomorrow at 2:00 PM</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h4>Platform Maintenance</h4>
              <p className="muted">In 2 days at 11:00 PM</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
