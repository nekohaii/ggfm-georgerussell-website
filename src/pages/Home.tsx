import React from 'react'

// Core profile metadata rendered in the "Driver Profile" card
const driverInfo = [
  { label: 'Born', value: '15 February 1998' },
  { label: 'Birthplace', value: "King's Lynn, England" },
  { label: 'Nationality', value: 'British' },
  { label: 'Team', value: 'Mercedes-AMG Petronas F1' },
  { label: 'Number', value: '63' },
  { label: 'Current Car', value: 'Mercedes W16 (2025)' },
  { label: 'Teammate', value: 'Kimi Antonelli' },
  { label: 'Contract', value: 'Through 2026' },
]

// Key statistics rendered inside the table
const careerStats = [
  { stat: 'Grand Prix Races', value: '149' },
  { stat: 'Career Wins', value: '5' },
  { stat: 'Podiums', value: '23' },
  { stat: 'Pole Positions', value: '7' },
  { stat: 'Fastest Laps', value: '11' },
  { stat: 'Total Career Points', value: '990' },
  { stat: 'Best Championship Result', value: '4th (2022)' },
]

// Chronological list of victories used for the wins breakdown list
const wins = [
  { event: 'Brazil 2022', detail: 'São Paulo Grand Prix (First F1 victory)' },
  { event: 'Austria 2024', detail: 'Red Bull Ring' },
  { event: 'Las Vegas 2024', detail: 'Las Vegas Grand Prix' },
  { event: 'Canada 2025', detail: 'Montreal – Pole, Win, Fastest Lap' },
  { event: 'Singapore 2025', detail: 'Marina Bay' },
]

const Home: React.FC = () => {
  return (
    <div className="page-stack home-page">
      {/* Hero: introductory copy + visual references */}
      <section className="hero-banner home-hero">
        <div className="hero-banner-content">
          <p className="tagline">Mercedes-AMG PETRONAS Formula One Driver</p>
          <h1>George Russell</h1>
          <p className="lede">
            From fearless junior champion to Mercedes team leader, George Russell has become the
            benchmark for precision, resilience, and modern racecraft.
          </p>
        </div>
        <div className="hero-visuals">
          <figure>
            <img src="/assets/images/home-hero.jpg" alt="George Russell portrait in Mercedes race suit" />
            <figcaption>George Russell, 2025 season portrait</figcaption>
          </figure>
          <figure>
            <img src="/assets/images/w16-car.jpg" alt="Mercedes W16 Formula 1 car static display" />
            <figcaption>Mercedes-AMG W16, 2025 challenger</figcaption>
          </figure>
        </div>
      </section>

      {/* Driver profile card with two-column definition list */}
      <section className="profile-card">
        <header>
          <p className="eyebrow">Driver Profile</p>
          <h2>George Russell</h2>
        </header>
        <dl className="profile-grid">
          {driverInfo.map((item) => (
            <div key={item.label}>
              <dt>{item.label}</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Career statistics table */}
      <section className="stats-panel">
        <header>
          <p className="eyebrow">Career Statistics</p>
          <h2>Numbers that define the journey</h2>
        </header>
        <div className="stats-table-wrapper">
          <table className="stats-table">
            <thead>
              <tr>
                <th scope="col">Statistic</th>
                <th scope="col">Value</th>
              </tr>
            </thead>
            <tbody>
              {careerStats.map((item) => (
                <tr key={item.stat}>
                  <th scope="row">{item.stat}</th>
                  <td>{item.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Wins breakdown list */}
      <section className="wins-panel">
        <header>
          <p className="eyebrow">Wins Breakdown</p>
          <h2>Every victory tells a story</h2>
        </header>
        <ul className="wins-list">
          {wins.map((win) => (
            <li key={win.event}>
              <span className="win-event">{win.event}</span>
              <span className="win-detail">{win.detail}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default Home

