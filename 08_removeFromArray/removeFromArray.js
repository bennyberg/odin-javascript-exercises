const removeFromArray = function() {
    const argsArr = Array.from(arguments);
    const numArgs = argsArr.length;

    if (numArgs === 0){
        throw new Error("No arguments"); 
    }

    if (!Array.isArray(argsArr[0]))
    {
        throw new Error("No array argument"); 
    }

    const valArr = argsArr[0];
    const arrLength = valArr.length;

    if (numArgs === 1){
        return valArr;
    }

    let newArr = [];
    const elemArr = argsArr.slice(1);

    for (let i = 0; i <arrLength; i++)
    {
        if (!elemArr.includes(valArr[i]))
        {
            newArr.push(valArr[i]);
        }
    }

    return newArr;
    };

// Do not edit below this line
module.exports = removeFromArray;
