const contact = {
    id: 1,
    name: "Ori",
    email: "ori@trainologic.com",
};

const {email} = contact;

function log({id, name, email}) {
    console.log(id + ", " + name + ", " + email);
}

log(contact);
