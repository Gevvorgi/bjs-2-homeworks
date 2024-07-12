"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  
let dis = (b**2-4*a*c);
if(dis < 0) {
  arr = [];
} else if(dis === 0) {
  let disD = -b/(2*a)
  arr = [disD];
} else if(dis > 0) {
  let dis1 = (-b + Math.sqrt(dis) )/(2*a);
  let dis2 = (-b - Math.sqrt(dis) )/(2*a);
  arr = [dis1, dis2]
}

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
  let p = (percent / 100) / 12
  let s = amount - contribution;
  let paymentMonth = s * (p + (p / (((1 + p) ** countMonths) - 1)));
  let payoutTotal = paymentMonth * countMonths;

  return +payoutTotal.toFixed(2)
}