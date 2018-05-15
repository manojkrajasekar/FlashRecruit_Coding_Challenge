//Default state is an array, which holds the contacts
const ContactDefaultState = [];

//Based on the case for the action, the following action on the state is done by the reducer and is updated in the store.
export const Contacts = (state = ContactDefaultState, action) => {
    switch (action.type) {
        case 'ADD_CONTACT':
            return [ 
                ...state,
                action.Contact
            ];
        case 'REMOVE_CONTACT':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_CONTACT':
            return state.map((Contact) => {
                if(Contact.id === action.id){
                    return {
                        ...Contact,
                        ...action.update
                    }
            }
            else {
                return Contact
            }
        });
        default:
            return state;
    }
};



        