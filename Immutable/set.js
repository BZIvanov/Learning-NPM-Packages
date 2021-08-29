const { Set } = Immutable;

console.log('---------SET---------');

const scores = Set([1, 3, 8, 5, 1, 9, 3]);
console.log('Scores Set: ', scores);

const additionalScores = Set([5, 1, 9, 2]);

const united = scores.union(additionalScores);
console.log('Union Set: ', united);

console.log('\n\n\n');
