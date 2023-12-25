import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Fetch from '../hooks/Fetch';

const styles = {
  container: {
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '600px',
    margin: 'auto',
    marginTop: '20px',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '16px',
  },
  jobRole: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '8px',
  },
  jobDetails: {
    fontSize: '16px',
    lineHeight: '1.5',
    marginBottom: '16px',
    whiteSpace: 'pre-line',
  },
  bulletPoints: {
    listStyleType: 'disc',
    paddingLeft: '20px',
  },
};

function JobDetails() {
  const { id } = useParams();
  const { loading, error, data } = Fetch(`http://localhost:1337/api/jobs/${id}`);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching job details: {error.message}</p>;
  }

  if (!data) {
    return <p>No job details found</p>;
  }

  const { JobRole, JobDetails } = data.data.attributes;
  const jobDetailsArray = JobDetails.split('.');

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Job Details</h1>
      <p style={styles.jobRole}>Job Role: {JobRole}</p>
      <ul style={styles.bulletPoints}>
        {jobDetailsArray.map((point, index) => (
          <li key={index}>{point.trim()}</li>
        ))}
      </ul>
    </div>
  );
}

export default JobDetails;
