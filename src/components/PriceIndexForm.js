import React, { Component, Fragment } from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
  
class PrinceIndexForm extends Component {
  state = {
    currency: 'USD',
    startDate: null,
    endDate: null,
  }

  getDateString = (date) => {
    return new Date(date.getTime() - (date.getTimezoneOffset() * 60000 ))
        .toISOString()
        .replace(/[T](\S*)$/, '');
  }

  getPastDate = (date, numDays = 7) => {
    date.setDate(date.getDate() - numDays);
    return this.getDateString(date);
  }

  componentDidMount() {
    const date = new Date();
    this.setState({
      startDate: this.getPastDate(date),
      endDate: this.getDateString(date)
    });
  }

  render() {
    return (
      <Fragment>
        <Card className="mb-2">
          <Card.Header>Exchange Currency</Card.Header>
          <Card.Body>
            <Form>
              <Form.Group>
                <Form.Control as="select">
                  <option>USD</option>
                  <option>GBP</option>
                  <option>EUR</option>
                  <option>JPY</option>
                  <option>CAD</option>
                </Form.Control>
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>
        <Card border="light" className="mb-2">
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
        <Card border="light">
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
      </Fragment>
    )
  }
}

export default PrinceIndexForm;