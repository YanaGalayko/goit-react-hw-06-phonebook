import { ContactsListItem } from "components/ContactListItms/ContactsListItem"
import { ContactListStyle } from "./ContactList.styled"
import { useSelector } from "react-redux";

export const ContactList = () => {
    const contacts = useSelector(state => state.contacts.contacts);
    const filter = useSelector(state => state.filter.filter);
  
    const filterContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase()));

    return (
        <>
        {filterContacts.length > 0 ? (
            <ContactListStyle>
            {contacts.map(contact => (
                <ContactsListItem
                    key={contact.id}
                    contact={contact}
                />      
            ))}
        </ContactListStyle>
        ) : (
            <p>Contact list is empty, please add contacts!</p>
        )}
        </>

       
    )
}