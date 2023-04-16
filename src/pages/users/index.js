import React from 'react';
import {Link} from 'umi'
import styles from './index.css';

export default function Page() {
  const userList=[
    {id:1,name:'Richard'},
    {id:2,name:'Tom'},
  ]
  return (
    <div>
      <h1 className={styles.title}>Page users/index</h1>
      <ul>
        {userList.map(val=>(
          <li key={val.id}>
            <Link to={`/users/${val.name}`}>{val.name}</Link>
            
          </li>
        ))}
      </ul>
    </div>
  );
}
