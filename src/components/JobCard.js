import React from "react";

function JobCard({ job }) {
  return (
    <div className="job-card">
      <h2>{job.title}</h2>

      <p><strong>Company:</strong> {job.company}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Type:</strong> {job.type}</p>

      <button className="apply-btn">Apply</button>
    </div>
  );
}

export default JobCard;
