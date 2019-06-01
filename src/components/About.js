import React, { Fragment } from 'react';
import Navigation from './Navigation';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const About = props => {
  return (
    <Fragment>
      <Navigation/>
      <Container className="mb-4">
        <Row>
          <Col>
            <Card bg="danger" text="white" className="mt-3">
              <Card.Header>Disclaimer</Card.Header>
              <Card.Body>
                <Card.Text>Bitcoin Data Visualizer is <strong><em>NOT</em></strong> a reliable source of financial information. The creator does not make any guarantees as to the accuracy of the information contained anywhere on the site. Please consult a financial advisor (preferably one with a fiduciary responsibility to you) if you are going to engage in any investment activities. The creator is not responsible for any losses that occur as a result of investments made using any features on this site.</Card.Text>
              </Card.Body>
            </Card>
            <Card className="mt-3">
              <Card.Header>About the Creator</Card.Header>
              <Card.Body>
                <Card.Text>
                  Hi! I'm Eric Masi, Front-End Web Developer. Thanks for checking out my app.
                </Card.Text>
                <Card.Text>
                  I got the idea for this app after finishing my first course on React. I have come to really enjoy the React workflow and I wanted to keep experimenting with the technology while learning new things.
                </Card.Text>
                <Card.Text>
                  Bitcoin Data Visualizer is primarily a means for me to practice consuming API data, using component libraries (Bootstrap React), data visualization, and using Firebase. That’s a lot of new stuff for me to learn! I would be lying if I said that it wasn’t extremely frustrating at times, but I had fun doing it.
                </Card.Text>
                <Card.Text>
                  I think the word “passion” is a bit overused these days. Especially when talking about yourself and your work (kind of like what I’m doing now). Do I have a passion for web development? Well, I spend most of my free time learning new things about web development. Morning, noon, night, weekday, weekend, it doesn’t matter. On any given day I try to do something to further my knowledge and abilities. That’s why I made this app. I think bitcoin is cool and all but I think web development generally is even cooler. So I'll leave it for you to decide if this is passion or not.
                </Card.Text>
                <Card.Text>
                  Anyway, if you like this app feel free to get in contact with me and/or check out my portfolio or my GitHub page. Thanks!
                </Card.Text>
                <Link to="https://gitmasi.com/">Portfolio</Link> | <Link to="https://github.com/git-masi">GitHub</Link>
              </Card.Body>
            </Card>
            <Card className="mt-3">
              <Card.Header>My History With Bitcoin</Card.Header>
              <Card.Body>
                <Card.Text>
                  I first heard about bitcoin back in college, some time in 2010. At the time bitcoin was just a curiosity and no one in the mainstream was talking about cryptocurrency or blockchain (as far as I’m aware). My friends and I discussed mining bitcoin for several years after but to my knowledge none of us ever did.
                </Card.Text>
                <Card.Text>
                  As they say hindsight is 20/20. There was no way that any of us could have known that several years later, at its peak, a single bitcoin would be worth $20k! Certainly if I could go back in time and tell myself to make any one investment it would be to hoard bitcoin while it still costs hundreds of dollars or less and sell it when the price hit that peak.
                </Card.Text>
                <Card.Text>
                  It is true that the “value” of bitcoin has reached staggering levels, even the price at the time of this writing is somewhere just south of $9k (which would have been unbelievable back in 2010). But I put the word “value” in quotes because for most of us bitcoin, and cryptocurrency generally, is still just a curiosity. In my opinion, we have yet to fully realize the potential of this technology. 
                </Card.Text>
                <Card.Text>
                  I mean think about it, even the fact that we still think of the value of bitcoin as it relates to fiat money is an indication that it’s full potential has yet to be realized. Just as I couldn’t have predicted what an amazing investment bitcoin was back in 2010, even not in 2019 I can’t predict what the ultimate impact of cryptocurrency and blockchain will be. And I suspect that anyone who makes strong assertions about the future of these technologies is either lying, selling something, delusional about their own abilities to predict the future, or some combination of those things.
                </Card.Text>
                <Card.Text>
                  It’s all just speculation at this point. But it’s still fun to think about.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  )
}

export default About;