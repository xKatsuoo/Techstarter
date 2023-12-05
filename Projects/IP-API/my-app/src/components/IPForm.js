import React, { useState } from 'react';

function IPForm({ onSubmit }) {
  const [ipAddress, setIpAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(ipAddress);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter an IP address"
        value={ipAddress}
        onChange={(e) => setIpAddress(e.target.value)}
      />
      <button type="submit">Get IP Info</button>
    </form>
  );
}

export default IPForm;
