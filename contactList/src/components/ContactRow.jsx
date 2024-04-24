import React from "react";

// for rendering a single Row, or tr element, with three column elements, td for the name, email, and phone number.

export default function ContactRow({ contact }) {
  return (
    <tr>
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
    </tr>
  );
}
