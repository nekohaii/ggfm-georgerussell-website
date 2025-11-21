import React from 'react'
import ImageReveal from '../ImageReveal'

/**
 * Origins page chronologically highlights Russell's progression.
 * Each section pairs narrative copy with supporting media.
 */
const Origins: React.FC = () => {
  return (
    <div className="page-stack origins-page">
      {/* 2016-2017: Junior foundation across F3/GP3 */}
      <section className="timeline-section">
        <div className="timeline-section__content">
          <p className="eyebrow">2016-2017</p>
          <h2>Junior Racing</h2>
          <h3>2016: FIA Formula 3 European Championship</h3>
          <p>
            Russell finished third overall while honing the precision and tyre management that would
            later define his F1 craft. The campaign served as his launchpad toward higher single-seater
            categories and established him as a relentless competitor.
          </p>
          <h3>2017: GP3 Series Champion</h3>
          <ul>
            <li>Raced for ART Grand Prix with 4 wins, 4 poles, and 7 podiums.</li>
            <li>Captured the title with two races remaining.</li>
            <li>Joined the Mercedes Young Driver Programme and became an F1 prospect overnight.</li>
          </ul>
        </div>
        <div className="timeline-section__media">
          <img src="/assets/images/gp3-2017.jpg" alt="George Russell holding the GP3 trophy in 2017" />
        </div>
      </section>

      {/* 2018: Formula 2 domination + ImageReveal to reuse animation */}
      <section className="timeline-section">
        <div className="timeline-section__content">
          <p className="eyebrow">2018</p>
          <h2>Formula 2 Champion</h2>
          <p>
            Driving for ART, Russell conquered FIA Formula 2 with seven wins, the most of any driver
            that season, defeating Nyck de Vries in a heavyweight rookie battle. His relentless
            consistency and strategic adaptability confirmed he was ready for Formula 1.
          </p>
        </div>
        <div className="timeline-section__media">
          <ImageReveal
            title="F2 Champion 2018"
            description="The momentum from GP3 carried into F2, where Russell asserted himself as the benchmark rookie."
            src="/assets/images/f2-2018.jpg"
            alt="George Russell celebrating the 2018 Formula 2 title"
          />
        </div>
      </section>

      {/* 2019-2021: Williams "Mr. Saturday" chapters */}
      <section className="timeline-section">
        <div className="timeline-section__content">
          <p className="eyebrow">2019-2021</p>
          <h2>Williams Years, “Mr. Saturday”</h2>
          <h3>2019: F1 Debut</h3>
          <p>
            Signed by Williams Racing and immediately outqualified Robert Kubica at every single Grand
            Prix. Even in a car lacking downforce, Russell’s one-lap pace made entire paddocks take
            notice.
          </p>
          <h3>2020: Sakhir Substitute</h3>
          <p>
            Called up to replace Lewis Hamilton, Russell qualified P2 and led much of the race before a
            pit stop mix-up and puncture denied a fairy-tale win. The near-miss proved he belonged in a
            Mercedes.
          </p>
          <h3>2021: Williams Struggles</h3>
          <p>
            Performed miracles with an uncompetitive car, including Spa 2021 qualifying P2 in
            torrential rain, the first podium at the Belgian Grand Prix, and a 56-race unbeaten
            qualifying streak versus teammates.
          </p>
          <div className="key-stat">
            Dragged the Williams into Q3 more often than any teammate from 2019-2021, highlighted by
            Spa 2021&rsquo;s front-row start, the essence of &ldquo;Mr. Saturday.&rdquo;
          </div>
        </div>
        <div className="timeline-section__media">
          <img src="/assets/images/williams-car.jpg" alt="Williams Formula 1 car during the 2020 season" />
          <img src="/assets/images/spa-2021-qualifying.jpg" alt="George Russell celebrating Spa 2021 qualifying lap" />
        </div>
      </section>

      {/* 2022: Mercedes promotion & first win */}
      <section className="timeline-section">
        <div className="timeline-section__content">
          <p className="eyebrow">2022</p>
          <h2>Mercedes Move & First Victory</h2>
          <p>
            Promoted to Mercedes just as the team wrestled with new regulations. Despite the car’s
            limitations, Russell delivered relentless points and matured into the squad’s dependable
            leader.
          </p>
          <h3>Brazilian Grand Prix, November 20, 2022</h3>
          <p>
            Claimed his maiden F1 win by leading every lap in shifting rain conditions, the team’s only
            victory that year. The sprint win the day before underscored the breakthrough, proving he
            could convert Saturdays into Sundays.
          </p>
        </div>
        <div className="timeline-section__media">
          <ImageReveal
            title="First F1 Victory 2022"
            description="São Paulo, Brazil, the day Russell turned promise into proof."
            src="/assets/images/brazil-2022-podium.jpg"
            alt="George Russell celebrating his first Formula 1 victory in Brazil 2022"
          />
        </div>
      </section>

      {/* 2023-2024: Consistency era */}
      <section className="timeline-section">
        <div className="timeline-section__content">
          <p className="eyebrow">2023-2024</p>
          <h2>Consistency Era, “Mr. Consistency”</h2>
          <h3>2023 Season</h3>
          <p>
            Four DNFs masked the fact Russell banked podiums and points galore, keeping Mercedes in the
            fight while reliability issues persisted.
          </p>
          <h3>2024 Season</h3>
          <ul>
            <li>Wins in Austria and Las Vegas highlighted the year.</li>
            <li>Scored 245 points and outperformed Lewis Hamilton again.</li>
            <li>Mercedes engineers crowned him “Mr. Consistency” on the radio.</li>
          </ul>
        </div>
        <div className="timeline-section__media">
          <img src="/assets/images/mr-consistency.jpg" alt="George Russell celebrating a podium finish" />
          <img src="/assets/images/mercedes-current.jpg" alt="Mercedes W15/W16 during the 2024-2025 era" />
        </div>
      </section>

      {/* 2025: Leadership era overview */}
      <section className="timeline-section">
        <div className="timeline-section__content">
          <p className="eyebrow">2025</p>
          <h2>Contract Year & Leadership</h2>
          <p>
            With Lewis Hamilton now at Ferrari, Russell leads Mercedes alongside 18-year-old prodigy
            Kimi Antonelli. His contract through 2026 signals Mercedes’ commitment to the new era.
          </p>
          <ul>
            <li>Two wins so far, Canada (pole + win + fastest lap) and Singapore.</li>
            <li>Multiple podiums keep him in the championship conversation.</li>
            <li>Carrying the Silver Arrows into their next evolution.</li>
          </ul>
        </div>
        <div className="timeline-section__media">
          <img src="/assets/images/mercedes-current.jpg" alt="George Russell leading the Mercedes team in 2025" />
        </div>
      </section>
    </div>
  )
}

export default Origins

