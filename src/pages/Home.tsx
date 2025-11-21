import React from 'react'

const Home: React.FC = () => {
  return (
    <div className="page-stack">
      <section className="hero-banner">
        <div className="hero-banner-content">
          <h1>George Russell</h1>
          <p className="tagline">Mercedes-AMG PETRONAS Formula One Driver</p>
        </div>
      </section>

      <section className="career-stats">
        <h2>Career Stats</h2>
        <p>Wins: 5, Podiums: 23, Poles: 7</p>
      </section>
    </div>
  )
}

export default Home

