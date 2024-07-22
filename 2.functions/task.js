function getArrayParams(...arr) {
  let sum = 0;

  //решение через math
  // let max = Math.max(...arr);
  // let min = Math.min(...arr);

  //решение через for начало
  let max = -Infinity;
  let min = Infinity;

  for(i = 0; i < arr.length; i++){
    if(arr[i] > max){
      max = arr[i]
    }
  }
  for(i = 0; i < arr.length; i++){
    if(arr[i] < min){
      min = arr[i]
    }
  }
  //решение через for конец

//среднее значение
for (i = 0; i < arr.length; i++){
  sum += arr[i];
}
avg = sum / arr.length

  return { min: min, max: max, avg: +avg.toFixed(2)};
}

function summElementsWorker(...arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  return sum
}

function differenceMaxMinWorker(...arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);

  if (!arr || !arr.length) {
    return 0
  } else {
    return max - min
  }

}

function differenceEvenOddWorker(...arr) {
let sumEvenElement = 0;
let sumOddElement = 0;

if (!arr || !arr.length) {
  return 0
} else {
  for (i = 0; i < arr.length; i++){
  if(arr[i] % 2 === 0) {
    sumEvenElement += arr[i]
  } else {
    sumOddElement += arr[i]
  }
}
return sumEvenElement - sumOddElement
}

}


function averageEvenElementsWorker(...arr) {
 let sumEvenElement = 0;
 let countEvenElement = 0;

 if(!arr || !arr.length) {
  return 0
 } else {
  for (i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0) {
      sumEvenElement += arr[i]
      countEvenElement++
    }
  }
  return sumEvenElement / countEvenElement
 }

}

function makeWork (arrOfArr, func) {
  // let maxWorkerResult = 0;
  // for(i = 0; i < arrOfArr.length; i++){
  //  let resalt = func(...arrOfArr[i]);
  //   if(maxWorkerResult < resalt){
  //     maxWorkerResult = resalt
  //   }
  //   return Math.max(resalt)
  // }
  return Math.max(...arrOfArr.map(arr => func(...arr)))

}
