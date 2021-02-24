// Optional chaining uses the ? operator to determine if a value exists. It will return 'undefined' if the value doesn't exist instead of an error. It also simplifies checking whther a property exists using && i.e. person && person.name && person.name.firstName

let person = {
    name: {firstName: 'Dave', lastName: 'Lilleystone'}
}

// TypeError: Cannot read property 'firstname' of undefined

console.log(person.name.firstname)

// undefined

console.log(person?.name?.firstname)

// can be used with null coalescing operator

console.log(person?.name?.firstname ?? 'person.name.firstName doesn\'t exist')