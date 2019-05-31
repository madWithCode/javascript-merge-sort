const arr = [8,8,8,7,6,5,5,9,4,3,2,1,1];

function mergeSort(arr){
  if(arr.length > 1){
    const lcount = Math.floor(arr.length/2);
    const larray = arr.slice(0,lcount);
    const rarray = arr.slice(lcount,arr.length);
    
    const L1 = mergeSort(larray);
    const R1 = mergeSort(rarray);
    return sortArray(L1, R1);
  }else{
    return arr;
  }
}

function sortArray(L,R){
  const sortedArr = [];
  while(L.length > 0 || R.length > 0){
    if(R.length == 0){
      sortedArr.push(L.shift())
    }else if(L.length == 0 || (L[0] > R[0])){
      sortedArr.push(R.shift())
    }else{
      sortedArr.push(L.shift())
    }
  }
  return sortedArr;
}

console.log(mergeSort(arr));

