const { List } = Immutable;
const { Map } = Immutable;

console.log('---------SORT BY---------');

const rawData = [
  { name: 'Iva', age: 28 },
  { name: 'Petar', age: 27 },
  { name: 'Mira', age: 29 },
];

const persons = List(rawData.map((row) => Map(row)));

const sorted = persons.sortBy((person) => person.get('age'));
sorted.forEach((person) => console.log('Sorted by age: ', person.get('name')));

console.log('\n\n\n');
