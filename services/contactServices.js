const Contact = require("../db/models/contactModel");

const getAllContacts = async () => {
  const result = await Contact.find();

  return result;
};

const addContact = async (data) => {
  const result = await Contact.create(data);

  return result;
};

const delContact = async (id) => {
  const result = await Contact.findByIdAndRemove(id);

  return result;
};

module.exports = { getAllContacts, addContact, delContact };
