import React, { Component } from 'react';
import EditContactForm from './EditContact/EditContactForm';
import { removeContact } from '../state/actions/contacts.action';
import DeleteIcon from '@material-ui/icons/Delete';
import store from '../state/store';
import './ContactListItem.css';

class ContactListItem extends Component {
    constructor(props){
        super(props);

        this.state = {
            isEditForm: false
        };

        this.editContactDetails = this.editContactDetails.bind(this);
    }

    editContactDetails = () => {
        this.setState({
            isEditForm:!this.state.isEditForm
        })        
    }

    deleteContactDetails = () => {
        store.dispatch(removeContact({id:this.props.contact.id}));
    }

    render() {
        return (
            <div>
                <div className="contact-list-container">
                <table className="table-wrapper">
                    <tbody className="tbody-wrapper">
                        <tr className="row">
                            <td className="index-column-value">{this.props.contactIndex}</td>
                            <td className="fName-column-value">{this.props.contact.firstName}</td>
                            <td className="lName-column-value">{this.props.contact.lastName}</td>
                            <td className="Email-column-value">{this.props.contact.email}</td>
                            <td className="edit-column-value" onClick={this.editContactDetails}>Edit</td>
                            <td>
                                <DeleteIcon id="delete" onClick={this.deleteContactDetails}/>
                            </td>
                            <td className="column-value" 
                                onClick={(e) => this.props.setfavorite(this.props.contact)}>
                                {this.props.contact.isFavorite 
                                    ? <p id="fav">Favorite</p>
                                    : <p id="not-fav">Not Favorite</p>
                                }
                            </td>
                        </tr>
                    </tbody>
                </table>
                {this.state.isEditForm && <EditContactForm contact={this.props.contact}/>}
                </div>
            </div>
        );
    }
}

export default ContactListItem;