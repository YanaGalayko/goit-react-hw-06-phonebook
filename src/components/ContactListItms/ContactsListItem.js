import { useDispatch } from "react-redux"
import { ListItems,
         ListText,
         ListBtn } from "./ContactsListItem.styled"
import { deleteContact } from "redux/contactsSlise"

export const ContactsListItem = ({contact}) => {
   const dispatch = useDispatch()
return (
    <ListItems>
        <ListText>
            {contact.name} : {contact.number}
        </ListText>
        <ListBtn onClick={() => dispatch(deleteContact(contact.id))}>Delete</ListBtn>
    </ListItems>
)
}