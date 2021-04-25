'use strict'
//Дана следующая информация (однако, вы можете проверить ее самостоятельно):
//1 января 1900 года - понедельник.
//В апреле, июне, сентябре и ноябре 30 дней.
//В феврале 28 дней, в високосный год - 29.
//В остальных месяцах по 31 дню.
//Високосный год - любой год, делящийся нацело на 4, однако последний год века (ХХ00) является високосным в том и только том случае, если делится на 400.
//Сколько воскресений выпадает на первое число месяца в двадцатом веке (с 1 января 1901 года до 31 декабря 2000 года)?
let year = 1900;
let yearStart = 1901;
let yearFinish = 2000;
let sandays = 0;
let arrMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let arrYear = [];
let arrWeeks = [];
let firstDay = 1;

for (let i = year; i <= yearFinish; i++) {

    arrYear = [];
    arrWeeks = [];


    if (i % 400 == 0) {
        arrMonth[1] = 29;
    } else if (i % 4 == 0 && i % 100 !== 0) {
        arrMonth[1] = 29;
    } else {
        arrMonth[1] = 28;
    }

    arrMonth.forEach((e) => {
        for (let i = 1; i <= e; i++) {
            arrYear.push(i);
        }
    })

    weeks(firstDay);
    comparison(arrYear, arrWeeks);
    firstDay = arrWeeks[arrWeeks.length - 1] + 1;

    if (i < yearStart) {
        sandays = 0;
    }
}

console.log(sandays);


function weeks(count) {
    for (let i = 0; i < arrYear.length; i++) {
        if (count == 8) {
            count = 1;
        }
        arrWeeks.push(count);
        count++;
    }
}

function comparison(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] == 1 && arr2[i] == 7) {
            sandays = sandays + 1;
        }
    }
}