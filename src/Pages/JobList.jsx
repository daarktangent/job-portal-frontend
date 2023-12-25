import React from 'react';
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import { Link } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';

const Container = styled.div`
  max-width: 1000px;
  margin: auto 10px;
`;

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  div {
    padding: 16px;

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
  }
`;

const JOBS = gql`
  query GetJobs {
    jobs {
      data {
        id
        attributes {
          location
          JobRole
        }
      }
    }
  }
`;


function JobList() {
  const { loading, error, data } = useQuery(JOBS);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    console.error('Error fetching jobs:', error);
    return <p>Error fetching jobs. Please try again later.</p>;
  }

  const splideOptions = {
    perPage: 4,
    arrows: false,
    pagination: false,
    drag: 'free',
  };

  return (
    <Container>
      <h1>Job Listings</h1>
      <Splide options={splideOptions} padding={{ left: '5rem', right: '5rem' }}>
        {data.jobs.data.map((job) => (
          <SplideSlide key={job.id}>
            <Card>
              <div>
                <h2>{job.attributes.JobRole}</h2>
                <p>Location: {job.attributes.location}</p>
                <Link to={`/details/${job.id}`}>Details</Link>
              </div>
            </Card>
          </SplideSlide>
        ))}
      </Splide>
    </Container>
  );
}

export default JobList;
