import './App.css'
import SmoothScroll from './SmoothScroll'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Origins from './pages/Origins'
import Archive from './pages/Archive'

function App() {
  return (
    <Router>
      <SmoothScroll>
        <header className="site-header">
          <div className="site-header__inner">
            <h1 className="logo-text">GR63</h1>
            <nav aria-label="Main" className="site-nav">
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/origins" className="nav-link">Origins</Link>
              <Link to="/archive" className="nav-link">Archive</Link>
            </nav>
          </div>
        </header>
        <main className="page-shell">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/origins" element={<Origins />} />
            <Route path="/archive" element={<Archive />} />
          </Routes>
        </main>
        <footer>
          <p>A project by Joey Lagos Del Rosario.</p>
        </footer>
      </SmoothScroll>
    </Router>
  )
}

export default App

