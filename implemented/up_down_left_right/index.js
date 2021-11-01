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
        // let result = solution();
        let result = solution2(); // 방향벡터사용
        console.log("정답: ", result);
        rl.close();
    }
});

rl.on("close", () => {
    console.log("종료");
    process.exit();
});

// 방향벡터 미사용
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

function solution2() {
    let N = input[0];

    let x = 1,
        y = 1;

    let plans = input[1].split(" ");

    // 방향벡터
    let dx = [0, 0, -1, 1],
        dy = [-1, 1, 0, 0],
        move_types = ["L", "R", "U", "D"];

    // 이동계획을 하나씩 확인
    for (let plan of plans) {
        // 이동 후 좌표 구하기
        let nx, ny;
        for (let i = 0; i < move_types.length; i++) {
            if (plan === move_types[i]) {
                nx = x + dx[i];
                ny = y + dy[i];
            }
        }

        if (nx < 1 || ny < 1 || nx > N || ny > N) continue;

        x = nx;
        y = ny;
    }

    return `${x} ${y}`;
}
