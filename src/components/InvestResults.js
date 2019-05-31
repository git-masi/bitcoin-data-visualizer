import React, { Component, Fragment } from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import styles from './InvestResults.module.css';
  
class InvestResults extends Component {
  render() {
    const { curPrice, salePrice, purchasePrice, saleQuant, purchaseQuant, ROI } = this.props;
    const gainOrLoss = (salePrice * saleQuant) - (purchasePrice * purchaseQuant);
    const gainLossStyle = () => {
      if (gainOrLoss === 0) return '';
      return gainOrLoss > 0 ? styles.gain : styles.loss
    }
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
                    <td>${(purchasePrice * purchaseQuant).toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td>Total Sale</td>
                    <td>${(salePrice * saleQuant).toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td>Gain / Loss</td>
                    <td className={gainLossStyle()}>${(gainOrLoss).toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td>ROI</td>
                    <td className={gainLossStyle()}>%{ROI}</td>
                  </tr>
                  <tr>
                    <td>Remaining Value</td>
                    <td>${((purchaseQuant - saleQuant) * curPrice).toFixed(2)}</td>
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