const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const arr = hideBin(process.argv);
const { argv } = yargs(arr);
const listContacts = require("./contacts");
const getContactById = require("./contacts");
const addContact = require("./contacts");
const removeContact = require("./contacts");

// // TODO: рефакторить
async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const contacts = await listContacts();
      console.table(contacts);
      break;

    case "get":
      const contactById = await getContactById(id);
      if (!contactById) {
        throw new Error(`Contact with id ${id} is not exist`);
      }
      console.log(contactById);
      break;

    case "add":
      const newContact = await addContact(name, email, phone);
      console.log(newContact);
      break;

    case "remove":
      const removedContact = await removeContact(id);
      console.log(removedContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);

// invokeAction({ action: "list" });

// const id = "6";

// invokeAction({ action: "get", id });

// const newContact = {
//   name: "Dmitry Yerenko",
//   email: "nulla.ante@vestibul.co.uk",
//   phone: "(992) 914-3792",
// };

// invokeAction({
//   action: "add",
//   name: newContact.name,
//   email: newContact.email,
//   phone: newContact.phone,
// });

// invokeAction({ action: "remove", id });
