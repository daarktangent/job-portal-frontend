import './App.css';
import JobList from './Pages/JobList';
import HomePages from './Pages/HomePages';
import SiteHeader from './Component/SiteHeader';
import SiteFooter from './Component/SiteFooter';
import JobDetails from './Pages/JobDetails';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ApolloClient,InMemoryCache,ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://fearless-benefit-9323de260e.strapiapp.com/graphql',
  cache: new InMemoryCache()
});


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ApolloProvider client={client}>
      <SiteHeader/>
        <Routes>
          <Route path="/" element={<HomePages />} />
          <Route path="/home" element={<JobList />} />
          <Route path="/details/:id" element={<JobDetails/>}/>
        </Routes>
      </ApolloProvider> 
      </BrowserRouter>
      <SiteFooter/>
    </div>
  );
}

export default App;
