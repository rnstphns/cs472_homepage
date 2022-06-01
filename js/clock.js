"use strict";

function currentDatetime() {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;

    let time = year + "-" + month + "-" + day + " " + hh + ":" + mm + ":" + ss;


    document.getElementById("clock").innerText = time;
    document.getElementById("clock").textContent = time;
    setTimeout(currentDatetime, 1000);

}
currentDatetime();