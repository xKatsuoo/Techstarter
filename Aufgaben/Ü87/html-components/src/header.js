import React,  { useState, useEffect }  from 'react';


const Header = () => {
  return (
    <header >
      <h1>Jasonś React Komponenten</h1>
    </header>
  );
};


const Clock = () => {
  const [time, setTime] = useState(getCurrentTime());

  // Funktion, um die aktuelle Uhrzeit im Format HH:MM:SS zu erhalten
  function getCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  }

  // useEffect-Hook, um die Uhrzeit jede Sekunde zu aktualisieren
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(getCurrentTime());
    }, 1000);

    // Aufräumen des Intervals beim Komponentenabbau
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h1>Aktuelle Uhrzeit:</h1>
      <h2>{time}</h2>
    </div>
  );
};

export default Header;
export {Clock};
