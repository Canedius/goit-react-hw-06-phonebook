import Form from './Form/Form'
import ContactList from './Contacts/Contacts'
import Filter from './Filter/Filter'
import s from './Form/Form.module.css';
import { useSelector } from 'react-redux';
import { getItems,getFilter } from 'redux/contacts/contact-selectors';

 const App =()=>{
   const contacts = useSelector(getItems)
   const filter = useSelector(getFilter)

      const normalizedFilter= filter.toLowerCase()
      const visibleContacts = contacts.filter(contact =>contact.name.toLowerCase().includes(normalizedFilter) )
    return (<div className={s.wrap}>
      <h2>Phonebook</h2>
      <Form  />
      <h2>Contacts</h2>
      <ContactList contacts={visibleContacts} >
      <Filter value={filter} />
      </ContactList>
    </div>)
  
}

export default App