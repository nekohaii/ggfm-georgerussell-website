import React from 'react'

// Archive tiles rendered sequentially like the Origins timeline cards
const archiveTiles = [
  {
    id: 1,
    eyebrow: 'Qualifying Masterclass',
    title: 'Mr. Saturday',
    image: '/assets/images/mr-saturday.jpg',
    alt: 'Onboard view from George Russell’s Williams during qualifying',
    body:
      'During the 2019-2021 Williams years, Russell reached Q3 more than any teammate despite a downforce deficit. Spa 2021 qualifying P2 in the rain solidified the “Mr. Saturday” nickname.',
  },
  {
    id: 2,
    eyebrow: 'Reliability Defined',
    title: 'Mr. Consistency',
    image: '/assets/images/mr-consistency.jpg',
    alt: 'George Russell on the podium celebrating',
    body:
      'Post-2022, Russell became synonymous with reliability. With 23 podiums in 149 races, he transformed from a qualifying specialist into a driver who delivers top-five finishes every weekend.',
  },
  {
    id: 3,
    eyebrow: 'Driving Style',
    title: 'Technical Profile',
    image: '/assets/images/technical-profile.jpg',
    alt: 'Data overlays and telemetry graphics for George Russell',
    body:
      'Russell’s inputs are smooth and deliberate, allowing longer tyre life and repeatable lap times. His feedback accelerates car development, and his adaptability mid-race makes him a strategist’s dream.',
  },
  {
    id: 4,
    eyebrow: 'Home Soil',
    title: 'Home Grand Prix',
    image: '/assets/images/silverstone-home.jpg',
    alt: 'Silverstone grandstands filled with fans',
    body:
      'Silverstone is more than a race, it is a homecoming. Russell’s 2021 qualifying lap that put a Williams P8 brought the entire British crowd to its feet, reinforcing his bond with home fans.',
  },
  {
    id: 5,
    eyebrow: 'Team Radio',
    title: 'Radio Personality',
    image: '/assets/images/radio-personality.jpg',
    alt: 'George Russell speaking on team radio mid-race',
    body: `Authentic colloquialisms make Russell’s radio messages iconic. Favorites include “Absolutely buzzing” after strong qualifying, “Blimey” during tricky setups, and “Mega” when praising the team.`,
    listTitle: 'Common phrases:',
    list: ['“Absolutely buzzing”', '“Blimey”', '“Crikey”', '“Bloody Nora”', '“Mega”', '“Feeling donkey”'],
  },
  {
    id: 6,
    eyebrow: 'Breakthrough Win',
    title: 'Brazil 2022 Victory',
    image: '/assets/images/brazil-2022-victory.jpg',
    alt: 'George Russell holding the Brazilian Grand Prix trophy',
    body:
      'São Paulo 2022 marked Russell’s first F1 win and Mercedes’ only victory that year. He led every lap in mixed conditions and won the sprint the day prior, the weekend he evolved into a race winner.',
  },
  {
    id: 7,
    eyebrow: 'Stats Digest',
    title: 'By The Numbers',
    image: '/assets/images/statistics.jpg',
    alt: 'Graphic showing career statistics for George Russell',
    stats: {
      career: [
        'Races: 149 Wins: 5 • Podiums: 23',
        'Poles: 7 • Fastest laps: 11 • Points: 990',
        'Best season result: 4th (2022)',
      ],
      season2025: ['Wins: 2 • Podiums: 8 • Poles: 2', 'Fastest laps: 3 • DNFs: 0'],
    },
    footer: '2019-2021: Qualifying specialist → 2025: Mercedes team leader. (Stats accurate as of November 21, 2025.)',
  },
  {
    id: 8,
    eyebrow: 'Near Miss',
    title: 'Sakhir 2020, What Could Have Been',
    image: '/assets/images/sakhir-2020.jpg',
    alt: 'George Russell driving the Mercedes at the 2020 Sakhir Grand Prix',
    body:
      'Subbing for Lewis Hamilton, Russell qualified P2 and led the race until a pit stop error and puncture relegated him to P9. The heartbreak fueled his determination and made Brazil 2022 even sweeter.',
  },
]

/**
 * Archive page renders the eight feature tiles sequentially using timeline cards.
 */
const Archive: React.FC = () => {
  return (
    <div className="page-stack archive-page">
      <header className="archive-header">
        <p className="eyebrow">Archive</p>
        <h1>Defining chapters, iconic moments</h1>
        <p>
          Each tile dives into a different facet of George Russell’s journey, from the razor-edge
          qualifying runs at Williams to the emotional highs of leading Mercedes.
        </p>
      </header>

      {archiveTiles.map((tile) => (
        <section key={tile.id} className="timeline-section archive-section">
          <div className="timeline-section__content">
            {tile.eyebrow && <p className="eyebrow">{tile.eyebrow}</p>}
            <h2>{tile.title}</h2>
            {tile.body && <p>{tile.body}</p>}

            {tile.list && tile.listTitle && (
              <div className="archive-list">
                <p className="tile-subtitle">{tile.listTitle}</p>
                <ul>
                  {tile.list.map((quote) => (
                    <li key={quote}>{quote}</li>
                  ))}
                </ul>
              </div>
            )}

            {tile.stats && (
              <div className="tile-stats">
                <div>
                  <p className="tile-subtitle">Career Stats</p>
                  <ul>
                    {tile.stats.career.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="tile-subtitle">2025 Season</p>
                  <ul>
                    {tile.stats.season2025.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {tile.footer && <p className="tile-footer">{tile.footer}</p>}
          </div>

          <div className="timeline-section__media">
            <img src={tile.image} alt={tile.alt} />
          </div>
        </section>
      ))}
    </div>
  )
}

export default Archive

