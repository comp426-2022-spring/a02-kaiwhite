import minimist from 'minimist';
import {flipACoin} from './modules/coin.mjs';

const args = minimist(process.argv.slice(2))

if (args.call === undefined) {
    console.log("Error: no input")
    process.exit(0);
} 

if (args.call !== 'tails' && args.call !== 'heads') {
    console.log("Usage: node guess-flip --call=[heads|tails]")
    process.exit(0);
}

console.log(flipACoin(args.call));