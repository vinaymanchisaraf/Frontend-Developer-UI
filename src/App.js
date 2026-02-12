import React, { useState } from "react";
import "./App.css";
import JobCard from "./components/JobCard";

function App() {

  const jobsData = [
    {
      id: 1,
      title: "Frontend Intern",
      company: "Microsoft",
      location: "Remote",
      type: "Internship"
    },
    {
      id: 2,
      title: "Backend Developer",
      company: "Cygnus",
      location: "Hyderabad",
      type: "Full-time"
    },
    {
      id: 3,
      title: "React Developer",
      company: "Google",
      location: "Remote",
      type: "Full-time"
    },
    {
      id: 4,
      title: "UI Intern",
      company: "Amazon",
      location: "Bangalore",
      type: "Internship"
    }
  ];
  const [search, setSearch] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const filteredJobs = jobsData.filter((job) => {

    const matchesSearch = job.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesLocation =
      locationFilter === "" || job.location === locationFilter;

    const matchesType =
      typeFilter === "" || job.type === typeFilter;

    return matchesSearch && matchesLocation && matchesType;
  });

  return (
    <div className="container">
      <h1>Job Listings</h1>
      <div className="filters">
        <input
          type="text"
          placeholder="Search by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select onChange={(e) => setLocationFilter(e.target.value)}>
          <option value="">All Locations</option>
          <option value="Remote">Remote</option>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Bangalore">Bangalore</option>
        </select>

        <select onChange={(e) => setTypeFilter(e.target.value)}>
          <option value="">All Types</option>
          <option value="Internship">Internship</option>
          <option value="Full-time">Full-time</option>
        </select>
      </div>
      <div className="jobs-container">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))
        ) : (
          <p className="no-jobs">No Jobs Found</p>
        )}
      </div>
    </div>
  );
}

export default App;
