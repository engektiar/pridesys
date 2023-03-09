import React from 'react'
import { Container,Col, Row } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel';
import achive from "../../assect/image/achiv/achive (1).jpg"
import achive1 from "../../assect/image/achiv/achive (1).png"
import achive2 from "../../assect/image/achiv/achive (2).jpg"
import achive3 from "../../assect/image/achiv/achive (2).png"
import achive4 from "../../assect/image/achiv/achive (3).jpg"
import achive5 from "../../assect/image/achiv/achive (4).jpg"

import "./achieveme.css"
const Achievement = () => {
  return (
    <div className='achiment'> 
    <Container>
    <Row>
    <Col md={6}>
    <div  className='leftsideSalider'>
    <h4 className='achivetitle'>Top Awords & Achievement</h4>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 saliderimge"
          src={achive}
          alt="First slide"
        
        />
       <div> 
       <h2>First slide label</h2>
          <p> Pridesys IT is awarded the champion of BASIS National ICT Award at the Industry Application Category. It was the first award of Pridesys IT. Pridesys ERP is a Pioneer ERP Solution in Bangladesh that standard competes with any other international ERP Solution.</p>
          </div>
          
      
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 saliderimge"
          src={achive1}
          alt="Second slide"
        />
        <div> 
        <h2>First slide label</h2>
           <p> Pridesys IT is awarded the champion of BASIS National ICT Award at the Industry Application Category. It was the first award of Pridesys IT. Pridesys ERP is a Pioneer ERP Solution in Bangladesh that standard competes with any other international ERP Solution.</p>
           </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 saliderimge"
          src={achive2}
          alt="Third slide"
        />
        <div> 
       <h2>First slide label</h2>
          <p> Pridesys IT is awarded the champion of BASIS National ICT Award at the Industry Application Category. It was the first award of Pridesys IT. Pridesys ERP is a Pioneer ERP Solution in Bangladesh that standard competes with any other international ERP Solution.</p>
          </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 saliderimge"
          src={achive5}
          alt="Third slide"
        />
        <div> 
       <h2>First slide label</h2>
          <p> Pridesys IT is awarded the champion of BASIS National ICT Award at the Industry Application Category. It was the first award of Pridesys IT. Pridesys ERP is a Pioneer ERP Solution in Bangladesh that standard competes with any other international ERP Solution.</p>
          </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 saliderimge"
          src={achive4}
          alt="Third slide"
        />
        <div> 
       <h2>First slide label</h2>
          <p> Pridesys IT is awarded the champion of BASIS National ICT Award at the Industry Application Category. It was the first award of Pridesys IT. Pridesys ERP is a Pioneer ERP Solution in Bangladesh that standard competes with any other international ERP Solution.</p>
          </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 saliderimge"
          src={achive3}
          alt="Third slide"
        />
        <div> 
       <h2>First slide label</h2>
          <p> Pridesys IT is awarded the champion of BASIS National ICT Award at the Industry Application Category. It was the first award of Pridesys IT. Pridesys ERP is a Pioneer ERP Solution in Bangladesh that standard competes with any other international ERP Solution.</p>
          </div>
      </Carousel.Item>
    </Carousel>
    <button className='seeMore'>See More</button>
    </div>
    </Col>
    <Col md={6}>
    <div className='rightside'>
    <h3 className='rigttitle'>Achievement of Last 9 Years</h3>
       <div className='rightsidecard'>
       <div className='cardsection'>
       <div className='card1'>card1</div>
       <div className='card1'>card1</div>
       </div>
       </div>
    </div>
    </Col>
    </Row>
    
    </Container>
    
    
    </div>
  )
}

export default Achievement