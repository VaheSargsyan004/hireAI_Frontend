import { useState } from 'react';
import { BrandHeader } from '../../components/CommonBlocks';

export default function FindJobsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [experienceFilter, setExperienceFilter] = useState('all');

  const allJobs = [
    { id: 1, title: 'Senior Frontend Developer', company: 'Tech Armenia', location: 'Yerevan', experience: 'Senior', salary: '$50k-$80k', matchScore: 95, description: 'Lead frontend team, design UI components' },
    { id: 2, title: 'React Developer', company: 'Innovation Hub', location: 'Yerevan', experience: 'Mid', salary: '$45k-$70k', matchScore: 92, description: 'Build web applications with React' },
    { id: 3, title: 'Full Stack Developer', company: 'Krisp', location: 'Yerevan', experience: 'Mid', salary: '$55k-$85k', matchScore: 89, description: 'Develop full-stack web applications' },
    { id: 4, title: 'Junior Developer', company: 'ArmSoft', location: 'Yerevan', experience: 'Junior', salary: '$30k-$45k', matchScore: 78, description: 'Support development team, learn and grow' },
    { id: 5, title: 'Backend Developer', company: 'Tech Armenia', location: 'Remote', experience: 'Mid', salary: '$48k-$72k', matchScore: 85, description: 'Build scalable backend systems' },
    { id: 6, title: 'UI/UX Designer', company: 'Design Studio', location: 'Yerevan', experience: 'Junior', salary: '$35k-$50k', matchScore: 70, description: 'Design beautiful user interfaces' },
  ];

  const filteredJobs = allJobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLocation = locationFilter === '' || job.location === locationFilter;
    const matchesExperience = experienceFilter === 'all' || job.experience === experienceFilter;
    return matchesSearch && matchesLocation && matchesExperience;
  });

  const locations = ['Yerevan', 'Remote'];
  const experiences = ['Junior', 'Mid', 'Senior'];

  return (
    <main className="page dashboard">
      <BrandHeader links={['Dashboard', 'Schedule', 'Find Jobs']} user="EU" />

      <div className="title-row">
        <div>
          <h1>Find Your Next Opportunity</h1>
          <p className="muted">Discover jobs that match your skills and experience</p>
        </div>
      </div>

      <div className="job-search-form">
        <h3>Search Jobs</h3>
        <div className="search-inputs">
          <input
            type="text"
            placeholder="Job title or keyword..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <select value={locationFilter} onChange={(e) => setLocationFilter(e.target.value)}>
            <option value="">All Locations</option>
            {locations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
          </select>
          <select value={experienceFilter} onChange={(e) => setExperienceFilter(e.target.value)}>
            <option value="all">All Levels</option>
            {experiences.map(exp => <option key={exp} value={exp}>{exp}</option>)}
          </select>
        </div>

        <div className="search-summary">
          <p className="muted">{filteredJobs.length} jobs found</p>
        </div>

        {filteredJobs.length > 0 ? (
          <div className="job-listings">
            {filteredJobs.map(job => (
              <div key={job.id} className="job-listing-card">
                <div className="job-header">
                  <div className="job-title-section">
                    <h4>{job.title}</h4>
                    <p className="company">{job.company}</p>
                  </div>
                  <span className="match-badge">
                    <span className="match-score">{job.matchScore}%</span>
                    <p className="muted small">Match</p>
                  </span>
                </div>

                <div className="job-details">
                  <span className="detail">📍 {job.location}</span>
                  <span className="detail">🎯 {job.experience}</span>
                  <span className="detail">💰 {job.salary}/year</span>
                </div>

                <p className="job-description">{job.description}</p>

                <div className="job-tags">
                  {job.experience === 'Senior' && <span className="tag-skill">Leadership</span>}
                  {job.experience === 'Mid' && <span className="tag-skill">Growth</span>}
                  {job.experience === 'Junior' && <span className="tag-skill">Learning</span>}
                  <span className="tag-skill">Full-time</span>
                </div>

                <div className="job-footer">
                  <button className="btn-dark">Apply Now</button>
                  <button className="btn-light">Save Job</button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-results">
            <p>No jobs found matching your criteria. Try adjusting your filters.</p>
          </div>
        )}
      </div>

      <section className="dashboard-section">
        <h3>Job Search Tips</h3>
        <div className="tips-grid">
          <div className="tip-card">
            <h4>🔍 Refine Your Search</h4>
            <p className="muted">Use specific keywords and filters to find jobs that match your skills</p>
          </div>
          <div className="tip-card">
            <h4>⭐ Complete Your Profile</h4>
            <p className="muted">A complete profile increases your visibility to recruiters and improves matches</p>
          </div>
          <div className="tip-card">
            <h4>💾 Save Your Favorites</h4>
            <p className="muted">Bookmark jobs to review later or set alerts for similar positions</p>
          </div>
          <div className="tip-card">
            <h4>📧 Get Notifications</h4>
            <p className="muted">Enable notifications to stay updated on new jobs matching your preferences</p>
          </div>
        </div>
      </section>
    </main>
  );
}
