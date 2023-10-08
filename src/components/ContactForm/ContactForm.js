import { Formik } from 'formik';
import * as Yup from 'yup';
import { FormContact,
         FormLabel,
         FormInput, 
         FormBtn, 
         FormError } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlise';

const FormSchema = Yup.object().shape({
    name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .matches(
        "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
        "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      )
    .required('Required'),
    number: Yup.string()
    .min(9, 'The 9 symbols required!')
    .max(13, 'Less than 13 symbols!')
    .matches(
        /\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}/,
        "Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      )
    .required('Required'),
  });

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
    return (
        <Formik
          initialValues={{ name: '', number: '' }}
          validationSchema={FormSchema}
          onSubmit={(values, actions) => {
            const isContactName = contacts.some(
              contact => contact.name.toLowerCase() === values.name.toLowerCase()
            );
            
            if (isContactName) {
              alert(`${values.name} is already in contacts.`);
              return;
            }
        
            const isContactNumber = contacts.some(
              contact => contact.number === values.number
            );
        
            if (isContactNumber) {
              alert(`${values.number} is already in contacts.`);
              return;
            }

            dispatch(addContact(values));
            actions.resetForm();
          }}
        >
            <FormContact>
              <FormLabel>
                    Name
                <FormInput type="text" name="name" />
                <FormError name="name" component="div" />
              </FormLabel>
              <FormLabel>
                    Number
                <FormInput type="tel" name="number" />
                <FormError name="number" component="div" />
              </FormLabel>
              <FormBtn type="submit">
                Add contact
              </FormBtn>
            </FormContact>
        </Formik>
    )
}