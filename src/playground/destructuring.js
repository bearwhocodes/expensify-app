// Object Destructuring

const person = {
  name: 'Steve',
  age: 29,
  location: {
    city: 'Faversham',
    temp: 10
  }
};

const { name = 'Anonymous', age } = person;

console.log(`${ name } is ${ age }.`);

const { city, temp: temperature } = person.location;

if (city && temperature) {
  console.log(`It is ${ temperature } deg in ${ city }.`);
}

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin'
  }
};

const { name: publisherName = 'Self Published' } = book.publisher;

console.log(publisherName);

// Array Destructuring

const address = ['8 Pembroke Road', 'Southville', 'Bristol', 'BS31PP'];

const [, town, county = 'Essex'] = address;

console.log(`You are in ${ town } ${ county }.`);

const item = ['Coffee (hot)', '$2', '$2.50', '$2.75'];

const [itemName, , medium] = item;

console.log(`A medium ${ itemName } costs ${ medium }.`);