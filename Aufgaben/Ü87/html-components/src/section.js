import React from 'react';

const Section = ({ title, children }) => {
  return (
    <section style={{ marginBottom: '2rem' }}>
      <h2 style={{ color: '#333' }}>{title}</h2>
      {children}
    </section>
  );
};

export default Section;
