import React from 'react'
import ImageReveal from '../ImageReveal'

const Origins: React.FC = () => {
  return (
    <div className="page-stack">
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
    </div>
  )
}

export default Origins

