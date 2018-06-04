function getDetails() {
    const arr = [1, "Ori", "ori@trainologic.com"];
    return arr;
}

const [id, name, email] = getDetails();
console.log(id + ", " + name + ", email");
