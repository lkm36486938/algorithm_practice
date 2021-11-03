const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.setPrompt(">");
rl.prompt();
rl.on("line", (S) => {
    let result = solution(S);
    console.log(`답: ${result}`);
});

rl.on("close", () => {
    process.exit();
});

function solution(S) {
    console.log(`S: ${S}`);

    let number = 0;
    let str = [];
    for (const char of S) {
        // 문자일 경우
        if (isNaN(char)) {
            str.push(char);
        } else {
            number += parseInt(char);
        }
    }
    // return str.sort((a, b) => (a > b ? 1 : -1)).join("") + number;
    // sort는 인수없이 실행하면 오름차순으로됨
    return str.sort().join("") + number;
}
