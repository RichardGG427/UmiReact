import React from 'react';
import styles from './[name].css';
import {Button} from 'antd';

export default function Page(props) {
  return (
    <div>
      <h1 className={styles.title}>Dynamic Route Page</h1>
      <p>Welcome to {props.match.params.name}'s page</p>
      <Button type="primary" onClick={()=>props.history.goBack()}>Back</Button>
      
    </div>
  );
}