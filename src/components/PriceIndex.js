import React, { Component, Fragment } from 'react';
import Navigation from './Navigation';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
  
class PriceIndex extends Component {
  render() {
    return (
      <Fragment>
        <Navigation />
        <Container className="my-4">
          <Row>
            <Col md={4}>
              <Card border="light">
                <Card.Header>Date Range</Card.Header>
                <Card.Body>
                  <Form>
                    <Form.Row>
                      <Col>
                        <Form.Group>
                          <Form.Label>Start Date</Form.Label>
                          <Form.Control type="text" placeholder="YYYY/MM/DD"></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group>
                          <Form.Label>End Date</Form.Label>
                          <Form.Control type="text" placeholder="YYYY/MM/DD"></Form.Control>
                        </Form.Group>
                      </Col>
                    </Form.Row>
                    <Button as="input" variant="outline-primary" type="submit" value="Submit"/>
                  </Form>
                </Card.Body>
              </Card>
              <Card border="light" className="mt-2">
                <Card.Header>Fast Actions</Card.Header>
                <Card.Body>                  
                  <Form>
                    <Form.Group>
                    <Form.Control as="select">
                      <option>Yesterday</option>
                      <option>Past 30 Days</option>
                      <option>YTD</option>
                      <option>Past Year</option>
                      <option>All Time</option>
                    </Form.Control>
                    </Form.Group>
                    <Button as="input" variant="outline-primary" type="submit" value="Submit"/>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default PriceIndex;