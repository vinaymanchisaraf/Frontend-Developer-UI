import React, { useState } from "react";
import "./App.css";
import JobCard from "./components/JobCard";

function App() {

const jobsData = [
  { id: 1, title: "Frontend Intern", company: "Microsoft", location: "Remote", type: "Internship" },
  { id: 2, title: "Backend Developer", company: "Cygnus", location: "Hyderabad", type: "Full-time" },
  { id: 3, title: "React Developer", company: "Google", location: "Remote", type: "Full-time" },
  { id: 4, title: "UI Intern", company: "Amazon", location: "Bangalore", type: "Internship" },

  { id: 5, title: "Software Engineer", company: "Infosys", location: "Hyderabad", type: "Full-time" },
  { id: 6, title: "Web Developer", company: "TCS", location: "Bangalore", type: "Full-time" },
  { id: 7, title: "Java Developer", company: "Wipro", location: "Hyderabad", type: "Full-time" },
  { id: 8, title: "Frontend Developer", company: "Accenture", location: "Remote", type: "Full-time" },

  { id: 9, title: "Full Stack Intern", company: "Zoho", location: "Remote", type: "Internship" },
  { id: 10, title: "Python Developer", company: "Capgemini", location: "Bangalore", type: "Full-time" },
  { id: 11, title: "Node.js Developer", company: "Tech Mahindra", location: "Hyderabad", type: "Full-time" },
  { id: 12, title: "Software Testing Intern", company: "HCL", location: "Bangalore", type: "Internship" },

  { id: 13, title: "UI/UX Designer", company: "Adobe", location: "Remote", type: "Full-time" },
  { id: 14, title: "DevOps Engineer", company: "IBM", location: "Hyderabad", type: "Full-time" },
  { id: 15, title: "Cloud Intern", company: "Oracle", location: "Remote", type: "Internship" },
  { id: 16, title: "Data Analyst", company: "Deloitte", location: "Bangalore", type: "Full-time" },

  { id: 17, title: "Machine Learning Intern", company: "Samsung", location: "Remote", type: "Internship" },
  { id: 18, title: "Product Engineer", company: "Flipkart", location: "Bangalore", type: "Full-time" },
  { id: 19, title: "Frontend Engineer", company: "Paytm", location: "Hyderabad", type: "Full-time" },
  { id: 20, title: "Graduate Engineer Trainee", company: "L&T", location: "Hyderabad", type: "Full-time" }
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
      <h1 className = "heading">Opportunities That Match You</h1>
      <h6 className = "subheading" >("Don't think about the AI will replace our jobs , get the opportunity and focus on sharpening your skills, even AI will disappear by observing your skills")</h6>
      <p className="sub-heading">
         Available Opportunities</p>
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
