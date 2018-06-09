import React from 'react';
import { connect } from 'dva';
import Example from '../components/Example.js'
import styles from './index.css';

function IndexPage() {
  return (
    <div className={styles.normal}>
      <Example />
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
