// create a component, call it ContactList, and export it from the file

import React, {useEffect} from 'react';
import ContactRow from './ContactRow'; // import the ContactRow component




export default function ContactList({contacts, setContacts}) {
  useEffect(()=>{
    async function fetchContacts() {
      try {
        const response = await fetch(
          "https://jsonplace-univclone.herokuapp.com/users"
        );
        const result = await response.json();
        setContacts(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchContacts();
  }, [setContacts]);
  return ( 
    <table>
      <thead>
        <tr>
          <th colSpan="3">Contact List</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Phone</td>
        </tr>
        {contacts.map((contact) => {
          return <ContactRow key={contact.id} contact={contact} />;
        })}
      </tbody>
    </table>
); 
}