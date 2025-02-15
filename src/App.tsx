import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingView from './views/LandingView';
import FormView from './views/FormView';
import ResultsView from './views/ResultsView';
import { NavBar } from './components/common/NavBar';
import DownloadDataView from './views/DownloadDataView';

export const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <NavBar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<LandingView />} />
            <Route path="/form" element={<FormView />} />
            <Route path="/results" element={<ResultsView />} />
            <Route path="/downloadData" element={<DownloadDataView />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};
