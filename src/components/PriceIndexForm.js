import React, { Component, Fragment } from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
  
class PrinceIndexForm extends Component {
  state = {
    currency: 'USD',
    startDate: '',
    endDate: '',
    validated: false,
  }

  inputHandler = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  //doesn't cause chart to re-render, possibly because only currency changes so the HOC doesn't pass it along
  currencyChangeHandler = (e) => {
    this.setState({[e.target.name]: e.target.value}, () => {
      this.setState({validated: true});

      const APIReqObj = {
        currency: this.state.currency,
        startDate: this.state.startDate,
        endDate: this.state.endDate,
      }
  
      this.props.formSubmitHandler(APIReqObj);
    });
  }

  fastActionHandler = (e) => {
    const d = new Date();
    const v = e.target.value;
    switch (true) {
      case v === 'Past 7 Days':
        this.setStartAndEndDates(this.getDateString(d), this.getPastDate(d, 7));
        break;
      case v === 'Past 30 Days':
        this.setStartAndEndDates(this.getDateString(d), this.getPastDate(d, 30));
        break;
      case v === 'YTD':
        this.setStartAndEndDates(this.getDateString(d), this.getPastDate(d, this.getYTD(d)));
        break;
      case v === 'Past Year':
        this.setStartAndEndDates(this.getDateString(d), this.getPastDate(d, 365));
        break;
      case v === 'All Time':
        this.setStartAndEndDates(this.getDateString(d), '2010-07-17');
        break;    
      default:
        console.log('something went wrong!')
        break;
    }
    this.formSubmitHandler();
  }

  formSubmitHandler = (e) => {
    
    if (e) {
      const form = e.currentTarget;
      e.preventDefault()
      e.stopPropagation();
      if (!form.checkValidity()) return;
    }
    
    this.setState({validated: true});

    const APIReqObj = {
      currency: this.state.currency,
      startDate: this.state.startDate,
      endDate: this.state.endDate,
    }

    this.props.formSubmitHandler(APIReqObj);
  }

  getYTD(date) {
    const current = new Date(date.getTime());
    const previous = new Date(date.getFullYear(), 0, 1);
  
    return Math.floor((current - previous) / 86400000);
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

  // for now, must pass end date in first
  setStartAndEndDates = (e, s) => {
    this.setState({
      startDate: s,
      endDate: e,
    }, () => this.formSubmitHandler())
  }

  // I noticed some weird behavior I should ask about.
  // depending on the order I set state it changes the value of the end date.
  componentDidMount() {
    const date = new Date();
    this.setStartAndEndDates(this.getDateString(date), this.getPastDate(date))
  }

  render() {
    const { validated, startDate, endDate } = this.state

    const getNextDay = () => {
      if (startDate === '') return;
      const parse = Date.parse(startDate);
      const d1 = new Date(parse);
      const offsetDate = new Date(parse + (d1.getTimezoneOffset() * 60000 ));
      const tomorrow = new Date(offsetDate.setDate(offsetDate.getDate() + 1));
      const dateString = tomorrow.toISOString().replace(/[T](\S*)$/, '');
      return dateString;
    }

    return (
      <Fragment>
        <Card className="mb-2">
          <Card.Header>Exchange Currency</Card.Header>
          <Card.Body>
            <Form>
              <Form.Group>
                <Form.Control as="select" name="currency" onChange={this.currencyChangeHandler}>
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
            <Form noValidate validated={validated} onSubmit={this.formSubmitHandler}>
              <Form.Row>
                <Col>
                  <Form.Group>
                    <Form.Label>Start Date</Form.Label>
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
                        name="startDate"
                        value={startDate}
                        onChange={this.inputHandler}
                        required
                        min="2010-07-17"
                      />
                    </OverlayTrigger>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label>End Date</Form.Label>
                    <OverlayTrigger
                      placement="bottom"
                      overlay={
                        <Tooltip>
                          Cannot be the same as or earlier than the Start Date.
                        </Tooltip>
                      }
                    >
                      <Form.Control
                        type="date"
                        name="endDate"
                        value={endDate}
                        onChange={this.inputHandler}
                        required
                        min={getNextDay()}
                      />
                    </OverlayTrigger>
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
              <Form.Control as="select" onChange={this.fastActionHandler}>
                <option>Past 7 Days</option>
                <option>Past 30 Days</option>
                <option>YTD</option>
                <option>Past Year</option>
                <option>All Time</option>
              </Form.Control>
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>
      </Fragment>
    )
  }
}

export default PrinceIndexForm;