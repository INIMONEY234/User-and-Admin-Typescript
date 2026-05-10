interface User {
  type: "user";
  name: string;
  age: number;
  occupation: string;
}

interface Admin {
  type: "admin";
  name: string;
  age: number;
  role: string;
}

type Person = User | Admin;

// OVERLOAD FOR USERS
export function filterPersons(
  persons: Person[],
  personType: "user",
  criteria: Partial<Omit<User, "type">>
): User[];

// OVERLOAD FOR ADMINS
export function filterPersons(
  persons: Person[],
  personType: "admin",
  criteria: Partial<Omit<Admin, "type">>
): Admin[];

// MAIN IMPLEMENTATION
export function filterPersons(
  persons: Person[],
  personType: "user" | "admin",
  criteria:
    | Partial<Omit<User, "type">>
    | Partial<Omit<Admin, "type">>
): Person[] {
  return persons
    .filter((person) => person.type === personType)
    .filter((person) => {
      const criteriaKeys = Object.keys(criteria) as (keyof typeof criteria)[];

      return criteriaKeys.every((fieldName) => {
        return person[fieldName as keyof Person] === criteria[fieldName];
      });
    });
}

const persons: Person[] = [
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