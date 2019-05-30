import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
  
class InvestForm extends Component {
  state = {
    purchaseDate: '',
    saleDate: '',
  }

  inputHandler = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  formSubmitHandler = (e) => {
    if (e) e.preventDefault();
    this.props.formSubmitHandler(this.state.purchaseDate, this.state.saleDate);
  }

  render() {
    return (
      <Card border="light" className="mt-3">
      <Card.Header>Date Range</Card.Header>
      <Card.Body>
        <Form onSubmit={this.formSubmitHandler}>
          <Form.Row>
            <Col>
              <Form.Group>
                <Form.Label>Purchase Date</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="YYYY/MM/DD"
                  name="purchaseDate"
                  value={this.state.purchaseDate}
                  onChange={this.inputHandler}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Sale Date</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="YYYY/MM/DD"
                  name="saleDate"
                  value={this.state.saleDate}
                  onChange={this.inputHandler}
                />
              </Form.Group>
            </Col>
          </Form.Row>
          <Button as="input" variant="outline-primary" type="submit" value="Submit"/>
        </Form>
      </Card.Body>
    </Card>
    )
  }
}

export default InvestForm;