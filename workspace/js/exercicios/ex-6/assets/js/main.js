const arr1 = ["html", 1993, "css", 1996, "bootstrap", 2011, "js", 1995, "react", 2013, "java", 1995]

console.log(arr1);
console.log(arr1.length);
console.log(arr1[6]);
console.log(arr1.toString());
console.log(arr1.join('/'));
console.log(arr1.unshift('ios'));
console.log(arr1);

let arr2 = [
    ['HTML', 1993, 'CSS', 1996],
    ['Bootstrap', 2011, 'JS', 1995],
    ['React', 2013, 'Java', 1995],
];

console.log(arr2)
console.log(arr2[2][1])
arr2[1][2] = "JavaScript"
console.log(arr2)
delete arr2 [2][2]
console.log(arr2);

let arr22 = arr2[2].push("Pipoca")
console.log(arr22)
console.log(arr2)