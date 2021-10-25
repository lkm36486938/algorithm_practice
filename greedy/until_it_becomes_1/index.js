"use strict";

function solution() {
    let result = 0;
    let N = document.getElementById("N").value;
    let K = document.getElementById("K").value;

    while (true) {
        if (N % K == 0) {
            N /= K;
            ++result;
        } else {
            N -= 1;
            ++result;
        }

        if (N == 1) break;
    }

    let span = document.getElementById("result");
    span.textContent = `${result} 번`;
}
