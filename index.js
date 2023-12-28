var numbers=[10,20,30,40,50];
//   for(var i=0;i<numbers.length;i++){
//     console.log(numbers[i]);
//   }

// numbers.forEach(myFunction);

// function myFunction(value){
//   console.log(value);
// }
//var squareNumbers=[];

// numbers. forEach((value)=>{
//     squareNumbers.push(value*value);
//   })
//   console.log(squareNumbers)

numbers. forEach(function(value,index,arr){
    arr[index]=value+5;
})
console.log(numbers);