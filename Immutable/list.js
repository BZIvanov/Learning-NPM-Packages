const { List } = Immutable;

console.log('---------LIST---------');
const fruits = List(['apple', 'lemon', 'orange']);
console.log('Fruits List: ', fruits);

const filtered = fruits.filter((fruit) => fruit !== 'orange');
console.log('Filtered fruit: ', filtered.get(1));

// count and countBy
const myObj = Immutable.fromJS([
  { name: 'Iva', city: 'Sofia' },
  { name: 'Tanq', city: 'Plovdiv' },
  { name: 'Georgi', city: 'Sofia' },
]);
const fromSofia = myObj.count((person) => person.get('city') === 'Sofia'); // 2
const countByCity = myObj.countBy((person) => person.get('city'));
countByCity.get('Sofia'); // 2
countByCity.get('Plovdiv'); // 1

console.log('\n\n\n');
