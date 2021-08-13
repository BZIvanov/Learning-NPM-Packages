const { List } = Immutable;

console.log('---------LIST---------');
const fruits = List(['apple', 'lemon', 'orange']);
console.log('Fruits List: ', fruits);

const filtered = fruits.filter((fruit) => fruit !== 'orange');
console.log('Filtered fruit: ', filtered.get(1));

console.log('\n\n\n');
