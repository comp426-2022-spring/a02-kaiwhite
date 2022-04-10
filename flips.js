import {coinFlip, countFlips, coinFlips} from './modules/coin.mjs';
import minimist from 'minimist'

var myargs1 = minimist(process.argv.slice(2))
const value = myargs1.number || 1

let num = coinFlips(value)

console.log(num)
console.log(coinFlips(num))