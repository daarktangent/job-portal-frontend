import './App.css';
import JobList from './Pages/JobList';
import HomePages from './Pages/HomePages';
import SiteHeader from './Component/SiteHeader';
import SiteFooter from './Component/SiteFooter'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SiteHeader/>
        <Routes>
          <Route path="/" element={<HomePages />} />
          <Route path="/home" element={<JobList />} />
        </Routes>
      </BrowserRouter>
      <SiteFooter/>
    </div>
  );
}

export default App;
