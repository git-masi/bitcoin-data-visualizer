import React, { Component } from 'react';
import Navigation from './Navigation';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import styles from './Home.module.css';
  
class Home extends Component {
  render() {
    const price = '7288.62';

    return (
      <div className={styles.pageWrapper}>
        <Navigation/>
        <Container className="mb-4">
        <Jumbotron fluid className={`mt-4 ${styles.jumbotron}`}>
          <Container>
            <Row className="justify-content-md-center">
              <Col md="auto">
                <div className={styles.coin}></div>
              </Col>
              <Col md="auto" className="my-auto">
                <h1>Bitcoin Price <span className={styles.tickerSymbol}>(BTC)</span> <span>${price}</span></h1>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
        <Row>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Investment Tools</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="success">INVEST</Button>
              </Card.Body>
            </Card>
            <Card className="mt-4">
              <Card.Body>
                <Card.Title>Historical Price Info</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="info">PRICE INDEX</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={8}>
            {/* <div className={styles.news}></div> */}
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://source.unsplash.com/1600x900/?news"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://source.unsplash.com/1600x900/?tech"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://source.unsplash.com/1600x900/?bitcoin"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
        </Container>
      </div>
    )
  }
}

export default Home;