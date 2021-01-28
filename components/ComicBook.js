import React from 'react'
import styled from 'styled-components';

const StyledComicBook = styled.div`
  .wrapper {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 1fr;
  max-width: 1440px;
  font-size: 0;
}

.hero-item,
.standard-item {
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}

.news-item {
  display: inline-block;
  min-height: 400px;
  width: 50%;
}

.hero-item {
  background-image: url("https://scontent.ford4-1.fna.fbcdn.net/v/t1.15752-9/143870587_336062087562463_6205092068656424463_n.jpg?_nc_cat=102&ccb=2&_nc_sid=ae9488&_nc_ohc=PRhFBZIvnbEAX8OmCpd&_nc_ht=scontent.ford4-1.fna&oh=b3f1df9908128f3cab3dcb3503fff46d&oe=6038B652");
}

.standard-item:nth-child(2) {
  background-image: url("https://dl3.pushbulletusercontent.com/vuhMsr91md9WjwAN7rXjt4bzr2I0iVGs/137578364_1538381899693720_2086790160106281551_n.jpg");
}

.standard-item:nth-child(3) {
  background-image: url("https://scontent.ford4-1.fna.fbcdn.net/v/t1.0-9/s1080x2048/133889969_110385647616521_4874927093369998931_o.jpg?_nc_cat=103&_nc_ht=scontent.ford4-1.fna&_nc_ohc=EOYc0KtTgvEAX98PShy&_nc_sid=a26aad&ccb=2&oe=602D147E&oh=7518eca19c7e72e0f2b91686a919649f&tp=7");
}

.standard-item:nth-child(4) {
  background-image: url("https://scontent.ford4-1.fna.fbcdn.net/v/t1.0-9/140852098_116471963674556_5929256940205657494_o.jpg?_nc_cat=110&ccb=2&_nc_sid=8bfeb9&_nc_ohc=LRaWJjwptgoAX9N90Ms&_nc_ht=scontent.ford4-1.fna&oh=fc815a7fa0bafcbcb16dc309ab6e850e&oe=60394807");
  background-repeat:no-repeat;
  background-size: cover;
  min-height: 110vh;
  overflow-y: scroll;
  /* https://dl3.pushbulletusercontent.com/dOrI9Pl8Nwg6UkQLQY31b6M05M5HvDvy/lumitestimonialAng.jpg */
}

@supports (display: grid) {
  .news-item {
    width: auto;
    min-height: 0;
  }

  .hero-item {
    grid-column: 1/span 2;
    grid-row: 1/50;
    -webkit-clip-path: polygon(0 0, 100% 0, 100% calc(100% - 75px), 0 100%);
    clip-path: polygon(0 0, 100% 0, 100% calc(100% - 75px), 0 100%);
  }

  .standard-item:nth-child(2) {
    grid-column: 1/span 1;
    grid-row: 50/100;
    -webkit-clip-path: polygon(0 14%, 0 86%, 90% 81%, 100% 6%);
    clip-path: polygon(0 14%, 0 86%, 90% 81%, 100% 6%);
    margin-top: -73px;
  }

  .standard-item:nth-child(3) {
    grid-column: 2/span 1;
    grid-row: 50/100;
    -webkit-clip-path: polygon(13% 6%, 4% 84%, 100% 100%, 100% 0%);
    clip-path: polygon(13% 6%, 4% 84%, 100% 100%, 100% 0%);
    margin-top: -73px;
    margin-left: -15%;
    margin-bottom: 18px;
  }

  .standard-item:nth-child(4) {
    grid-column: 1/span 2;
    grid-row: 100/150;
    -webkit-clip-path: polygon(45% 0, 100% 15%, 100% 100%, 0 100%, 0 5%);
    clip-path: polygon(45% 0, 100% 15%, 100% 100%, 0 100%, 0 5%);
    margin-top: -107px;
  }
}
`;
const ComicBook = () => {
    return (
        <StyledComicBook>
            <div className="wrapper">
  <div className="news-item hero-item">
  </div>
  <div className="news-item standard-item">
  </div>
  <div className="news-item standard-item">
  </div>
  <div className="news-item standard-item">
  </div>
</div>
 
        </StyledComicBook>
    )
}

export default ComicBook
