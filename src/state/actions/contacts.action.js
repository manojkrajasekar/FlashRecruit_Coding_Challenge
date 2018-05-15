import uuid from 'uuid';

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

export const editContact = (id, update) => {
    return {
        type: 'EDIT_CONTACT',
        id,
        update
    }
};

export const removeContact = ({id} = {}) => ({
    type: 'REMOVE_CONTACT',
    id
});
    

