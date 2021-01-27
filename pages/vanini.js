import React from 'react'
import styled from 'styled-components';

const StyledVanini = styled.div`



   width: 100%;
  height: 100vh;
  margin: 0;


button {
  cursor: pointer;
}

.centered {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.layer {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

main {
    
    min-height: 68vh;
    display: grid;
    grid-template-rows: auto 80px;
    grid-template-columns: 80px 3fr 1.3fr;
    font-family: "Open Sans",sans-serif;
    margin-top: 13vh;

}
main .left-menu {
  grid-row: 1/-1;
  display: grid;
  grid-template-rows: 80px auto 80px;
  grid-template-columns: 1;
  background-color: #FCCC53;
}
main .left-menu .menu {
  grid-row: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
main .left-menu .menu a {
  color: #333;
  text-decoration: none;
  text-align: center;
  transform: rotate(-90deg);
}
main .left-menu .menu-button {
  grid-row: 1;
  grid-column: 1;
  font-size: 1.6rem;
}
main .hero {
  grid-row: 1/-1;
  grid-column: 2;
  position: relative;
  display: grid;
  grid-template-rows: 80px repeat(3, 3fr);
  grid-template-columns: 80px 1.1fr 0.9fr;
  overflow: hidden;
}
main .hero > .layer {
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  left: 100%;
  z-index: 2;
  transition: left 0.9s cubic-bezier(0.2, 0, 0.2, 1);
}
main .hero > .layer.displayed, main .hero > .layer.displayed-next {
  left: 0;
}
main .hero > .layer.displayed {
  z-index: 1;
}
main .hero > .layer.displayed-next {
  z-index: 0;
}
main .hero .logo {
  grid-row: 1;
  grid-column: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: bold;
  z-index: 2;
}
main .hero .titles {
  grid-row: 2;
  grid-column: 2;
  position: relative;
  overflow: hidden;
  z-index: 2;
}
main .hero .titles > .layer {
  transform: translateX(-100%);
  opacity: 0;
  transition: all 1s ease-out;
}
main .hero .titles > .layer.displayed {
  transform: translate(0);
  opacity: 1;
}
main .hero .titles h1 {
  margin: 0;
  font-size: 4rem;
}
main .hero .titles p {
  line-height: 2rem;
  font-weight: bold;
}
main .right-side {
  grid-row: 1/-1;
  grid-column: -2;
  display: grid;
  grid-template-rows: 1fr 2fr;
  grid-template-columns: auto;
}
main .right-side .video {
  grid-row: 1;
  position: relative;
  background-color: #333;
}
main .right-side .video > .layer {
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  right: 100%;
  z-index: 2;
  transition: right 1s ease-out;
}
main .right-side .video > .layer.displayed, main .right-side .video > .layer.displayed-next {
  right: 0;
}
main .right-side .video > .layer.displayed {
  z-index: 1;
}
main .right-side .video > .layer.displayed-next {
  z-index: 0;
}
main .right-side .video:after {
  content: " ";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 4;
  background-color: #333;
  opacity: 0.7;
}
main .right-side .video .play {
  position: absolute;
  top: 50%;
  left: 0;
  padding: 25px;
  border: 0;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  background-color: #FCCC53;
  z-index: 5;
}
main .right-side .project {
  grid-row: 2;
  position: relative;
}
main .right-side .project > .layer {
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  top: 100%;
  z-index: 2;
  transition: top 1s ease-out;
}
main .right-side .project > .layer.displayed, main .right-side .project > .layer.displayed-next {
  top: 0;
}
main .right-side .project > .layer.displayed {
  z-index: 1;
}
main .right-side .project > .layer.displayed-next {
  z-index: 0;
}
main .right-side .project .overlay {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 4;
  background-color: #0b69e5;
  opacity: 0.7;
}
main .right-side .project .texts {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 30px;
  color: white;
  z-index: 5;
}
main .right-side .project .texts span:first-child {
  font-size: 2rem;
}
main .controls {
  grid-row: -2;
  grid-column: 2;
  z-index: 2;
}
main .controls button {
  width: 100px;
  height: 100%;
  border: none;
  background-color: #FCCC53;
  font-size: 1.2rem;
}
`;

const Vanini = () => {


    return (
        <StyledVanini>
<main>
  <div className="left-menu">
    <span className="menu-button centered"><i className="fas fa-bars"></i></span>
    <div className="menu">
      <a href="">Architect</a>
      <a href="">Design</a>
      <a href="">Construct</a>
    </div>
  </div>
  <div className="hero">
    <div className="layer displayed" data-scene="1" style={{backgroundImage:"url('https://images.unsplash.com/photo-1462396240927-52058a6a84ec?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=32a5850c810f727b8b6acacd28add6be&auto=format&fit=crop&w=1266&q=80')"}}></div>
    <div className="layer displayed-next" data-scene="2" style={{backgroundImage: "url('https://images.unsplash.com/photo-1485628390555-1a7bd503f9fe?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=14dba03b77081bef7eb9ac400a5ad015&auto=format&fit=crop&w=1350&q=80')"}}></div>
    <div className="layer" data-scene="3" style={{backgroundImage: "url('https://images.unsplash.com/photo-1481026469463-66327c86e544?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5b49acfd71bb38b3e911e4435dd3629e&auto=format&fit=crop&w=824&q=80')"}}></div>
    <span className="logo">FORARCH.</span>
    <div className="titles">
      <div className="layer displayed" data-scene="1">
        <h1>Architecture</h1>
        <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus lobortis libero nec augue aliquet venenatis. </p>
      </div>
      <div className="layer" data-scene="2">
        <h1>Design</h1>
        <p>Ut sit amet neque a mi fringilla consequat. Quisque in lobortis neque. Ut in hendrerit neque, vitae luctus nulla. Phasellus iaculis consequat placerat.</p>
      </div>
      <div className="layer" data-scene="3">
        <h1>Construction</h1>
        <p>Phasellus eu leo velit. Aliquam sed laoreet turpis. Sed accumsan aliquet mauris eget efficitur. Proin vitae augue est. Donec bibendum lectus nec pulvinar condimentum.</p>
      </div>
    </div>
  </div>
  <div className="right-side">
    <div className="video">
      <div className="layer displayed" data-scene="1" style={{backgroundImage: "url('https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=42e8aefff27aa902ca667e6583420b22&auto=format&fit=crop&w=1350&q=80')"}}></div>
      <div className="layer displayed-next" data-scene="2" style={{backgroundImage: "url('https://images.unsplash.com/photo-1504450075628-39777da238ed?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d17043a1fa010d2ad3bfa8cab401f1c3&auto=format&fit=crop&w=1349&q=80')"}}></div>
      <div className="layer" data-scene="3" style={{backgroundImage: "url('https://images.unsplash.com/photo-1446797376004-9352dfc9f789?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=62e30262940b923e232aa2730d057b2c&auto=format&fit=crop&w=1362&q=80')"}}></div>
      <button className="play"><i className="fas fa-play"></i></button>
    </div>
    <div className="project">
      <div className="layer displayed" data-scene="1" style={{backgroundImage: "url('https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=66d1682c7a6be1ab35bd939ace8e83e2&auto=format&fit=crop&w=654&q=80')"}}></div>
      <div className="layer displayed-next" data-scene="2" style={{backgroundImage: "url('https://images.unsplash.com/photo-1496851473196-e26508c21494?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5437b3a697f823c14c7bc1b4e1c1bb86&auto=format&fit=crop&w=675&q=80')"}}></div>
      <div className="layer" data-scene="3" style={{backgroundImage: "url('https://images.unsplash.com/photo-1494145904049-0dca59b4bbad?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fd470d76d91767dc4e32d57fe4c0144b&auto=format&fit=crop&w=634&q=80')"}}></div>
      <div className="overlay"></div>
      <div className="texts">
        <span>Futurism<br /> Design</span>
        <span>VIEW PROJECTS</span>
      </div>
    </div>
  </div>
  <div className="controls">
    <button><i className="fas fa-long-arrow-alt-right"></i></button>
  </div>
</main>
            {/* ##hero */}
            <div className="hero-container"> 

            </div>
            {/* ##fixed nav */}
            {/* -- boxes */}

        </StyledVanini>
    )
}

export default Vanini
