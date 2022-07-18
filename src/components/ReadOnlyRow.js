import React from "react";

const ReadOnlyRow = ({ contact, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.fullName}</td>
      <td>{contact.address}</td>
      <td>{contact.phoneNumber}</td>
      <td>{contact.email}</td>
      <td>
        
        <button type="button" onClick={() => handleDeleteClick(contact.id)} className="toDelete">
          <b>Delete</b>
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;