"use strict";

function lotteryNum() {
	return (Math.round(Math.random() * 100) % 58) + 1;
}

function pickNumber() {
    var list = []
    return function getLottery() {
        if (list.length < 6) {
            list.push(lotteryNum())
            return list.sort();
        } else {
            return list
        }
    }

}
var temp = pickNumber()
var luckyLotteryNumbers = temp(); 

while (luckyLotteryNumbers.length < 6) {
	temp()
}

console.log(luckyLotteryNumbers, 'finsihed');
