import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
  
class InvestForm extends Component {
  state = {
    purchaseDate: '',
    saleDate: '',
    purchaseQuant: 0,
    saleQuant: 0,
    validated: false,
  }

  inputHandler = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  formSubmitHandler = (e) => {
    if (!e) return;
    e.preventDefault()

    const form = e.currentTarget;
    
    this.setState({validated: true});

    if(form.checkValidity()) {
      const stateObj = {
        purchaseDate: this.state.purchaseDate,
        saleDate: this.state.saleDate,
        purchaseQuant: this.state.purchaseQuant,
        saleQuant: this.state.saleQuant,
      }
  
      this.props.formSubmitHandler(stateObj);
    }
  }

  render() {
    const { validated, purchaseDate, saleDate, purchaseQuant, saleQuant } = this.state

    const getNextDay = () => {
      if (purchaseDate === '') return;
      const parse = Date.parse(purchaseDate);
      const d1 = new Date(parse);
      const offsetDate = new Date(parse + (d1.getTimezoneOffset() * 60000 ));
      const tomorrow = new Date(offsetDate.setDate(offsetDate.getDate() + 1));
      const dateString = tomorrow.toISOString().replace(/[T](\S*)$/, '');
      return dateString;
    }

    const getYesterday = () => {
      const date = new Date();
      const yesterday = new Date(date.setDate(date.getDate() - 1));
      const dateString = yesterday.toISOString().replace(/[T](\S*)$/, '');
      return dateString;
    }

    return (
      <Card border="light" className="mt-3">
      <Card.Header>Date Range</Card.Header>
      <Card.Body>
        <Form noValidate validated={validated} onSubmit={this.formSubmitHandler}>
          <Form.Row>
            <Col>
              <Form.Group>
                <Form.Label>Purchase Date</Form.Label>
                <OverlayTrigger
                  placement="bottom"
                  overlay={
                    <Tooltip>
                      Cannot be earlier than 07/17/2010.
                    </Tooltip>
                  }
                >
                  <Form.Control
                    type="date"
                    name="purchaseDate"
                    value={purchaseDate}
                    onChange={this.inputHandler}
                    required
                    min="2010-07-17"
                  />
                </OverlayTrigger>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Sale Date</Form.Label>
                <OverlayTrigger
                  placement="bottom"
                  overlay={
                    <Tooltip id="bottom">
                      Must be between Purchase Date and {getYesterday()}. 
                    </Tooltip>
                  }
                >
                  <Form.Control
                    type="date"
                    name="saleDate"
                    value={saleDate}
                    onChange={this.inputHandler}
                    required
                    min={getNextDay()}
                    max={getYesterday()}
                  />
                </OverlayTrigger>
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col>
              <Form.Group>
                <Form.Label>Purchase Quantity</Form.Label>
                <Form.Control
                  type="number"
                  name="purchaseQuant"
                  value={purchaseQuant}
                  onChange={this.inputHandler}
                  required
                  min={saleQuant}
                  max="21000000"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Sale Quantity</Form.Label>
                <Form.Control
                  type="number"
                  name="saleQuant"
                  value={saleQuant}
                  onChange={this.inputHandler}
                  required
                  min="0"
                  max="21000000"
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