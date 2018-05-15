import React, { Component } from 'react';
import Contacts from '../../ContactsData/contacts.json';
import { addContact } from '../../state/actions/contacts.action';
import ContactList from '../../DisplayContacts/ContactList';
import AddContactForm from '../../AddContact/AddContactForm';
import store  from '../../state/store';
import './LandingPage.css';

class LandingPage extends Component {
    render() {
        var count=0;
        return (
            //Renders the column with the header column values
            <div className="landing-page-container">
                <div className="page-title">Contact List</div>
                    <table className="contact-heading-list">
                        <tbody>
                            <tr>
                                <th className="column-title">S.No.</th>
                                <th className="column-title">First Name</th>
                                <th className="column-title">Last Name</th>
                                <th className="column-title">Email</th>
                            </tr>
                        </tbody>
                    </table>
                    { /* Adds the contacts to the array from the given json file */}
                    {Contacts.map((contact) => {
                        store.dispatch(addContact({
                                id:'', 
                                firstName:contact.firstName, 
                                lastName:contact.lastName, 
                                email:contact.email
                            }));
                        count++;
                    })}
                    <ContactList/>
                    <AddContactForm/>
            </div>
        );
    }
}

export default LandingPage;
