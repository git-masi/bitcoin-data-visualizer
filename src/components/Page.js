import React from 'react';
import './Page.module.css';

const Page = ({ children }) => {
  return (
    <section className="page">
      {children}
    </section>
  )
}

export default Page;