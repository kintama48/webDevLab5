// 231485698 - Abdullah Baig - Lab 5


// TASK 1
checkPalindrome = () => {
    const str = document.getElementById("string").value.toLowerCase();
    document.getElementById("palindromeResult").innerText = isPalindrome(str).toString();
}

isPalindrome = (string) => {
    return string === string.split('').reverse().join('');
}

// TASK 2
let arr = [3,2,4,5,6,9,5]

bubbleSort = (list) => {
    console.log("\n---------------- Bubble Sort ----------------\n");
    console.log("Original Array: ", arr);
    for (let i=0; i<list.length; i++) {
        for (let j=0; j<list.length; j++) {
            if (list[j] > list[j+1]) {
                let temp = list[j];
                list[j] = list[j+1];
                list[j+1] = temp;
            }
        }
    }
    console.log("Sorted Array: ", list);
}
bubbleSort(arr);


// TASK 3
getTable = async (num) => {
    let table = "";
    for (let i = 1; i <= 10; i++) {
        table += num + " x " + i + " = " + num * i + "\n";
    }
    return table;
}

try {
    let number = prompt("Please enter your number for its table: ",
        "10");
    getTable(number).then((table) => {
        console.log(table);
        document.getElementById("tableResult").innerText = table;
    });
} catch (e) {
    if (e === ReferenceError) {
        console.log(e.message);
    }
}

// TASK 4
const differenceOfTwo = (list) => {
    console.log("\n---------------- Task 4 ----------------\n");
    console.log("Pairs with difference of Two: \n");
    let result = [];
    for (let i = 0; i < list.length; i++) {
        for (let j=0; j<list.length; j++) {
            if (Math.abs(list[i] - list[j]) === 2) {
                let temp = ([list[i], list[j]].sort()).toString();
                if (!result.includes(temp)){
                    result.push(temp);
                }
            }
        }
    }
    console.log(result);
}

differenceOfTwo([1,2,3,4,5,6])

// TASK 5
let areaOfRectangle = (length, width) => {
    return length * width;
}

let areaOfTriangle = (base, height) => {
    return (base * height) / 2;
}

console.log("\n\n---------------- Task 5 ----------------\n");
console.log("Area of Shape: ", areaOfRectangle(7, 6) + areaOfTriangle(3, 5), "mm^2\n");