import React, { useState, useEffect } from "react";
import MessageUpdate from "./MessageUpdate";

function Message() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const savedMessage = localStorage.getItem("message"); // Nachricht aus dem Local Storage holen
    if (savedMessage) {
      setMessage(savedMessage);
    }
  }, []);

  const handleMessageUpdated = () => {
    const updatedMessage = localStorage.getItem("message"); // Aktualisierte Nachricht aus dem Local Storage holen
    if (updatedMessage) {
      setMessage(updatedMessage);
    }
  };

  return (
    <div className="Message">
      <h1>Aktuelle Message:</h1>
      <h2>{message}</h2>
      <MessageUpdate onMessageUpdated={handleMessageUpdated} />
    </div>
  );
}

export default Message;
