const sumAll = function () {
    const argsArr = Array.from(arguments);

    if (argsArr.length != 2) {
        return 'ERROR';
    }

    for (let i = 0; i < argsArr.length; i++) {
        if (typeof (argsArr[i]) != 'number') {
            return 'ERROR';
        }

        if (!Number.isInteger(argsArr[i]) || argsArr[i] < 0)
        {
           return 'ERROR'; 
        }
    }

    const firstArg = argsArr[0];
    const secondArg = argsArr[1];
    const difference = secondArg - firstArg;

    if (difference === 0) {
        return firstArg;
    }

    let sum = 0;

    if (firstArg > secondArg) {
        for (let i = secondArg; i < firstArg + 1; i++) {
            sum += i;
        }
    }
    else {
        for (let i = firstArg; i < secondArg + 1; i++) {
            sum += i;
        }
    }
    console.log(sum);
    return sum;
}

// Do not edit below this line
module.exports = sumAll;
