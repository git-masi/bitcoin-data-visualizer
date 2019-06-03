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
import { LinkContainer } from 'react-router-bootstrap';
import styles from './Home.module.css';
  
class Home extends Component {
  state = {
    curBitcoinRateUSD: null,
    rateChange: null,
    articles: [],
    dataLoaded: false,
  }

  componentDidMount() {
    const current = 'https://api.coindesk.com/v1/bpi/currentprice.json';
    const yesterday = 'https://api.coindesk.com/v1/bpi/historical/close.json?for=yesterday';
    const newsURL = 'https://newsapi.org/v2/everything?q=bitcoin&sortBy=relevancy&pageSize=5&apiKey=8473fd369fa841c59b8985cbeb00314c';

    async function getRateChange(curRate) {
      const prevRate = await getBitcoinRate(yesterday).then(data => Object.values(data.bpi)[0]);
      return curRate / prevRate;
    }

    async function getBitcoinRate(req) {
      const response = await fetch(req);
      let data = await response.json();
      return data;
    }

    async function getNews(url) {
      const response = await fetch(url);
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
        this.setState({rateChange: percentChange.toFixed(4)})
      })
      .catch(err => console.log(err));

    getNews(newsURL)
      .then(data => data.articles)
      .then(arr => {
        const articles = arr.map(a => ({
          title: a.title,
          description: a.description,
          source: a.source.name,
          url: a.url
        }));
        this.setState({articles: articles, dataLoaded: true});
      })
      .catch(err => console.log(err));
  }

  render() {
    const { curBitcoinRateUSD, dataLoaded, rateChange, articles } = this.state;
    const rateChangeBadge = <Badge variant={rateChange > 0 ? 'success' : 'danger'}>{rateChange}</Badge>;
    const urlSearchWords = ['news', 'bitcoin', 'cryptocurrency', 'code', 'finance'];

    const carouselItems = articles.map((a, i) => (
      <Carousel.Item key={i}>
        <img
          className="d-block w-100"
          src={`https://source.unsplash.com/1600x900/?${urlSearchWords[i]}`}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>{a.title}</h3>
          <p>{a.description}</p>
          <p>Read more at <a href={a.url} target="_blank" rel="noopener noreferrer">{a.source}</a></p>
        </Carousel.Caption>
      </Carousel.Item>
    ))

    const display = dataLoaded ?
      <Container className="mb-4">
        <Jumbotron fluid className={`mt-3 mb-0 ${styles.jumbotron}`}>
          <Container>
            <Row className="justify-content-md-center">
              <Col md="auto" className="d-flex justify-content-center">
                <div className={styles.coin}></div>
              </Col>
              <Col md="auto" className="my-auto d-flex justify-content-center">
                <h1 style={{textAlign: 'center'}}>Bitcoin Price
                  <span className={styles.tickerSymbol}> (BTC)</span>
                  <span> ${curBitcoinRateUSD}</span> {rateChangeBadge}
                </h1>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
        <Row>
          <Col lg={4} className="mt-3">
            <Card>
              <Card.Body>
                <Card.Title>Investment Tools</Card.Title>
                <Card.Text>
                  The invetment tools give you an idea of return on investment over different time periods, as well as useful information about price volatility.
                </Card.Text>
                <LinkContainer exact to="/invest">
                  <Button variant="success">INVEST</Button>
                </LinkContainer>
              </Card.Body>
            </Card>
            <Card className="mt-3">
              <Card.Body>
                <Card.Title>Historical Price Info</Card.Title>
                <Card.Text>
                  The historical price index shows you the value of bitcoin over time.
                </Card.Text>
                <LinkContainer exact to="price-index">
                  <Button variant="info">PRICE INDEX</Button>
                </LinkContainer>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={8} className="mt-3">
            <Carousel>
              {carouselItems}
            </Carousel>
          </Col>
        </Row>
      </Container> :
      <Container>
        <Row className="justify-content-center mt-3">
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