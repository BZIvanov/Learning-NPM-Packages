console.log('---------FROM JS---------');

const personObj = {
  name: 'Iva',
  age: 28,
  city: 'Sofia',
  location: {
    lat: 12.23232,
    lng: 23.12212,
  },
};
const person = Immutable.fromJS(personObj);
console.log('Person: ', person);

const moviesArr = [
  {
    title: 'Title 1',
    description: 'desc 1',
    info: { year: 2018, genre: 'action' },
    actors: ['Iva', 'Mira', 'Ivan'],
  },
  {
    title: 'Title 2',
    description: 'desc 2',
    info: { year: 2021, genre: 'comedy' },
    actors: ['Miro', 'Toni', 'Boni'],
  },
];
const movies = Immutable.fromJS(moviesArr);
console.log('Movies: ', movies);

console.log('\n\n\n');
