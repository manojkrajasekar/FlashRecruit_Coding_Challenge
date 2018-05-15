import uuid from 'uuid';

//Action for adding the contact
//uuid is a package provided by node, which automatically generates an id
export const addContact = (
        { 
            id = 0,
            firstName = '', 
            lastName = '',
            email = '',
            isFavorite = false
        } = {}
    ) => ({
        type: 'ADD_CONTACT',
        Contact: {
            id: uuid(),
            firstName, 
            lastName,
            email,
            isFavorite
        }
    });

//Action for editing the contact
export const editContact = (id, update) => {
    return {
        type: 'EDIT_CONTACT',
        id,
        update
    }
};

//Action for removing the contact
export const removeContact = ({id} = {}) => ({
    type: 'REMOVE_CONTACT',
    id
});
    

