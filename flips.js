import {coinFlip, countFlips, coinFlips} from './modules/coin.mjs';

if (process.argv.length < 3){
    console.log(coinFlip());
} else {
    var myargs1 = process.argv.slice(2);
    var myArgs = myargs1[0].charAt(9);
    console.log(myArgs);

    var x = 10;
    while (x < myargs1[0].length){
        myArgs = myArgs + myargs1[0].charAt(x);
        x++;
    }
    var num = parseInt(myArgs);
    var coins = coinFlips(num);
    console.log(coins);
    var num = countFlips(coins);
    console.log(num);
    console.log(countFlips(results));
}