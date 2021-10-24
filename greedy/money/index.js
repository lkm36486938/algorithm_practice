"use strict";

let input = document.getElementById("input");
let h_500 = document.getElementById("500");
let h_100 = document.getElementById("100");
let h_50 = document.getElementById("50");
let h_10 = document.getElementById("10");

/** 그리디 알고리즘의 가장 적합한 문제인 동전 수 구하기 문제이다.
 * 알고리즘 공부가 목적이기 때문에 입력값은 항상 정확한 값을 집어넣는다고 가정하고 코드를 작성한다. (방어코드없음)
 */
function solution() {
    let value = Number(input.value);
    let coinObj = {
        500: 0,
        100: 0,
        50: 0,
        10: 0,
    };

    // 1260 = 500*2 100*2 50*1 10*1
    while (true) {
        console.log(value);
        if (value == 0) break;
        if (value >= 500) {
            ++coinObj[500];
            value -= 500;
            continue;
        }
        if (value >= 100) {
            ++coinObj[100];
            value -= 100;
            continue;
        }
        if (value >= 50) {
            ++coinObj[50];
            value -= 50;
            continue;
        }
        if (value >= 10) {
            ++coinObj[10];
            value -= 10;
            continue;
        }
    }

    h_500.textContent = `500원: ${coinObj[500]}개`;
    h_100.textContent = `100원: ${coinObj[100]}개`;
    h_50.textContent = `50원: ${coinObj[50]}개`;
    h_10.textContent = `10원: ${coinObj[10]}개`;
}
