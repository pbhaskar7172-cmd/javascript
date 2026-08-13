const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})   // if inplace of the map we had used the filter here then no chnage would have been objerved in the myNumbers as it wiuld return the true value and the num willbe printed

const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)    //no nessecity that u keep num same in all
                .filter( (num) => num >= 40)

console.log(newNums);


// map()
// Whatever you RETURN becomes the new element.

// filter()
// Whatever you RETURN is treated as true/false.
// If true -> original element is kept.
// If false -> original element is removed.