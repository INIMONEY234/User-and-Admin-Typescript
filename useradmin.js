// MAIN IMPLEMENTATION
export function filterPersons(persons, personType, criteria) {
    return persons
        .filter((person) => person.type === personType)
        .filter((person) => {
        const criteriaKeys = Object.keys(criteria);
        return criteriaKeys.every((fieldName) => {
            return person[fieldName] === criteria[fieldName];
        });
    });
}
const persons = [
    {
        type: "user",
        name: "Ronaldo",
        age: 40,
        occupation: "THE GOAT",
    },
    {
        type: "admin",
        name: "Tkay",
        age: 2,
        role: "Manager",
    },
];
// TESTING USERS
const users = filterPersons(persons, "user", {
    name: "Ronaldo",
});
// TESTING ADMINS
const admins = filterPersons(persons, "admin", {
    role: "Manager",
});
console.log(users);
console.log(admins);
