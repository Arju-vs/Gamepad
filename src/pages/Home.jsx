// rafce
import React from 'react'
import LandingImg1 from '../assets/1.gif'
import CardImg1 from '../assets/gta6.jpeg'
import CardImg2 from '../assets/doom.jpeg'
import CardImg3 from '../assets/shadows.jpeg'
import CompletedImg from '../assets/rdr2.webp'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <div style={{paddingTop:'270px'}} className="container">
      {/* landing part */}
        <div className="row align-items-center">
            <div className="col-lg-4">
                <h3 className='text-danger'>Escape <span className='text-white fs-1'>REALITY,</span><br /> Play <span className='text-white fs-1'>GAMES!!</span></h3>
            </div>
            <div className="col-lg-4">
            <img src={LandingImg1} alt="" />
            </div>
            <div className="col-lg-4">
              <h3>Add Your <span className='text-danger fs-1'>Games!!!</span></h3>
              <p>Here you can Note the Games which you played! <br />
              In this page we provides you to note down the games that you completed and store the names permanently!!!!</p>
              <Link to={'/compgames'} className="btn btn-danger">Visit</Link>
            </div>
        </div>
      {/* Upcoming Games */}
      <div className="my-5">
        <h3 className="text-center py-3">Biggest Upcoming Games</h3>
          <div className='row'>
           <div className='col-lg-4'>
              <Card>
                <Card.Img variant="top" src={CardImg1} />
                <Card.Body>
                  <Card.Title>GTA VI</Card.Title>
                  <Card.Text>
                  Grand Theft Auto 6 (GTA 6) is shaping up to be one of the biggest upcoming games in the industry. With its expansive open world, cutting-edge graphics, and groundbreaking gameplay features, it promises to redefine the action-adventure genre. Players can expect thrilling missions, deep storytelling, and an immersive experience like never before.
                  </Card.Text>
                </Card.Body>
              </Card>
           </div>
           <div className='col-lg-4'>
              <Card>
                <Card.Img variant="top" src={CardImg2} />
                <Card.Body>
                  <Card.Title>Doom: The Dark Ages</Card.Title>
                  <Card.Text>
                  Doom: The Dark Ages is an upcoming installment in the legendary Doom franchise, blending the series' signature fast-paced combat with a dark, medieval setting. Players will battle horrific, demon-like creatures using a mix of ancient weaponry and futuristic tech. Expect intense action, brutal environments, and an immersive, apocalyptic storyline.
                  </Card.Text>
                </Card.Body>
              </Card>
           </div>
           <div className='col-lg-4'>
              <Card>
                <Card.Img variant="top" src={CardImg3} />
                <Card.Body>
                  <Card.Title>Assassin's Creed: Shadows</Card.Title>
                  <Card.Text>
                  Assassin's Creed: Shadows is an upcoming highly anticipated installment in the Assassin's Creed franchise. Set in a dark, mysterious world, it promises to blend stealth, exploration, and combat in an immersive open world. Players will uncover hidden secrets, engage in intense parkour, and experience a gripping story filled with intrigue and betrayal.
                  </Card.Text>
                </Card.Body>
              </Card>
           </div>
          </div> 
      </div>
    {/* Completed Section */}
     <div className="py-2">
      <h3 className='text-center py-2'>Completed GamesList</h3>
      <div className="row align-items-center">
        <div className="col-lg-6">
          <img src={CompletedImg} width={'600px'} alt="" />
        </div>
        <div className="col-lg-6">
          <h3>Add your Completed Games here!!!</h3>
          <p>You can add the info about the story modes which you played and wanted to store the names,Its your page forsure!!</p>
          <Link to={'/compgames'} className='btn btn-danger'>Visit</Link>
        </div>
      </div>
     </div>
     
      </div>
      </>
  )
}

export default Home