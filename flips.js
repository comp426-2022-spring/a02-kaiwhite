import {coinFlips, countFlips} from './modules/coin.mjs';

var args = process.argv.slice(2);
let coinFlip = coinFlips(args[2]);
let countFlip = countFlips(coinFlip);

if (args[2] == null){
    coinFlip = coinFlips(1);
    if (coinFlip == 'tails'){
        countFlip = {tails:1};
    } else {
        countFlip = {heads:1};
    }
}
console.info(coinFlip);
console.log(countFlip);