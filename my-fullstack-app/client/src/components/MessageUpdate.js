import React, { useState } from "react";

function MessageUpdate({ onMessageUpdated }) {
  const [updatedMessage, setUpdatedMessage] = useState("");

  function handleUpdate(e) {
    e.preventDefault();
    localStorage.setItem("message", updatedMessage); // Nachricht im Local Storage speichern
    onMessageUpdated();
  }

  return (
    <div className="MessageUpdate">
      <h2>Update Message</h2>

      <input
        type="text"
        value={updatedMessage}
        onChange={(e) => setUpdatedMessage(e.target.value)}
      />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}

export default MessageUpdate;
