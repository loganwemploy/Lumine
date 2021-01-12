import Hero from "../../components/Hero";
import SubHero from "../../components/SubHero";

const homeHeroSubHero = (
  <>
    <div className='please-position' style={{display:'flex',flexDirection:'column', position: 'relative',
              margin:'auto',justifyContent:'center',width:'100%',maxWidth:'100vw'}}>
      <div className="flex-col hero">
        <Hero />
      </div>
      <div className="flex-col subhero">
        <SubHero />
     </div>
    </div>
    <style jsx>{`
      .please-position {
        top: -27.5em
      }
      @media screen and (max-width: 505px){
        .please-position {
          top: -32.5em
        }
      }
    `}</style>
    </>
  )

  export default homeHeroSubHero;