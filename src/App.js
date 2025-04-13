import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import PersonalPartiesPage from "./pages/PersonalPartiesPage"
import OpenPartiesPage from "./pages/OpenPartiesPage"
import KidsGamesPage from "./pages/KidsGamesPage"
import AdultGamesPage from "./pages/AdultGamesPage"
import DancePage from "./pages/DancePage"
import OnlineLearningPage from "./pages/OnlineLearningPage"
import EventCalendar from './components/EventCalendar';
import EventPage from './pages/EventPage';
import "./App.css"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/personal-parties" element={<PersonalPartiesPage />} />
        <Route path="/open-parties" element={<OpenPartiesPage />} />
        <Route path="/kids-games" element={<KidsGamesPage />} />
        <Route path="/adult-games" element={<AdultGamesPage />} />
        <Route path="/dance" element={<DancePage />} />
        <Route path="/online-learning" element={<OnlineLearningPage />} />
        <Route path="/events" element={<EventCalendar eventType="adults" />} />
        <Route path="/events/kids" element={<EventCalendar eventType="kids" />} />
        <Route path="/events/:slug" element={<EventPage />} />
      </Routes>
    </Router>
  )
}

export default App

