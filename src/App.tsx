import './App.css'
import ImageReveal from './ImageReveal'
import SmoothScroll from './SmoothScroll'

function App() {
  return (
    <SmoothScroll>
      <header className="site-header">
        <div className="site-header__inner">
          <h1 className="logo-text">George Russell</h1>
          <nav aria-label="Main">
            <button>Home</button>
            <button>About</button>
            <button>Contact</button>
          </nav>
        </div>
      </header>
      <main>
        <section className="hero-cyan">
          <div className="hero-cyan__content">
            <h1>George Russell</h1>
            <p className="tagline">Mercedes-AMG PETRONAS Formula One Driver</p>
          </div>
        </section>

        <section className="career-stats">
          <h2>Career Stats</h2>
          <p>Wins: 5, Podiums: 23, Poles: 7</p>
        </section>

        <ImageReveal 
          title="F2 Champion 2018"
          description="Following his GP3 success, Russell won the FIA Formula 2 Championship in his rookie season, becoming the first British driver to do so since Lewis Hamilton."
          src="https://images.ctfassets.net/1fvlg6xqnm65/66fJ1wrYcN0LBtsmPQjcTC/0ffbd03a4a5e0cc5396746216c1d154f/George_Russell.png?w=800&q=75&fm=webp"
          alt="George Russell F2 Champion"
        />

        <section className="timeline">
          <h2>Career Timeline</h2>
          <p>2017: GP3 Champion</p>
          <p>2018: F2 Champion</p>
          <p>2022: First F1 Win</p>
        </section>

        <ImageReveal 
          title="First F1 Victory 2022"
          description="Russell secured his maiden Formula 1 victory at the 2022 Brazilian Grand Prix, driving for Mercedes. The win marked a significant milestone in his career and proved his elite racing caliber."
          src="https://images.ctfassets.net/1fvlg6xqnm65/66fJ1wrYcN0LBtsmPQjcTC/0ffbd03a4a5e0cc5396746216c1d154f/George_Russell.png?w=800&q=75&fm=webp"
          alt="George Russell First F1 Win"
        />
      </main>

      <footer>
        <p>A project by Joey Lagos Del Rosario.</p>
      </footer>
    </SmoothScroll>
  )
}

export default App

