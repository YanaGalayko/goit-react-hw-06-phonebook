import { ContactsListItem } from "components/ContactListItms/ContactsListItem"
import { ContactListStyle } from "./ContactList.styled"
import { useSelector } from "react-redux";

export const ContactList = () => {
    const contacts = useSelector(state => state.contacts.contacts);
    const filter = useSelector(state => state.filter);
  
    const filterContacts = contacts.filter(contact =>
        contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
      );

    return (
        <>
        {filterContacts.length  ? (
            <ContactListStyle>
            {filterContacts.map(contact => (
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