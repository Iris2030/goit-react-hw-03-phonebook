import ContactListItem from "../ContactListItem/ContactListItem"
import s from './ContactList.module.css'
import PropTypes from "prop-types";

export default function ContactList ({contacts, onDeleteContact}){

    return <ul className={s.list}>
{contacts.map(contact =>(
         
         <ContactListItem 
         key = {contact.id}
         id={contact.id}
         name= {contact.name}
         number={contact.number}
         onDeleteContact={onDeleteContact}
         /> 
      ))}
    </ul>

}

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
  };