import React from 'react'

const QuickLinks = () => {
    return (
        <>
            <section id="myLikes">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h2>What I Do</h2>
                    <hr className="star-primary" />
                </div>
            </div>
            <div className="row">
                <div className="col-sm-4 portfolio-item">
                    <a href="#" className="portfolio-link text-center" data-toggle="modal">
                        <span className="fa fa-fw fa-headphones" aria-hidden="true" title="This symbolizes I Love to listen good music
                        "></span>
                    </a>
                    <article className="portfolio-item-One">
                        <header>
                            <h3>Listen music</h3>
                        </header>
                        <p>
                            All kind of melodious music because it suits into my ears. Four dollar toast messenger bag green juice, organic cliche tofu synth small batch locavore austin. Squid mlkshk authe ntic pinterest, pour-over gastropub Music seitan sartorial humblebrag. 
                        </p>
                    </article>                    
                </div>
                <div className="col-sm-4 portfolio-item">
                    <a href="#" className="portfolio-link text-center" data-toggle="modal">
                        <span className="fa fa-fw fa-laptop" aria-hidden="true" title="This symbolizes I Like to design and develop websites
                        "></span>
                    </a>
                    <article className="portfolio-item-Two">
                        <header>
                            <h3>design and develop</h3>
                        </header>
                        <p>
                            I am a front-End designer. I do design and coding of web application. Swag brooklyn banh mi stumptown loca vore yr migas tousled chicharrones sriracha cray leggings. Street art tousled kale chips poutine schlitz. Polaroid roof party austin. 
                        </p>
                    </article>                    
                </div>
                <div className="col-sm-4 portfolio-item">
                    <a href="#" className="portfolio-link text-center" data-toggle="modal">
                        <span className="fa fa-fw fa-camera-retro" aria-hidden="true" title="This symbolizes I Love to capture moments
                        "></span>
                    </a>
                    <article className="portfolio-item-Three">
                        <header>
                            <h3>photography</h3>
                        </header>
                        <p>
                            I Love to capture beautiful moments. life deep v austin schlitz drinking vinegar, messen ger bag slow-carb. Migas tumblr kombucha you probably hav en't heard of them +1 chicharrones. Tilde wayfarers craft beer stumptown, humblebrag ugh whatever.
                        </p>
                    </article>                    
                </div>
            </div>
        </div>
    </section>
    <div>
        <hr className="loc-hr"/>
    </div>
 
        </>
    )
}

export default QuickLinks
