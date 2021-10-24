"use strict";

let input = document.getElementById("input");
let h1 = document.getElementById("h1");

/** 그리디 알고리즘의 가장 적합한 문제인 동전 수 구하기 문제이다.
 * 알고리즘 공부가 목적이기 때문에 입력값은 항상 정확한 값을 집어넣는다고 가정하고 코드를 작성한다. (방어코드없음)
 */
function solution() {
    let value = Number(input.value); // 거스름 돈
    let result = 0; // 거슬러줘야하는 동전수의 총 합

    let coinTypes = [500, 100, 50, 10]; // 동전배열

    for (const coin of coinTypes) {
        // 동전 수 구하기
        result += Math.floor(value / coin);

        // 코인 수 표기
        document.getElementById(
            "span_" + coin
        ).textContent = `${coin}원: ${Math.floor(value / coin)}개`;

        // value 값 수정
        value %= coin;
    }

    h1.textContent = result;
}
