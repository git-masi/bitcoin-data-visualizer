import React, { Component, Fragment } from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import { Doughnut } from 'react-chartjs-2';
import styles from './InvestResults.module.css';
  
class InvestResults extends Component {
  render() {
    const { curPrice, salePrice, purchasePrice, saleQuant, purchaseQuant, ROI } = this.props;

    const principal = purchasePrice * purchaseQuant;
    const totalSale = salePrice * saleQuant;
    const gainOrLoss = (salePrice * saleQuant) - (purchasePrice * saleQuant);
    const remValue = (purchaseQuant - saleQuant) * curPrice;

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
                    <td>${(principal).toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td>Total Sale</td>
                    <td>${(totalSale).toFixed(2)}</td>
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
                    <td>${(remValue).toFixed(2)}</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4}>
          <Card body className="mt-3">
            <Doughnut
              data = {{
                datasets: [{
                    data: [gainOrLoss, totalSale, remValue],
                    backgroundColor: ['rgba(46, 204, 113, .7)', 'rgba(230, 126, 34, .7)', 'rgba(52, 152, 219, .7)'],
                }],
            
                // These labels appear in the legend and in the tooltips when hovering different arcs
                labels: [
                  'Gain/Loss',
                  'Sale',
                  'Remaining Value',
                ]
              }}
              options = {{
                responsive: true,
              }}
            />
          </Card>
        </Col>
      </Fragment>
    )
  }
}

export default InvestResults;