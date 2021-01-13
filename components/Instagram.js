import React, { useState } from 'react'
import styled from 'styled-components';
import Head from 'next/head';

const StyledIinstagram = styled.div`
    margin-top: 3.24em;
    max-width: 100vw;
    box-sizing: border-box;
`;
const Instagram = () => {
    const [ instafeeds, setInstafeeds ] = useState([{name:"https://instagram.ford4-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/137605601_889673081769129_5327997327217326540_n.jpg?_nc_ht=instagram.ford4-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=CnyAH3ijanYAX9hTc77&tp=1&oh=4400d9afd335b8562a20051cd6da3c44&oe=6026E146"},{name:"https://instagram.ford4-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/136389857_468535951214621_7753887344089957486_n.jpg?_nc_ht=instagram.ford4-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=JvNq9dWlBCoAX-7kadP&tp=1&oh=3a5b83932ec0a2fa6ae640eadaba0061&oe=6027DAEE"},{name:"https://instagram.ford4-1.fna.fbcdn.net/v/t51.2885-15/fr/e15/s1080x1080/135783130_1015911395556841_3333857033709278383_n.jpg?_nc_ht=instagram.ford4-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=_CIo3BtMOcgAX-NEqU2&tp=1&oh=1bd2c2253256c1033f7c013d6dd82926&oe=60274716"}]);
    return (
        <StyledIinstagram>
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/1.5.2/tailwind.min.css"/>
            </Head>
           <div className="min-w-sm max-w-sm mx-auto bg-white">
  {/* <!--   Header -->

  <!--   Main --> */}
  <div className="row" style={{width:'100vw',display:'flex',gap:'3em',flexWrap:'nowrap'}}>


   {instafeeds.map((instafeed, index)=>(
    <div key={index} className="col-md-3 col-sm-12">
  <main className="bg-white">
 
      {/* <!--       Article --> */}
      <article>
        <header className="mb-1 px-2 flex justify-between items-center">
          <a href="#" className="flex">
            <img src="https://scontent.ford4-1.fna.fbcdn.net/v/t1.0-9/132046027_107771104544642_6249432347020636718_n.jpg?_nc_cat=107&ccb=2&_nc_sid=09cbfe&_nc_ohc=Qj32Tb0c0SEAX_ALX0f&_nc_oc=AQnK1yS67icH2XmJa88r9wm-9nViJ79eoyRSfyoAo7c3wWnr7JUF3ivWY-lxTgiIB8w&_nc_ht=scontent.ford4-1.fna&oh=d30f0b53b9a87371f0cc56f01525c650&oe=601D2C7B" alt="" className="rounded-full h-8 w-8 object-cover" />
            <span className="ml-2 font-semibold">lumicandleboutique</span>
          </a>

          <button className="">
            <i data-feather="more-horizontal" className="h-6 w-6"></i>
          </button>

        </header>
        <main className="grid grid-cols-1 gap-1">
          <img style={{width:'100%'}} src={instafeed.name} alt="" className="min-h-full"/>
          <div className="px-2 flex justify-between">
            <div className="flex">
              <button className="mr-3 text-red-500">
                <i data-feather="heart" className="fill-current h-6 w-6"></i>
              </button>
              <a href="#" className="mr-3">
                <i data-feather="message-circle" className="h-6 w-6"></i>
              </a>
              <button className="">
                <i data-feather="send" className="h-6 w-6"></i>
              </button>
            </div>
            <div className="flex">
              <button className="">
                <i data-feather="bookmark" className="h-6 w-6"></i>
              </button>
            </div>
          </div>
        </main>
        <footer className="px-2">
          {/* <a href="#" className="font-semibold">4,725 likes</a> */}
          <p style={{display:'none'}}>
            <a href="#" className="mr-1 font-semibold">lumicandleboutique</a>i found this in my grandma's attic 💐
          </p>
         

       

        </footer>
      </article>

 
  </main>
  </div>
  ))}
  </div>
  
</div> 
        </StyledIinstagram>
    )
}

export default Instagram
