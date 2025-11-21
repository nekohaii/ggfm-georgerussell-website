import './App.css'
import { useEffect } from 'react'
import SmoothScroll from './SmoothScroll'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Origins from './pages/Origins'
import Archive from './pages/Archive'

const ScrollToTop = () => {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    window.__lenis?.stop?.()
    window.__lenis?.scrollTo?.(0, { immediate: true })
    window.__lenis?.start?.()
  }, [location.key])

  return null
}

function App() {
  return (
    <Router>
      <SmoothScroll>
        <ScrollToTop />
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

