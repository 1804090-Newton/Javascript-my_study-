console.log("welcome");
// how to create a promise
// here resolve and reject both are the function. two this function, we can pass the value  of the promise
//pending, resolve, reject  are the three state of the promise
  const promise1=new Promise((resolve, reject)=>{
        let completedPromise=false;
        if(completedPromise){
            resolve("completed promise 1");
        } else{
            reject ( new Error("not completed promise 1"));
        }
  });
 //console.log(promis1);
 promise1.then((res)=>{//here then is the function of the promise. 
                          //then function takes a callback function as a parameter.
    console.log(res);     // here res is the value of the promise in this code res is "completed promise 1"
                         //console.log("completed promise 1"); where res is the callback function
 })
   .catch((err)=>{
    console.log(err.message);
   })
 console.log("end");