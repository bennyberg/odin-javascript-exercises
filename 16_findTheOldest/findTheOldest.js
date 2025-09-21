const findTheOldest = function(arr) {
    // arr.sort((a, b) => a.yearOfBirth - b.yearOfBirth);
    // console.log((arr[0])["name"]);

    let modifiedObjects = [];
    for (const obj of arr){
        let finalYear = new Date().getFullYear()  
        if ("yearOfDeath" in obj){
            finalYear = obj.yearOfDeath;
        }
        
        const newObj = {...obj, age:finalYear - obj.yearOfBirth};
        modifiedObjects.push(newObj);
    }

    modifiedObjects.sort((a, b) => b.age - a.age);
    // console.log(modifiedObjects[0]["name"]);


    return modifiedObjects[0];

    

};

// Do not edit below this line
module.exports = findTheOldest;
