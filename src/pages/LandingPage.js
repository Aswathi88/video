import React from 'react'
import { Col, Row ,Container} from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className='text-white'>
      <Row className=''>
        <Col lg={9}>
      <h1 className='text-center'>
        <span  className='text-primary'>V</span>ideo  <span className='text-primary'>U</span>ploader
      </h1>
      <p className='fs-5 text-startswith p-4' style={{fontStyle:"oblique"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error sed suscipit eos laudantium fuga? Ipsam repellendus minima, natus, doloribus aspernatur ad minus tempora consectetur nostrum adipisci, voluptas impedit molestias fuga!</p>
     <Link to={'/home'}>
      <Button variant="primary" style={{marginLeft:"500px"}} className='border-black w-25'>Get Started</Button>
      <hr />
      </Link>
      </Col>
      <Col lg={3}>
       <img style={{borderRadius:"10px"}} src="https://i.postimg.cc/JhHMKzGS/uplo.jpg" alt="" className='mt-5' />
       </Col>


      </Row>
      <Row>
        <Col><h1 className='text-secondary text-center'> <span className='text-primary'>  F</span>eatures</h1>  
      
    
    </Col>

      </Row>
     < Container>
      <Row className='mb-5  ms-5'>
        <Col>
        <Card style={{ width: '18rem',height:'500px'  }}>
      <Card.Img variant="top" src="https://i.postimg.cc/504Tk1fk/Isopoly-05.gif" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem' ,height:'500px'}}>
      <Card.Img variant="top" src="https://i.postimg.cc/PqDvFpt2/ball.gif" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem' ,height:'500px'}}>
      <Card.Img variant="top" src="  https://i.postimg.cc/jqmKCwxx/NiDF.gif" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </Col>
      </Row>
      </Container>
      </div>
  )
}

export default LandingPage