import React, { Component } from "react";
import s from './Form.module.css';
import PropTypes from "prop-types";

export default class Form extends Component {
  state = {
    name: "",
    number: "",
  };

  handleInput = (event) => {

    this.setState({
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();



const contactNames = this.props.allContacts.map(contact => contact.name)

 
    if(contactNames.includes(event.currentTarget.name.value)){
      alert(`${event.currentTarget.name.value} is alredy in contacts`)
      return
    }

    this.props.addContact(this.state);

    this.resetForm();
  };

  resetForm = () => {
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label className={s.label}>
          Name
          </label>
          <input className={s.input}
            value={this.state.name}
            onChange={this.handleInput}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        
        <label className={s.label}>
          Number
          </label>
          <input className={s.input}
            value={this.state.number}
            onChange={this.handleInput}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />

        <button className={s.button} type="submit">Add contact</button>
      </form>
    );
  }
}

Form.propTypes={
  addContact: PropTypes.func.isRequired,
  allContacts: PropTypes.array.isRequired,
}