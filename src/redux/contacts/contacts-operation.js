import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsAPI from 'service/contactsAPI';

export const getContacts = createAsyncThunk('contacts/getContacts', async () => {
  const contacts = await contactsAPI.getContacts();
  return contacts;
});

export const addContacts = createAsyncThunk('contacts/addContacts', async contact => {
  const data = await contactsAPI.addContacts(contact);
  return data;
});

export const deleteContacts = createAsyncThunk('contacts/deleteContacts', async id => {
  await contactsAPI.deleteContacts(id);
  return id;
});
