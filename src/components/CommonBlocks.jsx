export function BrandHeader({ links = [], user = 'EU' }) {
  return (
    <header className="brand-row">
      <div className="mini-links">{links.map((l) => <span key={l}>{l}</span>)}</div>
      <div className="avatar">{user}</div>
    </header>
  );
}

export function StatsRow({ items }) {
  return (
    <section className="stats-grid">
      {items.map((item) => (
        <article key={item.title} className="card stat-card">
          <p className="muted">{item.title}</p>
          <h3>{item.value}</h3>
          <p className="accent">{item.note}</p>
        </article>
      ))}
    </section>
  );
}

export function EventCards({ events }) {
  return (
    <div className="events-stack">
      {events.map((event) => (
        <article key={event.title} className="card event-card">
          <div className="row-between">
            <h4>{event.title}</h4>
            <span className={`pill ${event.status}`}>{event.status}</span>
          </div>
          <p className="muted">{event.time}</p>
          <p>{event.metaA}</p>
          <p>{event.metaB}</p>
          <div className="inline-actions">
            <button className="btn-dark">{event.primary}</button>
            <button className="btn-light">Reschedule</button>
            <button className="btn-light">Edit</button>
          </div>
        </article>
      ))}
    </div>
  );
}
