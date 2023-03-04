const { v4 } = require("uuid");
const fs = require("fs").promises;
const path = require("path");

const contactsPath = path.join("db", "contacts.json");

/*
 * Раскомментируй и запиши значение
 */

// // TODO: задокументировать каждую функцию

const listContacts = async () => {
  try {
    const data = await fs.readFile(contactsPath, "utf-8");
    const contacts = JSON.parse(data);

    return contacts;
  } catch (error) {
    console.log(error.message);
  }
};

const getContactById = async (contactId) => {
  try {
    const contacts = await listContacts();
    const result = contacts.find((contact) => contact.id === contactId);
    if (!result) {
      return null;
    }
    return result;
  } catch (error) {
    console.log(error.message);
  }
};

const removeContact = async (contactId) => {
  try {
    const contacts = await listContacts();

    const filtredContact = contacts.filter(
      (contact) => contact.id !== contactId
    );
    await fs.writeFile(contactsPath, JSON.stringify(filtredContact));

    return contacts;
  } catch (error) {
    console.log(error.message);
  }
};

const addContact = async (name, email, phone) => {
  try {
    const contacts = await listContacts();

    const newContact = [...contacts, { id: v4(), name, email, phone }];

    await fs.writeFile(contactsPath, JSON.stringify(newContact), "utf-8");

    return contacts;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { listContacts, getContactById, addContact, removeContact };
