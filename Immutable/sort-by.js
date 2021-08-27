// List and Map are commented, because they are already imported in other files, uncomment if you use this file separately
// const { List } = Immutable;
// const { Map } = Immutable;

const rawData = [
  { name: 'Iva', age: 28 },
  { name: 'Petar', age: 27 },
  { name: 'Mira', age: 29 },
];

const persons = List(rawData.map((row) => Map(row)));

const sorted = persons.sortBy((person) => person.get('age'));
sorted.forEach((person) => console.log('Sorted by age: ', person.get('name')));
