import React from 'react';
import Spinner from 'react-bootstrap/Spinner'
import styles from './StyledSpinner.module.css';

const StyledSpinner = () => {
  return (
    <div className={styles.spinnerContainer}>
      <Spinner className={styles.spinner} animation="border" variant="primary" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  )
}

export default StyledSpinner;