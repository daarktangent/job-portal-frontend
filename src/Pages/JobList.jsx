import React from 'react';
import styled from 'styled-components';
import Fetch from '../hooks/Fetch';
import { Link } from 'react-router-dom';

const Container = styled.div`
  max-width: 1000px;
  margin: auto 10px; /* Adjust the margin as needed */
`;

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

  h2 {
    font-size: 1.5rem;
    margin-bottom: 8px;
  }

  p {
    font-size: 1rem;
    margin-bottom: 8px;
  }

  a {
    display: block;
    background-color: #007bff;
    color: #fff;
    text-decoration: none;
    padding: 8px 16px;
    border-radius: 4px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

function JobList() {
  const { loading, error, data } = Fetch('http://localhost:1337/api/jobs');

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <Container>
      <h1>Job Listings</h1>
      <GridContainer>
        {data.data.map((job) => (
          <Card key={job.id}>
            <h2>{job.attributes.JobRole}</h2>
            <p>Salary: {job.attributes.Salary}</p>
            <p>Location: {job.attributes.Location}</p>
            <Link to={`/details/${job.id}`}>Details</Link>
          </Card>
        ))}
      </GridContainer>
    </Container>
  );
}

export default JobList;
