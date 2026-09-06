const findTheOldest = function(people) {

    const today = new Date().getFullYear();

    const oldest = people.reduce( (older, current) => {

        let curDeathYear = current.yearOfDeath || today;
        let oldDeathYear = older.yearOfDeath || today;

        const old = oldDeathYear - older.yearOfBirth;
        const cur = curDeathYear - current.yearOfBirth;


        return old > cur ? older : current;

    } );

    return oldest;

};

// Do not edit below this line
module.exports = findTheOldest;
