import { Sorter } from './Sorter'
import { NumbersCollection } from './NumbersCollection'
import { CharactersCollection } from './CharactersCollection'

// const numbersCollection = new NumbersCollection([1000090, 3, -5, 0]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();

// console.log(numbersCollection);

const charactersCollection = new CharactersCollection('Xaaaby')
const sorter = new Sorter(charactersCollection)
sorter.sort()
console.log(charactersCollection.data)
