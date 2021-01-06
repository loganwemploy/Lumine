import React from 'react'

const Alt = () => {
    return (
        <><div><div>
          <div class="page-right-content">
        <h2>We solve digital problems with an outstanding creative flare</h2>
        <p class="info-text">The best time to view the moon, obviously, is at night when there are few clouds and the weather is accommodating for a long and lasting study.</p>
        <p class="info-text">The best time to view the moon, obviously, is at night when there are few clouds and the weather is accommodating for a long and lasting study.</p>
        <div class="items">
          <div class="item-1">
            <div class="item-image">
              <svg width="54" height="54" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="54" height="54" rx="27" fill="#E5E5E5"/><path d="M18 22l5-4s-5 10.5-5 14" stroke="#1434E1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M27.436 18c-1.5.5-2.5 3-3 5s-1.092 5 1.5 5c3.592 0 3.092-8 3.092-8M34.436 18c-1.5.5-2.5 3-3 5s-1.092 5 1.5 5c3.592 0 3.092-8 3.092-8M22 32s5-2 11-1" stroke="#1434E1" stroke-width="2" stroke-linecap="round"/><path d="M34 34c-8.5-.898-15 2-15 2" stroke="#1434E1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </div>
            <p class="item-name">Ultimate Result</p>

          </div>
          <div class="item-2">
            <div class="item-image">
              <svg width="54" height="54" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="54" height="54" rx="27" fill="#E5E5E5"/><path d="M34 22H20a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V23a1 1 0 0 0-1-1z" stroke="#1434E1" stroke-width="2"/><path d="M35 33H19v2h16v-2z" fill="#1434E1"/><path d="M31 25v-5a4 4 0 0 0-8 0v5" stroke="#1434E1" stroke-width="2" stroke-linecap="round"/></svg>
            </div>
            <p class="item-name">Minimal Design</p>

          </div>
        </div>
      </div>
    </div>
  </div>
        <style jsx>{`
        .container{
          padding:30px 60px 0 60px;
          clear:both;
          position:relative;
          height:100%;
        }
        body ,html{
          background-color:#F4F4F4;
          font-family: Fira Sans;
          --header-font:3.2em;
          --header-medium-font:1.8em;
          --text-font:.8em;
          --text-small:.7em;
          --faded-color:rgb(133, 133, 133);
          width:100%;
          height:100%;
          margin:0;
        }
        .header-area .container > h2{
          display:inline;
        }
        .icon{
          position: relative;
          display:inline;
          vertical-align:middle;
        }
        .icon-1{
          left:calc(50% - 80px);
        }
        .icon-2{
          float:right;
        }
        .header{
          font-size:var(--header-font);
        }
        .header-intro {
          width:76%;
        }
        .text-intro{
          width:66%;
        }
        .intro-left{
          position:relative;
          display:inline-block;
          width:60%;
        }
        .button-intro{
          border:none;
          background:#4737FF;
          color:#fff;
          font-size:10px;
          letter-spacing:1px;
          padding:10px 24px;
          margin-top:30px;
        }
        .button-intro:hover{
          background:#3C95DA;
        }
        .intro-right{
          position:absolute;
          display:inline-block;
          float:right;
          right:0;
        }
        .intro-left > p{
        }
        .placeholders{
          position:absolute;
          right:0;
        }
        .placeholder{
          position:relative;
          max-width:500px;
          height:550px;
        }
        .placeholder-wrapper{
          position:relative;
        }
        .sub-placeholder{
          position:absolute;
          width:500px;
          z-index:-160px;
          left:-200px;
          top:180px;
        }
        .intro .container{
          height:600px;
          position:relative;
        }
        .intro-right .wrapper{
          position:relative;
        }
        .information-left{
          background-image:url("https://i.ibb.co/925nsqf/Placeholder.png");
          height:500px;
          background-repeat:no-repeat;
        }
        .information .container{
          height:440px;
        }
        .information-left{
          display:inline-block;
          float:left;
          width:42%;
          height:100%;
        }
        .information-right > h2{
          font-size:var(--header-medium-font);
        }
        .information-right{
          display:inline-block;
          float:right;
          width:56%;
        }
        .info-text{
          font-size:var(--text-font);
        }
        .author-icon{
          display:inline-block;
          width:44px;
          height:44px;
        }
        .author-content{
          display:inline-block;
          vertical-align:top;
          margin-left:14px;
        }
        .author{
          margin:40px 0;
        }
        .author-content > h2{
          font-size:16px;
          margin:0;
          margin-bottom:6px;
        }
        .author-content > p{
          font-size:12px;
          margin:0;
        }
        .info-wrapper{
          display:inline-block;
          padding:60px;
        }
        .service-left > h2{
          font-size:var(--header-medium-font);
          margin-top:0;
        }
        .service-left{
          display:inline-block;
          width:50%;
        }
        .service-right{
          display:inline-block;
          width:40%;
          vertical-align:top;
          float:right;
          padding:0 40px;
        }
        .content-left , .content-right{
          display:inline-block;
        }
        .content-right{
          float:right;
        }
        .service-right  p {
          font-size:var(--text-small);
          color:var(--faded-color);
        }
        .service-wrapper{
          width:100%;
          vertical-align:top;
        }
        .page-name{
          font-size:var(--text-small);
          letter-spacing:2px;
        }
        .service-images{
          margin-top:40px;
          width:100%;
        }
        .image-1{
          width:60%;
          object-fit:cover;
        }
        .image-1 , .image-2{
          display:inline-block;
          max-height:400px;
          object-fit:cover;
        }
        .image-2{
          position:absolute;
          width:30%;
          right:0;
        }
        .services .container{
          position:relative;
          margin:60px 0;
        }
        .service-page-{
          position:relative;
        }
        .page-left-content , .page-right-content{
          display:inline-block;
        }
        .page-left-content {
          position:absolute;
          left:0;
          max-width:60%;
          height:100%;
        }
        .page-right-content{
          float:right;
          width:40%;
        }
        .service-page-2 .container{
           height: 600px;
        }
        .image-group{
          width:100%;
        }
        .item-image , .item-name{
          display:inline-block;
          font-size:var(--text-small);
          vertical-align:middle;
          text-transform:uppercase;
          font-weight:500;
          letter-spacing:1px;
        }
        .item-name{
          margin-left:10px;
        }
        a{
          text-decoration:none; 
          font-size: var(--text-small);
          color: var(--faded-color);
          margin-right:16px;
        }
        .tabs{
          display:inline-block;
          float:right;
          vertical-align:bottom;
        }
        .header-wrapper h2{
          display:inline-block;
          vertical-align:middle;
          margin:0;
        }
        .box{
          position:relative;
          max-width:calc((100% - 120px)/3);
          margin:1em;
          display:inline-block;
          overflow:hidden;
          max-height:440px;
          transition:.2s;
        }
        .box:hover{
          opacity: .5;
          transform:translateY(-8px);
        }
        .play-button{
          position:absolute;
          background:none;
        }
        .works{
          height:1000px;
        }
        .work-text{
          font-size: var(--text-font);
          display:inline-block;
          width:60%;
          vertical-align:middle;
          margin-top:0;
        }
        .works-button{
            border: none;
            background: #4737FF;
            color: #fff;
            font-size: 10px;
            letter-spacing: 1px;
            padding: 10px 24px;
            display:inline-block;
          float:right;
          vertical-align:middle;
        }
        .works-button:hover{
          background:#3C95DA;
        }
        .testimonials-left{
          display:inline-block;
          width:44%;
        }
        .testimonials-right{
          display:inline-block;
          float:right;
          width:40%;
        }
        .testimonials-image{
          width:100%;
          height:420px;
          object-fit:cover;
        }
        .rotated{
          margin-top:80px;
          transform:rotateX(-180deg);
          font-weight:500;
        }
        .test-small-text{
          margin-top:30px;
          font-size:var(--text-small);
          color:var(--faded-color);
        }
        .clients-header{
          display:inline-block;
          vertical-align:middle;
          font-size:var(--header-medium-font);
          width:30%;
          margin-top:0;
        }
        .client-sub-text{
          font-size:var(--text-font);
        }
        .client-text{
          display:inline-block;
          width:50%;
          float:right;
          vertical-align:middle;
        }
        .client-text .page-name{
          font-weight:700;
        }
        .logo{
          display:inline-block;
          width:16.6%;
          margin-right:1em;
        }
        .clients-logos{
          margin:40px 0;
          width:100%;
        }
        .clients-logos:first-child{
          margin-left:0;
        }
        .clients-logos:last-child{
          margin-right:0;
          margin-left:1em;
        }
        .bottom-page{
          background-color: #515151;
        }
        .bottom-tabs{
          display:inline-block;
        }
        .bottom-tabs a{
          color:white;
        }
        .bottom-header{
          display:inline-block;
          color:white;
          font-weight:400;
          font-size:var(--medium-font-size);
          width:20%;
          margin-top:0;
        }
        .right-tab{
          display:inline-block;
          float:right;
          vertical-align:middle;
        }
        .icon{
          fill:#D5D5D5;
        }
        .icon:hover{
          fill: black;
        }
        .bottom-button > placeholder{
         color:#222222; 
           font-size:10px;
        }
        .bottom-button{
          width:60px;
          font-size:10px;
          padding:8px;
          letter-spacing:1px;
          border:none;
          color:#FFFFFF;
          background:#C6B393;
        }
        .right-input{
          width:90px;
          margin-right:5px;
          padding:4px;
        }
        hr{
          border-top: .2px solid #ddd;
          opacity:.3;
          margin-top:20px;
        }
        .social-icons{
          display:inline-block;
          float:right;
        }
        .bottom-last-tabs{
          display:inline-block;
        }
        .bottom-last-wrapper{
          margin-top:20px;
          padding-bottom:40px;
        }`}</style>
        </>
    )
}

export default Alt
