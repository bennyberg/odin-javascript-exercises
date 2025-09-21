const palindromes = function (str) {
    let modifiedStr = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s]/g,"");
    console.log(modifiedStr);
    modifiedStr = modifiedStr.toLowerCase();
    const iterations = Math.round(modifiedStr.length / 2) - 1
    
    const strLength = modifiedStr.length;

    for (let i=0; i < iterations;i++)
    {
        if (modifiedStr[i] != modifiedStr[strLength - i - 1]){
            return false;
        }
    }
    return true;


};

// Do not edit below this line
module.exports = palindromes;
