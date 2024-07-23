function getArrayParams(...arr) {
  let sum = 0;

  //решение через math
  // let max = Math.max(...arr);
  // let min = Math.min(...arr);

  let max = -Infinity;
  let min = Infinity;

  for(let i = 0; i < arr.length; i++){
    if(arr.length === 1){
      max = min = sum = arr[i]
    } else {    
      if(arr[i] < min){
        min = arr[i]
    } else if(arr[i] > max){
      max = arr[i]
    }
    sum += arr[i]
   }
  }
  avg = sum / arr.length

  return { min: min, max: max, avg: +avg.toFixed(2)};
}

function summElementsWorker(...arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  return sum
}

function differenceMaxMinWorker(...arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);

  return arr.length !== 0 ? max - min : 0
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0) {
      sumEvenElement += arr[i]
    } else {
      sumOddElement += arr[i]
    }
  } 

  return arr.length !== 0 ? sumEvenElement - sumOddElement : 0
}


function averageEvenElementsWorker(...arr) {
 let sumEvenElement = 0;
 let countEvenElement = 0;

 for (let i = 0; i < arr.length; i++){
   if(arr[i] % 2 === 0) {
     sumEvenElement += arr[i]
     countEvenElement++
   }
 }

 return arr.length !== 0 ? sumEvenElement / countEvenElement : 0
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for(let i = 0; i < arrOfArr.length; i++){
    const resalt = func(...arrOfArr[i])
    
    maxWorkerResult < resalt ? maxWorkerResult = resalt : maxWorkerResult = maxWorkerResult
  }
  return maxWorkerResult
}