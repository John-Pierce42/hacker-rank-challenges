"use strict"

let nums = [1,2,3,6,9,8,7,4];
const ids = [1,2,3,6,9,8,7,4];

let btn5 = document.getElementById("btn5");

btn5.onclick = function() {
    nums.unshift(nums.pop());
    for (let i = 0; i <= 7; i++) {
        document.getElementById("btn" + ids[i]).innerHTML = nums[i];
    }
}


let btn_ids=[1,2,3,6,9,8,7,4];
let btn_values=[1,2,3,6,9,8,7,4];

const btn5 = document.getElementById("btn5");

btn5.addEventListener("click",()=> {
    btn_values.unshift(btn_values.pop());
    for (let i = 0; i < btn_ids.length; i++) {
        document.getElementById("btn" + btn_ids[i]).innerHTML = btn_values[i];

}}