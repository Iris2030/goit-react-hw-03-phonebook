import React, { Component } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import Form from "./Components/Form/Form";
import ContactList from "./Components/ContactList/ContactList";
import Filter from "./Components/Filter/Filter";
import Container from "./Components/Container/Container";
import s from './App.module.css'


export default class App extends Component {
  state = {
    contacts: [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
    filter: "",
  };



  addContact = (contact) => {


    const contactItem = {
      id: nanoid(),
      name: contact.name,
      number: contact.number
    };

    this.setState(({contacts}) => ({
contacts : [ ...contacts, contactItem]
    }))

 
  };


  changeFilter = (event) => {
this.setState({filter: event.currentTarget.value})
  };


  getFilteredContacts = () => {
return this.state.contacts.filter(contact => contact.name.toLowerCase().includes(this.state.filter.toLowerCase()))
  };


  deleteContact = (contactId) =>{
    this.setState(({contacts}) => ({
      contacts: contacts.filter(contact =>contact.id !== contactId)
    }))
  };


  componentDidMount(){
this.setState(prev => ({
contacts:JSON.parse(localStorage.getItem('contacts')) ?? prev.contacts

}))
  };

 
  componentDidUpdate(prevProps, {contacts}){
if(this.state.contacts !== contacts){
  localStorage.setItem('contacts',JSON.stringify(this.state.contacts));
}
  };
 

  render() {



    return (
      <Container>
         <h1 className={s.title}>Phonebook</h1>
        <Form addContact={this.addContact} allContacts={this.state.contacts}/>

        <h2 className={s.title}>Contacts</h2>
        <Filter value={this.state.filter} changeFilter={this.changeFilter}/>
        <ContactList  contacts={this.getFilteredContacts()} onDeleteContact={this.deleteContact}/>
         

      </Container>

      
    );
  }
}
