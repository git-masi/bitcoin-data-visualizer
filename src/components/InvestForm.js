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

  // there is a bug when a user hits enter with the submit button focused
  formSubmitHandler = (e) => {
    if (e) {
      e.preventDefault()

      const { purchaseDate, saleDate, purchaseQuant, saleQuant } = this.state;
      const form = e.currentTarget;

      function earliestDate(date) {
        return Number(date.replace(/-/g, '')) >= 20100717;
      }

      function startBeforeEnd(d1, d2) {
        return Number(d1.replace(/-/g, '')) < Number(d2.replace(/-/g, ''))
      }

      function purchaseQHigherThanSaleQ(pQ, sQ) {
        return (pQ >= sQ);
      }
      
      if (!form.checkValidity()) return;
      if (!earliestDate(purchaseDate)) return;
      if (!startBeforeEnd(purchaseDate, saleDate)) return;
      if (!purchaseQHigherThanSaleQ(purchaseQuant, saleQuant)) return;
    }
    
    this.setState({validated: true});

    const stateObj = {
      purchaseDate: this.state.purchaseDate,
      saleDate: this.state.saleDate,
      purchaseQuant: this.state.purchaseQuant,
      saleQuant: this.state.saleQuant,
    }

    this.props.formSubmitHandler(stateObj);
  }

  render() {
    const { validated } = this.state

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
                      Cannot be earlier than 2010-07-17.
                    </Tooltip>
                  }
                >
                  <Form.Control
                    type="date"
                    name="purchaseDate"
                    value={this.state.purchaseDate}
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
                      Cannot be the same as or earlier than the Start Date.
                    </Tooltip>
                  }
                >
                  <Form.Control
                    type="date"
                    name="saleDate"
                    value={this.state.saleDate}
                    onChange={this.inputHandler}
                    required
                    min={this.state.purchaseDate}
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
                  value={this.state.purchaseQuant}
                  onChange={this.inputHandler}
                  required
                  min={this.state.saleQuant}
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
                  value={this.state.saleQuant}
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