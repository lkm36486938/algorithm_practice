const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.setPrompt("> ");
rl.prompt();

let input = [];

console.log("N을 입력해주세요.");

rl.on("line", (line) => {
    if (input.length === 0) {
        if (isNaN(parseInt(line))) {
            rl.close();
            return console.log("숫자가 아닙니다");
        }
        input.push(line);
        rl.prompt();
        console.log("이동할 계획을 입력해주세요. (띄어쓰기로 구분)");
    } else if (input.length === 1) {
        input.push(line);
        let result = solution();
        console.log("정답: ", result);
        rl.close();
    }
});

rl.on("close", () => {
    console.log("종료");
    process.exit();
});

function solution() {
    let N = input[0];
    let xy = { x: 1, y: 1 };
    let move = input[1].split(" ");

    for (const m of move) {
        switch (m) {
            case "D":
                if (xy["x"] < N) {
                    xy["x"]++;
                }
                break;
            case "U":
                if (xy["x"] - 1 === 0) {
                    break;
                }
                xy["x"]--;
                break;
            case "R":
                if (xy["y"] < N) {
                    xy["y"]++;
                }
                break;
            case "L":
                if (xy["y"] - 1 === 0) break;
                xy["y"]--;
                break;
        }
    }

    return `${xy["x"]} ${xy["y"]}`;
}
