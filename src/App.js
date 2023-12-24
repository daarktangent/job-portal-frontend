import './App.css';
import JobList from './Pages/JobList';
import HomePages from './Pages/HomePages';
import SiteHeader from './Component/SiteHeader';
function App() {
  return (
    <div className="App">
      <SiteHeader />
      <JobList />
    </div>
  );
}

export default App;
