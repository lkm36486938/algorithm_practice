const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log("숫자 N을 입력해주세요.");

rl.on("line", (N) => {
    console.log("N = ", N);
    N = parseInt(N);
    if (0 <= N && N <= 23) {
        let result = solution(N);
        console.log("답: ", result);
        rl.close();
    } else {
        console.log("조건에 맞는 숫자를 입력해주세요.");
        rl.close();
    }
});

rl.on("close", () => {
    console.log("종료");
    process.exit();
});

function solution(N) {
    let cnt = 0;

    for (let i = 0; i < N + 1; i++) {
        for (let j = 0; j < 60; j++) {
            for (let k = 0; k < 60; k++) {
                (i.toString() + j.toString() + k.toString()).indexOf("3") !==
                    -1 && ++cnt;
            }
        }
    }

    return cnt;
}
