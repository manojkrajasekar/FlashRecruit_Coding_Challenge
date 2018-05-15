import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContactListItem from '../DisplayContacts/ContactListItem';

class ContactList extends Component {
    constructor(props){
        super(props);

        this.state = {
            checkit: false
        };
    }

    toggleFavorite = (contactDetail) => {
        //If the isFavorite condition is false, then the contact object is removed from the arrray
        // and then is inserted as the first element of the array, using the unshift method.
        if(!contactDetail.isFavorite){
            contactDetail.isFavorite = !contactDetail.isFavorite;
            for (var i =0; i < this.props.contacts.length; i++)
                if (this.props.contacts[i].id === contactDetail.id ) {
                    this.props.contacts.splice(i,1);
                break;
            }
            //Removed contact object is inserted as the first element of the array
            this.props.contacts.unshift(contactDetail);
            
            this.setState({
                checkit: !this.state.checkit
            })
        }
        else {
            //If the isFavorite condition is true, then the contact object is removed from the arrray
            //and then is inserted at the end of the array, using the push method.
            contactDetail.isFavorite = !contactDetail.isFavorite;
            
            for (var j =0; j < this.props.contacts.length; j++)
                if (this.props.contacts[j].id === contactDetail.id ) {
                    this.props.contacts.splice(j,1);
                break;
            }

            //Removed contact object is inserted at the end of the array
            this.props.contacts.push(contactDetail);
            this.setState({
                checkit: !this.state.checkit
            })
        }
    }

    render() {
        var count=0;
        return (
            <div>
                {this.props.contacts.map((contact) => {
                    count++;
                    return <ContactListItem key={contact.id} contactIndex={count} contact={contact} setfavorite={this.toggleFavorite.bind(this)} />
                })}
            </div>
        );
    }
}
    
const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(ContactList);