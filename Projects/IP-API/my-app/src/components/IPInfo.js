import React from 'react';

function IPInfo({ data }) {
  return (
    <div>
      <h2>IP Information</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default IPInfo;
