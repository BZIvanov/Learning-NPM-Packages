const { List } = Immutable;

console.log('---------LIST---------');
const fruits = List(['apple', 'lemon', 'orange']);
console.log('Fruits List: ', fruits);

const filtered = fruits.filter((fruit) => fruit !== 'orange');
console.log('Filtered fruit: ', filtered.get(1)); // lemon

// count and countBy
const persons = Immutable.fromJS([
  { name: 'Iva', city: 'Sofia' },
  { name: 'Tanq', city: 'Plovdiv' },
  { name: 'Georgi', city: 'Sofia' },
]);
const fromSofia = persons.count((person) => person.get('city') === 'Sofia'); // 2
const countByCity = persons.countBy((person) => person.get('city'));
countByCity.get('Sofia'); // 2
countByCity.get('Plovdiv'); // 1

// update value for an object nested in an array
const transformedData = persons.map((person) => {
  let transformedPerson = person;
  if (person.get('name') === 'Iva') {
    // methods like set are always returning new value so we will assign it to a variable
    transformedPerson = person.set('city', 'Burgas');
  }
  return transformedPerson;
});

console.log('Updated person city: ', transformedData.toJS());

console.log('\n\n\n');
