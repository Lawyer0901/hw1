const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const arr = hideBin(process.argv);
const { argv } = yargs(arr);

const {
  listContacts,
  getContactById,
  addContact,
  removeContact,
} = require("./contacts");

// // TODO: рефакторить
function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      listContacts();
      console.log(contacts);
      break;

    case "get":
      getContactById(id);
      if (!contactById) {
        throw new Error(`Contact with id ${id} is not exist`);
      }
      console.log(contactById);
      break;

    case "add":
      addContact(name, email, phone);
      console.log(newContact);
      break;

    case "remove":
      removeContact(id);
      console.log(removedContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);

// invokeAction({ action: "list" });

// const id = 3;

// invokeAction({ action: "get" }, id);

// const newContact1 = {
//   name: "Dmitry Yerenko",
//   email: "nulla.ante@vestibul.co.uk",
//   phone: "(992) 914-3792",
// };

// invokeAction({
//   action: "add",
//   name: newContact1.name,
//   email: newContact1.email,
//   phone: newContact1.phone,
// });

// invokeAction({ action: "remove", id });
