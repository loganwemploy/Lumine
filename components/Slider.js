import React from 'react'
import styled from 'styled-components';

const StyledSlider = styled.div`

:root {
  /* $HERO COLOURS */
  /* Basis for Main inteactive UI components. Also use Acid Green for 
  *  Possitive confirmations selected states and interactions
  */
  --white:               #ffffff;               /* rgb(255,255,255) */
  --woodsmoke:           #121416;               /* rgb(18,20,22) */

  --acid-green:          #3FFF00;               
  --acid-green--0:       #E8FFE1;
  --acid-green--100:     #B5FF9D;
  --acid-green--200:     #89FF63;               /* Picked */
  --acid-green--300:     #62FF2E;
  --acid-green--400:     var(--acid-green);     /* Picked */
  --acid-green--500:     #3DF400;
  --acid-green--600:     #3AE600;               /* Picked */
  --acid-green--700:     #36D600;
  --acid-green--800:     #66707C;
  --acid-green--900:     #2DAD00;
  --acid-green--1000:    #289600;
  
  /* $GREY COLOURS */
  /* Basis for Main inteactive UI components. Also use Acid Green for
  *  Possitive confirmations selected states and interactions
  */
  --morai-silver:        #C4C8CC;
  --morai-silver--0:     #F3F9FF;
  --morai-silver--100:   #ECF2F8;             /* Picked */
  --morai-silver--200:   #E3EAF0;
  --morai-silver--300:   #DAE0E6;             /* Picked */
  --morai-silver--400:   #D0D5DA;
  --morai-silver--500:   var(--morai-silver); /* Picked */
  --morai-silver--600:   #AFB7BE;
  --morai-silver--700:   #99A2AC;             /* Picked */
  --morai-silver--800:   #808A95;
  --morai-silver--900:   #66707C;             /* Picked */
  --morai-silver--1000:  #4D5761;
  
  /* $SECONDARY COLOURS */
  /* Include these when considering Illustrations and secondary UI. 
  *  (EG. Propositions details upsells, visited links etc.
  */
  --bondi-blue:          #0089B3;               /* rgb(0,0,0) */
  --bondi-blue--0:       #B3EDFF;
  --bondi-blue--100:     #8BE2FC;
  --bondi-blue--200:     #68D6F7;
  --bondi-blue--300:     #48C9F0;
  --bondi-blue--400:     #2EBBE7;               /* Picked */
  --bondi-blue--500:     #1AACD9;
  --bondi-blue--600:     #0A9CC8;
  --bondi-blue--700:     var(--bondi-blue);     /* Picked */
  --bondi-blue--800:     #01769A;               /* Picked */
  --bondi-blue--900:     #02617E;
  --bondi-blue--1000:    #044B61;

  --song-mint:           #C8E3D9;
  --song-mint--0:        #ebfff7;
  --song-mint--100:      #e6f9f2;                /* Picked */
  --song-mint--200:      #dcf3eb;
  --song-mint--300:      #d2ece3;
  --song-mint--400:      var(--song-mint);       /* Picked */
  --song-mint--500:      #b9dbce;
  --song-mint--600:      #a8d0c1;
  --song-mint--700:      #97c2b2;                /* Picked */
  --song-mint--800:      #85b0a0;
  --song-mint--900:      #729c8d;
  --song-mint--1000:     #608779;
  

  .card {
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 223px;
  overflow: hidden;
  position: relative;
  border-radius: 8px;
/*   box-shadow: 0 0 0 1px var(--woodsmoke); */
  /* box-shadow: 0 2px 10px rgba(18,20,22,0.12); */
  transition: var(--transition);
}
.card:hover,
.card:active,
.card:focus {
  cursor: pointer }
@media (pointer: fine) {
.card:hover,
.card:active,
.card:focus {
  /* box-shadow: 0 6px 20px rgba(18, 20, 22, 0.12); */
  transform: rotateX(3deg) translate3d(0,-2px,6px) }}
@media (prefers-color-scheme: dark) {
.card { background: #1C1C1C; box-shadow: none }}

.card-bookmark-icon {
  width: 24px;
  height: 24px;
  position: absolute;
  top: 0;
  left: 0;
  margin-top:  8px;
  margin-left: 6px;
  fill: #121416;
}
.card-bookmark-icon:after {
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  top:     0;
  right:   0;
  bottom:  0;
  left:    0;
  z-index: 10;
  background-color: #fff;
  border-radius: 100%;
}

.card--fill {
  width: 100%;
  padding-top: 16px;
  border-radius: 8px;
}

.card--large {
  width: 250px;
  height: 253px;
  border-radius: 8px;
}
.card--medium {
  width: 200px;
  height: 223px;
  border-radius: 8px;
}
.card--small {
  width: 144px;
  height: 168px;
  border-radius: 5px;
}

.card-img { display: block; }
.card--large .card-img,
.card--medium .card-img  { margin-bottom: 15px; }
.card--small .card-img   { margin-bottom: 10px; }

.card-body { width: 100%; }
.card--fill .card-body,
.card--large .card-body,
.card--medium .card-body {
  --card-gutter: 15px;
  
  padding-right: var(--card-gutter);
  padding-left:  var(--card-gutter);
}
.card--small .card-body {
  --card-gutter: 10px;
  
  padding-right: var(--card-gutter);
  padding-left:  var(--card-gutter);
}

.card-meta {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  font-size: 13px;
  line-height: 1;
  text-transform: uppercase; /* 1 */
  font-feature-settings: "kern" 1, "liga" 1, "pnum" 1, "tnum" 0, "onum" 1, "lnum" 0, "smcp" 1, "c2sc" 1; /* 2 */
  letter-spacing: 0.75px;
  color: var(--morai-silver--900);
}
@media (prefers-color-scheme: dark) {
  .card-meta { color: var(--morai-silver--700); }
}

.card-title {
  margin-bottom: 5px;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.125889px;
  color: var(--woodsmoke);
}
@media (prefers-color-scheme: dark) {
  .card-title { color: var(--white); }
}
.card--large .card-title,
.card--medium .card-title {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  max-height: 57px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.card--small .card-title {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  max-height: 45px;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.125889px;
}

.card-description {
  margin-bottom: 18px;
  font-size: 14px;
  line-height: 17px;
  color: var(--morai-silver--900);
}
@media (prefers-color-scheme: dark) {
  .card-description { color: var(--morai-silver--700); }
}

.card--large .card-description,
.card--medium .card-description {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  max-height: 51px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.exploreForm {
  margin: 0;
  padding: 0;
  border: none;
  position: relative;
}

.exploreIcon {
  width: 24px;
  height: 24px;
  position: absolute;
  top: 0;
  left: 0;
  margin-top: 12px;
  margin-left: 12px;
}

.btn {
  --button-padding:  0.75rem 1.25rem; /* 12px 20px */
  --button-font-size: 1rem; /* 16px */
  display: inline-block;
  vertical-align: middle;
  overflow: visible;
  margin: 0;
  padding: var(--button-padding);
  font-weight: bold;
  font-size: var(--button-font-size);
  line-height: 1;
  font-family: inherit;
  text-align: center;
  border: 0 solid #C8E3D9;
  border-radius: 100px;
  cursor: pointer;
  outline: none;
  user-select: none;
  transition: var(--transition);
  -webkit-touch-callout: none;
  -webkit-tap-highlight-color: rgba(18,20,22,0.24)
}
.btn:hover { text-decoration: none; cursor: pointer }

.btn--primary { color: var(--white); background: var(--woodsmoke) }
@media (prefers-color-scheme: dark) {
.btn--primary { color: var(--woodsmoke); background-color: var(--white); }}
.btn--primary:hover { color: var(--woodsmoke); background: var(--acid-green) }
.btn--primary:active,.btn--primary:focus { color: var(--woodsmoke); background: var(--acid-green); }
`;
const Slider = () => {
    return (
        <StyledSlider>
             <section>
      <div className="card card--fill">
        <div className="card-body">
          <h2>100% Natural &amp; Vegan</h2>
          <p className="card-description">Organic Soy Wax candles made witbh you in mind.</p>
          <button style={{backgroundColor:'#222',color:'white'}} type="submit" className="btn btn--primary">Browse All Collections</button>
        </div>
      </div>
    </section>
        </StyledSlider>
    )
}

export default Slider
