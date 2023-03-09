import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import insiamg from "../../assect/image/ins/gm.svg";
import "./industry.css"
const Industry = () => {
  return (
    <div className='industry'> 
    <h3 className='industrytitle'>Industry solucation </h3>
<Container>
<Row className='cardmain'>
<Col md={3}>
<div className='inscard'>
<div className='iamgeadntitle'>
<img src={insiamg} alt='misiing' className='cardimge'/>
<h2>Garmes Industry</h2>
</div>
</div>
</Col>
<Col md={3}> 
<div className='inscard'>
<div className='iamgeadntitle'>
<img src={insiamg} alt='misiing' className='cardimge'/>
<h2>Garmes Industry</h2>
</div>
</div>


</Col>
<Col md={3}> 
<div className='inscard'>
<div className='iamgeadntitle'>
<img src={insiamg} alt='misiing' className='cardimge'/>
<h2>Garmes Industry</h2>
</div>
</div></Col>
<Col md={3}> 
<div className='inscard'>
<div className='iamgeadntitle'>
<img src={insiamg} alt='misiing' className='cardimge'/>
<h2>Garmes Industry</h2>
</div>
</div></Col>
</Row>
<Row className='cardmain'>
<Col md={3}>
<div className='inscard'>
<div className='iamgeadntitle'>
<img src={insiamg} alt='misiing' className='cardimge'/>
<h2>Garmes Industry</h2>
</div>
</div>
</Col>
<Col md={3}> 
<div className='inscard'>
<div className='iamgeadntitle'>
<img src={insiamg} alt='misiing' className='cardimge'/>
<h2>Garmes Industry</h2>
</div>
</div>


</Col>
<Col md={3}> 
<div className='inscard'>
<div className='iamgeadntitle'>
<img src={insiamg} alt='misiing' className='cardimge'/>
<h2>Garmes Industry</h2>
</div>
</div></Col>
<Col md={3}> 
<div className='inscard'>
<div className='iamgeadntitle'>
<img src={insiamg} alt='misiing' className='cardimge'/>
<h2>Garmes Industry</h2>
</div>
</div></Col>
</Row>
</Container>

    
    </div>
  )
}

export default Industry