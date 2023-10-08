import { ContactForm } from "./ContactForm/ContactForm";
import { ContactFilter } from "./ContactFilter/ContactFilter";
import { ContactList } from "./ContactList/ContactList";
import { Layout } from "./Layout";
import { GlobalStyle } from "./GlobalStyle";

export const App = () => {
  return (
    <Layout>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <ContactFilter />
      <ContactList/> 
        <GlobalStyle/>  
    </Layout>
  )
}
