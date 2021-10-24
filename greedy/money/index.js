"use strict";

let input = document.getElementById("input");
let h_500 = document.getElementById("500");
let h_100 = document.getElementById("100");
let h_50 = document.getElementById("50");
let h_10 = document.getElementById("10");

/*
    그리디알고리즘
    그리디 알고리즘(탐욕법)은 현재 상황에서 지금 당장 좋은 것만 고르는 방법을 의미한다.
    일반적인 그리디 알고리즘은 문제를 풀기 위한 최소한의 아이디어를 떠올릴 수 있는 능력을 요구한다.
    그리디 해법은 그 정당성 분석이 중요하다. - 단순히 가장 좋아보이는 것을 반복적으로 선택해도 최적의 해를 구할 수 있는지 검토한다.
*/

/** 그리디 알고리즘의 가장 적합한 문제인 동전 수 구하기 문제이다.
 * 알고리즘 공부가 목적이기 때문에 입력값은 항상 정확한 값을 집어넣는다고 가정하고 코드를 작성한다. (방어코드없음)
 *
 * https://www.youtube.com/watch?v=g4nfN7Jw-yg&list=PLRx0vPvlEmdBFBFOoK649FlEMouHISo8N&index=2
 * 상황
 * 당신은 음식점의 계산을 도와주는 점원입니다.
 * 카운터에는 거스름돈으로 사용할 500원, 100원, 50원, 10원짜리 동전이 무한히 존재한다고 가정합니다.
 * 손님에게 거슬러 주어야 할 돈이 value원일 때 거슬러 주어야 할 동전의 최소 개수를 구하세요.
 * 단, 거슬러 줘야 할 돈 value는 항상 10의 배수입니다. ( 1260 - o / 1261 - x)
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
