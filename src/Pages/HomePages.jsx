import React from 'react';
import styled from 'styled-components';
import JobList from '../Pages/JobList';
import SiteHeader from '../Component/SiteHeader';
import SiteFooter from '../Component/SiteFooter';

const Container = styled.div`
  max-width: 1000px;
  margin: auto;
  padding: 10px;
`;

const Content = styled.div`
  margin-top: 20px;
`;

function HomePages() {
  return (
    <Container>
      <Content>
        <h1>Welcome to Our Job Portal</h1>
        <p>Find your dream job with us. Explore the latest job listings below:</p>
        <JobList />
      </Content>
      <SiteFooter />
    </Container>
  );
}

export default HomePages;
