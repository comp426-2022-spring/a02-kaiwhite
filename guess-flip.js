import {flipACoin, coinFlip} from './modules/coin.mjs';
const args = process.argv.slice(2);

if (process.argv.length < 3){
    console.log("Error: no input");
    console.log("Usage: node guess-flip --call=[heads|tails]");
} else {
    var myargs1 = process.argv.slice(2);
    var myArgs = myargs1[0].charAt(7);

    var x = 8;
    while (x < myargs1[0].length){
        myArgs = myArgs + myargs1[0].charAt(x);
        x++;
    }
    if (myArgs != 'heads' || myArgs != 'tails'){
        console.log("Error: no input");
        console.log("Usage: node guess-flip --call=[heads|tails]");
    }else {
        console.log(flipACoin(myArgs));
    }
}