const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log("숫자를 입력해주세요");

rl.on("line", function (numberString) {
    console.log("input: ", numberString);

    let result = solution(numberString);
    console.log("result: ", result);

    rl.close();
});

rl.on("close", function () {
    process.exit();
});

function solution(numberString) {
    if (isNaN(parseInt(numberString))) return "숫자가 아닙니다.";

    numberString = numberString.split("");

    let result = numberString.reduce(reducer);
    return result;
}

function reducer(prev, cur) {
    (prev = Number(prev)), (cur = Number(cur));

    let add = Math.floor(prev + cur);
    let multiply = Math.floor(prev * cur);

    return add > multiply ? add : multiply;
}
