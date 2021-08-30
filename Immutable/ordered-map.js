const { OrderedMap } = Immutable;

console.log('---------ORDERED MAP---------');

const scores = OrderedMap({ Iva: 9, Mira: 7, Toni: 8 });
scores.set('Mira', 7.5);

// in some cases we want to check if we are provided with what we expect
if (!OrderedMap.isOrderedMap(scores)) {
  throw new Error('Scores are not an OrderedMap');
}

console.log('Scores Ordered Map: ', scores);

console.log('Scores size: ', scores.size);
console.log('Iva score: ', scores.get('Iva'));

const plusOneToAll = scores.map((score) => score + 1);
console.log('Iva plus 1 score: ', plusOneToAll.get('Iva'));

console.log('\n\n\n');
