function* generatorSample() {
    // console.log('First operation');
    yield 'Yield value 1 Ran'
    // console.log('Second operation');
    yield 'Yield value 2 Ran'
    // console.log('Last operation');
    yield 'Yield last'
}

const generator = generatorSample();

console.log(generator.next());
// { value: 'Yield value 1 Ran', done: false }
console.log(generator.next());
// { value: 'Yield value 2 Ran', done: false }
console.log(generator.next());
// { value: 'Yield last', done: false }
console.log(generator.next());
// { value: undefined, done: true }
console.log('=====================================');

const generator2 = generatorSample();
for (let val of generator2) {
    console.log(val);
}