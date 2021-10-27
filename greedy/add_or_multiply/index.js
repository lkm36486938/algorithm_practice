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

/* before.. */
// function solution(numberString) {
//     if (isNaN(parseInt(numberString))) return "숫자가 아닙니다.";

//     numberString = numberString.split("");

//     let result = numberString.reduce(reducer);
//     return result;
// }

// function reducer(prev, cur) {
//     (prev = Number(prev)), (cur = Number(cur));

//     let add = Math.floor(prev + cur);
//     let multiply = Math.floor(prev * cur);

//     return add > multiply ? add : multiply;
// }

//
//
//
//
//
/*
after..
두 수 중 하나라도 1 이하인 경우에는 더하며, 두 수가 모두 2이상인 경우에는 곱한다.
*/
function solution(numberString) {
    if (isNaN(parseInt(numberString))) return "숫자가 아닙니다.";

    numberString = numberString.split("");

    // 첫 번째 문자를 숫자로 변경하여 대입
    let result = numberString.reduce(reducer);

    return result;
}

// 둘중 하나라도 1이하인 경우 더하기, 그 외엔 곱하기
function reducer(prev, cur) {
    (prev = Number(prev)), (cur = Number(cur));

    return prev <= 1 || cur <= 1
        ? Math.floor(prev + cur)
        : Math.floor(prev * cur);
}
