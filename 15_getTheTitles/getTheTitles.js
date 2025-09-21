const getTheTitles = function(arr) {
    let res = []
    for (const obj of arr){
        res.push(obj["title"]);
    }
    return res;

    


};

// Do not edit below this line
module.exports = getTheTitles;
