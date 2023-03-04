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
async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      console.table(await listContacts());
      break;

    case "get":
      console.log(await getContactById(id));
      break;

    case "add":
      console.log(await addContact(name, email, phone));
      break;

    case "remove":
      console.log(await removeContact(id));
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
