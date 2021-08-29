const { Stack } = Immutable;

console.log('---------STACK---------');

let scores = Stack([
  { name: 'Iva', score: 9 },
  { name: 'Mira', score: 7 },
  { name: 'Toni', score: 8 },
]);
scores = scores.unshift({ name: 'Ivan', score: 7.5 });

console.log('Scores Stack: ', scores);

console.log('Last score: ', scores.first());

console.log('\n\n\n');
