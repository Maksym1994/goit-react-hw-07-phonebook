import axios from 'axios';

axios.defaults.baseURL = 'https://616ae77016e7120017fa112d.mockapi.io/api/v1/';

export async function getContacts() {
  const { data } = await axios.get(`contacts`);
  return data;
}

export async function addContacts(contact) {
  const { data } = await axios.post(`contacts`, contact);
  return data;
}

export async function deleteContacts(id) {
  await axios.delete(`contacts/${id}`);
  return id;
}
