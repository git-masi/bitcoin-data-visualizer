import React, { Component, Fragment } from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
  
class InvestResults extends Component {
  render() {
    return (
      <Fragment>
        <Col lg={4}>
          <Card className="mt-3">
            <Card.Header>Results</Card.Header>
            <Card.Body>
              <Table striped bordered hover size="sm">
                <tbody>
                  <tr>
                    <td>Principal</td>
                    <td>${(this.props.purchasePrice * this.props.purchaseQuant).toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td>Total Sale</td>
                    <td>${(this.props.salePrice * this.props.saleQuant).toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td>ROI</td>
                    <td>%{this.props.ROI}</td>
                  </tr>
                  <tr>
                    <td>Remaining Value</td>
                    <td>${(this.props.purchaseQuant - this.props.saleQuant) * this.props.curPrice}</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4}></Col>
      </Fragment>
    )
  }
}

export default InvestResults;