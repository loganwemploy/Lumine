import Hero from "../../components/Hero";
import SubHero from "../../components/SubHero";

const homeHeroSubHero = (
    <div style={{display:'flex',flexDirection:'column', position: 'relative',
              top: '-27.5em'}}>
      <div className="flex-col hero">
        <Hero />
      </div>
      <div className="flex-col subhero">
        <SubHero />
     </div>
    </div>
  )

  export default homeHeroSubHero;