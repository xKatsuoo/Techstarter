import React, { useState } from 'react';
import './App.css';
import IPForm from './components/IPForm';
import IPInfo from './components/IPInfo';

function App() {
  const [ipData, setIpData] = useState(null);

  const fetchIPData = async (ipAddress) => {
    try {
      const response = await fetch(`http://ip-api.com/json/${ipAddress}`);
      const data = await response.json();
      setIpData(data);
    } catch (error) {
      console.error('Error fetching IP data:', error);
      setIpData(null);
    }
  };

  return (
    <div className="App">
      <h1>IP Information App</h1>
      <IPForm onSubmit={fetchIPData} />
      {ipData && <IPInfo data={ipData} />}
    </div>
  );
}

export default App;
