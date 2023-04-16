import React from 'react';
import styles from './_layout.css';

export default function Page(props) {
  return (
    <div>
      <h1 className={styles.title}>Page users/_layout</h1>
      <div>{props.children}</div>
    </div>
  );
}
