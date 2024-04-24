import React from "react";

export default function selectedContact({selectedContact}) {
  return (
    <div>
      <h2>{selectedContact.name}</h2>
      <p>{selectedContact.email}</p>
      <p>{selectedContact.phone}</p>
    </div>
  );
}

