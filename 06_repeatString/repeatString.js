const repeatString = function(str, repeat) {
    if (repeat < 0){
        return "ERROR";
    }

    let concatStr = "";
    for (let i = 0; i < repeat; i++) {
        concatStr += str;
    }
    return concatStr;
    

};

// Do not edit below this line
module.exports = repeatString;
