import React, { Component, Fragment } from 'react';
import Navigation from './Navigation';
import StyledSpinner from './StyledSpinner';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import styles from './Home.module.css';
  
class Home extends Component {
  state = {
    curBitcoinRateUSD: null,
    rateChange: null,
    dataLoaded: false
  }

  componentDidMount() {
    const current = 'https://api.coindesk.com/v1/bpi/currentprice.json';
    const yesterday = 'https://api.coindesk.com/v1/bpi/historical/close.json?for=yesterday';

    async function getRateChange(curRate) {
      const prevRate = await getBitcoinRate(yesterday).then(data => Object.values(data.bpi)[0]);
      return curRate / prevRate;
    }

    async function getBitcoinRate(req) {
      const response = await fetch(req);
      let data = await response.json();
      return data;
    }

    getBitcoinRate(current)
      .then(data => data.bpi.USD.rate_float)
      .then(rate => {
        this.setState({curBitcoinRateUSD: rate.toFixed(2)})
        return rate;
      })
      .then(rate => getRateChange(rate))
      .then(change => {
        const percentChange = (1 - change) * 100
        this.setState({rateChange: percentChange.toFixed(4), dataLoaded: true})
      })
      .catch(err => console.log(err));

    // get images for news async, may or may not need depending on newsAPI
    // async function getImage(keyword = 'news') {
    //   const response = await fetch(`https://source.unsplash.com/1600x900/?${keyword}`)
    //   let data = await response;
    //   return data;
    // }

    // getImage()
    //   .then(data => console.log(data.url));
  }

  componentWillUnmount() {
    
  }

  render() {
    const { curBitcoinRateUSD, dataLoaded, rateChange } = this.state;
    const rateChangeBadge = <Badge variant={rateChange > 0 ? 'success' : 'danger'}>{rateChange}</Badge>;

    const display = dataLoaded ?
      <Container className="mb-4">
        <Jumbotron fluid className={`mt-4 ${styles.jumbotron}`}>
          <Container>
            <Row className="justify-content-md-center">
              <Col md="auto">
                <div className={styles.coin}></div>
              </Col>
              <Col md="auto" className="my-auto">
                <h1>Bitcoin Price
                  <span className={styles.tickerSymbol}> (BTC)</span>
                  <span> ${curBitcoinRateUSD}</span> {rateChangeBadge}
                </h1>
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
      </Container> :
      <Container>
        <Row className="justify-content-center mt-5">
          <Col xs="auto">
            <StyledSpinner />
          </Col>
        </Row>
      </Container>

    return (
      <Fragment>
        <Navigation/>
        { display }   
      </Fragment>
    )
  }
}

export default Home;