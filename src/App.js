import React, { useState, Fragment } from "react";
import { nanoid } from 'nanoid';
import "./App.css";
import data from "./mock-data.json";
import ReadOnlyRow from "./components/ReadOnlyRow";

const App = () => {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    fullName:'',
    address:'',
    phoneNumber:'',
    email:'',
  });

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = {...addFormData};
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };
  const handleAddFormSubmit = (event) => {
    event.preventDefault();
    const newContact = {
      id: nanoid(),
      fullName: addFormData.fullName,
      address: addFormData.address,
      phoneNumber: addFormData.phoneNumber,
      email: addFormData.email,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];
    const index = contacts.findIndex((contact)=> contact.id === contactId);

    newContacts.splice(index, 1);
    setContacts(newContacts);
  }
  
  
  return (
      <div className="app-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Actions</th>

            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment>
                {(
                  <ReadOnlyRow
                  contact={contact}
                  handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            
                

      
            ))}
          </tbody>
        </table>
        <h2>Add a student information</h2>
        <form onSubmit={handleAddFormSubmit}>
          <input typer="text" name="fullName" required="required" placeholder="Enter a name" onChange={handleAddFormChange}/> 
          <input typer="text" name="address" required="required" placeholder="Enter a address" onChange={handleAddFormChange}/>
          <input typer="text" name="phoneNumber" required="required" placeholder="Enter a phoneNumber" onChange={handleAddFormChange}/>
          <input typer="text" name="email" required="required" placeholder="Enter a email id" onChange={handleAddFormChange}/>
          <button type="submit" className="toSubmit" ><b>Submit</b></button>

        </form>
    </div>
  );
};

export default App;