import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 16px;
`;

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

function JobList() {
  const [jobs, setJobs] = useState([]);

  const getJobs = async () => {
    try {
      const api = await fetch(`http://localhost:1337/api/jobs`);
      const data = await api.json();
      console.log(data);
      setJobs(data.data);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };

  useEffect(() => {
    getJobs();
  }, []);

  return (
    <div>
      <h1>Job Listings</h1>
      <GridContainer>
        {jobs.map((job) => (
          <Card key={job.id}>
            <h2>{job.attributes.JobRole}</h2>
            <p>Salary: {job.attributes.Salary}</p>
            <p>Location: {job.attributes.Location}</p>
          </Card>
        ))}
      </GridContainer>
    </div>
  );
}

export default JobList;
