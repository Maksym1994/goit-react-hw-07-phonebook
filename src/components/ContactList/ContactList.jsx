import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilteredContacts } from 'redux/contacts/contacts-selector';
import s from 'components/ContactList/ContactList.module.css';
import { getContacts, deleteContacts } from 'redux/contacts/contacts-operation';

const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(deleteContacts(id));

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <ul>
      {contacts.map(({ id, name, phone }) => (
        <li className={s.contactItem} key={id}>
          <p className={s.itemName}>Name: {name}</p>
          <p className={s.itemName}>Number: {phone}</p>
          <button className={s.deleteBtn} type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
