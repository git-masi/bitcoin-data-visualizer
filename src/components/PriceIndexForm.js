import React, { Component, Fragment } from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
  
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

  currencyChangeHandler = (e) => {
    this.setState({[e.target.name]: e.target.value}, () => this.formSubmitHandler());
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
      e.preventDefault()
      const form = e.currentTarget;
      // console.log(form.checkValidity())
      if (!form.checkValidity()) return;
    }

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
    const { validated } = this.state

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
                    <Form.Control
                      type="text"
                      placeholder="YYYY-MM-DD"
                      name="startDate"
                      value={this.state.startDate}
                      onChange={this.inputHandler}
                      required
                      pattern="(20[1-9][0-9])-((1[1|2])|(0[1-9]))-((0[1-9])|([1-2][0-9])|(3[0-1]))"
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label>End Date</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="YYYY-MM-DD"
                      name="endDate"
                      value={this.state.endDate}
                      onChange={this.inputHandler}
                      required
                      pattern="(20[1-9][0-9])-((1[1|2])|(0[1-9]))-((0[1-9])|([1-2][0-9])|(3[0-1]))"
                      title="Year, month, day each separated by -"
                    />
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