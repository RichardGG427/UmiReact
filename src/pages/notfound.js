import React from 'react';
import {Exception} from 'ant-design-pro';
import 'ant-design-pro/dist/ant-design-pro.css'; 


export default function Page() {
  return (
    <div>
      <Exception type="404" backText="Back to Homepage" desc="Sorry, the page you visit does not exsit."  redirect='/' />
    </div>
  );
}
